import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/Seo";
import { ChevronLeft, ChevronRight, ImageIcon, Image } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path as needed
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"; // Adjust path as needed
import { Skeleton } from "@/components/ui/skeleton"; // Adjust path as needed
import WordPullUp from "../ui/word-pull-up";
import axios from "axios";

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Fetch events from the server
const fetchEvents = async () => {
  try {
    const response = await axios.get("https://www.bfis.in/ssim_backend/api/events");
    return response.data; // Return the data
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // Return empty array on error
  }
};

const ImageDialog = ({
  isOpen,
  onOpenChange,
  currentImage,
  onPrevious,
  onNext,
  currentNumber,
  totalImages,
}) => {
  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl p-0 pt-6 bg-transparent border-none">
        <DialogDescription className="sr-only">
          Image gallery viewer showing {currentImage.alt}
        </DialogDescription>
        <div className="relative flex-1 flex flex-col items-center justify-center p-6 pb-14">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-50 rounded-full hover:bg-slate-100 bg-slate-200 text-black backdrop-blur-sm"
            onClick={onPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="w-full h-full flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              loading="lazy"
              className="w-full h-full max-w-[750px] object-contain rounded-lg"
            />
          </div>

          <Button
            size="icon"
            className="absolute right-4 z-50 rounded-full bg-slate-200 hover:bg-slate-100 text-black backdrop-blur-sm"
            onClick={onNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentNumber} / {totalImages}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function LifeAtSsim() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);
      const eventsData = await fetchEvents();
      setFetchedCategories(eventsData);
      if (eventsData && eventsData.length > 0) {
        setActiveCategory(eventsData[0].id.toString());
      } else {
        setActiveCategory(null);
      }
      setIsLoading(false);
    };
    loadEvents();
  }, []);

  const categories = fetchedCategories.map((event) => ({
    id: event.id.toString(),
    label: event.title.split(" - ")[0],
    icon: event.imagePaths && event.imagePaths.length > 0 ? <Image /> : null,
    heading: event.title,
    description: event.description,
  }));

  const galleryItems = fetchedCategories.flatMap((event) =>
    event.imagePaths.map((path, index) => ({
      id: index + 1,
      src: `https://www.bfis.in/ssim_backend/${path}`,
      category: event.id.toString(),
      alt: `${event.title.split(" - ")[0]} image ${index + 1}`,
    }))
  );

  const displayGalleryItems = galleryItems;

  const filteredItems = displayGalleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const currentImageForDialog = filteredItems[currentImageIndex];
  const totalImagesInCategory = currentImageForDialog
    ? displayGalleryItems.filter(
        (item) => item.category === currentImageForDialog.category
      ).length
    : 0;
  const currentImageNumberInCategory = currentImageForDialog
    ? displayGalleryItems
        .filter((item) => item.category === currentImageForDialog.category)
        .findIndex((item) => item.src === currentImageForDialog.src) + 1
    : 0;

  const handlePrevious = useCallback(() => {
    if (filteredItems.length === 0) return;
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems]);

  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  }, [filteredItems]);

  const handleKeyPress = useCallback(
    (e) => {
      if (isDialogOpen) {
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setIsDialogOpen(false);
      }
    },
    [isDialogOpen, handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      <SEO
        title="Life at SSIM"
        description="Experience the vibrant student life at Siva Sivani Institute of Management (SSIM). Explore our campus, events, clubs, and the holistic development opportunities we offer."
        keywords="SSIM student life, campus life, student clubs, college events, SSIM culture"
        canonicalUrl="https://www.ssim.ac.in/students-life/life-at-ssim"
      />
      <div className="container mx-auto px-4 py-8 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7"
        >
          <WordPullUp
            words="Explore Life at SSIM"
            className="text-4xl md:text-5xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
          />
          <p className="text-base text-center max-w-7xl mx-auto text-gray-600">
            Siva Sivani strongly believes in motivating the students to become
            leaders by giving them ample opportunities to explore the talent
            within them. In order to provide such opportunities SSIM has designed
            various Extra Curricular Activities to enable the students to
            understand the importance of co-ordination, teamwork, group dynamics,
            oneness etc. To give a structure to these, SSIM has named these
            activities uniquely starting the first letter of every activity with
            an 'S' as in 'Siva Sivani'. The programmes are detailed below
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto w-full mb-8 px-4">
          <div className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={() => {
                const container = document.querySelector(".filter-scroll");
                if (container)
                  container.scrollBy({ left: -200, behavior: "smooth" });
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2 max-w-7xl mx-auto overflow-x-auto hide-scrollbar filter-scroll py-2"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
                className="flex-none first:ml-8 sm:first:ml-2 last:mr-8 sm:last:mr-2"
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-sm hover:shadow-md",
                    activeCategory === category.id &&
                      "ring-2 ring-primary/20 bg-primary text-primary-foreground font-medium"
                  )}
                >
                  <span>{category.icon}</span>
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={() => {
                const container = document.querySelector(".filter-scroll");
                if (container)
                  container.scrollBy({ left: 200, behavior: "smooth" });
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {categories.find((cat) => cat.id === activeCategory)?.heading && (
          <WordPullUp
            words={categories.find((cat) => cat.id === activeCategory)?.heading}
            className="text-2xl md:text-4xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
          />
        )}
        {categories.find((cat) => cat.id === activeCategory)?.description && (
          <p className="text-base text-center max-w-7xl mx-auto text-gray-600">
            {categories.find((cat) => cat.id === activeCategory)?.description}
          </p>
        )}

        <motion.div
          layout
          className="grid mx-auto max-w-7xl grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 mt-10"
        >
          <AnimatePresence mode="wait">
            {isLoading
              ? Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                  </motion.div>
                ))
              : filteredItems.map((item, index) => (
                  <Dialog key={item.src}>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer group relative overflow-hidden rounded-sm shadow-lg bg-white"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsDialogOpen(true);
                        }}
                      >
                        <div className="aspect-[4/3] relative">
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    </DialogTrigger>
                  </Dialog>
                ))}
          </AnimatePresence>
        </motion.div>

        <ImageDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          currentImage={currentImageForDialog}
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentNumber={currentImageNumberInCategory}
          totalImages={totalImagesInCategory}
        />
      </div>
    </>
  );
}
