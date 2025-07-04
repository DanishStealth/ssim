import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/Seo";

export default function AboutMessage() {
  return (
    <>
      <SEO
        title="Director's Message"
        description="Read a message from the Director of Siva Sivani Institute of Management (SSIM). Learn about our vision, values, and commitment to excellence in business education."
        keywords="SSIM director's message, dean's message, business school leadership, management education vision"
        canonicalUrl="https://www.ssim.ac.in/about/directors-message"
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          A Message from Our Dean
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Dean John Doe"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center font-semibold">Dr. John Doe</p>
                <p className="text-center text-muted-foreground">
                  Dean of Global Business School
                </p>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">
                  Shaping the Future of Business Leadership
                </h3>
                <p className="mb-4">
                  Welcome to the Global Business School, where we are committed to
                  nurturing the next generation of innovative and ethical business
                  leaders. Our mission is to provide a transformative educational
                  experience that equips our students with the knowledge, skills,
                  and values necessary to thrive in an ever-changing global
                  business landscape.
                </p>
                <p className="mb-4">
                  At Global Business School, we believe in the power of diverse
                  perspectives, collaborative learning, and real-world
                  application. Our world-class faculty, cutting-edge curriculum,
                  and strong industry partnerships create an environment where
                  ideas flourish and future leaders are born.
                </p>
                <p>
                  As we face the challenges and opportunities of the 21st century,
                  I invite you to join us in our pursuit of excellence,
                  innovation, and positive impact. Together, we can shape a better
                  future for business and society.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
