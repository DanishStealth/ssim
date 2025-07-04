import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Quote, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import sampathy from "@/assets/about/Sampathy.png";
import ramana from "@/assets/faculty&research/faculty/Dr. Ramana Rao.webp";
import ambuj from "@/assets/about/dr-ambuj.jpeg";
import ArathySampathy from "../../assets/about/BoardOfGoverners/Smt_Arathy_Sampathy.jpg";
import SaileshSampathy from "../../assets/about/BoardOfGoverners/Dr_Sailesh_Sampathy.jpg";
import Ambuj from "../../assets/about/Ambuj Gupta.png";

// Leaders data (unchanged)
const leaders = [
  {
    role: "Founder",
    name: "Late. Sri S.P. Sampathy",
    image: sampathy,
    quote: "Nothing is impossible for those who think they can",
    quoteAuthor: "Sri S.P. Sampathy's Vision",
    content: [
      `Late. Sri S.P. Sampathy the founder of the Siva Sivani Group of Educational Institutions, was drawn towards imparting education by a twist of fate in 1961, when he started a school in a rented building in Sanathnagar. With a paltry amount of money in his pocket, our illustrious Founder braved all odds to establish and leave behind an empire with several thousand pupils across the globe and contributing their tiny bit towards the peace, progress and prosperity of the human society at large. In the words of Sri. S. P. Sampathy himself: "Being the Founder of this group and having a major role to play in its growth, my personality and mind-set have become one with that of the institution."`,
      "Sri S.P. Sampathy believed that teamwork is the backbone of the colossal success that he achieved and discipline is its most important ingredient. Our founder was a man with a vision and believed that nothing is impossible for those who think they can.",
      "Siva Sivani Institute of Management was started in 1992 with approval from the All India Council for Technical Education, Ministry of HRD, Govt. of India. SSIM is pioneer in early technology adopters. Our founder is always passionate and committed towards innovation and adaption of newer technologies to provide better education lead through paperless classroom way back in 2002.",
      "Over a period of nearly six decades, Sri S.P. Sampathy and his organisation have contributed their mite towards making the Country and the World a better place to live in. There is no district in Andhra Pradesh, no state in India and no Country in the World where the alumni of Siva Sivani have not made their presence felt. There is no profession or sector from education to law, engineering to medicine, life sciences to social sciences, defence to business, Government to Private where the indelible stamp of Siva Sivani has not left its mark.",
      "During his life time, Sri S.P .Sampathy held a lot of Honorary posts and recipient of the Arch of Excellence Award presented by her Excellency Smt. Kumud Ben Johsi to Sri S.P.Sampathy.",
      "The saga of this noble soul came to an abrupt end on the 11th of February 2005.",
      "The legacy left behind by Sri S.P. Sampathy in striving for the cause of education is unparalleled and a daunting task for his successors in office. It is probably one in millions of people who strives all his life for a noble cause, build an organization worth millions of times than the initial capital invested, brave all odds and leave the material world with not an inch of land to call their own.",
      "We at Siva Sivani Institute of Management dedicate ourselves to working towards the realization of the dreams of our great Founder Late. Sri S.P. Sampathy.",
    ],
  },
  {
    role: "President & Chief Executive, SSGI.",
    name: "SMT. S. AARATHY",
    image: ArathySampathy,
    quote:
      "Learn to Serve - Shaping tomorrow's leaders through innovation, resilience, and excellence",
    quoteAuthor: "SMT. S. AARATHY's Vision",
    content: [
      "The Founder of our great institution, Sri S.P. Sampathy started the Siva Sivani Institute of Management with a purpose and had set clear goals. In our path of achieving success, we have been producing successful batches of young managers and we proudly admit that each batch has become better than the previous one. The industry has been readily accepting our students year after year. The alumni of this institute have risen to great heights in terms of glory and career and are seen as role models by successive batches of students.",
      "SSIM since its inception (1992) has been championing the development of management education and shaping its students in line with the latest industry practices through unique programs and intensive industry interface, using state-of-the-art technologies and pedagogies. SSIM has been crafting the careers of management aspirants with the right skills and attitude.",
      `The National Education Policy (NEP) 2020, launched by the Central Government is a landmark reformatory initiative that entails a paradigm shift in the education space. Furthermore, the cloud cast by the COVID-19 pandemic has caused disruption and chaos. Therefore, adaptation to the new normal calls for re-aligning the skillsets of the teaching fraternity and the students to the unpredictable environmental challenges. SSIM has proactively redesigned and realigned its teaching-learning process to the changing dynamics of the new world order. The pandemic has only strengthened the institute's commitment to its motto "Learn to Serve".`,
      "No stone is left unturned to help students to get the learning as promised. The classes, examinations, and placements have taken place seamlessly unabated even during the trying times of the pandemic. SSIM has a strong Alumni of over 15000, holding positions of power, influence, responsibility and leadership in the corporate world and society and have brought laurels to the institute over the years. SSIM strives continuously to be the premier institute imparting the right knowledge, industry-required curriculum, and blended learning skills fine-tuned with management competency development inputs, firmly grounded on the foundation of discipline and ethics. Students are exposed to the best resources from industry, academia and alumni.",
      "A learning campus, with all facilities, awaits each one of you and provides a world of opportunities to blossom as successful, securing, intelligent managers by the end of your stay on campus. I wish you the very best and look forward to welcoming you into the Siva Sivani Family.",
    ],
  },
  {
    role: "Vice President & Dy. Chief Executive, SSGI.",
    name: "DR. SAILESH SAMPATHY",
    image: SaileshSampathy,
    quote:
      "Building bridges across borders through quality education, creating global leaders of tomorrow",
    quoteAuthor: "DR. SAILESH SAMPATHY's Vision",
    content: [
      "Greetings from SSIM, a dynamic, progressive and ever expanding institution, relentlessly surging ahead on our chosen path, excelling in providing quality education. SSIM has been the hall mark and an integral part of the more than six decades old Siva Sivani Group for three decades.",
      "In the quest of its dream, SSIM has been successful in foraging ties in domestic and global arenas at individual and institutional levels. Faculty exchanges, Student exchanges, Joint Certification Programmes, Research, Training and Allied activities at these levels are now routine at SSIM.",
      `In order to help our students seeking additional qualifications at institutions outside the country become easier, agreements of credit transfers, joint certification courses, acquiring foreign degrees and thereby creating opportunities of seeking employment in Europe, America and the rest of the globe are already in place.`,
      "Arrangements for accomplished personalities both from the industry and academia inEurope and America, in addition to people with similar calibre in India, to handle courses in various programmes, thereby, enabling students of SSIM, to have ample global exposure at the campus itself have been made. Over a period of time, SSIM acquired many awards and recognitions. Few notable are Best Education brand 2022 from Economic Times, CSR awarded TOP Eminent B-School of Super Excellence 2022 etc. SSIM is NAAC accredited and PGDM Program is NBA accredited with AIU certification.",
      "Goals are achieved at a rapid pace if more and more like minded people come together. With many initiatives undertaken and hundreds of like minded people being added each year to the already vast Siva Sivani family, we have moved that much closer to achieving our goals.",
      "I invite you to become an integral part of this saga.",
    ],
  },
  {
    role: "Director, SSIM.",
    name: "Prof. (Dr.) Ambuj Jagdish Gupta,",
    image: Ambuj,
    quote:
      "Nurturing holistic excellence through innovative education, industry integration, and value-based leadership",
    quoteAuthor: "Prof. (Dr.) Ambuj Jagdish Gupta",
    content: [
      "Management education has evolved to be a premier choice among post-graduation degrees for students all over the world. The growing complexity of business, coupled with quantum leaps in technological advances has made this course, futuristic in its outlook, attracting the best minds to unravel and chart new directions for organizations. Business education provided by business schools should, therefore, integrate these vagaries into the environment to build a competent talent base.",
      `Siva Sivani Institute of Management (SSIM) is one of the leading business schools in the country offering Post Graduation in Business Management since 1992. These programs are carefully designed in accordance with industry requirements offered by prominent professors from the industry as well as the academic fraternity. SSIM is striving to "achieve and sustain a reputation for excellence in teaching, learning, research and consultancy whilst upholding human values". These values are imbibed in every fibre of the operations at SSIM and leaders walk the talk to help students emulate these standards!`,
      `SSIM is committed to shaping students' careers in a way that can be ready to take on entrepreneurial roles. It is our responsibility to offer more specialized and focused programs to meet the industry needs of PGDM-TPS, PGDM-BIFS, and PGDM-Business Analytics.`,
      "PGDM at SSIM is an expedition which helps an individual get acquainted with business expertise and business functionalities. The degree confers one with prospects to broaden his/her aptitude and apply it on the job. The institute's faculty ensures that students acquire knowledge, analyse concepts in given organizational case studies, and overall personality development. The entire learning process provides an individual with a strong foundation to mould careers. These synergistic efforts result in significant changes in the life of a student's career at SSIM.",
      "The benefits of studying PGDM are numerous, especially at SSIM since we provide a different experience in terms of learning through exceptionally qualified faculty members, teaching techniques, case studies and direct attention of faculty members.",
      "We at Siva Sivani Institute of Management emphasize on Co-curricular activities of the student which include Personality Development, club activities, language skills, Book review sessions and so on. The goals behind these are to develop a holistic personality, effective enough to contribute to the organization. As we work to uncover the talent in each student, we look forward to finding creative ways to engage and empower future leaders! We give them opportunities to dream and platforms to excel!",
    ],
  },
];

function LeaderCard({ leader }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group shadow-lg overflow-hidden border-none transition-all duration-300">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[250px_1fr] items-start">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={leader.image || "/placeholder.svg"}
                alt={`${leader.role} - ${leader.name}`}
                className="object-cover bg-gray-100 object-center w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  {leader.role}
                </h2>
                <p className="text-lg text-muted-foreground">{leader.name}</p>
              </div>
              <Separator className="bg-primary/20" />
              {leader.quote && (
                <motion.div
                  className="relative mt-4 pl-6 border-l-4 border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Quote className="absolute -left-[17px] -top-1 w-6 h-6 text-primary/40" />
                  <p className="italic text-lg">{leader.quote}</p>
                  {leader.quoteAuthor && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      - {leader.quoteAuthor}
                    </p>
                  )}
                </motion.div>
              )}
              <div className="text-muted-foreground">
                <p className="text-base leading-relaxed line-clamp-3">
                  {leader.content[0]}
                </p>
              </div>
              <Button
                onClick={() => setIsDialogOpen(true)}
                variant="outline"
                className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                aria-label={`Read more about ${leader.name}`}
              >
                Read more
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
          <DialogHeader className="pb-4">
            <DialogTitle>
              {leader.name} - {leader.role}
            </DialogTitle>
            <DialogDescription>
              Learn more about our college leadership
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 h-[calc(80vh-120px)]">
            {leader.quote && (
              <div className="relative pl-6 border-l-4 border-primary/20">
                <Quote className="absolute -left-[17px] -top-1 w-6 h-6 text-primary/40" />
                <p className="italic text-lg">{leader.quote}</p>
                {leader.quoteAuthor && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    - {leader.quoteAuthor}
                  </p>
                )}
              </div>
            )}
            <ScrollArea className="flex-1 overflow-y-auto pr-4">
              <div className="space-y-4">
                {leader.content.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the visionary leaders at Siva Sivani Institute of Management (SSIM). Our leadership team is dedicated to fostering an environment of academic excellence and innovation."
        keywords="SSIM leadership, business school leaders, management team, academic leadership"
        canonicalUrl="https://www.ssim.ac.in/about/leadership"
      />
      <section className="w-full py-16 sm:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Our Leaders Message
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries guiding Siva Sivani Institute of Management
              (SSIM) towards excellence and empowerment.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:gap-12">
            {leaders.map((leader) => (
              <LeaderCard key={leader.role} leader={leader} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
