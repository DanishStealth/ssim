import { useState } from "react";
import SEO from "@/components/Seo";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  BookmarkIcon,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Calendar,
  ArrowLeft,
} from "lucide-react";

// Add this CSS class to your global CSS or use it inline
const contentStyles = {
  h1: "text-4xl font-bold text-mainBlue mb-6",
  h2: "text-3xl font-semibold text-mainBlue mb-5",
  h3: "text-2xl font-semibold text-mainBlue mb-4",
  h4: "text-xl font-semibold text-mainBlue mb-4",
  h5: "text-lg font-semibold text-mainBlue mb-3",
  h6: "text-base font-semibold text-mainBlue mb-3",
};

export default function BlogDetail() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const WORDPRESS_API_URL = "https://ssim.ac.in/wp-json/wp/v2";

  // Fetch blog post using React Query
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${id}&_embed`);
      if (!response.ok) throw new Error("Failed to fetch blog post");
      
      const posts = await response.json();
      
      if (!posts || posts.length === 0) {
        throw new Error("Blog post not found");
      }

      const post = posts[0];
      
      // Transform WordPress data
      return {
        title: post.title.rendered,
        content: post.content.rendered,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
        publishDate: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
        categories: post._embedded["wp:term"]?.[0]?.map((cat) => cat.name) || [],
        author: {
          name: post._embedded["author"]?.[0]?.name || "Anonymous",
          avatar: post._embedded["author"]?.[0]?.avatar_urls?.["96"] || "",
          role: post._embedded["author"]?.[0]?.description || "Author",
        },
        imageUrl:
          post._embedded["wp:featuredmedia"]?.[0]?.source_url ||
          "default-image-url",
      };
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  // Function to process content and add classes to headings
  const processContent = (content) => {
    let processedContent = content;
    
    // Replace heading tags with styled versions
    Object.entries(contentStyles).forEach(([tag, className]) => {
      const regex = new RegExp(`<${tag}([^>]*)>`, 'g');
      processedContent = processedContent.replace(regex, `<${tag} class="${className}"$1>`);
    });

    return processedContent;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Add a loading skeleton here */}
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/4"></div>
            <div className="h-12 bg-slate-200 rounded w-3/4"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-semibold mb-2">Error loading blog post</p>
          <p className="text-slate-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.description}
        keywords={blog.categories.join(', ')}
        canonicalUrl={`https://www.ssim.ac.in/blog/${id}`}
        ogImage={blog.imageUrl}
      />
      <div className="min-h-screen bg-slate-50/50 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 -ml-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>

          {/* Main Content */}
          <article className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                {blog.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Main Title */}
              <h1 
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-mainBlue leading-tight"
                dangerouslySetInnerHTML={{ 
                  __html: blog.title 
                }}
              />

              {/* Author and Meta Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-blue-100">
                    <AvatarImage
                      src={blog.author.avatar}
                      alt={blog.author.name}
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {blog.author.name}
                    </p>
                    <p className="text-sm text-slate-600">{blog.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full sm:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={blog.imageUrl}
                alt="Blog featured image"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div 
                  className="prose prose-blue max-w-none prose-headings:text-mainBlue prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-headings:font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: processContent(blog.content)
                  }}
                />
              </CardContent>
            </Card>

            {/* Engagement Section */}
            {/* <div className="flex items-center justify-between py-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-2 ${
                    isLiked
                      ? "text-red-500 hover:text-red-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  <span>123</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Comments</span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${
                    isBookmarked ? "text-blue-600" : "text-slate-600"
                  } hover:text-blue-700`}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <BookmarkIcon
                    className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div> */}

            {/* <Separator className="my-8" /> */}
          </article>
        </div>
      </div>
    </>
  );
}
