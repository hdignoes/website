// ─────────────────────────────────────────────────────────────────────────────
//  PROFILE  →  used on every page (nav, hero, contact, footer)
// ─────────────────────────────────────────────────────────────────────────────

const PROFILE = {
  name:     "Hugo Dignoes Ricart",
  role:     "PhD Student in Mechanical Engineering",
  org:      "University of British Columbia",
  orgUrl:   "https://ireach.mech.ubc.ca/",
  location: "Vancouver, BC, Canada",

  website:  "https://www.hdignoes.com",
  email:    "hugo.dignoes@ubc.ca",
  github:   { url: "https://github.com/hdignoes",              handle: "github.com/hdignoes" },
  linkedin: { url: "https://www.linkedin.com/in/hugo-dignoes/", handle: "hugo-dignoes" },

  // Paths relative to website/
  avatarPath: "assets/profile_pic.jpg",
  cvPath:     "assets/curriculum_vitae.pdf",

  // ── About page bio ──────────────────────────────────────────────────────────
  // Each string becomes one paragraph. Basic HTML (e.g. <strong>) is allowed.
  bio: [
    `I am a PhD student in Mechanical Engineering at the University of British Columbia, researching the use
    of low(er)-cost air quality sensors with Dr. Naomi Zimmerman. My research focuses on advanced calibration
     methods, source apportionment of outdoor pollution, and building reactive transport models using data from
     dense low-cost sensor networks. During my MEng I worked with Dr. Amanda Giang's LEAP Lab (UBC - IRES/MECH),
     and Dr. Chester Upham (UBC - CHBE), with whom I wrote my MEng thesis focused on novel catalytic dehydrogenation
     processes for propylene production.`,

    `In my free time, I volunteer with Jericho Rescue and am the sitting president of the UBC Sailing Club!`,
  ],
};
