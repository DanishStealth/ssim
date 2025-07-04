import { useState, useMemo, useEffect } from "react";
import SEO from "@/components/Seo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  LinkedinIcon,
  DownloadIcon,
  BuildingIcon,
  GraduationCapIcon,
  MapPinIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TrendingUpIcon,
  UsersIcon,
  Building2Icon as BuildingOffice2Icon,
  PercentIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "../Heading";

export default function PlacementSection() {
  const [apiStudentsData, setApiStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://www.bfis.in/ssim_backend/api/placements");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiStudentsData(data);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch placement data:", e);
        setError(e.message);
        setApiStudentsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacementData();
  }, []);

  const years = useMemo(() => 
    Array.from(new Set(apiStudentsData.map((student) => student.year)))
    .sort((a, b) => {
        const yearA = parseInt(a, 10) || 0;
        const yearB = parseInt(b, 10) || 0;
        return yearB - yearA; 
    }), 
  [apiStudentsData]);
  
  const designations = useMemo(() => 
    Array.from(new Set(apiStudentsData.map((student) => student.designation).filter(Boolean))), 
  [apiStudentsData]);
  
  const companies = useMemo(() => 
    Array.from(new Set(apiStudentsData.map((student) => student.company).filter(Boolean))), 
  [apiStudentsData]);

  const stats = useMemo(() => {
    if (!apiStudentsData || apiStudentsData.length === 0) {
        return {
            totalPlacements: 0,
            averageSalary: "0K",
            companiesHiring: 0,
            placementRate: "0%",
        };
    }
    const totalPlacements = apiStudentsData.length;
    const totalSalary = apiStudentsData.reduce(
      (acc, curr) => acc + Number(String(curr.salary).replace(/[^\d.-]/g, "") || 0),
      0
    );
    const averageSalary = totalPlacements
      ? `${(totalSalary / totalPlacements)
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${totalPlacements > 0 && totalSalary > 0 ? '' : 'K'}`
      : "0K";
    const companiesHiring = new Set(apiStudentsData.map((s) => s.company)).size;
    const placementRate = "92%";

    return {
      totalPlacements,
      averageSalary,
      companiesHiring,
      placementRate,
    };
  }, [apiStudentsData]);

  const filteredStudents = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filtered = apiStudentsData.filter((student) => {
      const searchFilter =
        normalizedSearchTerm === "" ||
        (student.name && student.name.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.company && student.company.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.designation && student.designation.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.year && student.year.toString().includes(normalizedSearchTerm)) ||
        (student.salary && String(student.salary).replace(/[^\d.-]/g, "").includes(normalizedSearchTerm));

      const yearFilter =
        selectedYear === "all" || (student.year && student.year.toString() === selectedYear);
      const DesignationFilter =
        selectedDesignation === "all" ||
        (student.designation && student.designation === selectedDesignation);
      const companyFilter =
        selectedCompany === "all" || (student.company && student.company === selectedCompany);

      return searchFilter && yearFilter && DesignationFilter && companyFilter;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === "salary") {
          aValue = parseInt(String(aValue).replace(/[^\d.-]/g, "") || 0, 10);
          bValue = parseInt(String(bValue).replace(/[^\d.-]/g, "") || 0, 10);
        } else if (sortConfig.key === "year") {
          aValue = Number(aValue) || 0;
          bValue = Number(bValue) || 0;
        } else {
          aValue = (aValue || "").toString().toLowerCase();
          bValue = (bValue || "").toString().toLowerCase();
        }

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [
    searchTerm,
    selectedYear,
    selectedDesignation,
    selectedCompany,
    sortConfig,
    apiStudentsData,
  ]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedDesignation("all");
    setSelectedCompany("all");
    setSearchTerm("");
    setSortConfig(null);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig?.key !== columnKey) return null;
    return sortConfig.direction === "asc" ? (
      <ChevronUpIcon className="w-4 h-4 inline-block ml-1" />
    ) : (
      <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
    );
  };

  return (
    <>
      <SEO
        title="Placement Records"
        description="Explore the placement records of Siva Sivani Institute of Management (SSIM). View our students' success stories, top recruiters, and salary statistics."
        keywords="SSIM placements, placement records, job placements, top recruiters, management placements"
        canonicalUrl="https://www.ssim.ac.in/placement/records"
      />
      <div className="min-h-fit bg-gradient-to-b from-background to-muted/20 pb-16">
        <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          <div className="text-center space-y-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Student Placements
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our students' success stories and career achievements.
              Filter and sort to find specific placement details.
            </p>
          </div>

          <Tabs defaultValue="placement-details">
            <TabsList className="grid w-full grid-cols-2 text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
              <TabsTrigger
                value="placement-details"
                className="data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
              >
                Placement Details
              </TabsTrigger>
              <TabsTrigger
                value="placement-report"
                className="data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
              >
                Placement Report
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="placement-details"
              className="space-y-8 pt-10 sm:pt-16"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.totalPlacements}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Total Offers
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUpIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.averageSalary}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Average Salary
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUpIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.averageSalary}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Highest Salary
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BuildingOffice2Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.companiesHiring}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Companies Hiring
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                {/* <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PercentIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.placementRate}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Placement Rate
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card> */}
              </div>

              <div className="rounded-sm border bg-card p-5 space-y-4">
                <h2 className="text-lg font-semibold mb-4">Filter Placements</h2>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="grid grid-cols-1 sm:flex w-full sm:w-auto sm:flex-row sm:flex-wrap gap-3 items-center">
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-full sm:w-[130px] bg-background">
                        <GraduationCapIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedDesignation}
                      onValueChange={setSelectedDesignation}
                    >
                      <SelectTrigger className="w-full sm:w-[200px] bg-background">
                        <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                        <SelectValue placeholder="Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All designations</SelectItem>
                        {designations.map((designation) => (
                          <SelectItem key={designation} value={designation}>
                            {designation}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedCompany}
                      onValueChange={setSelectedCompany}
                    >
                      <SelectTrigger className="w-full sm:w-[160px] bg-background">
                        <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                        <SelectValue placeholder="Company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Companies</SelectItem>
                        {companies.map((company) => (
                          <SelectItem key={company} value={company}>
                            {company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2 w-full md:max-w-md">
                    <Input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-background"
                    />
                  </div>
                </div>

                {(selectedYear !== "all" ||
                  selectedDesignation !== "all" ||
                  selectedCompany !== "all" ||
                  searchTerm.trim() !== "") && (
                  <div className="flex flex-wrap items-center gap-2 pt-4">
                    <span className="text-sm text-muted-foreground">
                      Active filters:
                    </span>
                    {selectedYear !== "all" && (
                      <Badge
                        variant="secondary"
                        className="hover:bg-secondary/80"
                      >
                        Year: {selectedYear}
                      </Badge>
                    )}
                    {selectedDesignation !== "all" && (
                      <Badge
                        variant="secondary"
                        className="hover:bg-secondary/80"
                      >
                        Designation: {selectedDesignation}
                      </Badge>
                    )}
                    {selectedCompany !== "all" && (
                      <Badge
                        variant="secondary"
                        className="hover:bg-secondary/80"
                      >
                        Company: {selectedCompany}
                      </Badge>
                    )}
                    {searchTerm.trim() !== "" && (
                      <Badge
                        variant="secondary"
                        className="hover:bg-secondary/80"
                      >
                        Search: {searchTerm.trim()}
                      </Badge>
                    )}
                    {(selectedYear !== "all" ||
                      selectedDesignation !== "all" ||
                      selectedCompany !== "all" ||
                      searchTerm.trim() !== "") && (
                      <Button
                        variant="ghost"
                        onClick={clearFilters}
                        size="sm"
                        className="h-7 px-3"
                      >
                        <XIcon className="w-4 h-4 mr-1" />
                        Clear all
                      </Button>
                    )}
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col h-[calc(100vh-100px)] invisible-scrollbar">
                <Table className="text-base relative">
                  <TableHeader className="bg-gray-50 sticky top-0 z-10">
                    <TableRow>
                      <TableHead
                        className="cursor-pointer hover:text-primary transition-colors"
                        onClick={() => handleSort("name")}
                      >
                        <div className="flex items-center gap-1">
                          Student Name
                          <SortIcon columnKey="name" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer hover:text-primary transition-colors"
                        onClick={() => handleSort("company")}
                      >
                        <div className="flex items-center gap-1">
                          Placement Company
                          <SortIcon columnKey="company" />
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer hover:text-primary transition-colors"
                        onClick={() => handleSort("designation")}
                      >
                        <div className="flex items-center gap-1">
                          Designation/Role
                          <SortIcon columnKey="designation" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="h-32">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-muted-foreground">
                              No matching records found
                            </p>
                            <Button
                              variant="link"
                              onClick={clearFilters}
                              className="mt-2"
                            >
                              Clear all filters
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredStudents.map((student) => (
                        <TableRow
                          key={student.id}
                          className="hover:bg-muted/50 transition-colors cursor-default"
                        >
                          <TableCell className="font-medium">
                            {student.name}
                          </TableCell>
                          <TableCell>{student.company}</TableCell>
                          <TableCell>{student.designation}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent
              value="placement-report"
              className="space-y-8 pt-10 sm:pt-16"
            >
              <Heading title="Placement Report" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
