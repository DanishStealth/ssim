/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Heading from "@/components/Heading";
import Container from "@/components/wrappers/Container";
import { AnimatedList } from "@/components/ui/animated-list";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

export default function LatestBlogsAndEvents() {
  // Get the first (latest) post for the FirstBlog component
  const latestPost = blogPosts.length > 0 ? blogPosts[0] : null;

  // Get posts 2-4 (indices 1-3) for the AnimatedList
  const eventPosts = blogPosts.length > 1 ? blogPosts.slice(1, 5) : [];

  return (
    <>
      <Container className="!pb-20">
        <Heading
          title="Explore Latest Blogs"
          titleClassName="lg:font-extrabold font-bold text-mainBlue"
          className="w-full text-center sm:col-span-4 "
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 h-[780px] xs:h-[720px] sm:max-h-[500px]">
          {latestPost && (
            <a href={`/blog/${latestPost.slug}`}>
              {" "}
              <FirstBlog post={latestPost} />{" "}
            </a>
          )}
          <div className="grid grid-cols-1 gap-5 relative overflow-hidden h-full">
            <AnimatedList>
              {eventPosts.map((post) => (
                <a href={`/blog/${post.slug}`} key={post.id}>
                  <EventCard
                    key={post.id}
                    id={post.id}
                    image={
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""
                    }
                    title={post.title?.rendered || ""}
                    date={new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  />
                </a>
              ))}
            </AnimatedList>
          </div>
        </div>

        <Link
          to="/blog"
          className="flex justify-center mt-8"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Button
            className="group gap-0 px-0 py-0 h-0 rounded-none mt-8"
            size="lg"
          >
            <div className="bg-red-600 mt-8 h-11 flex items-center pl-8 pr-4 hover:bg-red-700">
              View All Blogs
            </div>
            <div className="bg-mainBlue mt-8 h-11 flex items-center px-4">
              <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>
        </Link>
      </Container>
    </>
  );
}

const EventCard = ({ id, image, title, date }) => {
  return (
    <Card key={id} className="p-0 rounded-none ">
      <CardContent className="flex flex-col xs:flex-row p-0 space-x-3 sm:space-x-4 h-full xs:h-32 sm:h-32">
        <img
          src={image}
          alt={title}
          className="object-cover h-full xs:h-32 xs:aspect-video"
        />
        <div className="flex flex-col items-start p-5 xs:p-0 justify-center flex-grow gap-2 sm:gap-3 ml-2">
          <span className="hidden xs:block top-0 px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white w-fit sm:mx-0 bg-mainBlue">
            Trending
          </span>
          <p className="flex items-center mr-2 text-xs sm:text-lg font-semibold text-red-600">
            <Calendar size="14" className="mr-2 text-red-600 " /> {date}
          </p>
          <p
            className="text-lg xs:text-sm sm:text-lg font-semibold sm:font-bold text-gray-800 line-clamp-1 pr-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const FirstBlog = ({ post }) => {
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const title = post.title?.rendered || "";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <Card className="relative rounded-none sm:h-full h-[262px] overflow-hidden">
      <CardContent className="p-0 rounded-none sm:h-full h-[262px]">
        <div className="h-full ">
          <img
            src={imageUrl}
            alt="Main event"
            className="object-cover blur-sm w-full sm:h-full h-[262px] aspect-video"
          />
          <div className="absolute  bottom-0 left-0 right-0 p-3 space-y-2 sm:p-10 sm:space-y-4 bg-gradient-to-t from-black to-transparent">
            <div className="relative space-y-2">
              <img
                src={imageUrl}
                alt="Main event"
                className="object-contain w-full h-full aspect-[16:9]  mt-5"
              />

              <div className="space-y-1 mt-5">
                <span className="top-0 px-4 py-1 mt-5 mx-auto text-sm font-semibold tracking-wide text-white sm:text-lg w-fit sm:mx-0 bg-mainBlue ">
                  Trending
                </span>

                <p className="flex items-center mr-2 text-sm font-semibold text-white sm:text-lg">
                  <Calendar size={20} className="mr-2 text-white" /> {date}
                </p>
                <p
                  className="font-semibold text-white text-sm sm:text-lg sm:font-bold "
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
