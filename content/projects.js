// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS  →  Projects page (projects.html)
// ─────────────────────────────────────────────────────────────────────────────
//  tags:    array of strings shown as coloured chips
//  links:   style is "primary" (filled) or "outline" (bordered)
//  Note: the detailed technical write-up for each project lives in projects.html

const PROJECTS = [
  {
    title:    "Community Clean Air Spaces (CCAS) Study Dashboard",
    tags:     ["JavaScript", "Python", "R", "HTML/CSS", "Air Quality", "PhD"],
    summary:  "A real-time air quality monitoring dashboard developed during my PhD at UBC, in collaboration with Vancouver Coastal Health. " +
              "Part of the Community Cleaner Air Spaces (CCAS) Study, which deploys ~20 low-cost sensor pairs across BC to monitor outdoor and indoor air quality. " +
              "The frontend (helloaqdashboard.ca) displays live sensor data via an interactive Leaflet map, pollutant time-series graphs (PM2.5, AQHI, O\u2083, NO\u2082, CO\u2082), " +
              "and a sensor directory — with an air quality alert banner. " +
              "Sensor data is calibrated and processed through a Python/R data pipeline, running on a local machine with a GitHub Actions fallback.",
    image:    "assets/ccas_graphs.png",
    imageAlt: "PM2.5 time-series graph from the CCAS air quality dashboard",
    links: [
      { label: "Live Site",       icon: "fa-solid fa-arrow-up-right-from-square", url: "http://helloaqdashboard.ca",                          style: "primary" },
      { label: "Frontend (GitHub)", icon: "fa-brands fa-github",                  url: "https://github.com/iREACH-UBC/CCAS_Website",           style: "outline" },
      { label: "Backend (GitHub)",  icon: "fa-brands fa-github",                  url: "https://github.com/iREACH-UBC/CCAS_Dashboard",         style: "outline" },
    ],
  },
  {
    title:    "UBCSC Digital Checkout — Fleet Digital Checkout",
    tags:     ["Python", "FastAPI", "Android", "Kotlin", "SQLite"],
    summary:  "A full-stack fleet checkout system built for UBC Sailing Club, Canada's largest " +
              "not-for-profit sailing club. An Android kiosk app (Kotlin/Compose) with NFC card " +
              "scanning connects to a FastAPI & Python backend to manage boat checkouts, verify member " +
              "certifications, and log all activity to Google Sheets in real time. QoL improvements have been rolled out, including damage reporting, improved UI, and connection to the Jericho weather station.",
    image:    "assets/checkout_img.jpeg",
    imageAlt: "Digital Checkout kiosk app — fleet management for UBC Sailing Club",
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/ubcsailingclub/digital_checkout", style: "primary" },
    ],
  },
  {
    title:    "Methanation of Carbon Dioxide Using Hydrogen from Water Electrolysis",
    tags:     ["Energy", "Green Engineering", "Capstone"],
    summary:  "Capstone design project (Group P9), sponsored by FortisBC. Assessed and designed a large-scale Sabatier process to upcycle waste biogas into pipeline-ready natural gas. This project was selected by industry leaders to receive the Design and Innovation Day Award.",
    image:    "assets/capstone_img.PNG",
    imageAlt: "Capstone process flow diagram — Sabatier methanation plant",
    links: [
      { label: "Full Report (PDF)", icon: "fa-solid fa-file-pdf", url: "assets/capstone_report.pdf", style: "primary" },
      { label: "Project Poster",    icon: "fa-solid fa-image",    url: "https://apsc-chbe.sites.olt.ubc.ca/files/2021/04/P9-Poster.pdf",                                style: "outline" },
    ],
  },
];
