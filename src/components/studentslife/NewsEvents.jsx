import React, { useState } from "react";
import SEO from "@/components/Seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "../../assets/studentslife/news/news1.jpg";
import news2 from "../../assets/studentslife/news/news2.jpg";
import news3 from "../../assets/studentslife/news/news3.jpg";
import news4 from "../../assets/studentslife/news/news4.jpg";
import news5 from "../../assets/studentslife/news/news5.jpg";
import news6 from "../../assets/studentslife/news/news6.jpg";

const AnnouncementCard = ({ image, alt, date, title, description }) => (
  <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
    <a
      href="#"
      className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
    >
      <img
        src={image}
        loading="lazy"
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
    </a>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-400">{date}</span>
      <h2 className="text-xl font-bold text-gray-800">
        <a
          href="#"
          className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
        >
          {title}
        </a>
      </h2>
      <p className="text-gray-500">{description}</p>
      <div>
        <a
          href="#"
          className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
);

const NewsEvents = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const announcements = [
    {
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      alt: "Photo by Minh Pham",
      date: "July 19, 2021",
      title: "New trends in Tech",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
      alt: "Photo by Lorenzo Herrera",
      date: "April 07, 2021",
      title: "Working with legacy stacks",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
      alt: "Photo by Magicle",
      date: "March 15, 2021",
      title: "10 best smartphones for devs",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
      alt: "Photo by Martin Sanchez",
      date: "January 27, 2021",
      title: "8 High performance Notebooks",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
    },
  ];

  const newsImages = [
    {
      src: news1,
      alt: "Description of image 1",
    },
    {
      src: news2,
      alt: "Description of image 2",
    },
    {
      src: news3,
      alt: "Description of image 3",
    },
    {
      src: news4,
      alt: "Description of image 4",
    },
    {
      src: news5,
      alt: "Description of image 5",
    },
    {
      src: news6,
      alt: "Description of image 6",
    },
    // Add more images as needed
  ];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? newsImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === newsImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SEO
        title="News & Announcements"
        description="Stay updated with the latest news, events, and announcements from Siva Sivani Institute of Management (SSIM). Find out what's happening on campus."
        keywords="SSIM news, SSIM events, college announcements, campus news, business school events"
        canonicalUrl="https://www.ssim.ac.in/students-life/news-announcements"
      />
      <div className="bg-white py-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-14">
            <h2 className="mb-4 text-center font-bold text-gray-800 md:mb-6 text-3xl sm:text-5xl">
              News & Announcements
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full h-full grid-cols-2 text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
              <TabsTrigger
                value="news"
                className="text-lg font-semibold data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
              >
                News
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="text-lg font-semibold data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
              >
                Announcements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-4 mt-10 sm:mt-16">
                {newsImages.map((image, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      className="h-auto max-w-full rounded-lg aspect-[4/3] object-contain"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="announcements">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 mt-10 sm:mt-16">
                {announcements.map((item, index) => (
                  <AnnouncementCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Dialog
          open={selectedImageIndex !== null}
          onOpenChange={() => setSelectedImageIndex(null)}
        >
          <DialogContent className="max-w-screen h-screen p-0 bg-transparent border-0">
            <div className="flex justify-center items-center overflow-hidden rounded-xl relative">
              <img
                src={newsImages[selectedImageIndex]?.src}
                alt={newsImages[selectedImageIndex]?.alt}
                className="w-full h-[80vh] object-contain rounded-xl"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${newsImages.length}` : ''}
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-red-600/10 hover:bg-red-600/30 border-none text-white"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-red-600/10 hover:bg-red-600/30 border-none text-white"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Close Button */}
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 rounded-full bg-white/10 hover:bg-white/30 border-none text-white z-10"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default NewsEvents;
