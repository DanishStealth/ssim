import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  Microscope,
  FlaskRoundIcon as Flask,
  Brain,
  ChevronRight,
  BarChartIcon as ChartBar,
  MessageCircle,
  Share2,
  Headphones,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/research";
import SEO from "@/components/Seo";

const BannerSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-cover bg-center",
        className
      )}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center lg:text-7xl">
          About SSIM Research
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl text-center">
          Exploring innovative solutions in structural similarity index
          measurement for advanced image processing and analysis.
        </p>
        {/* <Button
          size="lg"
          className="group animate-bounce bg-mainBlue hover:bg-mainBlue"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button> */}
      </div>
    </section>
  );
};

function ResearchSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 sm:py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-purple-100/30 blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-mainBlue">
                About Research
              </h2>
              <p className="mb-6 text-lg text-gray-800">
                The range of research activities at Chandigarh University is
                wide-ranging and profound. University scholars conduct research
                in practically every domain, and pursue to develop human
                knowledge through investigation, invention, and understanding.
              </p>
              <p className="mb-8 text-gray-800">
                Chandigarh University is recognized by SIRO (Scientific and
                Industrial Research Organization).
              </p>

              {/* <Button
                className="group gap-0 px-0 py-0 h-0 rounded-none"
                size="lg"
              >
                <div className="bg-red-600 h-11 flex items-center pl-8 pr-4 hover:bg-red-700">
                  Read More
                </div>
                <div className="bg-mainBlue h-11 flex items-center px-4">
                  <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button> */}
              {/* <Button className="group" size="lg">
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={<Microscope className="h-6 w-6 " />}
                number="20+"
                label="COE"
                sublabel="CENTER OF EXCELLENCE"
              />
              <StatCard
                icon={<Flask className="h-6 w-6" />}
                number="60"
                label="RESEARCH CENTERS"
                className="translate-y-8"
              />
              <StatCard
                icon={<Brain className="h-6 w-6" />}
                number="67"
                label="FUNDED PROJECTS"
                sublabel="ONGOING"
              />
              <StatCard
                icon={<ChartBar className="h-6 w-6" />}
                number="15"
                label="CRORES"
                sublabel="ANNUAL RESEARCH BUDGET"
                className="translate-y-8"
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:mt-20"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://img.freepik.com/free-photo/woman-leaning-microscope-sideways-camera_259150-60338.jpg?t=st=1740572704~exp=1740576304~hmac=8a7b1612983a483f7642c4e56d17afc6b803ab21a6cfee4c503d29a9d7d40d8a&w=1380"
                alt="Research laboratory with equipment"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-4 right-4 h-14 w-14 rounded-full backdrop-blur-sm transition-transform hover:scale-110"
                onClick={() => setVideoOpen(true)}
              >
                <PlayCircle className="h-8 w-8" />
              </Button> */}
            </div>

            {/* Background pattern */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-blue-200 bg-white/50 backdrop-blur-sm" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Research at Chandigarh University</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="about:blank" // Replace with actual video URL
              title="Research Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function StatCard({ icon, number, label, sublabel, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${className} transition-all`}
    >
      <Card className="overflow-hidden border-none bg-white/70 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-3 inline-block rounded-lg bg-red-50 p-2 text-red-600">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-mainBlue">{number}</h3>
            <p className="font-medium text-gray-600">{label}</p>
            {sublabel && <p className="text-sm text-gray-500">{sublabel}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Instant Communication",
    description:
      "Real-time exchange of information for swift collaboration and decision-making.",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Effortless File Sharing", 
    description:
      "Seamlessly exchange files across teams for streamlined collaboration and productivity.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Virtual Meeting",
    description:
      "Facilitate remote collaboration and discussions through interactive online sessions.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Robust Security",
    description:
      "Ensure protection of sensitive data through advanced security measures.",
  },
];

function EnhancedFeaturesCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Auto-slide effect
  useEffect(() => {
    if (!api || !autoPlay) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(intervalId);
  }, [api, autoPlay]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        api.scrollPrev();
      } else if (event.key === "ArrowRight") {
        api.scrollNext();
      }
    },
    [api]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Explore Our Latest Research News
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with groundbreaking research, innovative discoveries, and academic achievements from our distinguished faculty and research teams.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 py-5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex justify-center items-center -left-12 bg-red-600 text-white" />
          <CarouselNext className="hidden sm:flex  justify-center items-center -right-12 bg-red-600 text-white" />
        </Carousel>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <div className="bg-slate-200 h-1 w-full rounded-full overflow-hidden">
              <div
                className="bg-mainBlue h-full rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(current / count) * 100}%` }}
              />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              {current} of {count}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Research = () => {
  return (
    <>
      <SEO
        title="Research at SSIM"
        description="Discover the research initiatives, centers of excellence, and funded projects at Siva Sivani Institute of Management (SSIM). We are committed to advancing knowledge and innovation."
        keywords="SSIM research, research at SSIM, business school research, management research, funded projects"
        canonicalUrl="https://www.ssim.ac.in/research/case-research-center"
      />
      <div className="bg-gray-50/50">
        <BannerSection />
        <ResearchSection />
        <EnhancedFeaturesCarousel />
      </div>
    </>
  );
};

export default Research;
