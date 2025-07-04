import PropTypes from "prop-types";
import SEO from "@/components/Seo";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  CheckCheckIcon,
  Phone,
  Mail,
  Building,
  ExternalLink,
} from "lucide-react";
import longtermPartnership from "../../assets/corporate-connect/longterm-partnership.png";
import experience from "../../assets/corporate-connect/experience.png";
import bridging from "../../assets/corporate-connect/bridging.png";
import placementImg from "../../assets/corporate-connect/placement.jpg";
import arijitImg from "../../assets/corporate-connect/arijit.png";
import ramaraoImg from "../../assets/corporate-connect/ramarao.png";
import rahulImg from "../../assets/corporate-connect/rahul.png";
import sushmaImg from "../../assets/corporate-connect/sushma.png";

const features = [
  {
    desc: "SSIM placement team is agile, committed and enduring in building long-term partnerships.",
    image: longtermPartnership,
  },
  {
    desc: "The placement team has a collective experience of 25 years in Client Services.",
    image: experience,
  },
  {
    desc: "Works towards bridging the talent gap by coordinating industry-institute collaborations.",
    image: bridging,
  },
];

const FeaturedItem = ({ feature, index, image }) => {
  return (
    <div
      className={`bg-gray-100 shadow-md dark:bg-slate-700 flex items-center rounded-xl p-2 ${
        index !== features.length - 1 ? "mb-4" : ""
      }`}
    >
      <div className="flex justify-center items-center text-lg min-w-16 h-16 bg-white text-white rounded-xl mr-3">
        <img src={image} alt="" className="w-12 h-12" />
      </div>
      <h4 className="text-[17px]">{feature.desc}</h4>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function PlacementTeams() {
  return (
    <>
      <SEO
        title="Placement Team"
        description="Meet the dedicated placement team at Siva Sivani Institute of Management (SSIM). Our team works tirelessly to connect students with top companies and secure excellent career opportunities."
        keywords="SSIM placement team, corporate relations, career services, placement officers"
        canonicalUrl="https://www.ssim.ac.in/placement/team"
      />
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="col-span-2 md:col-span-1 md:order-2">
              <div className="relative mb-12">
                <img
                  src={placementImg}
                  alt=""
                  className="rounded-3xl w-full max-h-[490px] object-cover mx-auto"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 mt-12 md:mt-0 lg:mr-12">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl text-mainBlue mb-12">
                We focus on engaging industry to provide illuminating learning
                experiences and fulfilling career opportunities for our
                graduates.
              </h1>
              {features.map((feature, i) => (
                <FeaturedItem
                  feature={feature}
                  key={i}
                  index={i}
                  image={feature.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <TeamContactSection />
    </>
  );
}

const ContactItem = ({ icon, value, href, label }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 rounded-lg p-2 transition-all hover:bg-blue-50"
      aria-label={label}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100/50">
        {icon}
      </div>
      <span className="text-sm text-gray-600 transition-colors group-hover:text-blue-600">
        {value}
      </span>
    </a>
  );
};

const TeamMember = ({
  name,
  title,
  phone,
  primaryEmail,
  secondaryEmail,
  tertiaryEmail,
  imageSrc,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="group overflow-hidden border-0 bg-gray-50 shadow-md transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-4">
            <Avatar className="h-36 w-36 border-4 border-blue-100 transition-transform duration-300 group-hover:scale-105">
              <AvatarImage className="scale-125" src={imageSrc} alt={name} />
              <AvatarFallback className="bg-blue-50 text-lg font-bold text-blue-600">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <h3 className="mb-2 text-center text-xl font-bold text-gray-900">
            {name}
          </h3>

          <div className="px-4 pt-1.5">
            <span
              dangerouslySetInnerHTML={{ __html: title }}
              className="block text-center text-base font-semibold text-blue-600"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <ContactItem
            icon={<Phone className="h-4 w-4 text-blue-600" />}
            value={phone}
            href={`tel:${phone}`}
            label={`Call ${name}`}
          />

          <ContactItem
            icon={<Mail className="h-4 w-4 text-blue-600" />}
            value={primaryEmail}
            href={`mailto:${primaryEmail}`}
            label={`Email ${name}`}
          />

          {secondaryEmail && (
            <ContactItem
              icon={<Building className="h-4 w-4 text-blue-600" />}
              value={secondaryEmail}
              href={`mailto:${secondaryEmail}`}
              label="Department email"
            />
          )}

          {tertiaryEmail && (
            <ContactItem
              icon={<Mail className="h-4 w-4 text-blue-600/70" />}
              value={tertiaryEmail}
              href={`mailto:${tertiaryEmail}`}
              label="Alternative email"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TeamContactSection = () => {
  // Sample data for 4 team members
  const teamMembers = [
    {
      name: "Dr. Arijit Santikary",
      title: `Chairperson - Placements and Corporate Relations Program Chair - PGDM TPS<br>Area Chair - Marketing`,
      phone: "+91-9963713840",
      primaryEmail: "arijitsantikary@ssim.ac.in",
      secondaryEmail: "placements@ssim.ac.in",
      imageSrc: arijitImg,
    },
    {
      name: "Mr. K V Rama Rao",
      title: "General Manager - Placements and Corporate Relations",
      phone: "+91-9866697343",
      primaryEmail: "kvramarao@ssim.ac.in",
      secondaryEmail: "gmplacements@ssim.ac.in",
      tertiaryEmail: "placements@ssim.ac.in",
      imageSrc: ramaraoImg,
    },
    {
      name: "Mr. Rahul Jain",
      title: "Sr. Manager - Placements and Corporate Relations",
      phone: "+91-9989191878",
      primaryEmail: "rahul@ssim.ac.in",
      secondaryEmail: "placements@ssim.ac.in",
      imageSrc: rahulImg,
    },
    {
      name: "Ms. M. Sushma",
      title: "Manager - Placements and Corporate Relations",
      phone: "+91-9515026132",
      primaryEmail: "msushma@ssim.ac.in",
      secondaryEmail: "placements@ssim.ac.in",
      imageSrc: sushmaImg,
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5">
            <span className="text-sm font-semibold text-blue-700">
              Meet Our Team
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Placement Professionals
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our dedicated placement team is committed to connecting students
            with industry-leading opportunities and building strong corporate
            relationships.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        {/* <div className="mt-12 flex justify-center">
          <Button className="group bg-blue-600 px-6 py-5 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl">
            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Schedule a Meeting
          </Button>
        </div> */}
      </div>
    </section>
  );
};
