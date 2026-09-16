export type Block = { h?: string; p?: string[]; list?: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readMinutes: number;
  service: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "restaurant-opening-cost-uae",
    title: "What It Really Costs to Open a Restaurant in the UAE",
    description:
      "Where the money goes when you open a restaurant in the UAE, the costs owners forget, and how to build a budget that survives the first year.",
    category: "Pre-Opening",
    date: "2026-09-16",
    readMinutes: 7,
    service: "pre-opening",
    body: [
      {
        p: [
          "Most first-time owners ask for one number: how much does it cost to open a restaurant in the UAE? The honest answer is that it depends on the site, the concept and how much of the space already works for a kitchen. What we can tell you is where the money goes, and where budgets usually break.",
        ],
      },
      {
        h: "The main cost buckets",
        list: [
          "Site: rent deposit, key money if any, agent fees and the rent you pay while the site is still being fitted out.",
          "Licensing and approvals: trade licence, food safety approvals, civil defence and municipality inspections. In Abu Dhabi this runs through ADDED and ADAFSA; in Dubai through DET and Dubai Municipality.",
          "Design and fit-out: architect, MEP, interiors, signage, and the extraction and gas works a kitchen needs.",
          "Kitchen equipment: cooking line, refrigeration, dishwashing, storage and smallwares.",
          "Front of house: furniture, lighting, sound, POS and tableware.",
          "People: recruitment, visas, accommodation where relevant, uniforms and pre-opening salaries.",
          "Pre-opening: training, trial runs, opening stock, marketing and launch.",
          "Working capital: the cash that keeps the doors open while the restaurant builds trade.",
        ],
      },
      {
        h: "The costs owners forget",
        p: [
          "The fit-out quote rarely includes everything a kitchen needs. Exhaust hoods, grease traps, gas lines, drainage and fire suppression are often priced separately, and a site that was never a kitchen can need a lot of this work.",
          "Pre-opening salaries are the other one. Your team needs to be hired, trained and paid for weeks before the first guest arrives. If the opening date slips, that bill keeps running.",
        ],
      },
      {
        h: "Working capital is not optional",
        p: [
          "New restaurants rarely hit their target sales in the first months. Plan for a period where revenue does not yet cover rent, salaries and suppliers, and keep cash aside for it. Many restaurants that close in their first year had a good concept and simply ran out of money before it could prove itself.",
        ],
      },
      {
        h: "How to protect your budget",
        list: [
          "Choose the site with your kitchen needs in mind, not only the frontage.",
          "Plan the kitchen before the fit-out is priced, so the quote covers what service actually needs.",
          "Build a contingency into every line, not a single figure at the bottom.",
          "Fix the menu early. Equipment, space and staffing all follow from it.",
          "Treat the opening date as a cost. Every week of delay has a price.",
        ],
      },
      {
        p: [
          "If you are planning a restaurant, a pre-opening plan with a realistic budget is the cheapest insurance you can buy.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-planning-mistakes",
    title: "Kitchen Planning Mistakes That Cost Restaurants Every Night",
    description:
      "The commercial kitchen layout mistakes we see most often in UAE restaurants, and how to avoid them before the fit-out starts.",
    category: "Kitchen Planning",
    date: "2026-09-16",
    readMinutes: 6,
    service: "restaurant-design-kitchen-planning",
    body: [
      {
        p: [
          "A badly planned kitchen does not fail on opening day. It fails slowly, every night, in longer ticket times, tired staff, higher wastage and dishes that leave the pass later than they should. These are the mistakes we see most often, and almost all of them are cheaper to fix on paper than after the fit-out.",
        ],
      },
      {
        h: "1. Designing the kitchen around the space left over",
        p: [
          "Too often the dining room gets planned first and the kitchen gets whatever is left. The kitchen decides how many covers you can actually serve, so it deserves to be planned first.",
        ],
      },
      {
        h: "2. Ignoring the flow of food",
        p: [
          "Food should move in one direction: receiving, storage, preparation, cooking, the pass, then out. When raw and finished food cross paths, you lose time and create food safety risks.",
        ],
      },
      {
        h: "3. Not enough cold storage",
        p: [
          "Walk-ins and reach-ins are often cut to save space or money. The result is daily deliveries you cannot store, over-full fridges and more waste.",
        ],
      },
      {
        h: "4. Equipment chosen before the menu",
        p: [
          "Equipment should follow the menu, not the other way round. Buying a line before the dishes are fixed usually means paying for kit you do not use and missing kit you need.",
        ],
      },
      {
        h: "5. A pass that is too small",
        p: [
          "The pass is where the kitchen and the floor meet. If it cannot hold a full table's worth of plates, service slows down on every busy night.",
        ],
      },
      {
        h: "6. Dishwashing as an afterthought",
        p: [
          "A dish area that is too small or in the wrong place backs up the whole kitchen. Plan where dirty plates come in, where clean ones go and how pots get back to the line.",
        ],
      },
      {
        h: "7. Forgetting waste",
        p: [
          "Where does waste go, how is it separated and how does it leave the building without crossing clean areas? If the answer is unclear, it will become a daily problem.",
        ],
      },
      {
        h: "8. No room to grow",
        p: [
          "Menus change and sales grow. Leave space and utility capacity for at least one extra piece of equipment.",
        ],
      },
      {
        h: "Plan it with the people who will work in it",
        p: [
          "The best test of a kitchen plan is to walk through a busy service with the chef on paper, station by station. We design for the people who have to run the restaurant, because they are the ones who will live with every decision.",
        ],
      },
    ],
  },
  {
    slug: "food-cost-control",
    title: "How to Control Food Cost in Your Restaurant",
    description:
      "A practical guide to calculating and controlling restaurant food cost: recipe costing, ordering, storage, portioning and wastage.",
    category: "Operations",
    date: "2026-09-16",
    readMinutes: 6,
    service: "operations",
    body: [
      {
        p: [
          "Food cost is one of the two biggest numbers in a restaurant. When it creeps up, margins disappear quietly, often without anyone noticing until the month closes.",
        ],
      },
      {
        h: "Calculate it properly",
        p: [
          "Actual food cost for a period is opening stock plus purchases, minus closing stock, divided by food sales. It only works if stock is counted properly and on the same day each period.",
          "Compare that actual figure with your theoretical food cost: what the dishes you sold should have cost, based on your recipe costings. The gap between the two is where your money is going.",
        ],
      },
      {
        h: "Cost every recipe",
        p: [
          "Every dish needs a costed recipe card with exact quantities and current supplier prices. Without it, you cannot price the menu or know what a dish should cost. Update costings when supplier prices change.",
        ],
      },
      {
        h: "Where food cost leaks",
        list: [
          "Over-ordering and stock that expires before it is used.",
          "Poor storage: wrong temperatures, no first-in first-out, open containers.",
          "Inconsistent portions between cooks and shifts.",
          "Prep waste and trimming that is not planned into the recipe.",
          "Staff meals, comps and breakages that are not recorded.",
          "Deliveries accepted without checking weight, quality and price.",
        ],
      },
      {
        h: "Simple controls that work",
        list: [
          "Order against par levels, not habit.",
          "Check every delivery against the order and the invoice.",
          "Label and date everything, and rotate stock.",
          "Use scales and portion tools on the line.",
          "Keep a wastage log and review it every week.",
          "Count the high-value items more often than the rest.",
        ],
      },
      {
        h: "Know your target",
        p: [
          "There is no single right food cost percentage. It depends on your concept and pricing. What matters is that you set a target, measure against it every period and act when the gap between actual and theoretical grows.",
        ],
      },
    ],
  },
  {
    slug: "restaurant-labour-cost",
    title: "Restaurant Labour Cost: Schedule for Service, Not Habit",
    description:
      "How to manage restaurant labour cost without hurting service: forecasting, scheduling, cross-training and productivity.",
    category: "Operations",
    date: "2026-09-16",
    readMinutes: 5,
    service: "operations",
    body: [
      {
        p: [
          "Labour is the other big number. Together with food cost it makes up prime cost, and most restaurants that struggle financially have a problem with one or both.",
        ],
      },
      {
        h: "Start with a forecast",
        p: [
          "A rota should start from expected covers, not from last week's rota. Look at sales by day and by hour, factor in events and seasonality, and staff to that forecast.",
        ],
      },
      {
        h: "Schedule by the hour",
        p: [
          "Most restaurants have clear peaks. Staggered start and finish times match people to the rush and avoid paying a full team through a quiet afternoon.",
        ],
      },
      {
        h: "Cross-train your team",
        p: [
          "Staff who can cover more than one station give you flexibility on quiet shifts and resilience when someone is off sick.",
        ],
      },
      {
        h: "Fix the kitchen before you add people",
        p: [
          "If a kitchen needs extra hands to keep up, the problem is often the layout, the prep plan or the menu, not the headcount. A better workflow can do more for productivity than another hire.",
        ],
      },
      {
        h: "Measure it",
        list: [
          "Labour cost as a share of sales, every week.",
          "Sales or covers per labour hour.",
          "Overtime and how often it happens.",
          "Staff turnover, because recruiting and training cost money too.",
        ],
      },
      {
        p: [
          "Cutting labour too hard shows up in service and in reviews. The goal is not the smallest team, it is the right team at the right time.",
        ],
      },
    ],
  },
  {
    slug: "commercial-kitchen-equipment-selection",
    title: "Choosing Commercial Kitchen Equipment Without Overspending",
    description:
      "How to select commercial kitchen equipment for a new restaurant: start from the menu, plan capacity, and think about service and running costs.",
    category: "Kitchen Planning",
    date: "2026-09-16",
    readMinutes: 5,
    service: "restaurant-design-kitchen-planning",
    body: [
      {
        p: [
          "Equipment is one of the largest cheques you will write before opening, and one of the easiest places to overspend. The fix is to decide what the kitchen has to produce before deciding what to buy.",
        ],
      },
      {
        h: "Start from the menu",
        p: [
          "List every dish and the equipment each step needs. Then look at volume: how many of each dish at peak. That tells you what you need and how much capacity it must have.",
        ],
      },
      {
        h: "Questions to ask before you buy",
        list: [
          "Does it fit the space, including door widths and clearances?",
          "What utilities does it need: power, gas, water, drainage, extraction?",
          "Is there local service support and are spare parts available in the UAE?",
          "What does it cost to run, not only to buy?",
          "Can my team clean it properly in the time they have?",
          "Will it still suit the menu if the menu changes?",
        ],
      },
      {
        h: "Where to invest and where to save",
        p: [
          "Spend on the items that work hardest and are hardest to replace mid-service, such as your main cooking line, refrigeration and dishwashing. Save on items that are easy to add later.",
        ],
      },
      {
        h: "Avoid the common traps",
        list: [
          "Buying multi-function equipment you will not use.",
          "Choosing on price alone and paying for it in breakdowns.",
          "Ordering before the kitchen layout is final.",
          "Forgetting smallwares, which add up quickly.",
        ],
      },
      {
        p: [
          "A good equipment plan is part of a good kitchen plan. Get both right together and the kitchen will serve you for years.",
        ],
      },
    ],
  },
  {
    slug: "restaurant-pre-opening-checklist",
    title: "The Restaurant Pre-Opening Checklist",
    description:
      "A practical restaurant pre-opening checklist for the UAE: approvals, suppliers, hiring, training, systems and trial runs before opening day.",
    category: "Pre-Opening",
    date: "2026-09-16",
    readMinutes: 6,
    service: "pre-opening",
    body: [
      {
        p: [
          "The weeks before opening decide how the first months go. Use this checklist to make sure nothing important is left until the last minute.",
        ],
      },
      {
        h: "Approvals and compliance",
        list: [
          "Trade licence and the activities it covers.",
          "Food safety approvals and inspections with the relevant authority.",
          "Civil defence and fire safety sign-off.",
          "Staff health requirements and food safety training.",
          "Signage and any other permits your site needs.",
        ],
      },
      {
        h: "Suppliers and stock",
        list: [
          "Suppliers agreed for every category, with a backup for key items.",
          "Delivery days, order cut-offs and payment terms confirmed.",
          "Par levels set and opening stock ordered.",
        ],
      },
      {
        h: "People",
        list: [
          "Team hired, with visas and onboarding complete.",
          "Roles and responsibilities written down.",
          "Rota for opening week and the weeks after.",
        ],
      },
      {
        h: "Systems",
        list: [
          "POS set up with the full menu, modifiers and prices.",
          "SOPs for opening, closing, cleaning, receiving and service.",
          "Recipe cards and plating guides on the line.",
          "Stock counting and wastage recording in place.",
        ],
      },
      {
        h: "Training and trials",
        list: [
          "Menu tasting for the whole team.",
          "Station training in the actual kitchen.",
          "Service training for the floor.",
          "Soft-opening or friends-and-family services to test under pressure.",
        ],
      },
      {
        h: "The equipment and building",
        list: [
          "Every piece of equipment commissioned and tested.",
          "Extraction, gas, refrigeration and hot water checked under load.",
          "Snag list closed out with the contractor.",
        ],
      },
      {
        p: [
          "Opening day should feel like another trial run, not the first one. If you would like a team who has done this before beside you, that is exactly what our pre-opening support is for.",
        ],
      },
    ],
  },
  {
    slug: "restaurant-sops",
    title: "Restaurant SOPs That Staff Actually Follow",
    description:
      "How to write restaurant standard operating procedures that work on a busy shift: what to document, how to keep it short, and how to train it.",
    category: "Operations",
    date: "2026-09-16",
    readMinutes: 5,
    service: "operations",
    body: [
      {
        p: [
          "Without SOPs, standards depend on who is on shift. With SOPs nobody reads, the result is the same. The goal is procedures short and clear enough to be used in the middle of service.",
        ],
      },
      {
        h: "What to document first",
        list: [
          "Opening and closing for kitchen and floor.",
          "Receiving and storing deliveries.",
          "Food safety: temperatures, labelling, cleaning schedules.",
          "Recipes, portions and plating.",
          "Order of service and how guests are greeted and looked after.",
          "Handling complaints, refunds and comps.",
          "Cash handling and end-of-day reports.",
        ],
      },
      {
        h: "Keep them short",
        p: [
          "One task, one page. Use numbered steps, photos where they help and plain language your team will understand. If an SOP needs a long explanation, split it.",
        ],
      },
      {
        h: "Put them where the work happens",
        p: [
          "Recipe cards belong on the line. Opening checklists belong by the door. A manual in the office rarely changes behaviour.",
        ],
      },
      {
        h: "Train, then check",
        p: [
          "Walk each person through the SOPs for their role, then watch them do it. Use short daily checklists and regular spot checks so the standard holds after the first month.",
        ],
      },
      {
        h: "Review them",
        p: [
          "SOPs go out of date as the menu, suppliers and team change. Review them on a schedule and whenever something goes wrong.",
        ],
      },
    ],
  },
  {
    slug: "menu-engineering",
    title: "Menu Engineering: Which Dishes Actually Make You Money",
    description:
      "An introduction to menu engineering for restaurant owners: measuring popularity and profit per dish, and what to do with each category.",
    category: "Menu & Culinary",
    date: "2026-09-16",
    readMinutes: 6,
    service: "menu-culinary-development",
    body: [
      {
        p: [
          "Your best-selling dish is not always your most profitable one. Menu engineering is a simple way to see which dishes earn their place on the menu and which ones do not.",
        ],
      },
      {
        h: "The two numbers that matter",
        p: [
          "For every dish you need its popularity, meaning how many you sold over a period, and its contribution margin, meaning its selling price minus its food cost. Both come from your POS and your recipe costings.",
        ],
      },
      {
        h: "The four categories",
        list: [
          "Stars: popular and profitable. Protect them, keep quality consistent and give them the best spot on the menu.",
          "Plowhorses: popular but lower margin. Look at the recipe cost, the portion or a small price change.",
          "Puzzles: profitable but not popular. Try a better description, placement or a server recommendation.",
          "Dogs: neither popular nor profitable. Rework them or remove them.",
        ],
      },
      {
        h: "Design the menu around it",
        p: [
          "Where a dish sits on the menu affects how often it is ordered. Give your stars and puzzles the most visible positions, keep descriptions clear, and avoid lining prices up in a column that invites guests to shop by price.",
        ],
      },
      {
        h: "Think about the kitchen too",
        p: [
          "A dish can look profitable on paper and still cost you on the line if it is slow, uses unique ingredients or needs a dedicated station. Count prep time and complexity as well as margin.",
        ],
      },
      {
        h: "Repeat it",
        p: [
          "Run the analysis regularly, and always after price or supplier changes. A menu that is engineered once and then left alone drifts back to where it started.",
        ],
      },
    ],
  },
];
