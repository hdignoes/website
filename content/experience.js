// ─────────────────────────────────────────────────────────────────────────────
//  EXPERIENCE  →  Experience page (experience.html)
// ─────────────────────────────────────────────────────────────────────────────
//  dateEnd: set to null for current positions (shows "Current" badge)
//  bullets: array of strings; basic HTML is allowed

const EXPERIENCE = [

  // ── Current positions (dateEnd: null) ──────────────────────────────────────

  {
    title:      "Graduate Researcher",
    company:    "UBC iREACH Lab — Zimmerman Group",
    companyUrl: "https://ireach.mech.ubc.ca/",
    location:   "Vancouver, BC",
    dateStart:  "Sept 2024",
    dateEnd:    null,
    bullets: [
      "Conduct research on air quality in community spaces (libraries, recreation centres, places of worship), with a focus on measurement, interpretation, and public communication.",
      "Develop and apply machine-learning calibration approaches for low-cost air quality sensors measuring multiple pollutants.",
      "Design data processing and dissemination workflows for near-real-time communication of air quality information through a public-facing dashboard and third-party chatbot platform.",
    ],
  },

  {
    title:      "Mitacs Intern — Knowledge Mobilization",
    company:    "UBC & Clear Seas",
    companyUrl: "https://www.clearseas.org/",
    location:   "Vancouver, BC",
    dateStart:  "Sept 2025",
    dateEnd:    null,
    bullets: [
      "Coordinating a webinar series connecting researchers, government, and industry stakeholders to facilitate knowledge exchange on marine shipping risk and environmental futures.",
      "Managing logistics, speaker outreach, and session design to support translation of research findings for non-academic audiences.",
    ],
  },

  {
    title:      "Teaching Assistant",
    company:    "University of British Columbia",
    companyUrl: "https://www.ubc.ca/",
    location:   "Vancouver, BC",
    dateStart:  "2022",
    dateEnd:    null,
    bullets: [
      "CHBE 464 — Chemical and Biological Engineering Laboratory (2023, 2024, 2025, 2026)",
      "ENVE 203 — Environmental Engineering and Sustainability (2024, 2025, 2026)",
      "ENVE 201 — Technical Communications for Environmental Engineering (2024)",
      "LFS 250 — Land, Food, and Community (2023, 2024)",
    ],
  },

  {
    title:      "Tutor",
    company:    "Tutorbright, HY Academy, Paper, and Freelance",
    companyUrl: "",
    location:   "Vancouver, BC",
    dateStart:  "Aug 2014",
    dateEnd:    "Aug 2025",
    bullets: [
      "Tutor high school and undergraduate students in Physics, Chemistry, Mathematics, and more.",
    ],
  },

  // ── Past positions ─────────────────────────────────────────────────────────

  {
    title:      "Mitacs Intern — Marine Shipping Decarbonization",
    company:    "UBC LEAP Lab & Clear Seas",
    companyUrl: "https://www.leap-ires.org/",
    location:   "Vancouver, BC",
    dateStart:  "Sept 2023",
    dateEnd:    "Apr 2024",
    bullets: [
      "Contributed to an interdisciplinary research project examining decarbonization pathways for the Canadian Coast Guard fleet.",
      "Participated in stakeholder consultation and structured decision-making workshops to identify priorities, evaluation criteria, and performance metrics.",
      "Applied systems thinking and cross-impact balance analysis to develop scenarios for the adoption of marine decarbonization technologies.",
      "Integrated qualitative and quantitative evidence to support comparative assessment of potential transition pathways.",
    ],
  },

  {
    title:      "Process Consultant",
    company:    "Freelance — contracted by Exaer Carbon",
    companyUrl: "https://exaercarbon.com/",
    location:   "Boulder, CO (Remote)",
    dateStart:  "May 2023",
    dateEnd:    "Aug 2023",
    bullets: [
      "Conducted a feasibility analysis of a proposed process coupling strategy in support of a patent application.",
      "Simulated a catalytic process using open-source tools and custom Python scripts.",
      "Performed sensitivity analyses to identify potential break-even conditions.",
      "Produced a Class 5 technoeconomic model and levelized cost estimate.",
    ],
  },

  {
    title:      "Student Researcher",
    company:    "UBC — Upham Group (Chemical Looping ODH of Propane)",
    companyUrl: "https://upham.chbe.ubc.ca/",
    location:   "Vancouver, BC",
    dateStart:  "Oct 2021",
    dateEnd:    "Mar 2024",
    bullets: [
      "Conducted a technoeconomic analysis of novel propane dehydrogenation processes.",
      "Built and validated process simulations for conventional and alternative process configurations using AspenTech software and Python, informed by literature and experimental data.",
      "Performed CAPEX and OPEX estimation using CapCost, CatCost, and Aspen Plus models.",
      "Evaluated process cases using discounted cash flow rate of return, net present value, and levelized cost of production.",
    ],
  },

  {
    title:      "Product Manager",
    company:    "DECAP Research & Development",
    companyUrl: "https://www.decaprandd.com/",
    location:   "Vancouver, BC",
    dateStart:  "May 2020",
    dateEnd:    "Aug 2020",
    bullets: [
      "Worked with a 3D printing start-up to make affordable personal protective equipment available at the onset of the COVID-19 pandemic.",
      "Gathered and synthesized stakeholder feedback to develop iterative quality-of-life improvements to PPE designs without compromising safety standards.",
    ],
  },

  {
    title:      "Research Assistant",
    company:    "UBC Biofoundry",
    companyUrl: "https://biofoundry.sites.olt.ubc.ca/",
    location:   "Vancouver, BC",
    dateStart:  "Apr 2018",
    dateEnd:    "May 2019",
    bullets: [
      "Collaborated with a PhD candidate on the measurement of mechanical properties of viscoelastic neural cells.",
      "Designed and fabricated a novel measurement device that reduced cost by 80% relative to the existing prototype while improving measurement accuracy.",
      "Worked independently, designing experimental procedures and collecting and analyzing data to validate the device.",
    ],
  },

  {
    title:      "VP External",
    company:    "UBC Envision — AIChE Student Chapter",
    companyUrl: "https://www.ubcenvision.com/",
    location:   "",
    dateStart:  "Jun 2018",
    dateEnd:    "Oct 2018",
    bullets: [
      "Organized conferences over the summer and in preparation for the upcoming academic year.",
      "Served as liaison between the UBC AIChE chapter and the sister chapter at Universitat Politècnica de Catalunya in Barcelona.",
    ],
  },

  {
    title:      "Safety Officer",
    company:    "UBC Envision",
    companyUrl: "https://www.ubcenvision.com/",
    location:   "",
    dateStart:  "Jun 2017",
    dateEnd:    "Jun 2018",
    bullets: [
      "Responsible for risk assessment and hazard mitigation across all Envision teams and projects.",
      "Conducted regular safety inspections and audits of two laboratories, one workshop, and one workroom.",
      "Led the restructuring of UBC ChemE Car into the umbrella organization UBC Envision, revising all SOPs and retraining affected members.",
    ],
  },

  {
    title:      "Electrical Team Lead",
    company:    "UBC ChemE Car",
    companyUrl: "https://www.ubcenvision.com/chemecar/",
    location:   "",
    dateStart:  "Sep 2016",
    dateEnd:    "May 2017",
    bullets: [
      "Led a team of 6 students in the design and construction of the electrical system for a small chemically-powered car.",
      "Built and optimized a control system using an Arduino microcontroller, MOSFETs, servo motors, and photoresistors.",
      "Coordinated across sub-teams to create an empirical model of car velocity and iodine-clock reaction timing as a function of initial conditions.",
    ],
  },

];
