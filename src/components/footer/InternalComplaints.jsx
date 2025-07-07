import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Users,
  Mail,
  MapPin,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import SEO from "../Seo";

export default function InternalComplaints() {
  return (
    <>
    <SEO
        title="Internal Complaints Committee"
        description="Learn about the Internal Complaints Committee at Siva Sivani Institute of Management (SSIM). Get information on the committee's establishment, responsibilities, and how to submit complaints."
        keywords="SSIM internal complaints, complaints committee, sexual harassment, workplace environment, SSIM committee"
        canonicalUrl="https://www.ssim.ac.in/internal-complaints"
      />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Internal Complaints Committee
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ensuring a safe and respectful workplace environment for all
          </p>
          <Badge className="text-sm px-4 py-2 hidden sm:inline-flex bg-gray-200 hover:bg-gray-200 text-black">
            Established under Section 4 of Sexual Harassment Prevention Act
          </Badge>
          <Badge className="text-sm px-4 py-2 inline-flex sm:hidden bg-gray-200 hover:bg-gray-200 text-black">
            Sexual Harassment Prevention Act
          </Badge>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              Committee Establishment
            </CardTitle>
            <CardDescription className="text-blue-100">
              Year 2021-2022 Initiative
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The Director is pleased to constitute an Internal Complaint
                Committee as per Section 4 of Sexual Harassment of women at work
                place for the year 2021-2022 to resolve the issues of sexual
                harassment with the following as its members.
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Committee Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The committee has to conduct awareness programs among the staff
                and students. The committee aims to evolve a mechanism for the
                prevention and redressal of sexual harassment cases and other
                acts of gender based violence in the institute. The committee is
                responsible for all complaints of sexual harassment made:
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Complaint Types */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <Users className="h-4 w-4 text-red-600" />
                </div>
                <CardTitle className="text-lg">Type A</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                By a member of the institution against any other member
                irrespective of whether the harassment is alleged to have taken
                place within or outside the campus.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Shield className="h-4 w-4 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Type B</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                By any outsider against a member of the institute or by a member
                of the institute against an outsider if the sexual harassment is
                alleged to have taken place within the campus.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Type C</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                By a member of the institute against an outsider if the sexual
                harassment is alleged to have taken place outside the campus.
                The committee shall recommend appropriate action and assist in
                pursuing the complaint.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        {/* <Card className="shadow-lg border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Submit a Grievance
            </CardTitle>
            <CardDescription className="text-gray-300">
              Multiple ways to reach out for support and assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 h-full">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Email Contact</h4>
                <div className="flex flex-col items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-medium">internalcomplaints@ssim.ac.in</p>
                    <p className="text-sm text-gray-300">
                      Primary email for grievances
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <h4 className="font-semibold text-lg">Postal Address</h4>
                <div className="flex flex-col items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="font-medium">The Director</p>
                    <p className="text-sm text-gray-300">
                      Grievance Redressal Committee
                    </p>
                    <p className="text-sm text-gray-300">
                      SSIM, NH-44, Kompally
                    </p>
                    <p className="text-sm text-gray-300">
                      Secunderabad – 500100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 flex-1 bg-transparent"
              >
                <Shield className="h-4 w-4 mr-2" />
                Learn More
              </Button>
            </div> */}
        {/* </CardContent>
        </Card> */}

        <Card className="shadow-xl border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Submit Your Grievance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-blue-100 text-lg leading-relaxed">
              The grievance can be sent through the following channels:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-white">Email</h4>
                </div>
                <p className="text-blue-100">
                  <a
                    href="mailto:internalcomplaints@ssim.ac.in"
                    className="hover:text-white transition-colors underline"
                  >
                    internalcomplaints@ssim.ac.in
                  </a>
                </p>
              </div>

              {/* Postal Address */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-white">Postal Address</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  The Director, Grievance Redressal Committee
                  <br />
                  SSIM, NH-44, Kompally
                  <br />
                  Secunderabad – 500100
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
