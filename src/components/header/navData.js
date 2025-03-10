export const navlinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    dropdown: [
      {
        name: "Academic Advisory Board",
        path: "/about/academic-advisory-board",
      },
      {
        name: "Accreditations & Rankings",
        path: "/about/accreditations-rankings",
      },
      {
        name: "Board of Governors",
        path: "/about/board-of-governors",
      },
      {
        name: "Board of Studies",
        path: "/about/board-of-studies",
      },
      // {
      //   name: "Core Values",
      //   path: "/about/core-values",
      // },
      {
        name: "Message from Leaders",
        path: "/about/leadership",
        // subDropdown: [
        //   { name: "Director's Message", path: "/about/directors-message" },
        //   { name: "Founder's Message", path: "/about/leadership" },
        //   { name: "President's Message", path: "/about/presidents-message" },
        //   {
        //     name: "Vice-President's Message",
        //     path: "/about/vice-presidents-message",
        //   },
        // ],
      },
      // {
      //   name: "Milestones",
      //   path: "/about/milestones",
      // },
      {
        name: "Vision & Mission",
        path: "/about/vision-mission",
      },
    ],
  },
  {
    name: "Admissions",
    dropdown: [
      // { name: "Admission Process", path: "/admissions/process" },
      // { name: "Apply Now", path: "/admissions/apply" },
      { name: "FPM/EFPM", path: "/admissions/fpm-efpm" },
      { name: "PGDM BA", path: "/admissions/pgdm-ba" },
      { name: "PGDM BIFS", path: "/admissions/pgdm-bifs" },
      {
        name: "PGDM Triple Specialisation",
        path: "/admissions/pgdm-triple-specialisation",
      },
    ],
  },
  {
    name: "Alumni",
    path: "/alumni",
  },
  {
    name: "Faculty & Research",
    dropdown: [
      {
        name: "Faculty",
        subDropdown: [
          { name: "Areas", path: "/faculty/areas" },
          { name: "Faculty Publications", path: "/faculty/publications" },
        ],
      },
      {
        name: "Research",
        subDropdown: [
          {
            name: "Case Research Center",
            path: "/research/case-research-center",
          },
          { name: "Conferences", path: "/research/conferences" },
          { name: "Ph.D. Scholars", path: "/research/phd-scholars" },
        ],
      },
    ],
  },
  {
    name: "International Relations",
    path: "/international-relations",
  },
  {
    name: "Placement",
    dropdown: [
      { name: "Placement Records", path: "/placement/records" },
      { name: "Placement Team", path: "/placement/team" },
      { name: "Internship Placement", path: "/placement/records" },
    ],
  },
  {
    name: "Programs",
    dropdown: [
      {
        name: "FPM/EFPM",
        path: "/programs/fpm-efpm",
      },
      {
        name: "PGDM",
        subDropdown: [
          { name: "PGDM BA", path: "/programs/pgdm-ba" },
          { name: "PGDM BFIS", path: "/programs/pgdm-bfis" },
          {
            name: "PGDM Triple Specialisation",
            path: "/programs/pgdm-triple-specialisation",
          },
        ],
      },
    ],
  },
  {
    name: "Student's Life",
    dropdown: [
      // { name: "Activities", path: "/students-life/activities" },
      // { name: "Campus Life", path: "/students-life/campus" },
      {
        name: "Events & Activities",
        subDropdown: [
          { name: "News & Announcements", path: "/students-life/news" },
          {
            name: "Student's Achievements",
            path: "/students-life/achievements",
          },
        ],
      },
      {
        name: "International Immersions",
        path: "/students-life/international-immersions",
      },
      { name: "Life at SSIM", path: "/students-life/life-at-ssim" },
    ],
  },
  { name: "Contact Us", path: "/contact-us" }, // Added Contact Us link
];
