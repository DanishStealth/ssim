import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/Seo";
import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  ExternalLinkIcon,
  SchoolIcon,
  GraduationCapIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Ramana from "../../assets/faculty&research/faculty/Dr. Ramana Rao.webp";
import ANNA from "../../assets/faculty&research/faculty/ANNAPURNA.webp";
import Balani from "../../assets/faculty&research/faculty/balanji.webp";
import BinalK from "../../assets/faculty&research/faculty/Bipul Kumar.webp";
import Chaitha from "../../assets/faculty&research/faculty/chaithanya.webp";
import Damandeep from "../../assets/faculty&research/faculty/daman.webp";
import DINES from "../../assets/faculty&research/faculty/DINESH.webp";
import DrArij from "../../assets/faculty&research/faculty/DR Arijit.webp";
import DrHari from "../../assets/faculty&research/faculty/Dr Harish.webp";
import DrJaya from "../../assets/faculty&research/faculty/dr jayalakshmi.webp";
import DrPAV from "../../assets/faculty&research/faculty/DR PAVAN.webp";
import DrRaj from "../../assets/faculty&research/faculty/Dr Rajyalakshmi.webp";
import Gowri from "../../assets/faculty&research/faculty/Gowri Kusuma.webp";
import Gracena from "../../assets/faculty&research/faculty/gracemani.webp";
import JKame from "../../assets/faculty&research/faculty/J Kameswari.webp";
import KiranK from "../../assets/faculty&research/faculty/Kiran Kumar.webp";
import Kommu from "../../assets/faculty&research/faculty/kiranmayi.webp";
import LOHIT from "../../assets/faculty&research/faculty/LOHIT.webp";
import MrMa from "../../assets/faculty&research/faculty/Mr. Madhava Murthy.webp";
import Murali from "../../assets/faculty&research/faculty/Murali Krishna.webp";
import NRKS from "../../assets/faculty&research/faculty/NRKS Chakravarthy.webp";
import PARDH from "../../assets/faculty&research/faculty/PARDHASARADHI.webp";
import Pushpa from "../../assets/faculty&research/faculty/PUSHPA.webp";
import rahul from "../../assets/faculty&research/faculty/rahul.webp";
import chandra from "../../assets/faculty&research/faculty/SF Chandra.webp";
import Shambhavi from "../../assets/faculty&research/faculty/Shambhavi.webp";
import Shubhra from "../../assets/faculty&research/faculty/Shubhra Johri.webp";
import Smarpita from "../../assets/faculty&research/faculty/Smarpitaroy.webp";
import SREEHARI from "../../assets/faculty&research/faculty/SREEHARI.webp";
import subba from "../../assets/faculty&research/faculty/subba.webp";
import Subhash from "../../assets/faculty&research/faculty/Subhash Tej.webp";
import Thirumal from "../../assets/faculty&research/faculty/THIRUMALREDDY.webp";
import Vallinayagam from "../../assets/faculty&research/faculty/Vallinayagam.webp";
import Ambuj from "../../assets/about/dr-ambuj.jpeg";

const teamMembers = [
  {
    name: "Dr. K.S. Harish",
    area: "Data Science",
    qualification: "M.Sc., Ph.D.",
    experience: 28,
    image: DrHari,
    description:
      "Pioneering researcher in machine learning and artificial intelligence. Leads innovative projects in predictive analytics and data mining.",
  },
  {
    name: "Mr. NRKS Chakravarthy",
    area: "Data Science",
    qualification: "MBA",
    experience: 31,
    image: NRKS,
    description:
      "Specializes in strategic marketing and market research. Brings decades of industry experience to academic teaching.",
  },
  {
    name: "Mr. Sreehari Karanam",
    area: "Data Science",
    qualification: "M.Sc.",
    experience: 31,
    image: SREEHARI,
    description:
      "Experienced in big data analytics and programming. Focuses on developing practical solutions for complex computational problems.",
  },
  {
    name: "Mr. Subash Tej Tumu",
    area: "Data Science",
    qualification: "MCA",
    experience: 18,
    image: Subhash,
    description:
      "Expert in data analytics and business intelligence. Develops innovative solutions for data-driven decision making.",
  },
  {
    name: "Mrs. Kiranmayi Patel",
    area: "Data Science",
    qualification: "MBA",
    experience: 8,
    image: Kommu,
    description:
      "Specializes in statistical analysis and data visualization. Focuses on making complex data insights accessible and actionable.",
  },
  {
    name: "Dr. K. Subba Rama Sarma",
    area: "Data Science",
    qualification: "MBA, Ph.D.",
    experience: 20,
    image: subba,
    description:
      "Expert in advanced analytics and machine learning. Conducts research on artificial intelligence applications in business.",
  },
  {
    name: "Mr. Gada Murali Krishna Patnaik",
    area: "Data Science",
    qualification: "M.Sc (Maths)",
    experience: 20,
    image: Murali,
    description:
      "Expert in quantitative aptitude and logical reasoning. Helps students develop critical thinking and problem-solving skills.",
  },
  {
    name: "Dr. K. Kiran Kumar",
    area: "Data Science",
    qualification: "B.Tech, MBA, Ph.D.",
    experience: 14,
    image: KiranK,
    description:
      "Specializes in digital marketing and consumer behavior. Researches emerging trends in social media marketing strategies.",
  },
  {
    name: "Dr. Jada Kameswari",
    area: "Data Science",
    qualification: "MBA, Ph.D.",
    experience: 18,
    image: JKame,
    description:
      "Expert in statistical analysis and data modeling. Conducts research on predictive analytics and machine learning.",
  },
  {
    name: "Dr. Annapurna Valluripally",
    area: "Finance",
    qualification: "MBA, Ph.D.",
    experience: 27,
    image: ANNA,
    description:
      "Expert in financial risk management and banking. Conducts research on emerging trends in global financial markets.",
  },
  {
    name: "Dr. Jayalakshmi Valluri",
    area: "Finance",
    qualification: "M.Com., Ph.D.",
    experience: 27,
    image: DrJaya,
    description:
      "Specializes in investment analysis and portfolio management. Passionate about teaching financial planning and wealth management.",
  },
  {
    name: "Dr. N.C. Rajyalakshmi",
    area: "Finance",
    qualification: "Ph.D.",
    experience: 28,
    image: DrRaj,
    description:
      "Specializes in corporate finance and financial management. Conducts research on emerging financial technologies and markets.",
  },
  {
    name: "Mr. Pardha Saradhi Madasu",
    area: "Finance",
    qualification: "M.Com.",
    experience: 27,
    image: PARDH,
    description:
      "Specializes in financial accounting and corporate taxation. Brings practical industry experience to academic concepts.",
  },
  {
    name: "Mr. T. Madhava Murthy",
    area: "Finance",
    qualification: "MBA (Finance)",
    experience: 20,
    image: MrMa,
    description:
      "Expert in financial planning and investment analysis. Focuses on practical applications of financial theories.",
  },
  {
    name: "Mr. Lohithkumar B.",
    area: "Finance",
    qualification: "MBA, Ph.D.",
    experience: 15,
    image: LOHIT,
    description:
      "Expert in corporate finance and investment banking. Brings practical industry experience to theoretical concepts.",
  },
  {
    name: "Dr. Balanji Reddy Mora",
    area: "Finance",
    qualification: "MBA, Ph.D.",
    experience: 12,
    image: Balani,
    description:
      "Expert in financial modeling and risk assessment. Conducts research on emerging trends in corporate finance.",
  },
  {
    name: "Dr. Shubhra Johri",
    area: "Finance",
    qualification: "Ph.D.",
    experience: 17,
    image: Shubhra,
    description:
      "Expert in international finance and financial markets. Researches global economic trends and monetary policies.",
  },
  {
    name: "Dr. Ambuj Gupta",
    area: "HR & Strategy",
    qualification: "MBA, Ph.D.",
    experience: 32,
    image: Ambuj,
    description:
      "Expert in financial markets with extensive research in corporate finance. Passionate about teaching and mentoring students in investment strategies.",
  },
  {
    name: "Dr. SF. Chandra Sekhar",
    area: "HR & Strategy",
    qualification: "Ph.D.",
    experience: 32,
    image: chandra,
    description:
      "Specializes in organizational behavior and strategic management. Focuses on employee development and creating effective workplace cultures.",
  },
  {
    name: "Dr. Pavan Patel",
    area: "HR & Strategy",
    qualification: "MIRPM, Ph.D.",
    experience: 28,
    image: DrPAV,
    description:
      "Expert in human resource development and strategic planning. Passionate about training programs and organizational development.",
  },
  {
    name: "Mr. Rahul Jain",
    area: "HR & Strategy",
    qualification: "PGDBA",
    experience: 17,
    image: rahul,
    description:
      "Specializes in talent management and organizational development. Focuses on employee engagement and leadership development programs.",
  },
  {
    name: "Ms. Damandeep Johar",
    area: "HR & Strategy",
    qualification: "PGDM",
    experience: 13,
    image: Damandeep,
    description:
      "Expert in change management and organizational behavior. Researches workplace dynamics and employee motivation strategies.",
  },
  {
    name: "Dr. A. Dinesh",
    area: "HR & Strategy",
    qualification: "MBA, Ph.D",
    experience: 6,
    image: DINES,
    description:
      "Specializes in business communication and personal development. Focuses on improving student presentation and leadership skills.",
  },
  {
    name: "Dr. Pushpa Machani",
    area: "HR & Strategy",
    qualification: "MBA, Ph.D.",
    experience: 14,
    image: Pushpa,
    description:
      "Expert in startup ecosystems and innovation management. Mentors students in developing entrepreneurial mindsets and business plans.",
  },
  {
    name: "Mrs. Samarpita Roy",
    area: "HR & Strategy",
    qualification: "MBA",
    experience: 12,
    image: Smarpita,
    description:
      "Specializes in professional communication and soft skills development. Focuses on enhancing student employability and confidence.",
  },
  {
    name: "Dr. Pinjarla Gowri Kusuma",
    area: "HR & Strategy",
    qualification: "Ph.D.",
    experience: 15,
    image: Gowri,
    description:
      "Specializes in strategic human resource management. Focuses on organizational development and employee performance management.",
  },
  {
    name: "Dr. Arijit Santikary",
    area: "Marketing",
    qualification: "MBA, Ph.D",
    experience: 16,
    image: DrArij,
    description:
      "Expert in consumer behavior and digital marketing strategies. Conducts research on emerging trends in social media marketing.",
  },
  {
    name: "Dr. T. Thirumala Reddy",
    area: "Marketing",
    qualification: "PGDBA, Ph.D.",
    experience: 19,
    image: Thirumal,
    description:
      "Specializes in brand management and marketing analytics. Focuses on developing innovative marketing strategies for digital platforms.",
  },
  {
    name: "Dr. K. Grace Mani",
    area: "Marketing",
    qualification: "MBA, Ph.D.",
    experience: 24,
    image: Gracena,
    description:
      "Specializes in marketing research and consumer psychology. Conducts studies on customer experience and service marketing.",
  },
  {
    name: "Mr. M. Chaithanya",
    area: "Marketing",
    qualification: "PGDBA",
    experience: 18,
    image: Chaitha,
    description:
      "Specializes in digital marketing and market research. Brings practical industry experience to marketing strategy development.",
  },
  {
    name: "Dr. Shambhavi Tamrakar",
    area: "Marketing",
    qualification: "Ph.D.",
    experience: 11,
    image: Shambhavi,
    description:
      "Expert in marketing analytics and consumer research. Conducts studies on digital consumer behavior patterns.",
  },
  {
    name: "Dr. Bipul Kumar",
    area: "Marketing",
    qualification: "MBA, Ph.D.",
    experience: 8,
    image: BinalK,
    description:
      "Specializes in marketing strategy and brand management. Brings fresh perspective to traditional marketing concepts.",
  },
];

export default function Areas() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      <SEO
        title="Faculty Areas of Expertise"
        description="Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more."
        keywords="SSIM faculty, faculty expertise, business school professors, academic areas"
        canonicalUrl="https://www.ssim.ac.in/faculty/areas"
      />
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            {/* <Badge variant="outline" className="border-blue-500 text-blue-600">
              Our Amazing Team
            </Badge> */}
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Faculty Areas of Expertise
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet our distinguished faculty members and their specialized
              domains of knowledge and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, index) => (
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
                        <div
                          className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm text-gray-600 bg-white/90 
                         whitespace-nowrap px-3 py-1 rounded-full border border-gray-200"
                        >
                          <SchoolIcon className="w-4 h-4" />
                          <span>{member.qualification}</span>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium inline-flex items-center gap-2">
                            {member.area}
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <Badge
                              className="flex items-center gap-1 text-sm text-gray-600 hover:bg-blue-100 bg-white/90 
                             whitespace-nowrap px-3 pb-1 rounded-full border border-gray-200"
                            >
                              <GraduationCapIcon className="w-4 h-4 mr-2" />
                              <span>{member.experience} years</span>
                            </Badge>
                          </p>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
