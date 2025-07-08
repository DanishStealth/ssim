import { createWriteStream, readFileSync } from 'fs';
import { SitemapStream } from 'sitemap';
import axios from 'axios';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { routeConfigs } from './src/utils/routeConfig.js';

// Your website's base URL
const BASE_URL = 'https://ssim.ac.in';

// WordPress API endpoint
const WORDPRESS_API_URL = 'https://ssim.ac.in/wp-json/wp/v2/posts';

function getStaticRoutes() {
    const routes = new Set();

    // 1. Get routes from routeConfig.js
    Object.keys(routeConfigs).forEach(section => {
        Object.keys(routeConfigs[section].routes).forEach(route => {
            const path = `/${section}/${route}`;
            routes.add(path.replace(/\/+/g, '/'));
        });
    });

    // 2. Get routes from App.jsx
    try {
        const code = readFileSync('./src/App.jsx', 'utf-8');
        const ast = parser.parse(code, {
            sourceType: 'module',
            plugins: ['jsx']
        });

        const traverseDefault = typeof traverse === 'function' ? traverse : traverse.default;

        traverseDefault(ast, {
            JSXElement: path => {
                if (path.node.openingElement.name.name !== 'Route') return;

                const getPathAttr = (node) => {
                    const pathAttr = node.openingElement.attributes.find(
                        attr => attr.name && attr.name.name === 'path'
                    );
                    return pathAttr && pathAttr.value ? pathAttr.value.value : null;
                }
                
                const routePath = getPathAttr(path.node);
                if (!routePath || routePath.includes(':')) return;

                let fullPath = routePath;
                const parentPaths = [];
                let current = path;
                while ((current = current.findParent(p => p.isJSXElement() && p.node.openingElement.name.name === 'Route'))) {
                    const parentPath = getPathAttr(current.node);
                    if (parentPath) {
                        parentPaths.unshift(parentPath);
                    }
                }

                if (parentPaths.length > 0) {
                    fullPath = [...parentPaths, routePath].join('/');
                }

                fullPath = fullPath.replace(/\/\//g, '/');
                if (!fullPath.startsWith('/')) {
                    fullPath = '/' + fullPath;
                }

                routes.add(fullPath);
            }
        });
    } catch (error) {
        console.error("Could not parse App.jsx to extract routes. Please check the file for syntax errors.", error);
    }
    
    // Add homepage separately in case it's not found
    routes.add('/');

    // Convert to sitemap format
    return Array.from(routes).map(url => ({ url, priority: url === '/' ? 1.0 : 0.8 }));
}


async function generateSitemap() {
    console.log('Generating sitemap...');

    try {
        const sitemap = new SitemapStream({ hostname: BASE_URL });
        const writeStream = createWriteStream('./dist/sitemap.xml');
        sitemap.pipe(writeStream);

        // --- Static Routes ---
        const staticRoutes = getStaticRoutes();
        
        console.log(`Found ${staticRoutes.length} static routes.`);
        const today = new Date().toISOString();
        staticRoutes.forEach(route => {
            sitemap.write({ url: route.url, lastmod: today, priority: route.priority });
        });
        
        // --- Dynamic Blog Routes ---
        console.log('Fetching blog posts...');
        let allPosts = [];
        let page = 1;
        const perPage = 100;

        const firstPageResponse = await axios.get(WORDPRESS_API_URL, {
            params: {
                per_page: perPage,
                page: page,
                _fields: 'slug,modified',
            },
        });

        allPosts = allPosts.concat(firstPageResponse.data);
        const totalPages = parseInt(firstPageResponse.headers['x-wp-totalpages'], 10);

        if (totalPages > 1) {
            for (page = 2; page <= totalPages; page++) {
                try {
                    const subsequentPageResponse = await axios.get(WORDPRESS_API_URL, {
                        params: {
                            per_page: perPage,
                            page: page,
                            _fields: 'slug,modified',
                        },
                    });
                    allPosts = allPosts.concat(subsequentPageResponse.data);
                } catch (error) {
                    console.error(`Error fetching page ${page}:`, error.response ? error.response.data : error.message);
                }
            }
        }

        console.log(`Found ${allPosts.length} blog posts.`);

        allPosts.forEach(post => {
            sitemap.write({
                url: `/blog/${post.slug}`,
                lastmod: post.modified,
                priority: 0.6,
            });
        });

        sitemap.end();

        writeStream.on('finish', () => {
            console.log('Sitemap generated successfully at ./dist/sitemap.xml');
        });

    } catch (error) {
        console.error('Error generating sitemap:', error.response ? error.response.data : error.message);
    }
}

generateSitemap(); 