// ─────────────────────────────────────────────────────────────────────────────
//  POSTS  →  Blog page (blog.html)
// ─────────────────────────────────────────────────────────────────────────────
//  url:            path to the full article page (relative to website/)
//  relatedProject: set to null if there is no related project

const POSTS = [
  {
    title:    "Building a Digital Fleet Checkout System for a University Sailing Club",
    subtitle: "How I replaced a paper logbook with an NFC kiosk, a FastAPI backend, and a lot of Kotlin",
    date:     "February 2025",
    readTime: "~10 min read",
    tags:     ["Software", "Android", "Python", "Sailing Club", "Engineering"],
    summary:  "As president of UBC Sailing Club — Canada's largest not-for-profit sailing club — " +
              "I built a full-stack digital checkout system to replace our paper logbook. This post " +
              "covers the architecture, the key design decisions, and what I learned building " +
              "a kiosk app with NFC card scanning from scratch.",
    image:    "assets/project-digital-checkout.jpg",
    imageAlt: "UBCSC Digital Checkout kiosk app on tablet",
    url:      "post-digital-checkout.html",
    relatedProject: { label: "UBCSC Digital Checkout", url: "projects.html" },
  },
  {
    title:    "Natural Gas in a Sustainable World",
    subtitle: "The case for methane as part of a transition to clean energy",
    date:     "December 13, 2020",
    readTime: "~8 min read",
    tags:     ["Energy", "Sustainability", "Chemical Engineering"],
    summary:  "Natural gas and natural gas infrastructure can play a key role in a country's " +
              "transition to clean energy, and might be the key to centralized renewable power " +
              "storage. I make the case for the Sabatier process as a bridge technology — storing " +
              "solar and wind energy as carbon-neutral methane using existing pipeline infrastructure.",
    image:    "starter-hugo-academic-master/content/post/natural-gas-in-a-sustainable-world/featured.jpg",
    imageAlt: "Biogas plant",
    url:      "post-natural-gas.html",
    relatedProject: { label: "Sabatier Methanation Capstone", url: "projects.html" },
  },
];
