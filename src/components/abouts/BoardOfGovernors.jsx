import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "@/components/Seo";
import ArathySampathy from "../../assets/about/BoardOfGoverners/Smt_Arathy_Sampathy.jpg";
import SaileshSampathy from "../../assets/about/BoardOfGoverners/Dr_Sailesh_Sampathy.jpg";
import Ambuj from "../../assets/about/BoardOfGoverners/dr-ambuj (1).jpeg";
import Ramana from "../../assets/about/BoardOfGoverners/Dr. Ramana Rao.webp";
import Deepika from "../../assets/about/BoardOfGoverners/Deepika-mam_pp.jpg";
import Kalakar from "../../assets/about/BoardOfGoverners/Dr_Kalakar_PP.jpg";
import MasoodAhmed from "../../assets/about/BoardOfGoverners/Md_Masood_Ahmed.jpg";
import Chandra from "../../assets/about/BoardOfGoverners/SF Chandra.webp";
import DrArijit from "../../assets/about/BoardOfGoverners/DR Arijit.webp";
import Harish from "../../assets/about/BoardOfGoverners/Dr_Harish.jpg";
import Jayalakshmi from "../../assets/about/BoardOfGoverners/Dr.-V.Jayalakshmi_b.jpg";
import ThirumalReddy from "../../assets/about/BoardOfGoverners/THIRUMALREDDY.webp";
import VipulSingh from "../../assets/about/BoardOfGoverners/vipulsingh.jpg";

export default function BoardOfGovernors() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Smt. Arathy Sampathy",
      role: "Chairperson",
      description:
        "Leading SSIM's vision and strategic direction with dedication and expertise.",
      image: ArathySampathy,
    },
    {
      id: 2,
      name: "Dr. Sailesh Sampathy",
      role: "Vice Chairman",
      description: "Driving innovation and academic excellence at SSIM.",
      image: SaileshSampathy,
    },
    {
      id: 3,
      name: "Prof. (Dr.) Ambuj Jagdish Gupta",
      role: "Director",
      description: "Director, Siva Sivani Institute of Management",
      image: Ambuj,
    },
    {
      id: 4,
      name: "Dr. S.V. Ramana Rao",
      role: "Board Member",
      description:
        "Contributing valuable insights to SSIM's governance and development.",
      image: Ramana,
    },
    {
      id: 5,
      name: "Dr. Deepika",
      role: "Board Member",
      description:
        "Bringing expertise in academic leadership and management education.",
      image: Deepika,
    },
    {
      id: 6,
      name: "Dr. Kalakar",
      role: "Board Member",
      description: "Providing strategic guidance for institutional growth.",
      image: Kalakar,
    },
    {
      id: 7,
      name: "Md. Masood Ahmed",
      role: "Board Member",
      description: "Supporting SSIM's mission with industry expertise.",
      image: MasoodAhmed,
    },
    {
      id: 8,
      name: "Dr. S.F. Chandrasekhar",
      role: "Board Member",
      description: "Guiding academic and administrative excellence.",
      image: Chandra,
    },
    {
      id: 9,
      name: "Dr. Arijit Santikary",
      role: "Board Member",
      description: "Contributing to research and academic development.",
      image: DrArijit,
    },
    {
      id: 10,
      name: "Dr. Harish",
      role: "Board Member",
      description: "Fostering innovation in management education.",
      image: Harish,
    },
    {
      id: 11,
      name: "Dr. V. Jayalakshmi",
      role: "Board Member",
      description: "Promoting excellence in teaching and research.",
      image: Jayalakshmi,
    },
    {
      id: 12,
      name: "T. Thirumal Reddy",
      role: "Board Member",
      description: "Supporting institutional development and growth.",
      image: ThirumalReddy,
    },
    {
      id: 13,
      name: "Dr. Vipul Singh",
      role: "Advisory Member",
      description: "Contributing to SSIM's continued success and development.",
      image: VipulSingh,
    },
  ];

  return (
    <>
      <SEO
        title="Board of Governors"
        description="Meet the Board of Governors at Siva Sivani Institute of Management (SSIM). Our board provides strategic direction and governance to ensure academic and operational excellence."
        keywords="SSIM board of governors, board of directors, academic governance, business school leadership"
        canonicalUrl="https://www.ssim.ac.in/about/board-of-governors"
      />
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-mainBlue mb-4 tracking-tight">
            Board Of Governers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 sm:gap-8 gap-4 max-w-7xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center sm:flex-row gap-8 group p-4 rounded-lg bg-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <motion.img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col text-center sm:text-left justify-center">
                <motion.div
                  initial={false}
                  animate={{ y: hoveredMember === member.id ? -2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
