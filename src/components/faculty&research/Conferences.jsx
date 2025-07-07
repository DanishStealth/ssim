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
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
  Building,
  Users,
  ListTodo,
  FormInput,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  SchoolIcon,
  GraduationCapIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Heading from "../Heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import imageAAA from "../../assets/faculty&research/conferences/AAA.png";
import image1 from "../../assets/faculty&research/conferences/1-1.png";
import image2 from "../../assets/faculty&research/conferences/2-1.png";
import image3 from "../../assets/faculty&research/conferences/3-1.png";
import image5 from "../../assets/faculty&research/conferences/5.png";
import image6 from "../../assets/faculty&research/conferences/6.png";
import SEO from "../Seo";

// Navigation Data
const navigationSections = [
  { id: "about-ssim", label: "ABOUT SSIM", icon: Building },
  { id: "about-conference", label: "ABOUT THE CONFERENCE", icon: Users },
  {
    id: "themes-for-samaroh",
    label: "THEMES FOR SAMAROH 2025",
    icon: ListTodo,
  },
  { id: "conference-note", label: "CONFERENCE NOTE", icon: FileText },
  {
    id: "publishing-opportunities",
    label: "PUBLISHING OPPORTUNITIES",
    icon: BookOpen,
  },
  { id: "online-registration", label: "ONLINE REGISTRATION", icon: FormInput },
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

// Section Components
const AboutSsim = () => (
  <div className="space-y-3 p-3">
    <h3 className="font-bold text-mainBlue text-2xl">
      About Siva Sivani Institute of Management
    </h3>
    <p className="text-lg text-gray-700">
      Siva Sivani Institute of Management (SSIM) is an autonomous B-School
      established in 1992 duly approved by All India Council for Technical
      Education (AICTE) and the first standalone B-School in both the Telugu
      speaking state. SSIM is accredited by the prestigious international agency
      South Asian Quality Assurance System (SAQS), as well as accredited by
      National Agencies like: NBA for PGDM Program, NAAC offering PGDM,
      PGDM-BIFS and PGDM-BA. The institute has a rich tradition of pursuing
      academic excellence and overall personal growth. SSIM is consistently
      working on its course to offer the latest and most effective approach
      towards imparting quality education. The courses are designed and updated
      at frequent intervals with the inputs provided by stalwarts both from
      industry and academia to meet the needs of the industry. SSIM located
      amidst greenery as well as far from the madding crowd, SSIM has an
      enviable environment, Serene, Spacious and stupendous. It offers an ideal
      environment for imparting value-based management education.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About London Metropolitan University (LMU)
    </h3>
    <p className="text-gray-700 text-lg">
      Metropolitan University (LMU) is a public research university based in
      London, England. It was formed in 2002 by the merger of London Guildhall
      University and the University of North London. LMU is a dynamic
      institution located in the heart of London. With a rich history and a
      forward-thinking approach, LMU offers diverse programs and research
      opportunities. It fosters a multicultural environment, welcoming students
      and staff from around the world. LMU is renowned for its innovative
      research, strong industry partnerships, and state-of-the-art facilities.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About SP Jain School of Global Management
    </h3>
    <p className="text-gray-700 text-lg">
      SP Jain School of Global Management, an Australian business school with
      campuses in Dubai, Mumbai, Singapore, and Sydney, offers undergraduate,
      postgraduate, and executive programs emphasizing real-world business
      insights. Renowned for international faculty and recognized by Bloomberg,
      Forbes, and Financial Times, the school embodies values like Innovation,
      leadership, and sustainability. Key programs include the Global MBA (#7 in
      Asia Pacific, 2023-24) and Executive MBA.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About Dallas Baptist University
    </h3>
    <p className="text-gray-700 text-lg">
      DBU's forerunner, Decatur Baptist College, was founded in 1898 as the
      first junior college in Texas, In 1965, the school relocated to the scenic
      foothills of southwest Dallas. Today, DBU offers a variety of degrees at
      the undergraduate, master's, and doctoral levels. Well into our second
      century, DBU continues to press forward in our mission to produce servant
      leaders who will transform the world. Dallas Baptist University is a
      nationally ranked, comprehensive, global Christ-centered university with a
      mission to produce servant leaders through the integration of faith and
      learning. Dallas Baptist University is a nationally ranked, comprehensive,
      global Christ-centered university with a mission to produce servant
      leaders through the integration of faith and learning. We are thrilled to
      be an educational enterprise home to more than 4,200 students representing
      more than 50 countries around the world.
    </p>
    <h3 className="font-bold text-mainBlue text-2xl">
      About Indian Society for Training & Development
    </h3>
    <p className="text-gray-700 text-lg">
      The Indian Society for Training & Development (ISTD), established in April
      1970, is a national level professional & non-profit society registered
      under the Societies Registration Act, 1860. It has a over 11,000
      membership of individuals, over 400 institutional members from 50 chapters
      across the country in the area of training and development of Human
      Resource from Government, Public and Private Sector Organizations &
      Enterprises; Educational and Training Institutions and other Professional
      Bodies. The Society is affiliated to the International Federation of
      Training and Development Organizations (IFTDO), Geneva. ISTD Organizes
      Training Programs, all over the country both at Chapter and National
      Levels.
    </p>
  </div>
);

const AboutConference = () => (
  <div className="space-y-3">
    <h3 className="font-bold text-mainBlue text-2xl">
      About Siva Sivani Institute of Management
    </h3>
    <p className="text-lg text-gray-700">
      Siva Sivani Institute of Management (SSIM) is an autonomous B-School
      established in 1992 duly approved by All India Council for Technical
      Education (AICTE) and the first standalone B-School in both the Telugu
      speaking state. SSIM is accredited by the prestigious international agency
      South Asian Quality Assurance System (SAQS), as well as accredited by
      National Agencies like: NBA for PGDM Program, NAAC offering PGDM,
      PGDM-BIFS and PGDM-BA. The institute has a rich tradition of pursuing
      academic excellence and overall personal growth. SSIM is consistently
      working on its course to offer the latest and most effective approach
      towards imparting quality education. The courses are designed and updated
      at frequent intervals with the inputs provided by stalwarts both from
      industry and academia to meet the needs of the industry. SSIM located
      amidst greenery as well as far from the madding crowd, SSIM has an
      enviable environment, Serene, Spacious and stupendous. It offers an ideal
      environment for imparting value-based management education.
    </p>
  </div>
);

const ThemesForSamaroh = () => (
  <>
    <div className="space-y-3">
      <h3 className="font-bold text-mainBlue text-2xl">
        About Siva Sivani Institute of Management
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Risk management and resilience in Industry 5.0</li>
        <li>Circular economy business models and financial valuation</li>
        <li>
          Green Finance and Digital Transformation for Sustainable Growth
          Sustainable finance and impact investing
        </li>
        <li>
          ESG (Environmental, Social, Governance) reporting and disclosure
        </li>
        <li>Green bonds and sustainable debt financing</li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Marketing
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Sustainable marketing and green branding</li>
        <li>Ethical consumerism and conscious consumption</li>
        <li>Storytelling and purpose-driven marketing</li>
        <li>Customer experience and satisfaction in Industry 5.0</li>
        <li>Sustainable Marketing and Customer Experience in Industry 5.0</li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Human Resources Management
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Talent management and skills development for Industry 5.0</li>
        <li>Employee engagement and well-being in sustainable organizations</li>
        <li>Diversity, equity, and inclusion in Industry 5.0</li>
        <li>Ethical leadership and corporate social responsibility</li>
        <li>Work-life balance and flexible work arrangements</li>
        <li>
          Transforming HR Practices for a Sustainable, Technology-Driven
          Workplace
        </li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Business Analytics
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Data-driven decision-making for sustainability</li>
        <li>Predictive analytics and scenario planning</li>
        <li>Sustainabilitymetrics and performance measurement</li>
        <li>
          <strong>Al </strong>and machine learning for sustainable operations
        </li>
        <li>Big data analytics for circular economy</li>
        <li>
          Sustainable Supply Chain and Operations Management in the Digital Era
        </li>
        <li>
          Leveraging Emerging Technologies for Sustainable Business Innovation
        </li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Communication
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Stakeholder engagement and communication strategies</li>
        <li>Corporate storytelling and brand reputation</li>
        <li>Crisis communication and reputation management</li>
        <li>Internal communication and employee engagement</li>
        <li>Digital communication and social media for sustainability</li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Entrepreneurship
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Sustainable entrepreneurship and social enterprises</li>
        <li>Innovation and technology development for sustainability</li>
        <li>Venture capital and impact investing for sustainable startup</li>
        <li>Scaling sustainable businesses and global markets</li>
        <li>Entrepreneurial leadership and ethical decision-making</li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Operations
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Sustainable operations and supply chain management</li>
        <li>Lean manufacturing and waste reduction</li>
        <li>Energy efficiency and resource conservation</li>
        <li>Quality management and sustainability certification</li>
        <li>
          Strategic Leadership and Corporate Responsibility for Industry 5.0
        </li>
        <li>Circular Economy and Green Business Models</li>
      </ul>
      <h3 className="font-bold text-mainBlue text-2xl">
        Sustainable Management
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Strategic management for sustainability</li>
        <li>Corporate governance and ethics</li>
        <li>Leadership for a sustainable future</li>
        <li>Organizational culture and values</li>
        <li>Business models for sustainable development</li>
      </ul>
      <p className="text-lg text-gray-700">
        SAMAROH 2025 aims to shape the future of management by fostering thought
        leadership and promoting sustainable business solutions in the era of
        Industry 5.0. Join us in redefining management practices for a more
        sustainable and technologically driven world for human centric approach.
      </p>
      <p className="text-lg text-gray-700">
        Submissions in the form of extended abstracts, in the prescribed format,
        can be made through the following email:{" "}
        <a
          href="mailto:samaroh2025@ssim.ac.in"
          className="text-red-600 font-semibold"
        >
          samaroh2025@ssim.ac.in.
        </a>{" "}
        The screening of research papers for presentation at the conference will
        be based on the review of abstracts. Full papers will be reviewed only
        for publication in the conference book of proceedings, book chapter and
        journals.
      </p>
    </div>
  </>
);

const ConferenceNote = () => (
  <>
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-mainBlue">Industry 5.0</h3>
      <p className="text-lg text-gray-700">
        Industry 5.0. a paradigm shift from automation-centric Industry 4.0,
        emphasizes human-centered and sustainable production. This
        transformative approach offers a promising avenue for achieving
        inclusive growth and sustainable development. By prioritizing human
        well-being, collaboration, and environmental stewardship, Industry 5.0
        can create a more equitable and resilient society.
      </p>
      <p className="text-lg text-gray-700">
        This conference note explores the key principles and potential benefits
        of Industry 5.It delves into how Industry 5.0 can foster inclusive
        growth by creating new job opportunities, promoting social equity, and
        empowering marginalized communities. Additionally, the note discusses
        the sustainability aspects of Industry 5.0, including its potential to
        reduce environmental impact, conserve resources, and promote circular
        economy practices.
      </p>
      <p className="text-lg text-gray-700">
        By embracing Industry 5.0, businesses and governments can contribute to
        a more sustainable and equitable future. This conference aims to foster
        dialogue, share knowledge, and inspire action towards realizing the full
        potential of Industry 5.0 for inclusive growth and sustainable
        development.
      </p>
      <h3 className="text-2xl font-bold text-mainBlue">
        PANEL DISCUSSION THEME:
      </h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>
          Humanistic Solutions for the Business (Insights from the manufacturing
          and service sector)
        </li>
        <li>
          ESG and Industry 5.0 (Role of various stakeholders in promoting ESG
          practicus)
        </li>
        <li>
          Co-Creation of Talent (Integration of Industry and Business School in
          the Industry 5.0 Era)
        </li>
      </ul>
      <h3 className="text-2xl font-bold text-mainBlue">CONFIRMED JOURNALS</h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>
          <strong>Finance India</strong> a Scopus Indexed and ABDC Journal.
        </li>
        <li>
          Emerald Publishing – <strong>Rajagiri Management Journal –</strong>{" "}
          UGC Care 1.
        </li>
        <li>Publication Charge as per the Journal norms</li>
        <li>
          Few mors Scopus and UGC Care listed Joumiils will be communicated
          soon.
        </li>
      </ul>
    </div>
  </>
);

const PublishingOpportunities = ({ setIsEnquireOpen }) => (
  <>
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-mainBlue">
        PUBLISHING&nbsp; OPPORTUNITIES
      </h3>
      <p className="text-lg text-gray-700">
        The papers must be based on original research work neither been
        published nor submitted for publication
      </p>
      <p className="text-lg text-gray-700">
        The abstract of all the research paper along with author profile will be
        published in conference proceeding with ISBN which will be released on
        the day of conference.
      </p>
      <p className="text-lg text-gray-700">
        On the approval of the peer-review committee, the full research paper
        can be considered for publication after taking the consent of the
        author(s).
      </p>
      <p className="text-lg text-gray-700">
        We will connect you to Scopus Indexed Publishers, UGC Care-01 Journals
        for your publication after peer-review
      </p>
      <p className="text-lg text-gray-700">
        We provide publishing opportunities in "SuGyaan Management Journal of
        Siva Sivani institute of Management, ISSN 0975-4032.
      </p>
      <h3 className="text-2xl font-bold text-mainBlue">CONFIRMED JOURNALS</h3>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>
          <strong>Finance India</strong> a Scopus Indexed and ABDC Journal.
        </li>
        <li>
          Emerald Publishing – <strong>Rajagiri Management Journal –</strong>{" "}
          UGC Care 1.
        </li>
        <li>Publication Charge as per the Journal norms</li>
        <li>
          Few mors Scopus and UGC Care listed Joumiils will be communicated
          soon.
        </li>
      </ul>
      <h3 className="text-2xl font-bold text-mainBlue">
        PAPER SUBMISSION GUIDELINES
      </h3>
      <p className="text-lg text-gray-700">
        Papers must be formatted according to the following guidelines:
      </p>
      <ul className="list-disc list-inside ml-5 space-y-1 text-lg text-black">
        <li>Abstract: 250-300 words</li>
        <li>Word limit: 4000-6000 words</li>
        <li>Font: Times New Roman, 12 points</li>
        <li>Margins: 1 inch all around</li>
        <li>Spacing: Double spaced</li>
        <li>Tables, graphs, and figures: Black and white, properly numbered</li>
        <li>References: APA style</li>
        <li>Similarity Index: Not more than 10%</li>
      </ul>
      <p className="text-lg text-gray-700">
        <strong>Submission</strong>: The author(s) are suggested to email the
        complete research paper along with the abstract and authors profile to:{" "}
        <strong>samaroh2025@ssim.ac.in</strong>
      </p>
      <ol className="list-decimal list-inside ml-5 space-y-1 text-lg text-black">
        <li>
          The author(s) must clearly mention the theme under which their article
          is to be considered for presentation.
        </li>
        <li>
          Paper must have a title page, author affiliation, an abstract of 250
          words, 5 related key words, introduction, review of literature,
          methodology, analysis, results, discussion and bibliography.
        </li>
        <li>
          All papers will undergo a double-blind peer review process. Please
          note that the SAMAROH-2025 reserves the right to not accept any paper
          that does not meet the submission guidelines
        </li>
      </ol>
    </div>
  </>
);

const OnlineRegistration = () => (
  <>
    <div className="space-y-3">
      <p>
        <img
          fetchpriority="high"
          decoding="async"
          class="aligncenter wp-image-12109 size-full"
          src={imageAAA}
          alt=""
          width="1030"
          height="281"
          sizes="(max-width: 1030px) 100vw, 1030px"
        />
      </p>
      <h3 className="text-2xl !mt-10 font-bold text-mainBlue">
        IMPORTANT DATES
      </h3>
      <Table className="bg-blue-50 border border-gray-300">
        <TableBody>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Submission of Extended Abstracts</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>February 01, 2025</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Communication of Acceptance</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>February 03, 2025</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Submission of Full Papers</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>February 05, 2025</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Submission of Presentations</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>February 10, 2025</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Conference</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>February 11-12, 2025</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h3 className="text-2xl !mt-10 font-bold text-mainBlue">PRIZES</h3>
      <Table className="bg-blue-50 border border-gray-300">
        <TableBody>
          <TableRow>
            <TableCell width="330" className="border border-gray-300">
              <p className="text-lg text-gray-700 mb-5">
                <strong>AWARDS FOR BEST PAPERS</strong>
              </p>
              <Table className="bg-blue-50 border border-gray-300">
                <TableBody>
                  <TableRow>
                    <TableCell width="301" className="border border-gray-300">
                      <p>1st Prize</p>
                    </TableCell>
                    <TableCell width="301" className="border border-gray-300">
                      <p>₹&nbsp;10,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width="301" className="border border-gray-300">
                      <p>2nd Prize</p>
                    </TableCell>
                    <TableCell width="301" className="border border-gray-300">
                      <p>₹&nbsp;7,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width="301" className="border border-gray-300">
                      <p>3rd Prize</p>
                    </TableCell>
                    <TableCell width="301" className="border border-gray-300">
                      <p>₹&nbsp;5,000</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h3 className="text-2xl !mt-10 font-bold text-mainBlue">
        REGISTRATION FEE
      </h3>
      <p className="text-lg text-gray-700">
        <strong>The registration fee is non-refundable.</strong>
      </p>
      <Table className="bg-blue-50 border border-gray-300">
        <TableBody>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>MBA/MA/PGDM/Research Scholars</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>₹&nbsp;1000</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Academicians</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>₹ 2000</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Corporate Attendees</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>₹ 4000</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="301" className="border border-gray-300">
              <p>Foreign Delegates (Academicians/Students)</p>
            </TableCell>
            <TableCell width="301" className="border border-gray-300">
              <p>$50</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </>
);

const Conferences = () => {
  const [activeSection, setActiveSection] = useState("about-ssim");
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <>
      <SEO
        title="Conferences at SSIM"
        description="Stay updated on the latest conferences, seminars, and academic events at Siva Sivani Institute of Management (SSIM). Join us for insightful discussions and networking opportunities."
        keywords="SSIM conferences, business conferences, academic seminars, management events, research conferences"
        canonicalUrl="https://www.ssim.ac.in/research/conferences"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 sm:py-16">
        {/* Hero Section */}
        {/* <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-red-600 to-red-600/60 bg-clip-text text-transparent">
              Begin Your Journey with FPM Program
            </h1>
            <p className="text-xl text-gray-900">
              Take the first step towards your future with our world-class
              education programs.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-3xl" />
          <GraduationCap className="absolute right-10 top-10 w-96 h-96 text-primary/5 rotate-12" />
        </div>
      </div> */}

        {/* Main Content */}
        <div className="container max-w-7xl mx-auto px-4 py-8 sm:pb-20">
          <Heading
            title="SAMAROH 2025 - International Conference on Industry 5.0 - Business with Purpose"
            className="text-red-600 sm:!text-4xl"
          />
          <div className="lg:grid lg:grid-cols-[350px_1fr] gap-8">
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
                      {(() => {
                        switch (activeSection) {
                          case "about-ssim":
                            return <AboutSsim />;
                          case "about-conference":
                            return <AboutConference />;
                          case "themes-for-samaroh":
                            return <ThemesForSamaroh />;
                          case "conference-note":
                            return <ConferenceNote />;
                          case "publishing-opportunities":
                            return (
                              <PublishingOpportunities
                                setIsEnquireOpen={setIsEnquireOpen}
                              />
                            );
                          case "online-registration":
                            return <OnlineRegistration />;
                          // case "scholarships":
                          //   return <Scholarships />;
                          default:
                            return null;
                        }
                      })()}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
        <TeamSection />
        <Tourists />
      </div>
    </>
  );
};

export default Conferences;

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mrs. S. Aarathy",
      title: "CHIEF PATRON",
      bio: "President and Chief Executive Siva Sivani Group of Institutions (SSGI)",
    },
    {
      id: 2,
      name: "Dr. Sailesh Sampathy",
      title: "PATRON",
      bio: "Vice President and Deputy Chief Executive Siva Sivani Group of Institutions (SSGI)",
    },
    {
      id: 3,
      name: "Smt. Deepika Sampathy",
      title: "ASSOCIATE PATRON",
      bio: "Associate Vice President Siva Sivani Group of Institutions (SSGI).",
    },
  ];
  const conferenceTeam = [
    {
      id: 1,
      name: "Dr. S.V. Ramana Rao",
      title: "Conference Chair",
      bio: "Director, SSIM",
    },
  ];

  const organizingCommittee = [
    {
      id: 1,
      name: "Dr. K. Subbarama Sarma",
      title: "Assistant Professor",
      email: "sarmaramam@ssim.ac.in",
      phone: "98491 58262",
    },
    {
      id: 2,
      name: "Dr. Gowri Kusuma",
      title: "Assistant Professor",
      email: "gowri@ssim.ac.in",
      phone: "9505076127",
    },
    {
      id: 3,
      name: "Dr. A. Dinesh",
      title: "Assistant Professor",
      email: "dinesh@ssim.ac.in",
      phone: "9566741581",
    },
    {
      id: 4,
      name: "Mr. Vallinayagam",
      title: "Associate Professor",
      email: "vallinayagam@ssim.ac.in",
      phone: "9994191700",
    },
  ];

  // For expanded bio state
  const [expandedId, setExpandedId] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const toggleBio = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate a consistent color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "border border-blue-500",
      "border border-green-500",
      "border border-purple-500",
      "border border-amber-500",
      "border border-rose-500",
      "border border-cyan-500",
      "border border-indigo-500",
      "border border-emerald-500",
      "border border-fuchsia-500",
    ];

    // Simple hash function to get a consistent index
    const hash = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 relative z-10"
        >
          <h2 className="text-4xl text-mainBlue font-bold tracking-tight mb-3">
            CONFERENCE TEAM
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto justify-center !mb-5 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full p-6 bg-white backdrop-blur-sm bg-opacity-90 border border-slate-100",
                  "transition-all duration-300 overflow-hidden rounded-xl"
                )}
              >
                <div className="flex flex-col space-y-5 h-full">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Avatar
                        className={cn(
                          "h-14 w-14 text-black font-semibold",
                          getAvatarColor(member.name)
                        )}
                      >
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-slate-500 font-medium">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="relative mb-4">
                      <motion.p
                        className={cn(
                          "text-slate-600 text-sm leading-relaxed",
                          expandedId === member.id ? "" : "line-clamp-2"
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {member.bio}
                      </motion.p>

                      {/* {member.bio.length > 80 && (
                        <motion.button
                          onClick={() => toggleBio(member.id)}
                          className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedId === member.id ? (
                            <>
                              Show less <ChevronUp className="h-3 w-3 ml-1" />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown className="h-3 w-3 ml-1" />
                            </>
                          )}
                        </motion.button>
                      )} */}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 mt-16 relative z-10"
        >
          <h2 className="text-4xl text-mainBlue font-bold tracking-tight mb-3">
            ORGANIZING COMMITTEE
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {conferenceTeam.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full p-6 bg-white backdrop-blur-sm bg-opacity-90 border border-slate-100",
                  "transition-all duration-300 overflow-hidden rounded-xl"
                )}
              >
                <div className="flex flex-col space-y-5 h-full">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Avatar
                        className={cn(
                          "h-14 w-14 text-black font-semibold",
                          getAvatarColor(member.name)
                        )}
                      >
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-slate-500 font-medium">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="relative mb-4">
                      <motion.p
                        className={cn(
                          "text-slate-600 text-center text-lg leading-relaxed",
                          expandedId === member.id ? "" : "line-clamp-2"
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {member.bio}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {organizingCommittee.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full p-6 bg-white backdrop-blur-sm bg-opacity-90 border border-slate-100",
                  "transition-all duration-300 overflow-hidden rounded-xl"
                )}
              >
                <div className="flex flex-col space-y-5 h-full">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Avatar
                        className={cn(
                          "h-14 w-14 text-black font-semibold",
                          getAvatarColor(member.name)
                        )}
                      >
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-slate-500 font-medium">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    {/* <div className="relative mb-4">
                      <motion.p
                        className={cn(
                          "text-slate-600 text-sm leading-relaxed",
                          expandedId === member.id ? "" : "line-clamp-2"
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {member.bio}
                      </motion.p>
                    </div> */}

                    <motion.div
                      className="space-y-2 pt-2 border-t border-slate-100"
                      variants={contactVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <Mail className="h-4 w-4 mr-2 text-slate-400" />
                        {member.email}
                      </motion.a>

                      <motion.a
                        href={`tel:${member.phone.replace(/\D/g, "")}`}
                        className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <Phone className="h-4 w-4 mr-2 text-slate-400" />
                        {member.phone}
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const team = [
  {
    name: "CHARMINAR",
    area: "Finance",
    qualification: "Ph.D, MBA",
    experience: 30,
    image: image1,
    description:
      "A historic monument located in the heart of Hyderabad, India, built in 1591 by Sultan Muhammad Quli Qutb Shah. It is a stunning architectural masterpiece featuring four grand arches and minarets, and it remains an iconic symbol of Hyderabad's rich cultural heritage.",
  },
  {
    name: "GOLKONDA FORT",
    area: "HR & Strategy",
    qualification: "Ph.D, MBA",
    experience: 36,
    image: image2,
    description:
      "A historic citadel known for its architectural brilliance and rich history dating back to the medieval era. Renowned for its impressive acoustics, fascinating engineering, and once housing the world-famous Koh-i-Noor and Hope diamonds, Golkonda stands as a testament to the regions.",
  },
  {
    name: "BIRLA TEMPLE",
    area: "HR & Strategy",
    qualification: "Ph.D, MIRPM",
    experience: 36,
    image: image3,
    description:
      "A prominent Hindu temple in Hyderabad, India, dedicated to Lord Venkateswara. Constructed with white marble atop a hill, this architectural marvel offers breath-taking views of the city and attracts devotees and tourists alike due to its intricate carvings and religious significance.",
  },
  {
    name: "CHOWMAHALLA PALACE",
    area: "Data Science",
    qualification: "Ph.D, M.Sc.",
    experience: 36,
    image: image5,
    description:
      "A grand palace exhibiting the opulence and grandeur of the Nizams, featuring beautiful architecture and historic artifacts.",
  },
  {
    name: "SALAR JUNG MUSEUM",
    area: "Data Science",
    qualification: "MCA, M.Tech, M.Sc.",
    experience: 36,
    image: image6,
    description:
      "Home to an extensive collection of art, sculptures, manuscripts, and artifacts from various civilizations across the world.",
  },
];

function Tourists() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="w-full pt-4 !py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            Our Amazing Team
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            Meet the Innovators
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Passionate individuals working together to create extraordinary
            experiences
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`group relative overflow-hidden bg-white/50 border-gray-200 backdrop-blur-sm transition-all duration-500
                  ${
                    hoveredMember === index
                      ? "scale-105 shadow-2xl shadow-blue-500/20"
                      : "hover:shadow-xl"
                  }`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <div
                        className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-blue-500/50 ring-offset-4 ring-offset-white
                        transition-all duration-500 group-hover:ring-blue-500 group-hover:ring-offset-8"
                      >
                        <img
                          alt={member.name}
                          src={member.image || "/placeholder.svg"}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-base leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-14 text-2xl font-bold text-mainBlue mb-2">
          MANY MORE TO VISIT ..........
        </div>
        <div className="flex justify-center gap-4 items-center mt-12 text-4xl font-bold text-mainBlue mb-2">
          Click Here for
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRGLfK3Sm-kHebrzupY8OFywkmXG-oGuCXnXBH0e4-ZQd6fg/viewform"
            className="flex items-center"
          >
            <Button
              className="group gap-0 mt-[2px] px-0 py-0 h-0 rounded-none"
              size="lg"
            >
              <div className="bg-red-600 mt-[2px] h-11 flex items-center px-4 hover:bg-red-700">
                Online Registration Form
              </div>
              <div className="bg-mainBlue mt-[2px] h-11 flex items-center px-4">
                <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
