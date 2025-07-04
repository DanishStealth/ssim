import { Eye, MapPin, Target } from "lucide-react";
import vm1 from "@/assets/about/vm1.webp";
import vm2 from "@/assets/about/vm2.webp";
import vm3 from "@/assets/about/vm3.webp";
import vm4 from "@/assets/about/vm4.webp";
import SEO from "@/components/Seo";

const missionItems = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To revolutionize the way people connect and collaborate, creating meaningful experiences that transcend boundaries.",
  },
  {
    icon: MapPin,
    title: "Mission",
    description:
      "Empowering individuals and organizations through innovative solutions that drive positive change and sustainable growth.",
  },
  {
    icon: Target,
    title: "Goals",
    description:
      "To achieve measurable impact in our community while maintaining the highest standards of excellence and integrity.",
  },
];

const images = [
  {
    url: vm1,
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
  },
  {
    url: vm2,
    position: "top-1/2 left-0 -translate-y-1/2 -translate-x-4",
  },
  {
    url: vm3,
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
  },
  {
    url: vm4,
    position: "top-1/2 right-0 -translate-y-1/2 translate-x-4",
  },
];

export function VisionMission() {
  return (
    <>
      <SEO
        title="Vision & Mission"
        description="Learn about the vision, mission, and goals of Siva Sivani Institute of Management (SSIM). Discover our commitment to shaping future business leaders."
        keywords="SSIM vision, SSIM mission, business school goals, management institute values"
        canonicalUrl="https://www.ssim.ac.in/about/vision-mission"
      />
      <section className="py-14 md:py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Right Section */}
            <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[800px] mx-auto">
                {images.map(({ url, position }) => (
                  <div
                    key={url}
                    className={`absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[360px] lg:h-[360px] bg-cover bg-center transform transition-transform hover:scale-105 ${position}`}
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      backgroundImage: `url(${url})`,
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Left Section */}
            <div className="max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                <div className="h-1 w-12 bg-teal-500" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our Vision & Mission
                </h2>
              </div>
              <div className="space-y-8 md:space-y-10">
                <p className="text-zinc-600 text-sm sm:text-base">
                  S.P Sampathy's Siva Sivani Institute of Management is promoted
                  by the Siva Sivani Group of Educational Institutions. The group
                  has been running the prestigious and internationally renowned
                  Siva Sivani Public Schools for more than six decades.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base">
                  The Post Graduate Diploma in Management Programs of Siva Sivani
                  Institute of Management is approved by the All India Council for
                  Technical Education (AICTE), Ministry of Human Resource
                  Development, Govt. of India, New Delhi, since its commencement.
                  SSIM started functioning as an autonomous institute in 1992.
                  SSIM is situated in Secunderabad, about 6 kilometres from
                  Bowenpally along National Highway No. 7, away from the bustle of
                  the city.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base">
                  The institute is roomy and peaceful, providing the perfect
                  setting for delivering value-based management education. Since
                  its foundation, SSIM has a long history of sustained academic
                  success and holistic development of our students. The founders
                  started the institute with the vision of creating a premier
                  management institute which significantly contributes to the
                  corporate world and society.
                </p>
                {missionItems.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-teal-50 text-teal-500 rounded-lg transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-2">{title}</h4>
                      <p className="text-zinc-600 text-sm sm:text-base">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionMission;
