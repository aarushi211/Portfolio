
import type { Project } from "./types";

export const safeGamesLA: Project = {
    slug: "safegamesla",
    name: "Safe Games LA",
    featured: true,

    desc:
        "Geospatial public-safety analytics and AI-assisted decision support for Los Angeles Olympic venues.",

    tags: [
        "Geospatial Analytics",
        "Gemini",
        "Python",
        "FastAPI",
        "Cloud Run",
    ],

    cats: ["Data Science", "LLM & Agents"],

    github:
        "https://github.com/aarushi211/safe-games-la",

    // Hosted application is restricted to authorized accounts.
    // Add a public demo link when one is available.
    // live: "",

    // Add these when the assets are ready.
    demoVideo: "https://youtu.be/dgjrY2rhmpc?si=an8aEA7QZ9rWsSPP",
    // demoLength: "",
    thumbnail: "/images/olympic-rings.svg",
    architectureImage: "/images/safegamesla-architecture.png",

    overview:
        "Safe Games LA is a geospatial analytics platform designed to support public-safety planning around Los Angeles 2028 Olympic venues. It combines historical crime records, transit infrastructure, emergency-service locations, event information, and weather data into interactive maps and venue-specific briefings. An AI assistant enables natural-language exploration of the underlying data.",

    problem:
        "Planning public safety for large events requires understanding historical incident patterns, transportation access, nearby emergency resources, and local conditions. This information is scattered across different datasets, making it difficult for planners to compare venues and identify potential coordination needs.",

    contribution:
        "Developed a venue-focused analytics application integrating public-safety, transit, weather, event, and emergency-service datasets. Implemented geospatial analysis, interactive visualizations, venue comparisons, and a natural-language assistant that connects LLM-generated tool requests to deterministic Python calculations.",

    arch: [
        [
            "Data ingestion & preparation",
            "Process public datasets covering LAPD crime reports, NIBRS offenses, LA28 venues, Metro transit, emergency facilities, historical weather, and event information.",
        ],
        [
            "Geospatial analysis",
            "Calculate venue-level incident counts, density, nearby transit access, and distances to emergency facilities using geographic boundaries and spatial relationships.",
        ],
        [
            "Interactive analytics",
            "Present citywide crime heatmaps, venue briefings, temporal patterns, offense distributions, and side-by-side venue comparisons.",
        ],
        [
            "AI-assisted querying",
            "Use Gemini 2.5 Flash to interpret natural-language questions and select appropriate analytical operations.",
        ],
        [
            "Deterministic computation",
            "Execute calculations in Python and verify generated numerical responses against the selected venue, period, and computed results.",
        ],
        [
            "Application & deployment",
            "Serve the analytics application through FastAPI, integrate Google Maps, and deploy the hosted briefing on Google Cloud Run.",
        ],
    ],

    decisions: [
        {
            title: "Venue-centered geospatial analysis",
            rationale:
                "Organized the application around Olympic venues rather than presenting crime data as isolated citywide statistics. This allows planners to explore historical patterns alongside nearby transit and emergency resources.",
            tradeoff:
                "Fixed-radius geographic analysis can include overlapping venue areas and does not capture actual travel times, operational boundaries, or the causes of reported incidents.",
        },
        {
            title: "Deterministic analytics with an LLM interface",
            rationale:
                "Used Gemini to interpret questions and select analytical operations while keeping numerical calculations in Python. Generated responses are checked against the computed results.",
            tradeoff:
                "The assistant is limited by available analytical operations and dataset coverage. Numerical verification does not guarantee that every interpretation or explanation is correct.",
        },
        {
            title: "Preserving dataset comparability",
            rationale:
                "Kept LAPD police-report counts and NIBRS offense counts separate because the reporting systems measure different units. This avoids presenting changes in reporting methodology as changes in crime.",
            tradeoff:
                "Historical trends become more complex to visualize and explain, particularly around the March 2024 reporting transition.",
        },
        {
            title: "Combining multiple planning signals",
            rationale:
                "Integrated crime patterns, transit access, emergency facilities, weather, and event-day information to provide more useful venue-level context than a single-source dashboard.",
            tradeoff:
                "Different datasets have different geographic coverage, reporting periods, update schedules, and reliability constraints.",
        },
    ],

    results:
        "Built an interactive briefing covering 14 LA28 venues, with crime heatmaps, venue-level analytics, comparative views, nearby emergency resources, and AI-assisted exploration.",

    validation:
        "The application includes Python unit tests and deterministic checks for analytical calculations. The AI assistant verifies generated numerical responses against the relevant venue, time period, and computed results. Historical comparisons account for changes in crime-reporting methodology. No independently validated prediction accuracy or operational public-safety impact is claimed.",

    limitations:
        "Safe Games LA is a planning prototype, not a real-time crime prediction or emergency-response system. Historical incident concentrations do not establish future risk or causation. Geographic coverage and data completeness vary, reporting methodologies differ across periods, and the hosted application currently requires authorized access.",

    learnings:
        "Explored geospatial data integration, historical trend analysis, interactive visualization, and tool-based LLM workflows. Focused on making numerical outputs reproducible, handling incompatible reporting systems, and communicating uncertainty in public-safety analytics.",
};
