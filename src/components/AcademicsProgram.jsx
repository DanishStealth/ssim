import { useState, useEffect } from "react";
import { Users, GraduationCap, Landmark, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WordPullUp from "./ui/word-pull-up";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";

export default function AcademicPrograms() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHovered && !videoOpen) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveVideo((prev) => (prev + 1) % features.length);
          setIsAnimating(false);
        }, 500);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isHovered, videoOpen]);

  const features = [
    {
      title: "PGDM",
      subtitle: "Triple Specialisation",
      icon: <GraduationCap className="w-6 h-6" />,
      description: [
        <span key="1">
          SSIM's two-year Post-Graduation Diploma in Management (PGDM) program
          is <strong className="text-red-600">NBA accredited</strong> and
          uniquely designed to push our students to go beyond their boundaries
          to reach their aspirational careers.
        </span>,
        <span key="2">
          The two-year PGDM program will prepare our students with various{" "}
          <strong className="text-red-600">
            cross-functional skills and life skills
          </strong>
          : Communication skills, Decision making, Leadership Skills,
          Problem-solving, Teamwork, Experiential Learning and several
          industry-relevant skills to face this VUCA world.
        </span>,
        <span key="3">
          These skills will help our students to achieve their career
          aspirations and learn to exhibit their best selves.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=aurjFtjWkIc",
      link: "/programs/pgdm-triple-specialisation",
    },
    {
      title: "PGDM - BIFS",
      subtitle: "Banking, Insurance & Financial Services",
      icon: <Landmark className="w-6 h-6" />,
      description: [
        <span key="1">
          The Post-Graduation Diploma in Management – Banking, Insurance, and
          Financial Services (PGDM-BIFS) at Siva Sivani Institute of Management
          (SSIM) is designed to provide management graduates with{" "}
          <strong className="text-red-600">
            in-depth knowledge of the Banking, Financial Services, and Insurance
            (BFSI) sectors
          </strong>
          . These industries play a vital role in driving economic growth,
          offering risk coverage, and ensuring financial security.
        </span>,
        <span key="2">
          The BFSI sector, which is rapidly evolving with advancements in{" "}
          <strong className="text-red-600">
            AI, Blockchain, and robotic process automation
          </strong>
          , presents significant career opportunities. However, there is a
          shortage of qualified professionals to meet the sector's growing
          demand.
        </span>,
        <span key="3">
          To address this, SSIM offers an{" "}
          <strong className="text-red-600">
            integrated curriculum with elective options
          </strong>{" "}
          that allow students to specialize in areas like investment banking,
          risk management, FinTech, and wealth management. The program combines
          academic theory with practical learning, ensuring that students are
          well-equipped for successful careers in BFSI. The electives provide
          flexibility, enhancing employability and preparing students for
          specialized roles in the industry.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=beOxW30taGk",
      link: "/programs/pgdm-bifs",
    },
    {
      title: "PGDM - BA",
      subtitle: "Business Analytics",
      icon: <LineChart className="w-6 h-6" />,
      description: [
        <span key="1">
          Embark on a transformative journey with SSIMs Post Graduate Diploma in
          Management (PGDM – BA) in Business Analytics, meticulously crafted to
          mold{" "}
          <strong className="text-red-600">
            future-ready business leaders adept in data-driven decision-making
          </strong>
          . This program offers a harmonious blend of comprehensive business
          education and cutting-edge analytical skills, ensuring students stand
          out in today's competitive landscape.
        </span>,
        <span key="2">
          Our{" "}
          <strong className="text-red-600">industry-aligned curriculum</strong>,
          designed in collaboration with seasoned professionals, encompasses
          core subjects such as{" "}
          <strong className="text-red-600">
            Data Visualization, Machine Learning, Predictive Modelling, and Big
            Data Analytics
          </strong>
          . Gain proficiency in leading analytical tools, including R
          Programming, Python, SQL, and Tableau, through immersive, hands-on
          learning experiences.
        </span>,
        <span key="3">
          Beyond the classroom, engage in{" "}
          <strong className="text-red-600">
            real-world applications and internships
          </strong>
          , providing invaluable exposure to business challenges. Join us to
          unlock your potential and become a catalyst for strategic innovation
          in the dynamic realm of business analytics.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=-7EavtYSQrA",
      link: "/programs/pgdm-ba",
    },
    {
      title: "FPM / EFPM",
      subtitle: "Fellow Program In Management",
      icon: <Users className="w-6 h-6" />,
      description: [
        <span key="1">
          SSIM's two-year full-time PGDM program in Business Analytics (BA) is a{" "}
          <strong className="text-red-600">brand new programme</strong> added to
          meet the industry requirement.
        </span>,
        <span key="2">
          PGDM – BA at SSIM exemplifies the foresight in{" "}
          <strong className="text-red-600">
            uniting Business management, Analytical Mathematics, Statistics and
            Computer science
          </strong>{" "}
          under one course.
        </span>,
        <span key="3">
          SSIM is the{" "}
          <strong className="text-red-600">
            first institute, among the Telugu-speaking states
          </strong>
          , to offer a PGDM program exclusively on Business Analytics.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=y-GwG39jVZc",
      link: "/programs/fpm-efpm",
    },
  ];

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKnowMoreClick = (link) => {
    scrollToTop();
    // Small delay to allow scroll to start before navigation
    setTimeout(() => {
      navigate(link);
    }, 100);
  };

  return (
    <div className="container mx-auto pl-4 pr-4 sm:pr-0 py-0 sm:pt-16 pb-20">
      <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-20 items-start">
        <div className="space-y-10">
          <div className="ml-auto lg:max-w-[550px] space-y-8">
            <WordPullUp
              words="Academic Programs"
              className="text-4xl md:text-5xl font-bold tracking-tight text-red-600 text-left mb-0 md:mb-6"
            />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We train our students to master both the technical & management
              aspects of the business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-6 cursor-pointer group transition-all duration-300`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveVideo(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`w-full min-h-[120px] space-y-[6px] flex flex-col items-center justify-center shadow-2xl text-white flex-shrink-0 transition-colors duration-300 ${
                      activeVideo === index ? "bg-red-600" : "bg-mainBlue"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xs">{feature.title}</h3>
                    <p className="text-[10px] text-white text-center">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`relative block lg:hidden cursor-pointer aspect-square bg-gray-900 overflow-hidden transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              onClick={() => setVideoOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="w-full h-full object-cover"
                src={`https://img.youtube.com/vi/${getVideoId(
                  features[activeVideo].video
                )}/maxresdefault.jpg`}
              />
              <div
                className="absolute cursor-pointer inset-0 w-full h-full flex lg:hidden items-center justify-center"
                onClick={() => setVideoOpen(true)}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
                  <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
                </div>
              </div>
            </div>
            <div
              className={`mt-4 text-gray-600 text-base leading-relaxed space-y-4 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {features[activeVideo].description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              to={features[activeVideo].link}
              className="group gap-0 px-0 py-0 h-0 rounded-none mt-8 inline-flex"
              onClick={scrollToTop}
            >
              <div className="bg-red-600 text-white mt-8 h-11 flex items-center px-4 hover:bg-red-700">
                Know More
              </div>
              <div className="bg-mainBlue text-white mt-8 h-11 flex items-center px-4">
                <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <a href="https://apply.ssim.ac.in" target="_blank">
              <Button
                className="group gap-0 px-0 py-0 h-0 ml-5 sm:ml-8 rounded-none mt-8"
                size="lg"
              >
                <div className="bg-transparent text-black mt-8 h-11 flex items-center px-4 border border-black border-r-0">
                  Apply Now
                </div>
                <div className="bg-red-600 mt-8 h-11 flex items-center px-4">
                  <ArrowRight className="w-4 bg-red-600 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </a>
          </div>
        </div>

        <div
          className={`relative hidden lg:block cursor-pointer aspect-square bg-gray-900 overflow-hidden transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setVideoOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-full h-full object-cover"
            src={`https://img.youtube.com/vi/${getVideoId(
              features[activeVideo].video
            )}/maxresdefault.jpg`}
          />
          <div
            className="absolute cursor-pointer inset-0 w-full h-full flex sm:hidden items-center justify-center"
            onClick={() => setVideoOpen(true)}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
              <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
              <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
            </div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer top-1/2 left-[53%] transform -translate-x-[53%] -translate-y-1/2 w-fit h-fit hidden lg:flex items-center justify-center"
          onClick={() => setVideoOpen(true)}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
            </div>
            <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
            <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-0">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getVideoId(
                features[activeVideo].video
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
