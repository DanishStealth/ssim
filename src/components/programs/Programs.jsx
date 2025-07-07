"use client";

import { Calendar } from "../ui/calendar";
import SEO from "@/components/Seo";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Search,
  BarChart2,
  Menu,
  Clock,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskRoundIcon as Flask,
  Users,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
// import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CheckCircle, ArrowRight, Download, CalendarIcon } from "lucide-react";
import { CalendarRange } from "lucide-react";
import presentation from "../../assets/programs/presentation.png";
import industry from "../../assets/programs/industrial-revolution.png";
import experiential from "../../assets/programs/seminar.png";
import pulse from "../../assets/programs/market.png";
import bookreview from "../../assets/programs/ratings.png";
import social from "../../assets/programs/share.png";
import industryreview from "../../assets/programs/industry.png";
import companyreview from "../../assets/programs/marketing.png";
import independent from "../../assets/programs/studying.png";
import article from "../../assets/programs/search.png";
import trainning from "../../assets/programs/thought-leadership.png";
import project from "../../assets/programs/project.png";
import internship from "../../assets/programs/working-man.png";
import certification from "../../assets/programs/online-learning.png";
import viva from "../../assets/programs/meeting.png";
import pgdmtps from "../../assets/programs/PGDM-TPS.webp";
import pgdmtpse from "../../assets/programs/PGDM-TPSE.webp";
import pgdmba from "../../assets/programs/PGDM-BA.webp";
import pgdmbifs from "../../assets/programs/PGDM-BIFS.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const programs = [
  { id: "fpm/efpm", name: "FPM/EFPM", link: "/programs/fpm-efpm" },
  { id: "pgdm-ba", name: "PGDM BA", link: "/programs/pgdm-ba" },
  { id: "pgdm-bifs", name: "PGDM BIFS", link: "/programs/pgdm-bifs" },
  {
    id: "pgdm-triple-specialisation",
    name: "PGDM Triple Specialisation",
    link: "/programs/pgdm-triple-specialisation",
  },
];

const sections = [
  { id: "about", name: "About", icon: ChevronRight },
  {
    id: "electives",
    name: "Specializations",
    icon: ChevronRight,
    hidden: ["fpm/efpm"],
  },
  // { id: "specializations", name: "Specializations", icon: ChevronRight },
  {
    id: "managerialCompetency",
    name: "Managerial Competency Development Modules",
    icon: ChevronRight,
  },
  { id: "differentiators", name: "Differentiators", icon: ChevronRight },
  {
    id: "curriculum",
    name: "Program Structure",
    icon: ChevronRight,
    hidden: ["fpm/efpm"],
  },
  { id: "eligibility", name: "Eligibility & Admission", icon: ChevronRight },
];

const programData = {
  "fpm/efpm": {
    name: "FPM/EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "36",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM)",
    },
    specializations: [
      // {
      //   title: "Accounting & Finance",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/5410839.png",
      // },
      // {
      //   title: "Organizational Behavior / Human Resource",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/human-resource.png",
      // },
      // {
      //   title: "Marketing",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/marketing.png",
      // },
      // {
      //   title: "Economics",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/economics.png",
      // },
      // {
      //   title: "Operations Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/OM.png",
      // },
      // {
      //   title: "General Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/GM.png",
      // },
      // {
      //   title: "Strategic Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/SM.png",
      // },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
  },
  "pgdm-ba": {
    name: "PGDM BA",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Business Analytics",
    },
    specializations: [
      {
        title: "Marketing Analytics",
        icon: "📊",
      },
      {
        title: "Financial Analytics",
        icon: "💹",
      },
      {
        title: "HR Analytics",
        icon: "👥",
      },
      {
        title: "Operational Analytics",
        icon: "⚙️",
      },
      {
        title: "Artificial Intelligence",
        icon: "🤖",
      },
      {
        title: "Big Data Analytics",
        icon: "📈",
      },
      {
        title: "Cloud Computing",
        icon: "☁️",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Harvard Business School Certification",
        description:
          "Embedded with Harvard Business School Online Business Analytics certification",
      },
      {
        title: "Software Exposure",
        description:
          "Exposure to wide range of software, programming languages and big data processing tools",
      },
      {
        title: "Experiential Learning",
        description:
          "Learning through simulations, gamifications, and practical applications",
      },
      {
        title: "Expert Faculty",
        description:
          "Eminent faculty members with industry, academia and research experience",
      },
      {
        title: "International Exchange",
        description:
          "Exchange programs for students with Herzing University, Atlanta (USA)",
      },
      {
        title: "Paid Internships",
        description: "Earn-while-you-learn through paid summer internships",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM BA",
      //   link: pgdmba,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent pgdm-ba",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Python for Analytics",
            },
            {
              title: "SQL for Business Intelligence",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Financial Analytics",
            },
            {
              title: "Marketing Analytics",
            },
            {
              title: "Multivariate Data Analysis",
            },
            {
              title: "Human Resource Management",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
            {
              title: "Elective - II",
            },
            {
              title: "HR Analytics",
            },
            {
              title: "Machine Learning - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "Business Analysis Using Case Studies",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong analytical and quantitative skills",
      "Interest in data-driven decision making",
      "Basic understanding of mathematics and statistics",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      programHighlights: {
        dataGenerated: "2.5 quintillion bytes daily",
        growthRate: "25%",
        growthPeriod: "2020-2030",
        uniquePosition:
          "First institute in Telugu states offering specialized PGDM in Business Analytics",
      },
    },
    electives: {
      minor: {
        title: "Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
        specializations: [
          {
            name: "Finance",
            courses: [
              "Investment Analysis & Portfolio Management",
              "Financial Modelling",
              "Financial Market",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Consumer Behaviour",
              "Sales Management",
              "Digital & Social Media Marketing",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Workforce Planning & Talent Acquisition Analytics",
              "Competency Mapping with Compensation",
              "Performance Management Analytics",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Strategic Operations Management",
            ],
          },
        ],
      },
    },
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree:
        "Post Graduate Diploma in Management - Banking, Insurance and Financial Services",
    },
    specializations: [
      {
        title: "Banking Stream",
        icon: "🏦",
        description:
          "Retail banking, Digital banking, Risk and Treasury management in banks",
      },
      {
        title: "Insurance Stream",
        icon: "🛡️",
        description:
          "Insure-tech, Fraud risk management in insurance reinsurance management",
      },
      {
        title: "Analytical Stream",
        icon: "📊",
        description:
          "Fraud risk analytics, Financial analytics and Algo trading with Python",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "III Accreditation",
        description:
          "Program is accredited by Insurance Institute of India (III)",
      },
      {
        title: "Advanced Labs",
        description:
          "NSE Assisted Finance Lab, Equity Levers Certification, CESIM Simulations",
      },
      {
        title: "Experiential Learning",
        description:
          "Corporate interviews, Industrial Visits, NGO Visits, and Simulations",
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
      },
      {
        title: "Industry Integration",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "Outcome Based Education",
        description: "Focus on practical skills and industry readiness",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM BIFS",
      //   link: pgdmbifs,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Banking Law and Operations",
            },
            {
              title: "Insurance and Risk Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Business Environment and Law",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Major - I",
            },
            {
              title: "Major - II",
            },
            {
              title: "Major - III",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Major - IV",
            },
            {
              title: "Major - V",
            },
            {
              title: "Major - VI",
            },
            {
              title: "Minor - I",
            },
            {
              title: "Minor - II",
            },
            {
              title: "Sectoral - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "InternationalBusiness",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Minor - III",
            },
            {
              title: "Sectoral - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong interest in Banking, Insurance and Financial Services",
      "Analytical and quantitative aptitude",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      careerOptions: [
        "NAV Analysts in Fintech Companies",
        "Private & Public Sector Banks",
        "Life Insurance Companies",
        "General Insurance & Health Insurance Companies",
        "Insurance Intermediaries",
        "Stock Broking Firms",
        "Mutual Fund Companies",
        "Marketing Research Companies",
        "Bancassurance channels",
      ],
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      placementRate: 100,
    },
    electives: {
      minor: {
        title: "Minor Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
        specializations: [
          {
            name: "Banking",
            courses: [
              "Retail Banking",
              "AML & KYC",
              "Risk & Treasury Management in Banks",
            ],
          },
          {
            name: "Insurance",
            courses: [
              "InsureTech",
              "Fraud Risk Management in Insurance",
              "Liability Insurance",
            ],
          },
          {
            name: "Operations",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Service Operations Management",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Sales Management",
              "Services Marketing and CRM",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Human Resource Development",
              "Performance and Compensation Management",
              "Managing Diversity",
            ],
          },
          {
            name: "Analytics",
            courses: [
              "Fraud and Risk Analytics",
              "Financial Analysis and Algo-Trading with Python",
              "Blockchain and AI-Applications in Banking",
            ],
          },
          {
            name: "Agri Business Management",
            courses: [
              "Basics of Agriculture",
              "Agri Business Marketing and Sales",
              "Agri Warehousing and Supply Chain Management",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Software Project and Quality Management",
              "IT Project Management",
              "E-business Technologies and Digital Transformation",
            ],
          },
        ],
      },
      sectoral: {
        title: "Sectoral Electives",
        color: "bg-yellow-50 border-yellow-200",
        headerColor: "bg-yellow-500",
        specializations: [
          {
            name: "Entrepreneurship",
            courses: [
              "Innovation Management and Entrepreneurship",
              "Family, Small and Social Entrepreneurship",
            ],
          },
          {
            name: "Digital Marketing",
            courses: ["Digital Marketing", "Social Media & Content Marketing"],
          },
          {
            name: "Analytics",
            courses: [
              "Fintech & Digital Banking",
              "Predictive Analytics using R",
            ],
          },
          {
            name: "Pharma Management",
            courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
          },
          {
            name: "Hospitality & Tourism Marketing",
            courses: ["Hospitality Marketing", "Tourism Marketing"],
          },
          {
            name: "Retail Management",
            courses: ["Retail Management", "Visual Merchandising"],
          },
          {
            name: "Real Estate Management",
            courses: [
              "Strategic Real Estate Marketing",
              "Advance Real Estate Investment & Development",
            ],
          },
          {
            name: "Banking",
            courses: ["Mortgage Banking & Trade Finance", "AML & KYC"],
          },
          {
            name: "Insurance",
            courses: [
              "Reinsurance Management",
              "Group Insurance & Retirement Benefits",
            ],
          },
        ],
      },
    },
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "180",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management",
    },
    specializations: [
      {
        title: "Finance",
        icon: "💰",
      },
      {
        title: "Marketing",
        icon: "📊",
      },
      {
        title: "Human Resource",
        icon: "👥",
      },
      {
        title: "Operations Management",
        icon: "⚙️",
      },
      {
        title: "Business Analytics",
        icon: "📈",
      },
      {
        title: "Digital Marketing",
        icon: "🌐",
      },
      {
        title: "Banking & Insurance",
        icon: "🏦",
      },
      {
        title: "Retail Management",
        icon: "🏪",
      },
      {
        title: "Entrepreneurship",
        icon: "🚀",
      },
      {
        title: "Agribusiness Management",
        icon: "🌾",
      },
      {
        title: "Technology Management",
        icon: "💻",
      },
      {
        title: "Pharma Management",
        icon: "💊",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "NBA & NAAC Accreditation",
        description: "Program is accredited by NBA and NAAC",
      },
      {
        title: "Triple Specialization",
        description:
          "Unique opportunity to specialize in three different areas",
      },
      {
        title: "Cross Functional Skills",
        description: "Develop skills across multiple business domains",
      },
      {
        title: "Entrepreneurial Focus",
        description: "Greater scope to develop entrepreneurial skills",
      },
      {
        title: "Simulation Labs",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM Triple Specialisation",
      //   link: pgdmtps,
      // },
      // {
      //   name: "PGDM Triple Specialisation",
      //   link: pgdmtpse,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Human Resource Management",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Mgmt. Information System & Emerging Technologies",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Business Environment and Law",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Major - I",
            },
            {
              title: "Major - II",
            },
            {
              title: "Major - III",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Major - IV",
            },
            {
              title: "Major - V",
            },
            {
              title: "Major - VI",
            },
            {
              title: "Minor - I",
            },
            {
              title: "Minor - II",
            },
            {
              title: "Sectoral - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "International Business",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Minor - III",
            },
            {
              title: "Sectoral - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong academic background",
      "Leadership potential",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      placementRate: 100,
      facultyCount: {
        fullTime: "25+",
        visiting: "50+",
      },
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      experientialLearning: [
        "Corporate Interviews",
        "Industrial Visits",
        "NGO Visits",
        "Simulations",
        "Student Clubs",
        "Event Organization",
      ],
    },
    electives: {
      major: {
        title: "Major Electives",
        color: "bg-amber-50 border-amber-200",
        headerColor: "bg-amber-500",
        specializations: [
          {
            name: "Finance",
            courses: [
              "Investment Analysis and Portfolio Management",
              "Risk Management and Derivatives",
              "Management of Financial Services",
              "Fixed Income Securities",
              "Corporate Valuation",
              "Strategic Financial Management",
            ],
          },
          {
            name: "Agri-Business Management",
            courses: [
              "Basics of Agriculture",
              "Agri-Business Marketing and Sales",
              "Agri-Business Environment and Agri Tech",
              "Rural Banking and Micro Finance Institution",
              "Agri Ware Housing and Supply Chain Management",
              "Agri-Input Marketing/Post Harvest Mgmt./Procurement Mgmt. (Any 1)",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Consumer Behaviour",
              "Sales Management",
              "Services Marketing and CRM",
              "Integrated Marketing Communication",
              "Business to Business Marketing",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Service Operations Management",
              "Total Quality Management",
              "Logistic Management",
              "Lean Operations and Manufacturing",
              "Technology and Innovation in Operation",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Human Resource Development",
              "Industrial Relations and Labor Laws",
              "Performance and Compensation Management",
              "Human Resource Information Systems",
              "HR Analytics",
              "Managing Diversity",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Managing Technological Innovation",
              "Software Project and Quality Management",
              "IT Project Management",
              "Data Mining and Business Intelligence",
              "Database Management Systems with SQL",
              "E-Business Technologies and Digital Transformation",
            ],
          },
        ],
      },
      minor: {
        title: "Minor Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
        specializations: [
          {
            name: "Finance",
            courses: [
              "Financial Products and Services",
              "Financial Planning & Wealth Management",
              "Financial Markets",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Sales Management",
              "Services Marketing and CRM",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Service Operations Management",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Software Project and Quality Management",
              "IT Project Management",
              "E-Business Technologies and Digital Transformation",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Performance and Compensation Management",
              "Human Resource Development",
              "Managing Diversity",
            ],
          },
          {
            name: "Banking",
            courses: ["Retail Banking", "Digital Banking"],
          },
          {
            name: "Agri-Business Management",
            courses: [
              "Basics of Agriculture",
              "Agri-Business Marketing and Sales",
              "Agri Warehousing & Supply Chain Management",
            ],
          },
          {
            name: "Business Analytics",
            courses: [
              "Visual Analytics",
              "Machine Learning - I",
              "Machine Learning - II",
            ],
          },
        ],
      },
      sectoral: {
        title: "Sectoral Electives",
        color: "bg-yellow-50 border-yellow-200",
        headerColor: "bg-yellow-500",
        specializations: [
          {
            name: "Digital Marketing",
            courses: [
              "Digital Marketing",
              "Social Media and Content Marketing",
            ],
          },
          {
            name: "Entrepreneurship",
            courses: [
              "Innovation Management and Entrepreneurship",
              "Family, Small and Social Entrepreneur",
            ],
          },
          {
            name: "Real Estate Management",
            courses: [
              "Strategic Real Estate Marketing",
              "Advance Real Estate Investment and Development",
            ],
          },
          {
            name: "Retail Management",
            courses: ["Retail Management", "Visual Merchandising"],
          },
          {
            name: "Hospitality and Tourism Management",
            courses: ["Hospitality Management", "Tourism Marketing"],
          },
          {
            name: "Insurance Management",
            courses: [
              "Insurance and Risk Management",
              "Principles and Practice of Life and General Insurance",
            ],
          },
          {
            name: "Business Analytics",
            courses: ["Visual Analytics", "Predictive Analytics Using R"],
          },
          {
            name: "Pharmaceutical Management",
            courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
          },
          {
            name: "Banking",
            courses: [
              "Principles and Practices of Banking",
              "Bank Credit Management",
            ],
          },
        ],
      },
    },
  },
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ProgramStats = ({ programId }) => {
  const program = programData[programId];

  const data = [
    { name: "Applicants", value: program.stats.applicants },
    { name: "Enrolled", value: program.stats.enrolled },
    { name: "Graduates", value: program.stats.graduates },
    { name: "Avg. Salary", value: program.stats.avgSalary / 1000 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{program.name} Statistics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <p>Employment Rate: {program.stats.employmentRate}%</p>
        <p>Average Time to Graduate: {program.stats.avgTimeToGraduate} years</p>
      </div>
    </div>
  );
};

const ProgramComparison = ({ programs }) => {
  const comparisonData = [
    { feature: "Duration", key: "duration" },
    { feature: "Credits", key: "credits" },
    { feature: "Sanctioned Intake", key: "Sanctioned Intake" },
    { feature: "Location", key: "location" },
    { feature: "Degree", key: "degree" },
    { feature: "Applicants", key: "applicants" },
    { feature: "Enrolled", key: "enrolled" },
    { feature: "Graduates", key: "graduates" },
    { feature: "Employment Rate", key: "employmentRate" },
    { feature: "Avg. Salary", key: "avgSalary" },
    { feature: "Avg. Time to Graduate", key: "avgTimeToGraduate" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-mainBlue">
        Program Comparison
      </h2>
      <Table>
        <TableHeader className="bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
          <TableRow>
            <TableHead className="text-[#293794]">Feature</TableHead>
            {programs.map((program) => (
              <TableHead className="text-[#293794]" key={program.id}>
                {program.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map(({ feature, key }) => (
            <TableRow key={key}>
              <TableCell className="font-medium text-base">{feature}</TableCell>
              {programs.map((program) => (
                <TableCell className="text-base" key={program.id}>
                  {key in programData[program.id].keyInfo
                    ? programData[program.id].keyInfo[key]
                    : key in programData[program.id].stats
                    ? key === "avgSalary"
                      ? `$${programData[program.id].stats[
                          key
                        ].toLocaleString()}`
                      : key === "employmentRate" || key === "avgTimeToGraduate"
                      ? `${programData[program.id].stats[key]}%`
                      : programData[program.id].stats[key].toLocaleString()
                    : "N/A"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const KeyInformation = ({ info }) => {
  const iconMap = {
    duration: Clock,
    credits: BookOpen,
    "Sanctioned Intake": CalendarRange,
    location: MapPin,
    degree: GraduationCap,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Key Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(info).map(([key, value]) => {
          const Icon = iconMap[key];
          return (
            <Card
              key={key}
              className={`overflow-hidden ${
                key === "degree" ? "md:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-mainBlue rounded-full p-3 flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-base text-gray-800 capitalize">
                    {key}
                  </h4>
                  <p className="text-lg font-semibold text-red-600 break-words">
                    {value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Specializations = ({ specializations }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Specializations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations?.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-row items-center gap-4 p-2"
          >
            {spec.icon.startsWith("http") ? (
              <img src={spec?.icon} alt={spec?.title} className="w-20 h-20" />
            ) : (
              <div className="min-w-20 h-20 flex items-center justify-center text-4xl bg-gray-50 rounded-lg">
                {spec?.icon}
              </div>
            )}
            <CardTitle className="text-xl text-red-600">
              {spec?.title}
            </CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};
const ManagerialCompetency = ({ managerialCompetency }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Managerial Competency Development Modules
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {managerialCompetency.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col gap-3 p-5 sm:p-3"
          >
            <div className="flex flex-row items-center gap-4">
              <img src={spec?.icon} alt={spec?.title} className="w-16 h-16" />
              <CardTitle className="text-xl text-red-600">
                {spec?.title}
              </CardTitle>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <CardDescription className="sm:line-clamp-2 line-clamp-1">
                  {spec?.description}
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-mainBlue bg-white p-0 h-auto absolute right-0 bottom-0 bg-gradient-to-l from-white via-white to-transparent pl-4"
                    >
                      Read More
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{spec?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p>{spec?.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Differentiators = ({ differentiators }) => {
  const iconMap = {
    0: Briefcase,
    1: Flask,
    2: Users,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Program Differentiators
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentiators.map((diff, index) => {
          const Icon = iconMap[index] || Users;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-mainBlue rounded-full p-2">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-red-600">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{diff.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Curriculum = ({ curriculum }) => {
  // Find the detailed curriculum object, which contains module1, module2, etc.
  const detailedCurriculumData = curriculum?.find((item) => item.module1);
  // Filter for image-based curriculum items.
  const imageCurriculum = curriculum?.filter((item) => item.link);

  return (
    <>
      {curriculum && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Program Structure
          </h3>

          {/* Renders the tab-based detailed curriculum view if data for it exists */}
          {detailedCurriculumData && (
            <section className={`py-5`}>
              <div className="mx-auto relative z-10">
                <Tabs defaultValue="module1" className="max-w-4xl mx-auto">
                  <TabsList className="grid grid-cols-6 mb-12 p-1 bg-slate-100 rounded-full">
                    {/* Static tabs for now */}
                    <TabsTrigger
                      value="module1"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="module2"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 2
                    </TabsTrigger>
                    <TabsTrigger
                      value="module3"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 3
                    </TabsTrigger>
                    <TabsTrigger
                      value="module4"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 4
                    </TabsTrigger>
                    <TabsTrigger
                      value="module5"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 5
                    </TabsTrigger>
                    <TabsTrigger
                      value="module6"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 6
                    </TabsTrigger>
                  </TabsList>

                  {Object.keys(detailedCurriculumData).map(
                    (moduleKey, moduleIndex) => {
                      const data = detailedCurriculumData[moduleKey];
                      return (
                        <TabsContent
                          key={moduleIndex}
                          value={moduleKey}
                          className="transition-all duration-500 ease-in-out"
                        >
                          <div className="grid md:grid-cols-1 sm:gap-8">
                            {/* <div className="md:col-span-1 h-min bg-white p-8 rounded-2xl shadow-lg border border-slate-100"> */}
                              <h3 className="sm:text-3xl text-xl sm:ml-7 mb-5 flex items-center text-gray-700 font-bold ">
                              <BookOpen className="h-8 w-8 text-primary mr-3 mt-2" /> {data.title}
                              </h3>
                              {/* <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline" className="text-sm">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {data.duration}
                                </Badge>
                              </div> */}
                              {/* <p className="text-muted-foreground mb-6">
                                {data.description}
                              </p>
                              <div className="mt-auto pt-4 border-t">
                                <Button
                                  variant="outline"
                                  className="w-full gap-2"
                                >
                                  Download Syllabus{" "}
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div> */}
                            {/* </div> */}
                            <div className="md:col-span-2">
                              <div className="w-full">
                                {data.topics.map((topic, index) => (
                                  <div
                                    key={index}
                                    className="bg-white mb-4 rounded-xl border border-slate-100 overflow-hidden group transition-all duration-300 px-6 py-4"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-primary text-lg">
                                          {index + 1}
                                        </span>
                                      </div>
                                      <span className="text-base sm:text-lg text-left font-medium">
                                        {topic.title}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      );
                    }
                  )}
                </Tabs>
              </div>
            </section>
          )}

          {/* Renders image-based curriculum items */}
          <div className="space-y-8">
            {imageCurriculum?.map((item, index) => (
              <div key={index}>
                <img src={item.link} alt={item.name} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const EligibilityAdmission = ({ eligibility, admission }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Eligibility Criteria
        </h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              {eligibility.map((criteria, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Admission Procedure
        </h3>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              {admission.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                  {index < admission.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const CourseElectives = ({ electives, programId }) => {
  console.log(programId, electives?.major?.title);
  if (!electives) {
    return <div>No electives offered for this program.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Electives Offered
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of specialized courses across
          major, minor, and sectoral electives
        </p>
      </div> */}

      <div className="space-y-16">
        {Object.entries(electives).map(([key, category]) => (
          <section key={key} className="relative">
            <div className="flex items-center mb-8">
              <div
                className={`${category.headerColor} text-white px-6 py-3 rounded-lg shadow-lg`}
              >
                <h2 className="text-2xl md:text-3xl font-bold">
                  {category?.title}
                </h2>
              </div>
              <div className="flex-1 h-px bg-gray-300 ml-6"></div>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                programId === "pgdm-ba" ? "lg:grid-cols-2" : "lg:grid-cols-3"
              } gap-6`}
            >
              {category?.specializations.map((specialization, index) => (
                <Card
                  key={index}
                  className={`${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      {specialization?.name}
                      {/* <Badge variant="secondary" className="ml-2 text-xs">
                        {specialization.courses.length} courses
                      </Badge> */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {specialization?.courses?.map((course, courseIndex) => (
                        <li
                          key={courseIndex}
                          className="text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const ProgramSection = ({ programId, activeSection }) => {
  const program = programData[programId];
  if (!program) return <div>Program not found</div>;

  const seoTitle = `${program.name} | SSIM`;
  const seoDescription = `Learn about the ${program.name} program at Siva Sivani Institute of Management. Explore the curriculum, specializations, and career opportunities.`;
  const seoKeywords = `SSIM ${program.name}, ${program.name} program, ${program.name} curriculum, ${program.name} admissions`;
  const canonicalUrl = `https://www.ssim.ac.in/programs/${programId}`;

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <KeyInformation info={program.keyInfo} />;
      case "electives":
        return <CourseElectives electives={program.electives} programId={programId} />;
      case "specializations":
        return <Specializations specializations={program.specializations} />;
      case "managerialCompetency":
        return <ManagerialCompetency managerialCompetency={program.managerialCompetency} />;
      case "differentiators":
        return <Differentiators differentiators={program.differentiators} />;
      case "curriculum":
        return <Curriculum curriculum={program.curriculum} />;
      case "eligibility":
        return <EligibilityAdmission eligibility={program.eligibility} admission={program.admission} />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={canonicalUrl}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const ProgramsOverview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const pathname = location.pathname;

  const [activeProgram, setActiveProgram] = useState(
    () => programs.find((p) => p.link === pathname)?.id || programs[0].id
  );
  const [activeSection, setActiveSection] = useState(
    () => searchParams.get("section") || "about"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    const program = programs.find((p) => p.link === pathname);
    if (program && program.id !== activeProgram) {
      setActiveProgram(program.id);
    }
    const section = searchParams.get("section") || "about";
    if (section !== activeSection) {
      setActiveSection(section);
    }
  }, [pathname, searchParams, activeProgram, activeSection]);

  const handleProgramChange = (programId) => {
    const program = programs.find((p) => p.id === programId);
    if (program) {
      navigate(`${program.link}?section=about`);
    }
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("section", sectionId);
    setSearchParams(newParams);
  };

  const filteredSections = sections.filter((section) => {
    const program = programData[activeProgram];
    if (section.id === "electives" && !program.electives) {
      return false;
    }
    const matchesSearch = section.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isHidden = section.hidden?.includes(activeProgram);
    return matchesSearch && !isHidden;
  });

  const Overlay = isDesktop ? Dialog : Drawer;
  const OverlayContent = isDesktop ? DialogContent : DrawerContent;

  const SidebarContent = () => (
    <>
      {/* <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div> */}
      {/* <ScrollArea className="h-[calc(100vh-200px)] lg:h-auto"> */}
      <ul className="space-y-2">
        {filteredSections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                handleSectionChange(section.id);
                if (!isDesktop) setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                {section.name}
                {activeSection === section.id ? (
                  <ChevronDown className="ml-auto min-w-6" />
                ) : (
                  <ChevronRight className="ml-auto min-w-6" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {/* </ScrollArea> */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        {/* <Button
          onClick={() => {
            setShowComparison(!showComparison);
            if (!isDesktop) setSidebarOpen(false);
          }}
          className="w-full sm:flex-1 bg-gradient-to-r from-mainBlue via-[#2f65ca] to-mainBlue text-white hover:bg-mainBlue/80"
        >
          {showComparison ? "Hide Comparison" : "Compare Programs"}
        </Button> */}
        <Overlay>
          <OverlayContent className="">
            <ProgramStats programId={activeProgram} />
          </OverlayContent>
        </Overlay>
      </div>
    </>
  );

  return (
    <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-20">
      <h1 className="text-4xl font-bold mb-16 text-center text-primary">
        Graduate Programs
      </h1>
      <Tabs
        value={activeProgram}
        onValueChange={handleProgramChange}
        className="mb-8"
      >
        <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto">
          {programs.map((program) => (
            <TabsTrigger
              key={program.id}
              value={program.id}
              className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
            >
              {program.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex flex-col lg:flex-row gap-8">
        {isDesktop ? (
          <nav className="lg:w-1/4">
            <SidebarContent />
          </nav>
        ) : (
          <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden mb-4 w-full justify-between"
              >
                <span className="flex items-center">
                  <Menu className="mr-2 h-4 w-4" />
                  Menu
                </span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <SidebarContent />
              </div>
              <DrawerClose asChild>
                <Button className="mt-4">Close</Button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        )}
        <main className="lg:w-3/4 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showComparison ? (
              <motion.div
                key={`${activeProgram}-${activeSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramSection
                  programId={activeProgram}
                  activeSection={activeSection}
                />
              </motion.div>
            ) : (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramComparison programs={programs} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ProgramsOverview;
