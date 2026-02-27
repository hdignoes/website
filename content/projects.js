// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS  →  Projects page (projects.html)
// ─────────────────────────────────────────────────────────────────────────────
//  tags:    array of strings shown as coloured chips
//  links:   style is "primary" (filled) or "outline" (bordered)
//  Note: the detailed technical write-up for each project lives in projects.html

const PROJECTS = [
  {
    title:    "UBCSC Digital Checkout — Fleet Management Kiosk",
    tags:     ["Python", "FastAPI", "Android", "Kotlin", "SQLite", "NFC", "Sailing Club"],
    summary:  "A full-stack fleet checkout system built for UBC Sailing Club, Canada's largest " +
              "not-for-profit sailing club. An Android kiosk app (Kotlin/Compose) with NFC card " +
              "scanning connects to a FastAPI backend to manage boat checkouts, verify member " +
              "certifications, and log all activity to Google Sheets in real time.",
    image:    "assets/checkout_img.jpeg",
    imageAlt: "Digital Checkout kiosk app — fleet management for UBC Sailing Club",
    links: [
      { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/ubcsailingclub/digital_checkout", style: "primary" },
    ],
  },
  {
    title:    "Methanation of Carbon Dioxide Using Hydrogen from Water Electrolysis",
    tags:     ["Energy", "Green Engineering", "Capstone"],
    summary:  "Capstone design project (Group P9), sponsored by FortisBC. Assessed and designed a " +
              "large-scale Sabatier process converting waste CO₂ from a BC biogas plant into " +
              "pipeline-ready renewable natural gas. CAPEX: $36.7 M · OPEX: $6 M/yr · " +
              "CleanBC Fund eligible: up to $12.8 M.",
    image:    "assets/capstone_img.PNG",
    imageAlt: "Capstone process flow diagram — Sabatier methanation plant",
    links: [
      { label: "Full Report (PDF)", icon: "fa-solid fa-file-pdf", url: "assets/capstone_report.pdf", style: "primary" },
      { label: "Project Poster",    icon: "fa-solid fa-image",    url: "https://apsc-chbe.sites.olt.ubc.ca/files/2021/04/P9-Poster.pdf",                                style: "outline" },
    ],
  },
];
