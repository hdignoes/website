// ─────────────────────────────────────────────────────────────────────────────
//  EXPERIENCE  →  Experience page (experience.html)
// ─────────────────────────────────────────────────────────────────────────────
//  dateEnd: set to null for your current position (shows "Current" badge)
//  bullets: array of strings; basic HTML is allowed

const EXPERIENCE = [
  {
    title:      "Mitacs Intern",
    company:    "UBC – LEAP Lab",
    companyUrl: "https://www.leap-ires.org/",
    location:   "Vancouver, BC",
    dateStart:  "Sept 2023",
    dateEnd:    null,
    bullets: [
      "Holistically assessed various technologies for the decarbonization of the Canadian Coast Guard fleet as part of a Mitacs-funded interdisciplinary research project.",
      "Established stakeholder needs through structured consultation and workshops, then designed performance metrics accordingly to create a decision-making framework applicable to fleet transition planning.",
    ],
  },
  {
    title:      "Process Engineering Consultant",
    company:    "Freelance — contracted by Exaer Carbon",
    companyUrl: "https://exaercarbon.com/",
    location:   "Boulder, CO (Remote)",
    dateStart:  "May 2023",
    dateEnd:    "Aug 2023",
    bullets: [
      "Conducted a feasibility analysis on a proposed catalytic process to support a patent application.",
      "Simulated the process using open-source modelling software and custom Python code.",
      "Performed sensitivity analysis to identify possible break-even conditions.",
      "Produced a Class 5 technoeconomic model and levelized cost of production estimate.",
    ],
  },
  {
    title:      "Student Researcher",
    company:    "UBC – Catalysis Lab (Upham Group)",
    companyUrl: "https://upham.chbe.ubc.ca/",
    location:   "Vancouver, BC",
    dateStart:  "Oct 2021",
    dateEnd:    "Nov 2023",
    bullets: [
      "Performed a technoeconomic analysis of novel propane dehydrogenation catalysts and their associated processes.",
      "Extensive simulation using Python and AspenTech software (Aspen Plus, HYSYS, Adsorption, Energy Analyzer).",
      "Modelled reactor kinetics as well as upstream and downstream unit operations including separations and heat integration.",
      "Sized and costed all necessary equipment; determined operating expenses and conducted a full economic evaluation.",
    ],
  },
  {
    title:      "Tutor",
    company:    "Paper",
    companyUrl: "https://paper.co/",
    location:   "Vancouver, BC",
    dateStart:  "Aug 2020",
    dateEnd:    "Jul 2021",
    bullets: [
      "Helped schools across the United States and Canada adapt to online learning during the COVID-19 pandemic by providing 24/7 on-demand academic support.",
      "Subjects: Chemistry & Biochemistry, Physics, Mathematics, Cellular Biology, Spanish, and French.",
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
      "Gathered and synthesized stakeholder feedback to develop iterative quality-of-life and comfort improvements to PPE designs without compromising safety standards.",
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
      "Maintained equipment and managed chemical and material waste disposal.",
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
      "Coordinated across two other sub-teams to create an empirical model of car velocity and iodine-clock reaction timing as a function of initial conditions.",
    ],
  },
];
