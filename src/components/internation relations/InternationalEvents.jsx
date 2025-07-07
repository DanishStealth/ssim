import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ir1 from "../../assets/international-relations/IR1.jpg";
import ir2 from "../../assets/international-relations/IR2.jpeg";
import ir3 from "../../assets/international-relations/IR3.jpg";
import ir4 from "../../assets/international-relations/IR4.jpeg";
import ir5 from "../../assets/international-relations/IR5.jpeg";

// Sample event data
const events = [
  {
    id: 1,
    title: "Center for International Studies (CIS) at SSIM",
    fullDescription: `<p class="mb-4">
The <strong>Center for International Studies (CIS) at Siva Sivani Institute of Management (SSIM)</strong> is a hub for global academic collaboration, offering students and faculty opportunities for international exposure and cross-cultural learning. SSIM has established partnerships with various renowned universities and institutions worldwide to enhance its academic programs, research initiatives, and student exchange opportunities.
</p>
<p class="mb-4">
Through these collaborations, SSIM provides students access to global best practices in management education, allowing them to engage with international faculty, participate in exchange programs, and earn dual degrees or certifications. The centre facilitates study tours, joint research projects, and cultural exchange programs, helping students develop a global mindset and broaden their perspectives.
</p>
<p class="mb-4">
Some of the key collaborations include partnerships with universities in the <strong>United States, Asia</strong>, etc enabling students to experience different educational environments and business landscapes. These collaborations also support faculty development programs, research conferences, and joint workshops, fostering innovation and academic excellence.
</p>
<p class="mb-4">
By integrating international exposure into its curriculum, SSIM's CIS aims to prepare students for leadership roles in a globally connected business world. The centre's initiatives emphasize experiential learning, global networking, and interdisciplinary studies, ensuring that SSIM graduates are well-equipped to navigate the complexities of international business and management.
</p>
<p>
Through its strategic alliances, the <strong>Center for International Studies at SSIM</strong> continues to strengthen its reputation as a globally engaged institution, committed to fostering knowledge exchange and academic excellence across borders.
</p>`,
    images: [ir1, ir2, ir3],
  },
  {
    id: 2,
    title: "Global Immersion Program",
    fullDescription: `<p class="mb-4">
The Global Immersion Program is a transformative experience for PGDM (Post Graduate Diploma in Management) students, offering them an opportunity to gain international exposure in dynamic business environments. This program is designed to enhance their global perspective, cultural understanding, and strategic thinking by engaging with industry leaders, corporate visits, and academic interactions in Dubai and Malaysia.
</p>
<p class="mb-4">
In Dubai, students explore one of the world's fastest-growing business hubs. They visit multinational corporations, financial institutions, and technology parks, gaining insights into diverse industries such as real estate, finance, logistics, and tourism. The city’s innovation-driven economy and futuristic vision provide a valuable learning experience. Students also interact with professionals and attend seminars, enhancing their knowledge of global business strategies.
</p>
<p class="mb-4">
Malaysia, known for its strong economic growth and technological advancements, offers students exposure to Southeast Asian markets. Through industrial visits, students gain firsthand insights into sectors like manufacturing, digital economy, and trade. They also engage with business experts and participate in cross-cultural learning, understanding how emerging economies function in a globalized world.
</p>
<p>
The program not only broadens students' professional outlook but also enriches their interpersonal skills, adaptability, and cross-border collaboration abilities. By experiencing international business cultures, they become well-equipped to navigate the complexities of global markets. This immersive learning journey ultimately enhances their career prospects and prepares them to become future business leaders with a global mindset.
</p>`,
    images: [ir4, ir5],
  },
];

// Helper function to create short description from full description
const createShortDescription = (fullDescription, maxLength = 156) => {
  if (fullDescription.length <= maxLength) return fullDescription;
  return fullDescription.substring(0, maxLength).trim() + "...";
};

// Event Card Component
const EventCard = ({ event }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow bg-white">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={event.images[0] || "/placeholder.svg"}
            alt={event.title}
            width={400}
            height={240}
            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          {/* <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {event.category}
            </Badge>
          </div> */}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <CardTitle
              className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: event.title }}
            ></CardTitle>
            <p
              className="text-gray-600 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: createShortDescription(event.fullDescription),
              }}
            ></p>
          </div>

          {/* <div className="flex flex-col gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div> */}

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
                View More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {event.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Event Details */}
                {/* <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <Badge variant="outline">{event.category}</Badge>
                </div> */}

                {/* Image Display */}
                <div className="w-full">
                  {event.images.length === 1 ? (
                    // Single Image
                    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
                      <img
                        src={event.images[0] || "/placeholder.svg"}
                        alt={event.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    // Multiple Images - Carousel
                    <Carousel className="w-full">
                      <CarouselContent>
                        {event.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${event.title} - Image ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-white/80 text-gray-700 backdrop-blur flex justify-center items-center" />
                      <CarouselNext className="right-4 bg-white/80 text-gray-700 backdrop-blur flex justify-center items-center" />
                    </Carousel>
                  )}
                </div>

                {/* Full Description */}
                <div className="prose prose-gray max-w-none">
                  <p
                    className="text-gray-700 leading-relaxed text-base"
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  ></p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Events Section Component
export default function InternationalEvents() {
  return (
    <section className="pt-5 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            International Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing events, workshops, and conferences designed to
            inspire and educate
          </p>
        </div> */}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
