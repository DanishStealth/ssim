import { useState, useEffect } from "react";
import SEO from "@/components/Seo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Separate API function for fetching posts
const fetchBlogPosts = async ({ pageParam = 1, postsPerPage = 6 }) => {
  const response = await fetch(
    `https://ssim.ac.in/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${pageParam}`
  );
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const posts = await response.json();
  const totalPosts = response.headers.get('X-WP-Total');
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return {
    posts: posts.map(post => ({
      id: post.slug,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
      imageAlt: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered,
      author: {
        name: post._embedded?.author?.[0]?.name || 'Anonymous',
        avatar: post._embedded?.author?.[0]?.avatar_urls?.['96'] || '/placeholder.svg',
        initials: post._embedded?.author?.[0]?.name?.split(' ').map(n => n[0]).join('') || 'A',
      },
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
    })),
    totalPages,
  };
};

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Modified React Query implementation with prefetching
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['posts', currentPage, postsPerPage],
    queryFn: () => fetchBlogPosts({ pageParam: currentPage, postsPerPage }),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  // Add prefetching for next page
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.totalPages > currentPage) {
      // Prefetch the next page
      queryClient.prefetchQuery({
        queryKey: ['posts', currentPage + 1, postsPerPage],
        queryFn: () => fetchBlogPosts({ 
          pageParam: currentPage + 1, 
          postsPerPage 
        }),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [currentPage, data?.totalPages, queryClient, postsPerPage]);

  // Prefetch previous page as well when not on first page
  useEffect(() => {
    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: ['posts', currentPage - 1, postsPerPage],
        queryFn: () => fetchBlogPosts({ 
          pageParam: currentPage - 1, 
          postsPerPage 
        }),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [currentPage, queryClient, postsPerPage]);

  // Add hover-based prefetching for pagination buttons
  const prefetchPage = (page) => {
    queryClient.prefetchQuery({
      queryKey: ['posts', page, postsPerPage],
      queryFn: () => fetchBlogPosts({ pageParam: page, postsPerPage }),
      staleTime: 5 * 60 * 1000,
    });
  };

  // Modified pagination buttons to include hover-based prefetching
  const PaginationButton = ({ page, isCurrentPage }) => {
    if (page === '...') {
      return <span className="px-2 py-1 text-muted-foreground">...</span>;
    }

    return (
      <Button
        onClick={() => handlePageClick(page)}
        onMouseEnter={() => prefetchPage(page)}
        variant={isCurrentPage ? "default" : "outline"}
        className={`h-8 w-8 sm:h-10 sm:w-10 ${
          isCurrentPage
            ? "bg-mainBlue text-white"
            : "hover:bg-mainBlue/80"
        }`}
      >
        {page}
      </Button>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("blog-section")?.offsetTop || 0;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    // Set visible immediately if at top of page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage(old => Math.max(old - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (!isPreviousData && data?.totalPages > currentPage) {
      setCurrentPage(old => old + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const delta = 1;
    let pages = [];

    for (let i = Math.max(1, currentPage - delta); i <= Math.min(data?.totalPages, currentPage + delta); i++) {
      pages.push(i);
    }

    if (pages[0] > 1) {
      if (pages[0] > 2) pages.unshift('...');
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < data?.totalPages) {
      if (pages[pages.length - 1] < data?.totalPages - 1) pages.push('...');
      pages.push(data?.totalPages);
    }

    return pages;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Blog"
        description="Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog. Stay informed on industry trends, management topics, and campus news."
        keywords="SSIM blog, management articles, business insights, student articles, faculty blogs"
        canonicalUrl="https://www.ssim.ac.in/blog"
      />
      <section
        id="blog-section"
        className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-mainBlue inline-block">
              Our recent blogs
            </h2>
            <div className="w-20 h-1 bg-mainBlue mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Discover insights and knowledge from our expert contributors on
              topics that matter to you.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mainBlue mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="grid gap-12">
                {data?.posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="group bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div
                        className={`flex flex-col ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Image container - Fixed the overflow issue */}
                        <div className="md:w-1/2 relative overflow-hidden">
                          <div className=" md:aspect-video md:h-full">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.imageAlt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        {/* Content container */}
                        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                          <h3 
                            className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-mainBlue dark:group-hover:text-mainBlue transition-colors duration-300 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />

                          <p 
                            className="text-muted-foreground mb-6 leading-relaxed line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.description }}
                          />

                          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10 border-2 border-indigo-100 dark:border-gray-700">
                                <AvatarImage
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                />
                                <AvatarFallback className="bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-300">
                                  {post.author.initials}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{post.author.name}</span>
                            </div>
                          </div>

                          <Link
                            to={`/blog/${post.id}`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              behavior: "smooth";
                            }}
                            className="mt-auto"
                          >
                            <Button
                              className="bg-red-600 hover:bg-red-500 text-white px-6 transition-all duration-300 overflow-hidden group-hover:pl-7 group-hover:pr-9"
                              aria-label={`Read more about ${post.title}`}
                            >
                              <span>Read More</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Show loading overlay when fetching next page */}
              {isFetching && !isLoading && (
                <div className="fixed inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mainBlue"></div>
                </div>
              )}

              {data?.totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={handlePrevPage}
                      onMouseEnter={() => currentPage > 1 && prefetchPage(currentPage - 1)}
                      disabled={currentPage === 1 || isFetching}
                      variant="outline"
                      className="h-8 w-8 p-0 sm:h-10 sm:w-10"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>

                    <div className="flex flex-wrap justify-center gap-2">
                      {getPageNumbers().map((page, index) => (
                        <div key={index}>
                          <PaginationButton 
                            page={page} 
                            isCurrentPage={currentPage === page}
                          />
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={handleNextPage}
                      onMouseEnter={() => 
                        currentPage < data?.totalPages && 
                        prefetchPage(currentPage + 1)
                      }
                      disabled={
                        isPreviousData || 
                        currentPage === data?.totalPages ||
                        isFetching
                      }
                      variant="outline"
                      className="h-8 w-8 p-0 sm:h-10 sm:w-10"
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground sm:hidden">
                    Page {currentPage} of {data?.totalPages}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
