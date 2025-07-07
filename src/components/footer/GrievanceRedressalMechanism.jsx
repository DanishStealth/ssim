import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Clock,
  Users,
  FileText,
  AlertCircle,
} from "lucide-react";
import SEO from "../Seo";

export default function GrievanceRedressalMechanism() {
  return (
    <>
      <SEO
        title="Grievance Redressal Mechanism"
        description="Learn about the grievance redressal mechanism at Siva Sivani Institute of Management (SSIM). Get information on how to submit grievances, the process overview, and the responsibilities of the committee."
        keywords="SSIM grievance redressal, grievance mechanism, student grievances, complaint process, SSIM committee"
        canonicalUrl="https://www.ssim.ac.in/grievance-redressal-mechanism"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <Badge
              variant="outline"
              className="text-blue-700 border-blue-200 bg-blue-50"
            >
              Student Support Services
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Grievance Redressal Mechanism
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ensuring fair and prompt resolution of student concerns through
              our structured grievance redressal system
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">
                    About the Mechanism
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    Established under AICTE regulations for technical
                    institutions
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  As per All India Council for Technical Education (AICTE)
                  regulations, 2012 under clause 1 of section 23 of the AICTE
                  Act, 1987 (Vide notification F.No. 37-3/Legal/2012 dated
                  25.02.2012) regarding the establishment of Mechanism for
                  Grievance Redressal in Technical Institutions, a Grievance
                  Redressal Committee formed to address the grievances of the
                  students, parents and others.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Grievance Redressal Committee of SSIM has been constituted
                  with an aim to provide easy and readily accessibility
                  machinery for prompt disposal of the day to day genuine
                  grievances. All aggrieved students, their parents and others
                  may henceforth approach the Grievance Redressal Committee of
                  SSIM in the first instance.
                </p>
              </div>

              <Separator className="my-6" />

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Submit Your Grievance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:grievances@ssim.ac.in"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          grievances@ssim.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Postal Address
                        </p>
                        <p className="text-gray-700 text-sm">
                          The Director, Grievance Redressal Committee
                          <br />
                          SSIM, NH-44, Kompally, Secunderabad – 500100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Process Overview
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      The Grievance Redressal Committee will deal with student
                      grievances that are not adhered in purview of Anti-Ragging
                      Committee and SC/ST committee.
                    </p>
                    <p>
                      Based on a written request, the committee may, at its
                      discretion, invite the aggrieved student for a personal
                      hearing. All representations received by the end of the
                      previous month shall be deliberated upon in its meetings.
                    </p>
                    <p>
                      The Committee may hold its meetings from time to time as
                      required. The term of this committee shall be for two
                      years. The Committee shall also receive
                      applications/complaints from employees and other public
                      stakeholders and acknowledge the receipt within 3 days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">
                    Committee Responsibilities
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    Key duties and timelines for grievance resolution
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Analysis & Recommendation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The Committee shall study, analysis and submit its
                      recommendations to the Director within
                      <span className="font-semibold text-blue-700">
                        {" "}
                        15 days
                      </span>{" "}
                      from the date of receipt of application/complaint.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <div className="p-2 bg-green-100 rounded-full">
                    <AlertCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Resolution Timeline
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The grievance needs to be redressed and disposed off as
                      soon as possible however not exceeding
                      <span className="font-semibold text-green-700">
                        {" "}
                        30 days
                      </span>{" "}
                      from the date of receipt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <Users className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Escalation Process
                    </h4>
                    <p className="text-gray-700 text-sm">
                      However, under circumstance a policy decision is
                      warranted, the subject matter may be referred by Director
                      to Chairman, Governing Body with request for direction and
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              For immediate assistance or urgent matters, please contact the
              administration office directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
