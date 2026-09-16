export type Service = {
  slug: string;
  n: string;
  title: string;
  summary: string;
  includes: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "concept-development",
    n: "01",
    title: "Concept Development",
    summary:
      "Shaping the idea into a restaurant that can work: positioning, feasibility and menu direction before money is committed.",
    includes: [
      "Concept and positioning",
      "Market and site feasibility",
      "Menu direction",
      "Investment and operating model",
    ],
    seoTitle: "Restaurant Concept Development Consultant UAE",
    seoDescription:
      "Restaurant concept development in the UAE: positioning, feasibility and menu direction from consultants who run restaurants.",
  },
  {
    slug: "restaurant-design-kitchen-planning",
    n: "02",
    title: "Restaurant Design & Kitchen Planning",
    summary:
      "Kitchens and floors planned around how the team actually works, so service flows on the busiest night.",
    includes: [
      "Kitchen layout and workflow",
      "Equipment planning and selection",
      "BOH and FOH planning",
      "Receiving, storage and waste flow",
      "Operational planning with your architect",
    ],
    seoTitle: "Restaurant Kitchen Planning Consultant UAE",
    seoDescription:
      "Commercial kitchen planning in the UAE: layout, equipment, workflow, storage and food safety, designed for the people who run the kitchen.",
  },
  {
    slug: "menu-culinary-development",
    n: "03",
    title: "Menu & Culinary Development",
    summary:
      "Menus that taste right, cost right and can be cooked consistently by your team at volume.",
    includes: [
      "Recipe development and testing",
      "Recipe costing and pricing",
      "Menu engineering",
      "Kitchen trials",
    ],
    seoTitle: "Menu Development and Menu Engineering Consultant UAE",
    seoDescription:
      "Menu development, recipe costing and menu engineering for restaurants and cafés in the UAE.",
  },
  {
    slug: "pre-opening",
    n: "04",
    title: "Pre-Opening",
    summary:
      "Everything between the keys and the first guest, handled by people who have opened restaurants before.",
    includes: [
      "SOPs and manuals",
      "Recruitment support and training",
      "Procurement and supplier set-up",
      "Commissioning and trial runs",
    ],
    seoTitle: "Restaurant Pre-Opening Consultant UAE",
    seoDescription:
      "Restaurant pre-opening support in the UAE: SOPs, recruitment, training, procurement, commissioning and trial runs.",
  },
  {
    slug: "operations",
    n: "05",
    title: "Operations",
    summary:
      "Systems for the day-to-day: what gets bought, what it costs, who does what and how the guest is looked after.",
    includes: [
      "Operational audits",
      "FOH and BOH systems",
      "Purchasing and food cost control",
      "Labour cost and productivity",
      "Guest experience",
    ],
    seoTitle: "Restaurant Operations Consultant UAE",
    seoDescription:
      "Restaurant operations consulting in the UAE: audits, FOH and BOH systems, food cost, labour cost and guest experience.",
  },
  {
    slug: "turnaround-optimisation",
    n: "06",
    title: "Turnaround & Optimisation",
    summary:
      "For restaurants that are open but not working as they should. We find the problems and fix them on the floor.",
    includes: [
      "Diagnosing what is going wrong",
      "Profitability improvement",
      "Wastage reduction",
      "Operational optimisation",
    ],
    seoTitle: "Restaurant Turnaround Consultant UAE",
    seoDescription:
      "Restaurant turnaround and optimisation in the UAE: find the problems, improve profitability and reduce wastage.",
  },
];

export const journey = [
  { title: "Idea", blurb: "Your concept, market and ambition." },
  { title: "Strategy", blurb: "Positioning, feasibility and the numbers." },
  { title: "Design", blurb: "Kitchen, floor and workflow." },
  { title: "Build", blurb: "Equipment, suppliers and fit-out support." },
  { title: "Pre-Opening", blurb: "People, SOPs, training and trials." },
  { title: "Launch", blurb: "Opening with the team beside you." },
  { title: "Optimise", blurb: "Costs, systems and guest experience." },
];

export const audiences = [
  "First-time restaurant owners",
  "Restaurant owners who need operational improvement",
  "Investors entering hospitality",
  "Hospitality groups and multi-unit operators",
  "Cloud kitchen operators",
  "Hotels and hotel F&B",
];

export const founders = [
  {
    name: "Qaiz",
    role: "Co-Founder & Operations Director",
    bio: "Leads operations: kitchen planning, supply chain and the systems that keep a restaurant running day to day.",
  },
  {
    name: "Dheeraj",
    role: "Co-Founder & Strategy Director",
    bio: "Leads strategy: concept development and the financial planning that makes every decision pay for itself.",
  },
];

// Add only real, client-approved entries. Sections stay hidden while empty.
export const caseStudies: {
  title: string;
  location: string;
  type: string;
  challenge: string;
  scope: string;
  approach: string;
  results: string;
  image?: string;
}[] = [];

export const testimonials: {
  quote: string;
  name: string;
  company: string;
  project?: string;
  image?: string;
}[] = [];

export const verifiedStats: { value: string; label: string }[] = [];
