import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import Scholarships from "./Scholarships";
import SEO from "@/components/Seo";

import {
  BookOpen,
  Calendar,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  Menu,
  School,
  Trophy,
  ClipboardList,
  Award,
  Globe,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SelectionProcess from "./SelectionProcess";
import AdmissionParameters from "./AdmissionParameters";
import EligibilityCriteria from "./EligibilityCriteria";
import FPMBanner from "../../assets/admissions/admissions.webp";

// Navigation Data
const navigationSections = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "process", label: "Selection Process", icon: GraduationCap },
  { id: "eligibility", label: "Eligibility Criteria", icon: ClipboardList },
  { id: "fees", label: "Fee Structure", icon: CreditCard },
  { id: "dates", label: "Important Dates", icon: Calendar },
  // { id: "brochure", label: "Brochure", icon: BookOpen },
  { id: "apply", label: "Apply Now", icon: School },
  { id: "scholarships", label: "Scholarships", icon: Trophy },
];

// Section Data
const overviewData = [
  {
    title: "",
    description: "Publication of Case Study",
    icon: FileText, // Changed to FileText since it's about publishing a case study
  },
  {
    title: "",
    description:
      "Two Paper Presentation in National / International Conferences",
    icon: GraduationCap, // Changed to GraduationCap for academic presentations
  },
  {
    title: "",
    description:
      "Publication of 2 research papers in SCOPUS / ABDC Indexed Journals",
    icon: BookOpen, // Changed to BookOpen for research paper publications
  },
];

const processData = [
  {
    step: 1,
    title: "Aptitude Test Score",
    description:
      "Submit scores from accepted entrance exams like CAT/XAT/MAT/CMAT/ATMA/GMAT or State Government Exam",
    details:
      "Percentile / Scores of Aptitude Test (CAT/XAT/MAT/CMAT/ATMA/GMAT/State Government Exam)",
  },
  {
    step: 2,
    title: "Academic Records",
    description: "Submit academic scores from Class X through Graduation",
    details: "Academic Scores in Xth Class, XIIth Class and Graduation",
  },
  {
    step: 3,
    title: "Experience & Certifications",
    description:
      "Submit work experience (optional) and details of extracurricular activities/certifications",
    details:
      "Work Experience (Not mandatory) | Extra Curricular Acvtivities/Certification Courses",
  },
  {
    step: 4,
    title: "Selection Round",
    description:
      "Submit Statement of Purpose, video introduction and attend personal interview",
    details: "SOP | Video Introducon | Personal Interview",
  },
];

const feesData = {
  tuitionFees: [
    {
      type: "Acceptance Fee (Non-refundable)",
      amount: "₹60,000",
      dueDate: "July 30, 2024",
      notes: "Initial payment before program commencement",
    },
    {
      type: "First Installment",
      amount: "₹80,000",
      dueDate: "January 30, 2025",
      notes: "First part of balance payment",
    },
    {
      type: "Second Installment",
      amount: "₹80,000",
      dueDate: "July 30, 2025",
      notes: "Second part of balance payment",
    },
    {
      type: "Third Installment",
      amount: "₹80,000",
      dueDate: "July 30, 2026",
      notes: "Final part of balance payment",
    },
  ],
  stipendDetails: [
    {
      year: "First Year",
      amount: "₹20,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
    {
      year: "Second Year",
      amount: "₹25,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
    {
      year: "Third Year",
      amount: "₹30,000",
      frequency: "per month",
      notes: "For eligible full-time scholars",
    },
  ],
};

const datesData = [
  {
    date: "July 5-8, 2025",
    event: "Reporting & Registration",
    description: "Complete registration process and report to campus",
  },
  {
    date: "July 9, 2025",
    event: "Inaugural Session",
    description: "Official commencement of academic session for Batch 2025-27",
  },
];
// Navigation Component
const NavContent = ({ activeSection, setActiveSection, sections }) => (
  <div className="space-y-2">
    {sections.map((section) => {
      const Icon = section.icon;
      return (
        <motion.button
          key={section.id}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveSection(section.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors
            ${
              activeSection === section.id
                ? "bg-mainBlue text-white"
                : "hover:bg-muted text-red-600"
            }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{section.label}</span>
        </motion.button>
      );
    })}
  </div>
);

// Enquire Dialog Component
const EnquireDialog = ({ isOpen, setIsOpen }) => (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Download Brochure</DialogTitle>
        <DialogDescription>
          Please provide your details to receive our comprehensive brochure.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-mainBlue hover:bg-mainBlue/80 text-white"
          >
            Download Now
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
);

// Section Components
const Overview = () => (
  <div className="space-y-3 p-3">
    <p className="text-lg text-gray-700 font-semibold">
      SSIM offers Fellow Program in Management (FPM) for full time candidates.
    </p>
    <p className="text-lg text-gray-700">
      Siva Sivani Institute of Management (SSIM), offers Fellow Program in
      Management (FPM) approved by AICTE. The FPM scholars of SSIM are required
      to undertake a rigorous interdisciplinary research in contemporary areas
      of management having serious implications for the corporate world and
      society.
    </p>
    <p className="text-lg text-gray-700 !mb-8">
      FPM is launched with the objective of developing outstanding scholars for
      careers in teaching and research. To achieve this, the programme provides
      scholars with the knowledge and research skills that help them become
      specialist researchers, with sufficient depth of knowledge in different
      domains of management.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">Program Objectives</h3>
    <p className="text-gray-700 text-lg">
      The program aims to fulfill the following objectives:
    </p>
    <ul className="list-disc ml-4 list-inside text-gray-700 text-lg">
      <li>
        To create conceptual, empirical and analytical knowledge in different
        domains of business management
      </li>
      <li>To establish and maintain interdisciplinary research practices</li>
      <li>To contribute high ethical standards in research work</li>
      <li>
        To promote competencies for different roles in teaching and research
      </li>
    </ul>
    <h3 className="font-bold text-mainBlue text-2xl">Program Duration</h3>
    <p className="text-gray-700 text-lg">
      The FPM at SSIM is three years' duration. Students are required to ensure
      that they complete all requirements of the program within the stipulated
      period of three and half years. Candidate shall submit his/ her Thesis
      only after a minimum period of two years after registration. However, in
      case of exceptional circumstances, the program may further be extended
      twice by one-year duration, subject to approval by the Director. However,
      the maximum period allowed for the submission of the Thesis is five years
      from the date of admission to the Program.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">Other Requirements</h3>
    <p className="text-gray-700 text-lg">
      For the award of <strong>Fellow Program in Management (FPM)</strong>, the
      candidate needs to fulfil specific requirements as specified by the
      institute related to
    </p>
    <div className="grid md:grid-cols-3 !my-8 gap-6 h-full">
      {[
        {
          title: "Industry Recognition",
          description:
            "AICTE, NBA & NAAC Approved, AIU Affiliated and SAQS Accredited program with Outcome based education",
          icon: Award,
        },
        {
          title: "Experiential Learning",
          description: "Value Added Management Competency Development Modules",
          icon: BookOpen,
        },
        {
          title: "Global Exposure",
          description:
            "Specialization in 3 domains with choice of 50+ Elective subjects",
          icon: Globe,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-6 rounded-lg hover:scale-105 transition-all duration-300 border space-y-4 h-full">
            <item.icon className="w-8 h-8 text-mainBlue" />
            <h3 className="font-semibold text-red-600 text-xl">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Process = () => (
  <div className="space-y-8">
    <SelectionProcess />
    <p className="text-lg font-semibold text-gray-700 !mt-5">
      SSIM follows Profile Based Selection process. The final selection is based
      on the cumulative score of the below mentioned components -
    </p>
    {processData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-12 group"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
          {item.step}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-mainBlue">{item.title}</h3>
          {/* <p className="text-xl font-semibold text-gray-700">
            {item.description}
          </p> */}
          <p className="text-lg text-gray-700">{item.details}</p>
        </div>
      </motion.div>
    ))}
    <p className="text-lg text-gray-700 !mt-5">
      <strong>Note:</strong> Every student is given a specific date for
      reporting to the classes. Any student who does not report within 10 days
      of the specified date will be treated as having withdrawn from the
      institute. The admission of such students will automatically stand
      cancelled and any fee paid will be refunded after deducting the processing
      fee.
    </p>
    <AdmissionParameters />
  </div>
);

const Fees = () => (
  <div className="space-y-8">
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl text-[#002f87]">Fee Structure</CardTitle>
        <CardDescription className="text-lg text-red-600 font-semibold">
          Total Program Fee: ₹3,00,000 (Three Lakhs only)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Regular Fee Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Regular Fee Structure
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] bg-[#002f87] text-white text-lg">
                    Payment Type
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Amount
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Due Date
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Notes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.tuitionFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {fee.type}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {fee.amount}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {fee.dueDate}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {fee.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Stipend Structure */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#002f87]">
            Financial Support (Full-time Research Scholars)
          </h3>
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] bg-[#002f87] text-white text-lg">
                    Year
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Amount
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Frequency
                  </TableHead>
                  <TableHead className="bg-[#002f87] text-white text-lg">
                    Notes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feesData.stipendDetails.map((stipend, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-black text-lg">
                      {stipend.year}
                    </TableCell>
                    <TableCell className="text-red-600 font-semibold text-lg">
                      {stipend.amount}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {stipend.frequency}
                    </TableCell>
                    <TableCell className="text-black text-lg">
                      {stipend.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-[#002f87]/5 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-[#002f87] text-lg">
            Important Notes:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-lg text-black">
            <li>
              25% fee waiver for Alumni of Siva Sivani Institute of Management
              (SSIM)
            </li>
            <li>
              Eligible students for stipend are exempted from tuition fees
            </li>
            <li>
              Stipend-eligible students need to pay only ₹70,000 (₹60,000
              non-refundable acceptance fee + ₹10,000 refundable security
              deposit)
            </li>
            <li>
              Stipend is subject to regular performance review every six months
            </li>
            <li>Maximum stipend duration is three years</li>
            <li>Students receive access to library and academic resources</li>
            <li>
              Selected scholars must work as teaching/research assistants at
              SSIM
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Dates = () => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-mainBlue">Important Dates</CardTitle>
      <CardDescription className="text-lg text-red-600">
        Mark these key dates in your calendar
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
        {datesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-card rounded-lg shadow"
          >
            <time className="text-sm text-red-600 font-semibold">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-mainBlue mt-2">
              {item.event}
            </h3>
            <p className="text-gray-700 text-lg mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Brochure = ({ setIsEnquireOpen }) => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-center text-red-600">
        Download Our Brochure
      </CardTitle>
      <CardDescription className="text-xl text-center text-gray-700">
        Get detailed information about our programs
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center text-center">
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-gray-700 text-lg">
          Our comprehensive brochure provides in-depth information about our
          academic programs, campus life, and admissions process.
        </p>
        <Button
          size="lg"
          onClick={() => setIsEnquireOpen(true)}
          className="w-full bg-mainBlue hover:bg-mainBlue/80 text-white"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Download Brochure
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Apply = () => (
  <Card className="border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-3xl text-red-600 text-center">
        Apply Now
      </CardTitle>
      <CardDescription className="text-xl text-gray-700 text-center">
        Start your application process
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center text-center">
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-gray-700 text-lg">
          Ready to begin your journey? Click below to start your application.
          Make sure you have all necessary documents ready.
        </p>
        <a
          target="_blank"
          href="https://apply.ssim.ac.in/fellowship-program-application-form"
        >
          <Button
            size="lg"
            className="w-full bg-mainBlue hover:bg-mainBlue/80 text-white"
          >
            Begin Application
          </Button>
        </a>
      </div>
    </CardContent>
  </Card>
);

// const Scholarships = () => <div>Scholarships content here</div>;

// Main Component
export default function FPM() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "process":
        return <Process />;
      case "eligibility":
        return <EligibilityCriteria />;
      case "fees":
        return <Fees />;
      case "dates":
        return <Dates />;
      case "brochure":
        return (
          <Brochure setIsEnquireOpen={setIsEnquireOpen} />
        );
      case "apply":
        return <Apply />;
      case "scholarships":
        return <Scholarships />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title="FPM/EFPM Program"
        description="Learn about the Fellow Program in Management (FPM) at Siva Sivani Institute of Management (SSIM). Explore the program details, eligibility, and application process."
        keywords="FPM program, Fellow Program in Management, doctoral program in management, PhD in management, SSIM FPM"
        canonicalUrl="https://www.ssim.ac.in/admissions/fpm-efpm"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-white to-white border-b">
          <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-red-600 to-red-600/60 bg-clip-text text-transparent">
                Begin Your Journey with FPM Program
              </h1>
              <p className="text-xl text-gray-900">
                Take the first step towards your future with our world-class
                education programs.
              </p>
            </motion.div>
          </div>
          {/* Background image - only on large devices */}
          <div
            className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-right hidden lg:block"
            style={{ backgroundImage: `url(${FPMBanner})` }}
          />

          {/* Gradient and icon - only on smaller devices */}
          <div className="absolute inset-0 z-0 block lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-3xl" />
            <GraduationCap className="absolute right-10 top-10 w-96 h-96 text-primary/5 rotate-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block sticky top-8 h-fit">
              <Card>
                <CardHeader>
                  <CardTitle>Admissions Guide</CardTitle>
                  <CardDescription>
                    Explore our admissions process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <NavContent
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    sections={navigationSections}
                  />
                </CardContent>
              </Card>
            </aside>

            {/* Mobile Navigation */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Menu className="w-4 h-4" />
                    <span>Navigation Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="py-4">
                    <NavContent
                      activeSection={activeSection}
                      setActiveSection={setActiveSection}
                      sections={navigationSections}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Content Area */}
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-6">
                    {navigationSections.find((s) => s.id === activeSection)
                      ?.icon &&
                      React.createElement(
                        navigationSections.find((s) => s.id === activeSection)
                          ?.icon,
                        { className: "w-8 h-8 text-red-600" }
                      )}
                    <h2 className="text-3xl text-mainBlue font-bold">
                      {
                        navigationSections.find((s) => s.id === activeSection)
                          ?.label
                      }
                    </h2>
                  </div>

                  {/* Section Content */}
                  <Card className="border">
                    <CardContent className="p-6">
                      {renderSection()}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>

        {/* Enquire Dialog */}
        <EnquireDialog isOpen={isEnquireOpen} setIsOpen={setIsEnquireOpen} />
      </div>
    </>
  );
}
