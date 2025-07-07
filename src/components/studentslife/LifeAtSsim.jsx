import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Categories array
const categories = [
  {
    id: "1",
    label: "Spandana",
    icon: "",
    heading: "SPANDANA - A SPONTANEOUS RESPONSE (FRESHERS' PARTY)",
    description:
      "The institute strongly believes in inter personnel relations and teamwork. In order to give a feeling of oneness to the freshers, the Seniors conduct 'Spandana' to warmly and formally welcome their Juniors into the family of Siva Sivani.",
  },
  {
    id: "2",
    label: "Sammelan",
    icon: "",
    heading: "SAMMELAN - AN INTRA COLLEGIATE MEET",
    description:
      "To bring out the innate talent of the students, various cultural activities, management games etc are conducted. One day in a term is earmarked for this activity.",
  },
  {
    id: "3",
    label: "Samaroh",
    icon: <Image />,
    heading: "SAMAROH - IT IS INTERNATIONAL RESEARCH CONFERENCE AT SSIM",
    description: `The SAMAROH is conducted to commemorate the death anniversary of the founder of Siva Sivani Group of Institutions.
Samaroh is an international conference which is aimed to offer a knowledge sharing platform for academicians, researchers and corporate professionals for exchange of new body of knowledge. This conference will also have key note address from renowned management experts and research paper presentations of conference participants.`,
  },
  {
    id: "4",
    label: "Samanvay",
    icon: <Image />,
    heading: "SAMANVAY - THE ESSENCE OF CO-ORDINATION",
    description: `An Inter Collegiate Management Students' Meet organised by the students of Siva Sivani. This event brings together the students of various Business Schools across the state. They participate in various management related competitive events. This is an opportunity for the students of Siva Sivani to organise and show their leadership qualities in managing such a big event.

Many business houses sponsor the events organised in Samanvay. This clearly manifests the Industry- Institute-Interaction of Siva Sivani Institute of Management.`,
  },
  {
    id: "5",
    label: "Sameeksha",
    icon: <Image />,
    heading: "SAMEEKSHA",
    description: `The Students organise Club Activities under HR, Finance, Marketing and Systems Club to bring out the innate latent talent. Students make various presentations, conduct formal and informal activities such as acquiesces, group discussions, Management related games etc in order to develop and nourish the creativity that is abundantly available in every one of us.

Experts from the industry may chair the club sessions conducted by the students who will share their experiences with the students. These activities help students acquire the knowledge on contemporary issues in their respective specializations, improve their oral and written communication skills and participate effectively in the competitions conducted by various Business Schools.`,
  },
  {
    id: "6",
    label: "Smriti",
    icon: "",
    heading: "SMRITI - A FOND REMEMBRANCE (FAREWELL PARTY)",
    description: `Meeting and parting is a way of life. After the completion of the course, it is certain that the Seniors part with the Juniors. In order to express their feelings and the unwritten bonding between the Seniors and the Juniors, the Juniors bid a grand Farewell to the seniors in the 6th trimester. Various activities are organised in order to further strengthen the relationship even after leaving the portals of the Institute. The Juniors present mementos as a fond memory to the seniors.`,
  },
  {
    id: "7",
    label: "Sneha",
    icon: <Image />,
    heading: "SNEHA - THE ALUMNI ASSOCIATION OF SSIM",
    description: `We at SSIM strongly believe that the Alumni Association has a great role to play in the developmental activities of the Institute. To strengthen our relationship with the Alumni, we conduct various activities and invite them to the campus. This gives a feeling to every student of SSIM that they are always a part of the Siva Sivani family.`,
  },
  {
    id: "8",
    label: "Sadhana",
    icon: <Image />,
    heading: "SADHANA - STUDENT RESEARCH CONFERENCE",
    description: `SADHANA is a Student Research Conference introduced in 2022. The aim of the conference is to bring Bachelor's / Master's research into spotlight and to increase the enthusiasm among students for academic research. This conference gives UG / PG students a unique opportunity to present their research among the learned audiences. Participating in this conference enables the students to experience academic practice.`,
  },
  {
    id: "9",
    label: "Snatak",
    icon: <Image />,
    heading: "SNATAK - CONVOCATION",
    description: `Snatak – Convocation of every batch will be held on 22nd October on every year to conform the degrees of the passed students.`,
  },
  {
    id: "10",
    label: "Sanman",
    icon: <Image />,
    heading: "SANMAN - TEACHER'S DAY",
    description: `Teachers' Day is celebrated every year on 5th September at SSIM. On this day SSIM facilitates a distinguished teacher every year with a citation highlighting the accomplishments and contributions made by the teacher. This is sending a strong message to students on our tradition of respecting the teachers which is part of our culture in our society.`,
  },
  {
    id: "11",
    label: "Satakshi",
    icon: <Image />,
    heading: "SATAKSHI - WOMAN'S DAY",
    description: `SSIM conducts women's day in the name of SATHAKSHI and the event is being organized by the Women Empowerment Cell at the institute. The event thrust area is gender sensitization and makes the students and employees aware of women's rights in society. As a part of it, successful women invited to campus to share their accomplishments and challenges faced in the journey of success and did they overcome.`,
  },
  {
    id: "12",
    label: "Sanghibhav",
    icon: <Image />,
    heading: "SANGHIBHAV - ISR",
    description: `SSIM, under its ISR initiative "SANGHIBHAV", is supporting a Government Primary School, Harijanawada, Macha Bollaram. The school students are from the under privileged sections of the society who are below the poverty line. The student and faculty regularly visit the school to give sweets and snacks, conduct games and sports. Their joy cannot be expressed in words.

Presence of institutes' representative gives them immense happiness; they look forward to our visits expecting kind words, candies and surprises. Institute students give them a moral support. This brings a smile on their faces, by just being with them, for some time, once a week or a month.`,
  },
  {
    id: "13",
    label: "Samskriti",
    icon: <Image />,
    heading: "SAMSKRITI - TRADITIONAL DAY TO THE FRESHER'S",
    description: `Samskriti is conducted after the completion of induction program. After the commencement of the classes the junior students (fresher's) are asked to come in traditional dresses to represent the culture of the state which they represent. This promotes integration among the students who come from different regions of the country. Various competitions are held and the organizers, the senior students award the titles – Mr. and Miss Samskriti to the winners amongst the junior students with the help of a panel of judges.`,
  },
];

// Replace all individual samaroh imports with this
const samarohImages = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/samaroh/samaroh (${i + 1}).webp`, import.meta.url).href,
  category: "3",
  alt: `samaroh image ${i + 1}`,
}));

const samanvayImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/samanvay/samanvay (${i + 1}).webp`, import.meta.url).href,
  category: "4",
  alt: `samanvay image ${i + 1}`,
}));

const sameekshaImages = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/sameeksha/sameeksha (${i + 1}).webp`, import.meta.url).href,
  category: "5",
  alt: `sameeksha image ${i + 1}`,
}));

const snehaImages = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/sneha/sneha (${i + 1}).${i > 39 ? 'png' : 'webp'}`, import.meta.url).href,
  category: "7", 
  alt: `sneha image ${i + 1}`,
}));

const sadhanaImages = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/sadhana/sadhana (${i + 1}).webp`, import.meta.url).href,
  category: "8",
  alt: `sadhana image ${i + 1}`,
}));

const snatakImages = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/snatak/snatak (${i + 1}).webp`, import.meta.url).href,
  category: "9",
  alt: `snatak image ${i + 1}`,
}));

const sanmanImages = Array.from({ length: 2 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/sanman/sanman (${i + 1}).webp`, import.meta.url).href,
  category: "10",
  alt: `sanman image ${i + 1}`,
}));

const satakshiImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/satakshi/satakshi (${i + 1}).webp`, import.meta.url).href,
  category: "11",
  alt: `satakshi image ${i + 1}`,
}));

const sanghibhavImages = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/sanghibhav/sanghibhav (${i + 1}).webp`, import.meta.url).href,
  category: "12",
  alt: `sanghibhav image ${i + 1}`,
}));

const samskritiImages = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../../assets/studentslife/life-at-ssim/samskriti/samskriti (${i + 1}).webp`, import.meta.url).href,
  category: "13",
  alt: `samskriti image ${i + 1}`,
}));

// Then modify your galleryItems array to use both image sets
const galleryItems = [...samarohImages, ...samanvayImages, ...sameekshaImages, ...snehaImages, ...sadhanaImages, ...snatakImages, ...sanmanImages, ...satakshiImages, ...sanghibhavImages, ...samskritiImages];

const ImageDialog = ({
  isOpen,
  onOpenChange,
  currentImage,
  onPrevious,
  onNext,
}) => {
  if (!currentImage) return null;

  // Get total images for current category
  const totalImages = galleryItems.filter(
    item => item.category === currentImage.category
  ).length;
  
  // Get current image number within its category
  const currentNumber = galleryItems.filter(
    item => item.category === currentImage.category && item.id <= currentImage.id
  ).length;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl p-0 pt-6 bg-transparent border-none">
        <DialogDescription className="sr-only">
          Image gallery viewer showing {currentImage.title}
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
  const [activeCategory, setActiveCategory] = useState("1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handlePrevious = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems]);

  const handleNext = useCallback(() => {
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
        {/* Navigation buttons */}
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

        {/* Filter Scroll */}
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

      {/* Gallery Items */}
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
                <Dialog key={item.id}>
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
                        {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center text-white">
                          <ImageIcon className="h-8 w-8" />
                        </div> */}
                      </div>
                    </motion.div>
                  </DialogTrigger>
                </Dialog>
              ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Dialog */}
      <ImageDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentImage={filteredItems[currentImageIndex]}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}




// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SEO from "@/components/Seo";
// import { ChevronLeft, ChevronRight, ImageIcon, Image } from "lucide-react";
// import { Button } from "@/components/ui/button"; // Adjust path as needed
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   DialogDescription,
// } from "@/components/ui/dialog"; // Adjust path as needed
// import { Skeleton } from "@/components/ui/skeleton"; // Adjust path as needed
// import WordPullUp from "../ui/word-pull-up";
// import axios from "axios";

// // Utility function
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// // Fetch events from the server
// const fetchEvents = async () => {
//   try {
//     const response = await axios.get("https://www.bfis.in/ssim_backend/api/events");
//     return response.data; // Return the data
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return []; // Return empty array on error
//   }
// };

// const ImageDialog = ({
//   isOpen,
//   onOpenChange,
//   currentImage,
//   onPrevious,
//   onNext,
//   currentNumber,
//   totalImages,
// }) => {
//   if (!currentImage) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-7xl p-0 pt-6 bg-transparent border-none">
//         <DialogDescription className="sr-only">
//           Image gallery viewer showing {currentImage.alt}
//         </DialogDescription>
//         <div className="relative flex-1 flex flex-col items-center justify-center p-6 pb-14">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute left-4 z-50 rounded-full hover:bg-slate-100 bg-slate-200 text-black backdrop-blur-sm"
//             onClick={onPrevious}
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </Button>

//           <div className="w-full h-full flex items-center justify-center">
//             <img
//               src={currentImage.src}
//               alt={currentImage.alt}
//               loading="lazy"
//               className="w-full h-full max-w-[750px] object-contain rounded-lg"
//             />
//           </div>

//           <Button
//             size="icon"
//             className="absolute right-4 z-50 rounded-full bg-slate-200 hover:bg-slate-100 text-black backdrop-blur-sm"
//             onClick={onNext}
//           >
//             <ChevronRight className="h-6 w-6" />
//           </Button>

//           {/* Image counter */}
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//             {currentNumber} / {totalImages}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default function LifeAtSsim() {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [fetchedCategories, setFetchedCategories] = useState([]);

//   useEffect(() => {
//     const loadEvents = async () => {
//       setIsLoading(true);
//       const eventsData = await fetchEvents();
//       setFetchedCategories(eventsData);
//       if (eventsData && eventsData.length > 0) {
//         setActiveCategory(eventsData[0].id.toString());
//       } else {
//         setActiveCategory(null);
//       }
//       setIsLoading(false);
//     };
//     loadEvents();
//   }, []);

//   const categories = fetchedCategories.map((event) => ({
//     id: event.id.toString(),
//     label: event.title.split(" - ")[0],
//     icon: event.imagePaths && event.imagePaths.length > 0 ? <Image /> : null,
//     heading: event.title,
//     description: event.description,
//   }));

//   const galleryItems = fetchedCategories.flatMap((event) =>
//     event.imagePaths.map((path, index) => ({
//       id: index + 1,
//       src: `https://www.bfis.in/ssim_backend/${path}`,
//       category: event.id.toString(),
//       alt: `${event.title.split(" - ")[0]} image ${index + 1}`,
//     }))
//   );

//   const displayGalleryItems = galleryItems;

//   const filteredItems = displayGalleryItems.filter(
//     (item) => activeCategory === "all" || item.category === activeCategory
//   );

//   const currentImageForDialog = filteredItems[currentImageIndex];
//   const totalImagesInCategory = currentImageForDialog
//     ? displayGalleryItems.filter(
//         (item) => item.category === currentImageForDialog.category
//       ).length
//     : 0;
//   const currentImageNumberInCategory = currentImageForDialog
//     ? displayGalleryItems
//         .filter((item) => item.category === currentImageForDialog.category)
//         .findIndex((item) => item.src === currentImageForDialog.src) + 1
//     : 0;

//   const handlePrevious = useCallback(() => {
//     if (filteredItems.length === 0) return;
//     setCurrentImageIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + filteredItems.length) % filteredItems.length
//     );
//   }, [filteredItems]);

//   const handleNext = useCallback(() => {
//     if (filteredItems.length === 0) return;
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
//   }, [filteredItems]);

//   const handleKeyPress = useCallback(
//     (e) => {
//       if (isDialogOpen) {
//         if (e.key === "ArrowLeft") handlePrevious();
//         if (e.key === "ArrowRight") handleNext();
//         if (e.key === "Escape") setIsDialogOpen(false);
//       }
//     },
//     [isDialogOpen, handlePrevious, handleNext]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, [handleKeyPress]);

//   return (
//     <>
//       <SEO
//         title="Life at SSIM"
//         description="Experience the vibrant student life at Siva Sivani Institute of Management (SSIM). Explore our campus, events, clubs, and the holistic development opportunities we offer."
//         keywords="SSIM student life, campus life, student clubs, college events, SSIM culture"
//         canonicalUrl="https://www.ssim.ac.in/students-life/life-at-ssim"
//       />
//       <div className="container mx-auto px-4 py-8 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-7"
//         >
//           <WordPullUp
//             words="Explore Life at SSIM"
//             className="text-4xl md:text-5xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
//           />
//           <p className="text-base text-center max-w-7xl mx-auto text-gray-600">
//             Siva Sivani strongly believes in motivating the students to become
//             leaders by giving them ample opportunities to explore the talent
//             within them. In order to provide such opportunities SSIM has designed
//             various Extra Curricular Activities to enable the students to
//             understand the importance of co-ordination, teamwork, group dynamics,
//             oneness etc. To give a structure to these, SSIM has named these
//             activities uniquely starting the first letter of every activity with
//             an 'S' as in 'Siva Sivani'. The programmes are detailed below
//           </p>
//         </motion.div>

//         <div className="relative max-w-7xl mx-auto w-full mb-8 px-4">
//           <div className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
//               onClick={() => {
//                 const container = document.querySelector(".filter-scroll");
//                 if (container)
//                   container.scrollBy({ left: -200, behavior: "smooth" });
//               }}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex gap-2 max-w-7xl mx-auto overflow-x-auto hide-scrollbar filter-scroll py-2"
//           >
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: index * 0.1 },
//                 }}
//                 className="flex-none first:ml-8 sm:first:ml-2 last:mr-8 sm:last:mr-2"
//               >
//                 <Button
//                   variant={activeCategory === category.id ? "default" : "outline"}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={cn(
//                     "transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-sm hover:shadow-md",
//                     activeCategory === category.id &&
//                       "ring-2 ring-primary/20 bg-primary text-primary-foreground font-medium"
//                   )}
//                 >
//                   <span>{category.icon}</span>
//                   {category.label}
//                 </Button>
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
//               onClick={() => {
//                 const container = document.querySelector(".filter-scroll");
//                 if (container)
//                   container.scrollBy({ left: 200, behavior: "smooth" });
//               }}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         {categories.find((cat) => cat.id === activeCategory)?.heading && (
//           <WordPullUp
//             words={categories.find((cat) => cat.id === activeCategory)?.heading}
//             className="text-2xl md:text-4xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
//           />
//         )}
//         {categories.find((cat) => cat.id === activeCategory)?.description && (
//           <p className="text-base text-center max-w-7xl mx-auto text-gray-600">
//             {categories.find((cat) => cat.id === activeCategory)?.description}
//           </p>
//         )}

//         <motion.div
//           layout
//           className="grid mx-auto max-w-7xl grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 mt-10"
//         >
//           <AnimatePresence mode="wait">
//             {isLoading
//               ? Array.from({ length: 8 }, (_, i) => (
//                   <motion.div
//                     key={`skeleton-${i}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Skeleton className="w-full aspect-[4/3] rounded-xl" />
//                   </motion.div>
//                 ))
//               : filteredItems.map((item, index) => (
//                   <Dialog key={item.src}>
//                     <DialogTrigger asChild>
//                       <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         className="cursor-pointer group relative overflow-hidden rounded-sm shadow-lg bg-white"
//                         onClick={() => {
//                           setCurrentImageIndex(index);
//                           setIsDialogOpen(true);
//                         }}
//                       >
//                         <div className="aspect-[4/3] relative">
//                           <img
//                             src={item.src}
//                             alt={item.alt}
//                             loading="lazy"
//                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                           />
//                         </div>
//                       </motion.div>
//                     </DialogTrigger>
//                   </Dialog>
//                 ))}
//           </AnimatePresence>
//         </motion.div>

//         <ImageDialog
//           isOpen={isDialogOpen}
//           onOpenChange={setIsDialogOpen}
//           currentImage={currentImageForDialog}
//           onPrevious={handlePrevious}
//           onNext={handleNext}
//           currentNumber={currentImageNumberInCategory}
//           totalImages={totalImagesInCategory}
//         />
//       </div>
//     </>
//   );
// }
