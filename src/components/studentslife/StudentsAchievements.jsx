// import AboutSidebar from "../../components/AboutSidebar";

import { useState, useMemo } from "react";
import SEO from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, BookOpenCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { industryData } from "./industryData";

const breadcrumbItems = [
  { href: "/", label: "Home" },
  { href: "/corporate-connect/industry-visit", label: "Corporate Connect" },
  { label: "Industry Visits" },
];

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const StudentsAchievements = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = useMemo(() => industryData, []);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <>
      <SEO
        title="Student Achievements"
        description="Celebrate the achievements of our students at Siva Sivani Institute of Management (SSIM). Discover their accomplishments in academics, competitions, and extracurricular activities."
        keywords="SSIM student achievements, student success, student awards, business school competitions"
        canonicalUrl="https://www.ssim.ac.in/students-life/achievements"
      />
      <section className="relative py-10 sm:py-20">
        <div className="container max-w-7xl mx-auto grid gap-14 relative">
          <div className="col-span-1">
            <div className="events grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="p-0 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg shadow rounded-lg flex flex-col justify-between overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto aspect-video object-contain"
                  />
                  <CardContent className="p-4 mt-4 space-y-3">
                    <h3 className="text-2xl font-bold line-clamp-2">
                      {event.title}
                    </h3>
                    {/* <p className="text-gray-500 text-xs">{event.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div> */}
                    <Button
                      className="!mt-5 w-full bg-red-600/90 hover:bg-red-600 text-white group"
                      onClick={() => handleImageClick(event)}
                    >
                      Read More{" "}
                      <BookOpen className="w-4 h-4 ml-2 mt-1 group-hover:hidden" />{" "}
                      <BookOpenCheck className="w-4 h-4 ml-2 mt-1 group-hover:block hidden" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={true}>
          <DialogContent className="w-[95%] max-w-3xl rounded-lg hide-scrollbar overflow-y-auto max-h-[90vh]">
            {selectedEvent && (
              <>
                <DialogHeader className="px-1">
                  <DialogTitle className="text-xl font-bold hidden">
                    {selectedEvent.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-2 space-y-3">
                  {selectedEvent.gallery && selectedEvent.gallery.length > 0 ? (
                    <Carousel
                      className="w-full"
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                    >
                      <CarouselContent className="flex">
                        {selectedEvent.gallery.map((image, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-full flex justify-center items-center"
                          >
                            <div className="w-full max-h-[60vh] flex justify-center">
                              <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="max-w-full max-h-full object-contain rounded-md"
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "60vh",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                  ) : (
                    <div className="w-full max-h-[60vh] flex justify-center">
                      <img
                        src={selectedEvent.image}
                        alt={`Event ${selectedEvent.id}`}
                        className="max-w-full max-h-full object-contain rounded-md"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "60vh",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}

                  <div className="px-1 pt-5 space-y-2">
                    <h3 className="text-2xl font-bold">
                      {selectedEvent.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default StudentsAchievements;
