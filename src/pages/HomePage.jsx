/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/hooks/research";
import Testimonial from "@/components/Testimonial";
import LatestBlogsAndEvents from "@/components/LatestBlogs&Events";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import ImmLegacySection from "../components/ImmLegacySection";
import AcademicPrograms from "@/components/AcademicsProgram";
import HeroSlider from "@/components/HeroSlider";
import LiveProjects from "@/components/LiveProjects";
import RadialIcons from "@/components/RadialIcons";
import UpcomingEvents from "@/components/UpcomingEvents";
import SEO from "@/components/Seo";
import { Fragment, useEffect } from "react";
// import Page from "@/components/page"

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const mobileSectionVariants = {
  hidden: { scale: 1, opacity: 1 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const variants = isMobile ? mobileSectionVariants : sectionVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  // Auto scroll to top when component mounts (handles both link navigation and browser back button)
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Scroll to top immediately when component mounts
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);

    // Also handle browser navigation events (back/forward buttons)
    const handleNavigation = () => {
      setTimeout(() => {
        scrollToTop();
      }, 100);
    };

    // Listen for browser navigation events
    window.addEventListener('popstate', handleNavigation);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Siva Sivani Institute of Management (SSIM) is a premier business school in Hyderabad, India, offering PGDM programs. Explore our courses, admissions, and campus life."
        keywords="SSIM, Siva Sivani Institute of Management, PGDM, Best B-School Hyderabad, Management College"
        canonicalUrl="https://www.ssim.ac.in/"
      />
      <div className="bg-gray-50 text-gray-800">
        {[
          <HeroSlider key="hero-slider" />,
          <ImmLegacySection key="imm-legacy-section" />,
          <AboutSection key="about-section" />,
          <AcademicPrograms key="academic-programs" />,
          <Carousel key="carousel" />,
          <LatestBlogsAndEvents key="latest-blogs-and-events" />,
          <RadialIcons key="radial-icons" />,
          <LiveProjects key="live-projects" />,
          <UpcomingEvents key="upcoming-events" />,
          <Testimonial key="testimonial" />,
        ].map((component) => (
          <SectionWrapper key={component.key}>{component}</SectionWrapper>
        ))}
      </div>
    </>
  );
}
