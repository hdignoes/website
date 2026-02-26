// ─────────────────────────────────────────────────────────────────────────────
//  POSTS  →  Writing page (writing.html)
// ─────────────────────────────────────────────────────────────────────────────
//  url:            path to the full article page (relative to website/)
//  relatedProject: set to null if there is no related project

const POSTS = [
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
