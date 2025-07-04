import { useState, useEffect } from "react";
import SEO from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

// Sample alumni data
const alumniData = [
  {
    id: 1,
    name: "Aditya Datta",
    batch: "1999-2001",
    designation: "Executive Director",
    company: "JP Morgan & Chase",
    linkedin: "https://www.linkedin.com/in/aditya-datta-2194b38/",
  },
  {
    id: 2,
    name: "Kamesh Kompella", 
    batch: "1996-1998",
    designation: "Talent & Leadership Development Executive",
    company: "Amazon",
    linkedin: "https://www.linkedin.com/in/kamesh-kompella/",
  },
  {
    id: 3,
    name: "Vinod Sharma",
    batch: "1996-1998", 
    designation: "Chief Operating Officer",
    company: "Edunation Services Pvt. Ltd.",
    linkedin: "https://www.linkedin.com/in/vinodsharmahyd/",
  },
  {
    id: 4,
    name: "Umesh Golecha",
    batch: "1996-1998",
    designation: "Director",
    company: "Innova Solution",
    linkedin: "https://www.linkedin.com/in/umesh-golecha-5b99a014/",
  },
  {
    id: 5,
    name: "Parameshwar N",
    batch: "1994-1996",
    designation: "Vice-President Customer Engagement",
    company: "SBI Life Insurance Co. Ltd.",
    linkedin: "https://www.linkedin.com/in/parameshwar-n-9a718a16/",
  },
  {
    id: 6,
    name: "Arati Mohanty",
    batch: "2009-2011",
    designation: "HR Manager",
    company: "Taj Deccan",
    linkedin: "https://www.linkedin.com/in/arati-mohanty-7a783828/",
  },
  {
    id: 7,
    name: "Ankit Bhadauriya",
    batch: "2011-2013",
    designation: "National Key Account Manager",
    company: "Dabur India Ltd.",
    linkedin: "https://www.linkedin.com/in/ankitbhadauriya/",
  },
  {
    id: 8,
    name: "Nelson Anthony",
    batch: "2012-2014",
    designation: "Senior Analyst",
    company: "Deloitte India",
    linkedin: "https://www.linkedin.com/in/nelson-anthony-527a9858/",
  },
  {
    id: 9,
    name: "Ankush Puri",
    batch: "2011-2013",
    designation: "Assistant Manager",
    company: "TCS",
    linkedin: "https://www.linkedin.com/in/ankush-puri-30586137/",
  },
  {
    id: 10,
    name: "Venkatesh Dixit",
    batch: "2013-2015",
    designation: "Presales Consultant",
    company: "Cognizant",
    linkedin: "https://www.linkedin.com/in/venkatesh-dixit-61b33699/",
  },
  {
    id: 11,
    name: "Rahmath Khan",
    batch: "2010-2012",
    designation: "Talent Acquisition Manager",
    company: "JP Morgan & Chase",
    linkedin: "https://www.linkedin.com/in/rahmath-khan-349672191/",
  },
  {
    id: 12,
    name: "Jaideep Avasarala",
    batch: "1998-2000",
    designation: "Talent Acquisition Leader",
    company: "Microsoft",
    linkedin: "https://www.linkedin.com/in/jaideep-avasarala-5bb4514/",
  },
  {
    id: 13,
    name: "Deepak Chivukula",
    batch: "1999-2001",
    designation: "Zonal Head",
    company: "ICICI Bank",
    linkedin: "https://www.linkedin.com/in/deepak-chivukula-47a2511a/",
  },
  {
    id: 14,
    name: "Itha Lakshmipathi",
    batch: "1999-2001",
    designation: "AVP & Global Head - HR",
    company: "Prodapt",
    linkedin: "https://www.linkedin.com/in/litha/",
  },
  {
    id: 15,
    name: "Mamatha Madireddy",
    batch: "1999-2001",
    designation: "Head & Managing Director",
    company: "HSBC",
    linkedin: "https://www.linkedin.com/in/mamatha-madireddy-777543115/",
  },
  {
    id: 16,
    name: "Swapnil Bhele",
    batch: "2010-2012",
    designation: "Assistsnt Vice President",
    company: "Citi",
    linkedin: "https://www.linkedin.com/in/swapnil-bhele-70b09830/",
  },
  {
    id: 17,
    name: "Phani Naishadam",
    batch: "2002-2004",
    designation: "Senior Project Lead",
    company: "Polaris Software Lab",
    linkedin: "https://www.linkedin.com/in/phani-naishadam-istqb-csm-61244b9/",
  },
  {
    id: 18,
    name: "Pramod Parepalli",
    batch: "1992-1994",
    designation: "Digital & IT and Payroll SSC Director",
    company: "Saint-Globain",
    linkedin: "https://www.linkedin.com/in/pramod-parepalli-1125076/",
  },
  {
    id: 19,
    name: "Akshata Dani",
    batch: "2013-2015",
    designation: "Technical Writer Specialist",
    company: "Google Operation Center",
    linkedin: "https://www.linkedin.com/in/daniakshata/",
  },
  {
    id: 20,
    name: "Ruchi L",
    batch: "2010-2012",
    designation: "Senior Sourcing Specialist",
    company: "Deloitte Dubai, UAE",
    linkedin: "https://www.linkedin.com/in/ruchi-l-89b9a429/",
  },
  {
    id: 21,
    name: "Niraj Kumar Rana",
    batch: "1999-2001",
    designation: "EVP & Head of Sales",
    company: "Naukri.com",
    linkedin: "https://www.linkedin.com/in/niraj-kumar-rana-8365081/",
  },
  {
    id: 22,
    name: "Mr. Badri Vishal Katta",
    batch: "1993-1995",
    designation: "Senior Vice President",
    company: "HDFC Bank",
    linkedin: "https://www.linkedin.com/in/badri-vishal-katta-55521a14/",
  },
  {
    id: 23,
    name: "Kota Sai Santosh",
    batch: "2002-2004",
    designation: "Executive Director",
    company: "Happi Mobiles",
    linkedin: "https://www.linkedin.com/in/kota-sai-santosh-59b40b29/",
  },
  // ... add more alumni data to test pagination
];

const AlumniSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  // Filter alumni based on search term and selected year
  const filteredAlumni = alumniData.filter(
    (alumni) =>
      (selectedYear === "all" || alumni.batch === selectedYear) &&
      (alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.batch.includes(searchTerm))
  );

  // Calculate pagination
  const indexOfLastAlumni = currentPage * itemsPerPage;
  const indexOfFirstAlumni = indexOfLastAlumni - itemsPerPage;
  const currentAlumni = filteredAlumni.slice(
    indexOfFirstAlumni,
    indexOfLastAlumni
  );
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get unique years from alumni data
  const years = [...new Set(alumniData.map((alumni) => alumni.batch))].sort(
    (a, b) => b - a
  );

  // Generate pagination items
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5; // Adjust this number to show more or fewer page numbers

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);
      if (currentPage > 3) {
        items.push("...");
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        items.push(i);
      }
      if (currentPage < totalPages - 2) {
        items.push("...");
      }
      items.push(totalPages);
    }

    return items;
  };

  return (
    <>
      <SEO
        title="Our Alumni"
        description="Connect with the accomplished alumni of Siva Sivani Institute of Management. Discover their achievements and see where a PGDM from SSIM can take you."
        keywords="SSIM alumni, Siva Sivani alumni, alumni network, business school alumni"
        canonicalUrl="https://www.ssim.ac.in/alumni"
      />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center text-primary">
            Our Alumni Network
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
            <div className="relative w-full sm:w-1/2 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, company, or designation..."
                className="pl-10 h-12 rounded-lg"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <Select
              value={selectedYear}
              onValueChange={(value) => {
                setSelectedYear(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full sm:w-[180px] h-12 rounded-lg">
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Alumni Table */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[800px]">
                {/* Header row */}
                <div className="grid grid-cols-[2fr_1fr_2fr_1.5fr_1fr] gap-4 mb-4 px-6 py-3 bg-mainBlue text-white rounded-lg font-medium text-sm">
                  <div className="text-nowrap">Name</div>
                  <div className="text-nowrap">Batch</div>
                  <div className="text-nowrap">Designation</div>
                  <div className="text-nowrap">Company</div>
                  <div className="text-nowrap">LinkedIn</div>
                </div>

                {/* Alumni rows */}
                <div className="space-y-2">
                  {currentAlumni.length > 0 ? (
                    currentAlumni.map((alumni) => (
                      <Card
                        key={alumni.id}
                        className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white"
                      >
                        <div className="grid grid-cols-[2fr_1fr_2fr_1.5fr_1fr] gap-4 p-4 items-center">
                          <div className="font-medium text-nowrap overflow-hidden">
                            {alumni.name}
                          </div>
                          <div className="text-nowrap">
                            <Badge
                              variant="outline"
                              className="bg-primary/5 text-primary font-medium border-primary/20"
                            >
                              {alumni.batch}
                            </Badge>
                          </div>
                          <div className="text-muted-foreground text-nowrap overflow-hidden">
                            {alumni.designation}
                          </div>
                          <div className="text-nowrap overflow-hidden">
                            {alumni.company}
                          </div>
                          <div className="text-nowrap">
                            <a
                              href={alumni.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#0077B5] hover:text-primary/80 transition-colors"
                            >
                              <div className="bg-[#0077B5] h-9 w-9 flex items-center justify-center text-white rounded-full">
                                <Linkedin className="h-5 w-5" />
                              </div>
                              <span className="inline ml-2">Profile</span>
                            </a>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12 text-muted-foreground bg-muted/20 rounded-lg">
                      No alumni found matching your search criteria.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {filteredAlumni.length > itemsPerPage && (
            <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {generatePaginationItems().map((item, index) =>
                item === "..." ? (
                  <span key={index} className="px-2">
                    ...
                  </span>
                ) : (
                  <Button
                    key={index}
                    variant={currentPage === item ? "default" : "outline"}
                    onClick={() => handlePageChange(item)}
                    className={`h-10 w-10 rounded-full ${
                      currentPage === item ? "bg-red-600 text-white" : ""
                    }`}
                  >
                    {item}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AlumniSection;
