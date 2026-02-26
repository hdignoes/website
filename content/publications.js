// ─────────────────────────────────────────────────────────────────────────────
//  PUBLICATIONS  →  About page (index.html)
// ─────────────────────────────────────────────────────────────────────────────
//  papers[]:        peer-reviewed journal articles
//  presentations[]: conference talks and posters
//
//  For both arrays:
//    authors  – full author string; use <strong> to bold your name
//    year     – publication/presentation year (string)
//    title    – paper/presentation title
//    doi/url  – link to paper or abstract (null if none)
//
//  presentations[] extra fields:
//    venue    – conference name
//    location – city, state/country and date range
//    type     – "Oral" | "Poster" | "Presentation"

const PUBLICATIONS = {

  papers: [
    {
      authors: "Tabbara, M., Zong, Z., <strong>Ricart, H. D.</strong>, Chifra, S., &amp; Upham, C.",
      year:    "2024",
      title:   "Propane oxidative dehydrogenation catalyzed by molten metal alloys.",
      journal: "Catalysis Science &amp; Technology",
      doi:     "https://doi.org/10.1039/d4cy00976b",
    },
  ],

  presentations: [
    {
      authors: "<strong>Ricart, H. D.</strong>, Webber, C., Traboulay, K., Semler, T., Peterson, E., &amp; Zimmerman, N.",
      year:    "2026",
      title:   "Making Sense of Air Sensors: A Three-Pronged Approach to Publicly Sharing Air Quality Data.",
      venue:   "Air Sensors International Conference (ASIC) 2026",
      location:"Los Angeles, California",
      type:    "Oral",
      url:     null,
    },
    {
      authors: "Webber, C., <strong>Ricart, H. D.</strong>, Kumar, A., Peterson, E., Salo, L., &amp; Zimmerman, N.",
      year:    "2026",
      title:   "Influence of Building Characteristics on Indoor Air Quality in Community Clean Air Spaces.",
      venue:   "Air Sensors International Conference (ASIC) 2026",
      location:"Los Angeles, California",
      type:    "Poster",
      url:     null,
    },
    {
      authors: "Philpot, S., Liu, Z., <strong>Ricart, H. D.</strong>, Kaufmann, C., Satterfield, T., &amp; Giang, A.",
      year:    "2024",
      title:   "Decision Support for Zero-Impact Marine Shipping.",
      venue:   "INFORMS Annual Meeting",
      location:"Seattle, Washington, October 20–23, 2024",
      type:    "Presentation",
      url:     null,
    },
    {
      authors: "Philpot, S., <strong>Ricart, H. D.</strong>, Liu, Z., Satterfield, T., &amp; Giang, A.",
      year:    "2023",
      title:   "Cross-impacts balance analysis of marine shipping environmental futures.",
      venue:   "American Geophysical Union (AGU) Fall Meeting",
      location:"San Francisco, California, December 11–15, 2023",
      type:    "Poster",
      url:     "https://agu.confex.com/agu/fm23/meetingapp.cgi/Paper/1451758",
    },
  ],

};
