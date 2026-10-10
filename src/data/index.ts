import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import photoHighlandCow from "@/routes/images/highland_cow.jpg";
import photoScottishHighland from "@/routes/images/scottish_highland.jpg";
import photoTemple from "@/routes/images/temple.jpg";
import photoEdinburghCanal from "@/routes/images/edinburgh_union_canal.jpg";
import photoRiverClyde from "@/routes/images/river_clyde_aerial.jpg";
import photoAyrAirshow from "@/routes/images/ayr_airshow_wingwalkers.jpg";
import photoBoudhanath from "@/routes/images/boudhanath_stupa.jpg";
import photoDharahara from "@/routes/images/dharahara_tower.jpg";
import photoPhewaLake from "@/routes/images/phewa_lake_pokhara.jpg";
import photoHillMonastery from "@/routes/images/nepal_hill_monastery.jpg";
import photoKushmaBungee from "@/routes/images/kushma_cliff_bungee.jpg";
import photoCarrickCliffs from "@/routes/images/carrick_coastal_cliffs.jpg";

export const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#photography", label: "Photography" },
  { href: "#contact", label: "Contact" },
];

export const SKILL_CATEGORIES = [
  { title: "Programming Languages", items: "Dart, Python" },
  { title: "Mobile Development", items: "Flutter, Android, Responsive UI, Custom Animations" },
  { title: "State Management", items: "BLoC, Riverpod" },
  { title: "Backend & APIs", items: "REST API Integration, Firebase, Authentication, Push Notifications" },
  { title: "Database & Storage", items: "Pinecone, Hive, Shared Preferences, Secure Storage" },
  { title: "AI & Machine Learning", items: "NLP, Retrieval-Augmented Generation (RAG), LLMs, Semantic Search, Sentence Transformers, Model Fine-tuning" },
  { title: "Tools & Platforms", items: "Git, GitHub, GitLab, Android Studio, VS Code, Flutter DevTools" },
  { title: "Software Engineering", items: "Clean Architecture, Reusable Components, Debugging, Performance Optimisation, Testing" },
  { title: "Deployment", items: "Google Play Store, Apple App Store, Streamlit" },
];

export const PROJECTS = [
  {
    img: project2,
    title: "InsightPaper AI | AI Research Assistant",
    desc: "MSc dissertation project — developed and deployed an AI-powered question-answering system for research papers using Python, Streamlit, RAG, and LLMs. Implemented PDF text extraction, semantic embeddings, vector search with Pinecone, fine-tuned Sentence Transformers (achieving 100% Recall@5 and 1.0000 MRR), and LLM-as-a-Judge quality evaluation.",
    tags: ["Python", "RAG", "LLMs", "Pinecone", "Streamlit"],
  },
  {
    img: project1,
    title: "Straw Holding Mobile App",
    desc: "Developed and maintained production Flutter applications using the BLoC pattern, clean architecture, and modular UI. Integrated Firebase (auth, real-time chat, push notifications) and handled Apple App Store deployment.",
    tags: ["Flutter", "BLoC", "Firebase", "iOS"],
  },
  {
    img: project3,
    title: "Multi-Gateway Payment Integration",
    desc: "Engineered robust and secure payment processing pipelines integrating eSewa, Khalti, MyPay, and Stripe across Flutter applications with comprehensive error handling.",
    tags: ["Flutter", "Dart", "Stripe"],
  },
  {
    img: project4,
    title: "Offline-First Mobile Apps (Code Himalaya)",
    desc: "Built responsive Flutter apps with offline-first capabilities, Riverpod state management, local and secure storage (Hive, Secure Storage), localization, and custom animations.",
    tags: ["Flutter", "Riverpod", "Hive", "REST APIs"],
  },
  {
    img: project5,
    title: "Native Android Integration & Play Store",
    desc: "Integrated Flutter modules into native Android projects, optimized performance and APK size via Flutter DevTools, and deployed apps to the Google Play Store.",
    tags: ["Android", "Flutter", "DevTools"],
  },
  {
    img: project6,
    title: "Real-Time Chat & Cloud Messaging",
    desc: "Engineered scalable real-time messaging using Firebase Firestore with read receipts, active typing indicators, and cloud push notification routing.",
    tags: ["Firebase", "Flutter", "Push Notifications"],
  },
];

export const EXPERIENCE = [
  {
    role: "Mobile App Developer",
    org: "Straw Holding",
    when: "Jan 2024 — Jul 2025",
    points: [
      "Developed and maintained Flutter applications using the BLoC pattern, clean code principles, and reusable components.",
      "Integrated Firebase for authentication, real-time chat, and push notifications.",
      "Implemented payment gateways including eSewa, Khalti, MyPay, and Stripe.",
      "Managed application deployment to the Apple App Store and integrated REST APIs and third-party services.",
      "Improved application reliability through debugging, performance optimisation, and ongoing maintenance.",
    ],
    active: true,
  },
  {
    role: "Flutter Developer",
    org: "Code Himalaya",
    when: "Sep 2022 — Dec 2023",
    points: [
      "Developed Flutter applications with offline support, REST API integration, and Riverpod state management.",
      "Implemented local and secure storage, localisation, custom animations, and responsive UI for phones and tablets.",
      "Optimised app performance and size using Flutter DevTools and integrated third-party packages.",
      "Integrated Flutter modules into native Android projects and published applications on the Google Play Store.",
      "Followed reusable code practices and contributed to debugging, testing, and application maintenance.",
    ],
    active: false,
  },
  {
    role: "Flutter Developer Intern",
    org: "QC Gen",
    when: "May 2022 — Aug 2022",
    points: [
      "Assisted in developing mobile applications using Flutter and Dart.",
      "Implemented UI screens, integrated REST APIs, and worked on application debugging and testing.",
      "Gained practical experience in state management, reusable components, and mobile app development best practices.",
    ],
    active: false,
  },
];

export const EDUCATION = [
  {
    degree: "MSc Artificial Intelligence and Data Science",
    institution: "Edinburgh Napier University",
    grade: "Final CGPA: 3.90",
    dissertationTitle: "InsightPaper AI | AI Research Assistant",
    dissertationDesc:
      "Developed and deployed an end-to-end question-answering system using Python, Streamlit, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs). Fine-tuned Sentence Transformers achieving 100% Recall@5 and 1.0000 MRR on evaluation data.",
    points: [
      "Specialised in Applied AI, Natural Language Processing, Retrieval-Augmented Generation (RAG), and Large Language Models.",
      "Evaluated answer quality using faithfulness, relevance, completeness, and LLM-as-a-Judge techniques.",
    ],
  },
];

export const POSTS = [
  {
    title: "Optimize and Reduce the Flutter App Size",
    platform: "Medium",
    url: "https://medium.com/@kafleysaagar/optimize-and-reduce-the-flutter-app-size-febccc0b28de",
    cat: "Performance",
    desc: "A practical guide to analyzing size contributions with Flutter DevTools, splitting ABIs, tree shaking, and trimming asset overhead for lean release builds.",
  },
  {
    title: "Stripe Integration in Flutter",
    platform: "Medium",
    url: "https://medium.com/@kafleysaagar/stripe-integration-in-flutter-ebfc87ba02ea",
    cat: "Payments",
    desc: "Step-by-step implementation guide for secure mobile checkout flows with the Stripe Payment Sheet SDK, handling webhook events, and Android configurations.",
  },
];

export interface Photograph {
  id: string;
  title: string;
  location: string;
  region: "Scotland" | "Nepal" | "UK" | string;
  year: string;
  camera: string;
  image: string;
  caption: string;
  story?: {
    title: string;
    readTime: string;
    paragraphs: string[];
  };
}

export const PHOTOGRAPHS: Photograph[] = [
  {
    id: "highland-cow",
    title: "Highland Coo in Scottish Meadows",
    location: "Pollok Country Park, Glasgow, Scotland",
    region: "Scotland",
    year: "2025",
    camera: "ISO 32 • f/3.4 • 1/640s",
    image: photoHighlandCow,
    caption: "A magnificent Scottish Highland cow grazing peacefully in open summer pastures under passing rain clouds.",
    story: {
      title: "The Quiet Majesty of the Highland Coo",
      readTime: "2 min read",
      paragraphs: [
        "Few sights define the Scottish landscape quite like the iconic Highland cattle — with their sweeping horns, shaggy rust-colored coats, and utterly unflappable demeanor in any weather.",
        "I encountered this gentle giant on an afternoon walk through the meadows of Pollok Park in Glasgow. The clouds were shifting fast, dropping soft natural shadows across the green hillside. Framing through a 115mm telephoto lens let me capture the intimacy of the scene without disturbing the animal's quiet rhythm.",
        "Watching the cow slowly graze against the backdrop of ancient woodland was a grounding reminder of nature’s quiet pace — a welcome antidote to the fast-moving cycles of modern development."
      ],
    },
  },
  {
    id: "scottish-highlands",
    title: "Spring Snow on the Highland Ridgeline",
    location: "West Highlands, Scotland",
    region: "Scotland",
    year: "2026",
    camera: "ISO 64 • f/2.8 • 1/400s",
    image: photoScottishHighland,
    caption: "Alpine snow blanketing rugged Scottish peaks, towering over dense evergreen pine forest under breaking cloud cover.",
    story: {
      title: "Where Winter Lingers on the Summit",
      readTime: "2 min read",
      paragraphs: [
        "Travelling north through the Scottish Highlands in early spring brings one of the country's most dramatic visual contrasts: deep, evergreen pine forests blanketing the lower glen, rising steeply into rugged mountain ridges still dusted in snow.",
        "The mountain peak seemed to play hide-and-seek behind heavy Scottish clouds, appearing and vanishing as the wind swept across the valley. Catching the peak framed squarely above the tree canopy highlighted the sheer scale and raw atmosphere of the terrain.",
        "Throughout my Master's studies at Edinburgh Napier, these Highland escapes became essential journeys to reset, find perspective, and marvel at the wild, untamed beauty of northern Scotland."
      ],
    },
  },
  {
    id: "kathmandu-temple",
    title: "Sacred Pagoda & Wings in Flight",
    location: "Kathmandu Valley, Nepal",
    region: "Nepal",
    year: "2025",
    camera: "ISO 64 • f/3.4 • 1/550s",
    image: photoTemple,
    caption: "A solitary bird sweeps across a brilliant azure sky above the moss-lined tiers of a traditional Nepali pagoda temple.",
    story: {
      title: "Centuries of Clay, Wood, and Devotion",
      readTime: "3 min read",
      paragraphs: [
        "Kathmandu's ancient squares are living open-air sanctuaries of Newari artistry. Every carved wooden strut, weathered terracotta roof tile, and gilded spire (gajur) carries centuries of ancestral craftsmanship, spiritual devotion, and cultural resilience.",
        "I took this shot as the afternoon sun cut through billowing white clouds, illuminating the vibrant green moss lining the multi-tiered eaves. At that exact fraction of a second, a bird took flight overhead, bridging timeless stone and living movement.",
        "Coming from Nepal, these historic temples have always felt like home. In technology, we constantly race towards the next new release; standing here reminds me that the most enduring things in life are crafted with deep care, patience, and timeless intention."
      ],
    },
  },
  {
    id: "edinburgh-canal",
    title: "Autumn Reflections on Union Canal",
    location: "Union Canal, Edinburgh, Scotland",
    region: "Scotland",
    year: "2025",
    camera: "ISO 12 • f/1.7 • 1/345s",
    image: photoEdinburghCanal,
    caption: "The 'All Aboard' canal boat resting calmly along the quiet towpath beneath golden autumn trees and historic stone tenements.",
    story: {
      title: "Along the Quiet Waters of Edinburgh",
      readTime: "2 min read",
      paragraphs: [
        "The Union Canal towpath was one of my favourite daily retreats during my Master's at Edinburgh Napier. Stretching from the city centre out towards the Pentland Hills, it offers an escape from urban bustle into slow, mirror-like calm.",
        "On this brisk November afternoon, the water was as still as glass, capturing the vibrant yellow-and-blue hull of the barge and the golden turning leaves of the overhanging canopy.",
        "Moments like this reflect the balance Edinburgh provides: world-class academic rigour surrounded by centuries of unhurried history and nature."
      ],
    },
  },
  {
    id: "river-clyde-aerial",
    title: "Descent Over the Clyde",
    location: "River Clyde, Glasgow, Scotland",
    region: "Scotland",
    year: "2025",
    camera: "ISO 12 • f/1.7 • 1/750s",
    image: photoRiverClyde,
    caption: "A freighter navigates the opened swing bridge along the historic River Clyde seen from the airplane window on approach to Glasgow.",
    story: {
      title: "Glasgow from the Skies",
      readTime: "2 min read",
      paragraphs: [
        "Descending through Scotland's cloud layers into Glasgow Airport, the aircraft banked gracefully over the winding River Clyde.",
        "Looking down through the oval window, I spotted a cargo vessel gliding smoothly downriver right as the new swing bridge opened its arms to let it pass.",
        "The Clyde's shipbuilding heritage defined Scotland's industrial prowess for generations; seeing modern commerce flow through those historic channels from above was unforgettable."
      ],
    },
  },
  {
    id: "boudhanath-stupa",
    title: "The All-Seeing Eyes of Boudhanath",
    location: "Boudhanath Stupa, Kathmandu, Nepal",
    region: "Nepal",
    year: "2025",
    camera: "ISO 32 • f/3.4 • 1/570s",
    image: photoBoudhanath,
    caption: "The compassionate gaze of the Buddha eyes beneath the gilded spire, adorned with colorful wind-blown prayer flags.",
    story: {
      title: "A Sanctuary of Tibetan Spirituality",
      readTime: "2 min read",
      paragraphs: [
        "Boudhanath is one of the largest spherical stupas in the world and the spiritual epicentre of Tibetan Buddhism in the Kathmandu Valley. The rhythmic chanting of monks and the spinning of brass prayer wheels give the mandala a hypnotic serenity.",
        "Looking straight up at the gilded harmika, the painted eyes look out in all four cardinal directions, symbolizing universal awareness and compassion.",
        "No matter how fast the world outside spins, stepping into the stupa's circular path brings an immediate, settling clarity."
      ],
    },
  },
  {
    id: "phewa-lake",
    title: "Dusk on Phewa Lake",
    location: "Phewa Lake, Pokhara, Nepal",
    region: "Nepal",
    year: "2020",
    camera: "ISO 50 • f/1.8 • 1/690s",
    image: photoPhewaLake,
    caption: "Handcrafted wooden doonga boats anchored along the placid waters of Phewa Lake as dusk settles over the Annapurna foothills.",
    story: {
      title: "Stillness by the Lakeside",
      readTime: "2 min read",
      paragraphs: [
        "Pokhara has a serene rhythm unlike anywhere else. In the late afternoon, after the daytime breeze dies down, the waters of Phewa Lake turn completely glassy.",
        "The brightly painted wooden rowing boats (doongas) rest gently along the shore while the surrounding Himalayan foothills fade into soft twilight mist.",
        "This frame captures that peaceful pause right between sunset and nightfall, where conversation drops to a murmur and water laps softly against the wooden hulls."
      ],
    },
  },
  {
    id: "dharahara-tower",
    title: "Dharahara Reborn",
    location: "Dharahara, Kathmandu, Nepal",
    region: "Nepal",
    year: "2025",
    camera: "ISO 40 • f/1.7 • 1/4930s",
    image: photoDharahara,
    caption: "The gleaming white tower of Dharahara rising boldly between the bustling traditional alleyways of Kathmandu.",
    story: {
      title: "A Monument of Resilience",
      readTime: "2 min read",
      paragraphs: [
        "Dharahara (Bhimsen Tower) holds deep emotional significance for every Nepali. Having witnessed history and tragedy across two centuries, seeing it reconstructed and standing tall again is deeply moving.",
        "Walking through the narrow street market, the white minaret suddenly reveals itself framed tightly between brick shopfronts and electric wires, soaring into the blue sky.",
        "It stands as a testament to the resilience of Kathmandu — enduring through seismic shifts while maintaining its cultural identity."
      ],
    },
  },
  {
    id: "nepal-hill-monastery",
    title: "Valley Road to the Hill Monastery",
    location: "Dhulikhel Valley Hills, Nepal",
    region: "Nepal",
    year: "2025",
    camera: "ISO 40 • f/1.7 • 1/3925s",
    image: photoHillMonastery,
    caption: "A winding hill highway cutting through lush terraced greens toward a gilded Buddhist monastery perched high on the ridge.",
    story: {
      title: "Into the Hills of Dhulikhel",
      readTime: "2 min read",
      paragraphs: [
        "Leaving the bustle of Kathmandu behind, the road winds up into the lush pine-clad ridges of Dhulikhel and Kavre.",
        "From this high vantage point through the pines, the road snake bends below while the monastery's golden roof shines proudly against the mountain backdrop.",
        "The journey itself teaches mindfulness: every bend reveals another tier of terraced fields and distant Himalayan ranges."
      ],
    },
  },
  {
    id: "ayr-airshow",
    title: "Wingwalkers Above the Coast",
    location: "Ayr Beach Coast, Scotland",
    region: "Scotland",
    year: "2026",
    camera: "ISO 32 • f/3.4 • 1/2435s",
    image: photoAyrAirshow,
    caption: "AeroSuperBatics biplanes soaring in formation with daring wingwalkers leaving billowing smoke trails across the Scottish sky.",
    story: {
      title: "Acrobatics Over the Firth of Clyde",
      readTime: "2 min read",
      paragraphs: [
        "Attending the International Scottish Airshow along the Ayr seafront offered exhilarating moments of aviation precision.",
        "These vintage Boeing Stearman biplanes performed synchronized loops and rolls while acrobats stood fearless on the upper wings.",
        "Shooting at 1/2400s shutter speed froze the performers mid-pose against the clouds, capturing human bravery and mechanical beauty in a single frame."
      ],
    },
  },
  {
    id: "kushma-cliff-bungee",
    title: "The Leap of Faith",
    location: "The Cliff, Kushma, Nepal",
    region: "Nepal",
    year: "2024",
    camera: "ISO 100 • f/2.8 • 1/1000s",
    image: photoKushmaBungee,
    caption: "Suspended in pure freefall 228 meters above the raging Kaligandaki river from the world's second-highest bungee platform.",
    story: {
      title: "Conquering the Gorge at The Cliff",
      readTime: "2 min read",
      paragraphs: [
        "Standing on the edge of the cantilever platform at Kushma, 228 meters above the roaring Kaligandaki River gorge, your instincts scream to step back.",
        "Taking that leap into the open void is an unmatched surge of adrenaline and release. For those few seconds of weightlessness, fear disappears entirely.",
        "Life and software engineering both require taking bold leaps into the unknown; this jump was a visceral reminder of what lies on the other side of hesitation."
      ],
    },
  },
  {
    id: "carrick-cliffs",
    title: "Cliffs of the Atlantic",
    location: "Carrick-a-Rede Coast, UK",
    region: "Scotland & UK",
    year: "2026",
    camera: "ISO 50 • f/2.4 • 1/370s",
    image: photoCarrickCliffs,
    caption: "Dramatic sea cliffs plunging into emerald Atlantic waters around the rugged headlands of Carrick-a-Rede.",
    story: {
      title: "Where Land Meets the Ocean Surge",
      readTime: "2 min read",
      paragraphs: [
        "The jagged northern coastline is a masterclass in elemental power. Giant basalt headlands cut into deep turquoise water, shaped by millennia of relentless ocean swells.",
        "Looking down along the cliff trail towards the offshore island, the contrast between weathered volcanic rock, bright yellow gorse bushes, and vibrant ocean depths is mesmerizing.",
        "It's a place where the scale of nature makes everything else feel quiet and small."
      ],
    },
  },
];

export const TESTIMONIALS: any[] = [];
