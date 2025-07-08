import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import axios from 'axios';
import { routeConfigs } from './src/utils/routeConfig.js';

// Your website's base URL
const BASE_URL = 'https://ssim.ac.in';

// WordPress API endpoint
const WORDPRESS_API_URL = 'https://ssim.ac.in/wp-json/wp/v2/posts';

async function generateSitemap() {
    console.log('Generating sitemap...');

    try {
        const sitemap = new SitemapStream({ hostname: BASE_URL });
        const writeStream = createWriteStream('./dist/sitemap.xml');
        sitemap.pipe(writeStream);

        // --- Static Routes ---
        const staticRoutes = [
            { url: '/', priority: 1.0 },
            { url: '/contact-us', priority: 0.8 },
            { url: '/alumni', priority: 0.8 },
            { url: '/international-relations', priority: 0.8 },
            { url: '/blog', priority: 0.8 },
            { url: '/careers', priority: 0.8 },
            { url: '/iqac', priority: 0.8 },
            { url: '/ssim', priority: 0.8 },
            { url: '/life-at-ssim', priority: 0.8 },
            { url: '/student-achievements', priority: 0.8 },
            { url: '/news-and-events', priority: 0.8 },
            { url: '/accreditations', priority: 0.8 },
            { url: '/internal-complaints', priority: 0.8 },
            { url: '/grievance-redressal-mechanism', priority: 0.8 },
            { url: '/faculty-publication', priority: 0.8 },
        ];

        Object.keys(routeConfigs).forEach(section => {
            const sectionConfig = routeConfigs[section];
            // Add base section route if needed, e.g. /about
            // staticRoutes.push({ url: `/${section}`, priority: 0.8 });
            Object.keys(sectionConfig.routes).forEach(route => {
                staticRoutes.push({ url: `/${section}/${route}`, priority: 0.8 });
            });
        });
        
        const today = new Date().toISOString();
        staticRoutes.forEach(route => {
            sitemap.write({ url: route.url, lastmod: today, priority: route.priority });
        });
        
        // --- Dynamic Blog Routes ---
        console.log('Fetching blog posts...');
        let allPosts = [];
        let page = 1;
        const perPage = 100;

        // Fetch the first page to get total pages from headers
        const firstPageResponse = await axios.get(WORDPRESS_API_URL, {
            params: {
                per_page: perPage,
                page: page,
                _fields: 'slug,modified',
            },
        });

        allPosts = allPosts.concat(firstPageResponse.data);
        const totalPages = parseInt(firstPageResponse.headers['x-wp-totalpages'], 10);

        // Fetch remaining pages if there are more than one
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
                    // Decide if you want to continue or break on error
                    // For example, to stop: break;
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