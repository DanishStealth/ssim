import { Suspense, useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "@/pages/HomePage";
import ContactUs from "@/pages/ContactUs"; // Import the ContactUs page
import Header from "@/components/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Routes and Route
import Footer from "@/components/footer/Footer";
import AboutMessage from "@/components/abouts/AboutMessage"; // Import AboutMessage component
import AboutValues from "@/components/abouts/VisionMission"; // Import AboutValues component
import AboutSetUsApart from "@/components/abouts/AboutSetUsApart"; // Import AboutSetUsApart component
import AboutLayout from "@/components/abouts/AboutLayout";
import LifeAtSsim from "@/components/studentslife/LifeAtSsim";
import { Button } from "./components/ui/button";
import AcademicAdvisoryBoard from "@/components/abouts/AcademicAdvisoryBoard";
import VisionMission from "@/components/abouts/VisionMission";
import Leadership from "@/components/abouts/Leadership";
import BoardOfGovernors from "@/components/abouts/BoardOfGovernors";
import BoardOfStudies from "@/components/abouts/BoardOfStudies";
import AccreditationsRankings from "@/components/abouts/AccreditationsRankings";
import Areas from "@/components/faculty&research/Areas";
import PlacementSection from "@/components/placement/PlacementSection";
import Internships from "@/components/placement/Internships";
// import PlacementTeam from "@/components/placement/PlacementTeam";
import PlacementTeams from "@/components/placement/PlacementTeams";
import PGDMTPS from "@/components/admissions/PGDMTPS";
import PGDMBIFS from "@/components/admissions/PGDMBIFS";
import PGDMBA from "@/components/admissions/PGDMBA";
import Programs from "@/components/programs/Programs";
import Research from "@/components/faculty&research/Research";
import AlumniSection from "@/components/alumni/Alumni";
import InternationRelations from "@/components/internation relations/InternationRelations";
import StudentsAchievements from "@/components/studentslife/StudentsAchievements";
import NewsEvents from "@/components/studentslife/NewsEvents";
import Accreditations from "@/components/footer/Accreditations";
import Blog from "@/components/blog/blog";
import Careers from "@/components/footer/Careers";
import StudentsFeedback from "@/components/studentslife/StudentsFeedback";
import BlogDetail from "@/components/blog/BlogDetail";
import Conferences from "@/components/faculty&research/Conferences";
import IQAC from "./components/header/IQAC";
import SSIM from "./SSIM";
import GuestLectures from "./components/placement/GuestLectures";
// import InternationalEvents from "./components/internation relations/InternationalEvents";
// import SelectionProcess from "./components/admissions/SelectionProcess";
// import CourseElectives from "./components/programs/CourseElectives";
// import EligibilityCriteria from "@/components/admissions/EligibilityCriteria";
// Define different banner images for different sections
import AboutBanner from "@/assets/breadcrumb.png";
import FPM from "./components/admissions/FPM";
import InternalComplaints from "./components/footer/InternalComplaints";
import GrievanceRedressalMechanism from "./components/footer/GrievanceRedressalMechanism";
import FacultyPublication from "./components/faculty&research/FacultyPublication";
// You can add custom banner images for different sections:
// import PlacementBanner from "@/assets/placement-banner.jpg";
// import FacultyBanner from "@/assets/faculty-banner.jpg";
// import ResearchBanner from "@/assets/research-banner.jpg";

// Example of how to create custom layouts for other sections:
/*
// For a Programs section:
const programsSidebarLinks = [
  { href: "/programs/pgdm-triple-specialisation", label: "PGDM Triple Specialisation" },
  { href: "/programs/pgdm-bifs", label: "PGDM BIFS" },
  { href: "/programs/pgdm-ba", label: "PGDM Business Analytics" },
  { href: "/programs/fpm-efpm", label: "FPM / EFPM" },
];

// For an Admissions section:
const admissionsSidebarLinks = [
  { href: "/admissions/eligibility", label: "Eligibility Criteria" },
  { href: "/admissions/process", label: "Application Process" },
  { href: "/admissions/scholarships", label: "Scholarships" },
  { href: "/admissions/fee-structure", label: "Fee Structure" },
];

// Usage in Routes:
<Route 
  path="/programs"
  element={
    <AboutLayout 
      title="Academic Programs"
      bannerImage={ProgramsBanner}
      breadcrumbs={[
        { href: "/", label: "Home", isActive: false },
        { href: "/programs", label: "Programs", isDropdown: true, isActive: false },
        { label: "All Programs", isActive: true }
      ]}
      dropdownLinks={programsSidebarLinks}
      showDropdown={true}
      sidebarLinks={programsSidebarLinks}
      showSidebar={true}
    />
  }
>
  <Route path="" element={<Navigate to="pgdm-triple-specialisation" replace />} />
  <Route path="pgdm-triple-specialisation" element={<PGDMTPS />} />
  // ... other program routes
</Route>
*/

const aboutSidebarLinks = [
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Values & Mission" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

const placementSidebarLinks = [
  { href: "/placement/records", label: "Placement Records" },
  { href: "/placement/team", label: "Placement Team" },
  { href: "/placement/internships", label: "Internships" },
  { href: "/placement/guest-lectures", label: "Guest Lectures" },
];

const facultySidebarLinks = [
  { href: "/faculty/areas", label: "Areas of Expertise" },
];

const researchSidebarLinks = [
  { href: "/research/case-research-center", label: "Case Research Center" },
  { href: "/research/conferences", label: "Conferences" },
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="min-h-screen">
            <Header />
            <Routes>
              {/* Define routes for the application */}
              <Route path="/" element={<HomePage />} /> {/* Home page route */}
              <Route
                path="/about"
                element={
                  <AboutLayout bannerImage={AboutBanner} showDropdown={true} />
                }
              >
                {/* <Route path="" element={<Navigate to="message" replace />} /> */}
                <Route path="directors-message" element={<AboutMessage />} />
                <Route path="values" element={<AboutValues />} />
                <Route
                  path="academic-advisory-board"
                  element={<AcademicAdvisoryBoard />}
                />
                <Route path="set-us-apart" element={<AboutSetUsApart />} />
                <Route path="vision-mission" element={<VisionMission />} />
                <Route path="leadership" element={<Leadership />} />
                <Route
                  path="board-of-governors"
                  element={<BoardOfGovernors />}
                />
                <Route path="board-of-studies" element={<BoardOfStudies />} />
                <Route
                  path="accreditations-rankings"
                  element={<AccreditationsRankings />}
                />
              </Route>
              <Route path="/alumni" element={<AlumniSection />} />
              <Route
                path="/international-relations"
                element={<InternationRelations />}
              />
              <Route
                path="/faculty"
                element={
                  <AboutLayout
                    bannerImage={AboutBanner} // You can replace with FacultyBanner
                    sidebarLinks={facultySidebarLinks}
                  />
                }
              >
                <Route path="" element={<Navigate to="message" replace />} />
                <Route path="areas" element={<Areas />} />
              </Route>
              <Route
                path="/research"
                // element={
                //   <AboutLayout
                //     title="Research"
                //     bannerImage={AboutBanner} // You can replace with ResearchBanner
                //     breadcrumbs={[
                //       { href: "/", label: "Home", isActive: false },
                //       {
                //         href: "/research",
                //         label: "Research",
                //         isDropdown: true,
                //         isActive: false,
                //       },
                //       { label: "Research Center", isActive: true },
                //     ]}
                //     dropdownLinks={researchSidebarLinks}
                //     showDropdown={true}
                //     sidebarLinks={researchSidebarLinks}
                //     showSidebar={false}
                //   />
                // }
              >
                <Route
                  path=""
                  element={<Navigate to="case-research-center" replace />}
                />
                <Route path="case-research-center" element={<Research />} />
                <Route path="conferences" element={<Conferences />} />
              </Route>
              <Route
                path="/placement"
                element={
                  <AboutLayout
                    bannerImage={AboutBanner} // You can replace with PlacementBanner
                    showDropdown={true}
                    sidebarLinks={placementSidebarLinks}
                    showSidebar={false}
                  />
                }
              >
                <Route path="" element={<Navigate to="message" replace />} />
                {/* <Route path="records" element={<PlacementRecords />} /> */}
                <Route path="records" element={<PlacementSection />} />
                <Route path="team" element={<PlacementTeams />} />
                <Route path="internships" element={<Internships />} />
                <Route path="guest-lectures" element={<GuestLectures />} />
              </Route>
              <Route
                path="/students-life/life-at-ssim"
                element={<LifeAtSsim />}
              />
              <Route
                path="/students-life/achievements"
                element={<StudentsAchievements />}
              />
              <Route
                path="/students-life/news-announcements"
                element={<NewsEvents />}
              />
              <Route
                path="/students-life/students-feedback"
                element={<StudentsFeedback />}
              />
              <Route path="/admissions/fpm-efpm" element={<FPM />} />
              <Route
                path="/admissions/pgdm-triple-specialisation"
                element={<PGDMTPS />}
              />
              <Route path="/admissions/pgdm-bifs" element={<PGDMBIFS />} />
              <Route path="/admissions/pgdm-ba" element={<PGDMBA />} />
              {/* <Route path="/admissions/eligibility-criteria" element={<EligibilityCriteria />} /> */}
              <Route path="/programs/:id" element={<Programs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Contact Us page route */}
              <Route path="/accreditations" element={<Accreditations />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/events" element={<SSIM />} />
              <Route path="testing" element={<LifeAtSsim />} />
              <Route path="/internal-complaints" element={<InternalComplaints />} />
              <Route path="/grievance-redressal-mechanism" element={<GrievanceRedressalMechanism />} />
              <Route path="/faculty/publications" element={<FacultyPublication />} />
              {/* <Route path="/international-events" element={<InternationalEvents />} /> */}
              {/* <Route path="/admissions/process" element={<SelectionProcess />} /> */}
              {/* <Route path="/programs/course-electives" element={<CourseElectives />} /> */}
            </Routes>
            <Footer />
            {isVisible && (
              <Button
                onClick={scrollToTop}
                size="icon"
                className="fixed bottom-4 right-4 h-9 w-9 rounded-md bg-red-600 hover:bg-red-700 animate-bounce shadow-lg z-50"
                aria-label="Scroll to top"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </Button>
            )}
          </main>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
