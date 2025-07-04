import { useState } from "react";
import SEO from "@/components/Seo";
import Ramana from "../../assets/about/academic-advisory-board/Dr. Ramana Rao.webp";
import Ambuj from "../../assets/about/academic-advisory-board/dr-ambuj.jpeg";
import ArathySampathy from "../../assets/about/academic-advisory-board/Smt_Arathy_Sampathy.jpg";
import SaileshSampathy from "../../assets/about/academic-advisory-board/Dr_Sailesh_Sampathy.jpg";
import AbhiramaKrishna from "../../assets/about/academic-advisory-board/Prof_Abhiram_Krishna.jpg";
import AshokAgarwal from "../../assets/about/academic-advisory-board/Ashok_K_Agarwal.jpg";
import AsitMohapatra from "../../assets/about/academic-advisory-board/Dr_Asit-Mohapatra.jpg";
import Gopalakrishna from "../../assets/about/academic-advisory-board/Sri_M.-Gopalakrishna.jpg";
import GubbaPrashanth from "../../assets/about/academic-advisory-board/Gubba_Prashant.jpg";
import LakshmipathiItha from "../../assets/about/academic-advisory-board/Lakshmipathi_Itha.jpg";
import MamathaM from "../../assets/about/academic-advisory-board/M_Mamatha.jpg";
import GDMogli from "../../assets/about/academic-advisory-board/Prof-G-D-Mogli.jpg";
import MuraliR from "../../assets/about/academic-advisory-board/Murali_Retineni.jpg";
import PetluriSrinivas from "../../assets/about/academic-advisory-board/OIP.jpeg";
import RaghavendraRao from "../../assets/about/academic-advisory-board/Raghavendra_Rao.jpg";
import RamBhoopalP from "../../assets/about/academic-advisory-board/P_Rambhoopal.jpg";
import RamachandraRao from "../../assets/about/academic-advisory-board/Mr_Ramachandra_Rao.jpg";
import RaviShankarMeela from "../../assets/about/academic-advisory-board/Ravishankar_Meela.jpg";
import SatishNaidu from "../../assets/about/academic-advisory-board/Satish_Naidu.jpg";
import ShanthanReddy from "../../assets/about/academic-advisory-board/OIP.jpeg";
import SivaKumar from "../../assets/about/academic-advisory-board/SIVA_Kumar.jpg";
import SrikanthSurampudi from "../../assets/about/academic-advisory-board/Srikanth_Surampudi.jpg";
import VenkaiahV from "../../assets/about/academic-advisory-board/V_Venkaiah.jpg";
import VirmaniBR from "../../assets/about/academic-advisory-board/OIP.jpeg";
import ViswanadhamV from "../../assets/about/academic-advisory-board/V_Viswanadham.jpg";
import YerramRajuB from "../../assets/about/academic-advisory-board/Yerram_Naidu.jpg";
import BhaskaraMurthyP from "../../assets/about/academic-advisory-board/Bhaskar_murthy.jpg";
import ChariVG from "../../assets/about/academic-advisory-board/VG_CHARI.jpg";
import SudhakarA from "../../assets/about/academic-advisory-board/OIP.jpeg";

export default function AcademicAdvisoryBoard() {
  const teamMembers = [
    {
      name: "Smt. Arathy Sampathy",
      role: "President",
      bio: "President & Chief Executive, SSGI",
      image: ArathySampathy,
    },
    {
      name: "Dr. Sailesh Sampathy",
      role: "Vice President",
      bio: "Vice President & Dy. Chief Executive, SSGI",
      image: SaileshSampathy,
    },
    {
      name: "Prof. (Dr.) Ambuj Jagdish Gupta",
      role: "Director",
      bio: "Director, Siva Sivani Institute of Management",
      image: Ambuj,
    },
    {
      name: "Dr. S.V. Ramana Rao",
      role: "Member",
      bio: "Member, Siva Sivani Institute of Management",
      image: Ramana,
    },
    {
      name: "Prof. S. Abhirama Krishna",
      role: "Director General",
      bio: "Badruka Group of Institutions, Hyderabad.",
      image: AbhiramaKrishna,
    },
    {
      name: "Dr. Ashok K. Agarwal",
      role: "Director",
      bio: "Director, EWB India, Member, Governing Council, Badruka Education Society, Hyderabad.",
      image: AshokAgarwal,
    },
    {
      name: "Dr. Asit Mohapatra",
      role: "Professor of Practice – OB & HRM",
      bio: "Indian Institute of Management, Ranchi.",
      image: AsitMohapatra,
    },
    {
      name: "Sri. M. Gopalakrishna I.A.S. (Retd.)",
      role: "Former Chairman",
      bio: "REC, Hyderabad.",
      image: Gopalakrishna,
    },
    {
      name: "Sri. Gubba Prashanth",
      role: "Research & Technical Head",
      bio: "Gubba Cold Storage, Secunderabad.",
      image: GubbaPrashanth,
    },
    {
      name: "Sri. Lakshmipathi Itha",
      role: "Human Resource Director",
      bio: "GVK BIO, Hyderabad.",
      image: LakshmipathiItha,
    },
    {
      name: "Smt. Mamatha. M",
      role: "Senior Vice President",
      bio: "HSBC Bank, Hyderabad.",
      image: MamathaM,
    },
    {
      name: "Dr. G.D. Mogli",
      role: "CEO",
      bio: "Dr. Mogli Health Care Management Consultancy, Hyderabad.",
      image: GDMogli,
    },
    {
      name: "Sri. Murali. R",
      role: "Executive Director",
      bio: "Celkon Mobiles Pvt Ltd, Hyderabad.",
      image: MuraliR,
    },
    {
      name: "Sri. Petluri Srinivas",
      role: "Member",
      bio: "Warehousing Development and Regulatory Authority (WDRA), Delhi.",
      image: PetluriSrinivas,
    },
    {
      name: "Sri. Raghavendra Rao",
      role: "Director",
      bio: "Global Sales Operations (FS), Hyderabad.",
      image: RaghavendraRao,
    },
    {
      name: "Sri. Ram Bhoopal. P",
      role: "Co-Founder",
      bio: "M/s. Riverbridge Tech Venture Pvt. Ltd, Hyderabad.",
      image: RamBhoopalP,
    },
    {
      name: "Prof. K.S. Ramachandra Rao",
      role: "CEO",
      bio: "Visishta Consultancy, Secunderabad.",
      image: RamachandraRao,
    },
    {
      name: "Sri. Ravi Shankar Meela",
      role: "Executive Director",
      bio: "Sudhakar PVC Products Pvt. Ltd, Nalgonda District, Telangana.",
      image: RaviShankarMeela,
    },
    {
      name: "Sri. Satish Naidu",
      role: "Founder & Chief Visionary",
      bio: "Invensure Life Insurance Pvt. Ltd, Secunderabad.",
      image: SatishNaidu,
    },
    {
      name: "Sri. C. Shanthan Reddy",
      role: "Managing Partner",
      bio: "Arise Films, Hyderabad.",
      image: ShanthanReddy,
    },
    {
      name: "Dr. S. Siva Kumar",
      role: "Divisional Chief Executive",
      bio: "ITC Agro Business Division, Secunderabad.",
      image: SivaKumar,
    },
    {
      name: "Sri. Srikanth Surampudi",
      role: "General Manager – HR & Regional HR Head",
      bio: "Tata Consultancy Services Ltd, Hyderabad.",
      image: SrikanthSurampudi,
    },
    {
      name: "Prof. V. Venkaiah",
      role: "Director",
      bio: "Centre for Education Technology and Learning Sciences, A.P.",
      image: VenkaiahV,
    },
    {
      name: "Prof. B.R. Virmani",
      role: "Chairman",
      bio: "Centre for Organization Research & Development in Management (CORD-M), Hyderabad.",
      image: VirmaniBR,
    },
    {
      name: "Prof. V. Viswanadham",
      role: "Formerly Director (Academic)",
      bio: "SSIM, Secunderabad.",
      image: ViswanadhamV,
    },
    {
      name: "Prof. B. Yerram Raju",
      role: "Adviser",
      bio: "Telangana Industrial Health Clinic Ltd, Govt. of Telangana, Hyderabad.",
      image: YerramRajuB,
    },
    {
      name: "Sri. P. Bhaskara Murthy",
      role: "Independent Consultant",
      bio: "IQPRO Analytics.",
      image: BhaskaraMurthyP,
    },
    {
      name: "Dr. V.G. Chari",
      role: "Formerly Assistant Vice President",
      bio: "SSGI.",
      image: ChariVG,
    },
    {
      name: "Prof. A. Sudhakar",
      role: "Former Director – General",
      bio: "SSGI.",
      image: SudhakarA,
    },
  ];

  return (
    <>
      <SEO
        title="Academic Advisory Board"
        description="Meet the esteemed members of the Academic Advisory Board at Siva Sivani Institute of Management (SSIM). Our board comprises distinguished leaders from academia and industry."
        keywords="SSIM academic advisory board, advisory board, academic leadership, business school governance"
        canonicalUrl="https://www.ssim.ac.in/about/academic-advisory-board"
      />
      <div className="w-full px-5 sm:px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Academic Advisory Board
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              The Vice President & Dy. Chief Executive is pleased to re-constitute
              the Academic Advisory Board (AAB) to review, restructure and guide
              the conduct of the various academic courses of the Programmes on
              offer with the following as its members:
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 sm:p-6 bg-white rounded-lg"
              >
                <div className="max-w-[200px] flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full aspect-[74/85] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-3xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <hr className="w-[180px] sm:w-full mx-auto border-gray-200 border-[1.5px] my-4" />
                  <span className="text-blue-600 mb-4">{member.role}</span>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
