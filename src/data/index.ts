import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
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

export const TESTIMONIALS: any[] = [];
