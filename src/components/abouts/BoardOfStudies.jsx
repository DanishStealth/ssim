import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "@/components/Seo";
import SaileshSampathy from "../../assets/about/BoardOfStudies/Dr_Sailesh_Sampathy.jpg";
import Ambuj from "../../assets/about/BoardOfStudies/dr-ambuj (1).jpeg";
import Kalakar from "../../assets/about/BoardOfStudies/Dr_Kalakar_PP-1.jpg";
import Ramana from "../../assets/about/BoardOfStudies/Dr. Ramana Rao.webp";
import RKMishra from "../../assets/about/BoardOfStudies/R_K_Mishra.jpg";
import JaganMohanReddy from "../../assets/about/BoardOfStudies/Jagan_Mohan_Reddy.jpg";
import ChoudharyPrasad from "../../assets/about/BoardOfStudies/Dr_Choudhary_Prasad.jpg";
import KumarChunduri from "../../assets/about/BoardOfStudies/Dr_Kumar-Chunduri.jpg";
import YLakshmanKumar from "../../assets/about/BoardOfStudies/Prof_Y_Lakshman-Kumar.jpg";
import KishoreNK from "../../assets/about/BoardOfStudies/Dr_Kishore-NK.jpg";
import RaviTanniru from "../../assets/about/BoardOfStudies/Sri_Ravi_Tanniru.jpg";
import ASudhakar from "../../assets/about/BoardOfStudies/Dr_A_Sudhakar-1.jpg";
import AnandSUpadhyaya from "../../assets/about/BoardOfStudies/1.-Dr.-Anand-S-Upadhyaya.jpg";
import DurgaPrasadM from "../../assets/about/BoardOfStudies/2.-Dr.-Durga-Prasad-M.jpg";
import SAnandReddy from "../../assets/about/BoardOfStudies/4.-Dr.-S.-Anand-Reddy.jpg";
import MahanandaChalise from "../../assets/about/BoardOfStudies/5.-Prof.-Mahananda-Chalise.jpg";

export default function BoardOfStudies() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sailesh Sampathy",
      role: "Chairman",
      description:
        "Leading SSIM's Board of Studies with strategic vision and academic excellence.",
      image: SaileshSampathy,
    },
    {
      id: 2,
      name: "Prof. (Dr.) Ambuj Jagdish Gupta",
      role: "Director",
      description: "Director, Siva Sivani Institute of Management",
      image: Ambuj,
    },
    {
      id: 3,
      name: "Dr. Kalakar",
      role: "Member",
      description:
        "Contributing expertise in academic planning and curriculum development.",
      image: Kalakar,
    },
    {
      id: 4,
      name: "Dr. S.V. Ramana Rao",
      role: "Member",
      description:
        "Providing valuable insights for academic growth and innovation.",
      image: Ramana,
    },
    {
      id: 5,
      name: "Dr. R.K. Mishra",
      role: "Member",
      description: "Guiding curriculum enhancement and academic standards.",
      image: RKMishra,
    },
    {
      id: 6,
      name: "Dr. Jagan Mohan Reddy",
      role: "Member",
      description: "Supporting academic excellence and program development.",
      image: JaganMohanReddy,
    },
    {
      id: 7,
      name: "Dr. Choudhary Prasad",
      role: "Member",
      description: "Contributing to academic policy and quality assurance.",
      image: ChoudharyPrasad,
    },
    {
      id: 8,
      name: "Dr. Kumar Chunduri",
      role: "Member",
      description: "Advancing research initiatives and academic partnerships.",
      image: KumarChunduri,
    },
    {
      id: 9,
      name: "Prof. Y. Lakshman Kumar",
      role: "Member",
      description: "Fostering innovation in teaching methodologies.",
      image: YLakshmanKumar,
    },
    {
      id: 10,
      name: "Dr. Kishore NK",
      role: "Member",
      description: "Enhancing academic programs and student outcomes.",
      image: KishoreNK,
    },
    {
      id: 11,
      name: "Sri Ravi Tanniru",
      role: "Member",
      description: "Supporting industry-academia collaboration.",
      image: RaviTanniru,
    },
    {
      id: 12,
      name: "Dr. A. Sudhakar",
      role: "Member",
      description: "Driving academic excellence and innovation.",
      image: ASudhakar,
    },
    {
      id: 13,
      name: "Dr. Anand S. Upadhyaya",
      role: "Member",
      description:
        "Contributing to curriculum development and academic planning.",
      image: AnandSUpadhyaya,
    },
    {
      id: 14,
      name: "Dr. Durga Prasad M",
      role: "Member",
      description: "Advancing research and academic standards.",
      image: DurgaPrasadM,
    },
    {
      id: 15,
      name: "Dr. S. Anand Reddy",
      role: "Member",
      description: "Supporting program development and quality assurance.",
      image: SAnandReddy,
    },
    {
      id: 16,
      name: "Prof. Mahananda Chalise",
      role: "Member",
      description: "Contributing to academic excellence and innovation.",
      image: MahanandaChalise,
    },
  ];

  return (
    <>
      <SEO
        title="Board of Studies"
        description="Meet the Board of Studies at Siva Sivani Institute of Management (SSIM). Our board ensures the curriculum is relevant, rigorous, and industry-aligned."
        keywords="SSIM board of studies, academic curriculum, course development, business school academics"
        canonicalUrl="https://www.ssim.ac.in/about/board-of-studies"
      />
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-mainBlue mb-4 tracking-tight">
            Board Of Studies
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
