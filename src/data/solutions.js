// ─── Solutions Page Data ──────────────────────────────────────────────────────
const demoCta = { label: "Request a Demo", href: "/contact" };
const salesCta = { label: "Talk to Sales", href: "/contact" };
const contactSalesCta = { label: "Contact Sales", href: "/contact" };

export const solutions = {
  financial: {
    id: "financial",
    slug: "financial",
    type: "industry",
    industry: "Financial Services",

    hero: {
      eyebrow: "Bridgesoft for Financial Services",
      headline: "Infrastructure serious banks don't compromise on.",
      subtext:
        "From interbank settlements to retail banking — Bridgesoft powers the systems financial institutions can't afford to get wrong.",
      backgroundImage:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_vector-1682303138926-784bf1b4ebd3?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by institutions across financial services",
      proofPoints: ["Access Bank", "Flutterwave", "Interswitch", "Stanbic IBTC"],
    },

    problem: {
      statement: "Most banking software was built for a world that no longer exists.",
      body:
        "Legacy systems slow down new products, make compliance painful, and fail at the worst possible moment. When a bank's infrastructure goes down, it isn't just an IT problem — it's a trust problem. Financial institutions need infrastructure that was built to hold, not just to work in demos.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiShieldKeyholeLine",
          title: "Compliance without the headache",
          description:
            "Clear audit trails, access controls, and data residency rules built in from the start — so your team spends less time preparing for reviews and more time serving customers.",
        },
        {
          icon: "RiCloudLine",
          title: "Infrastructure that holds",
          description:
            "Bridgesoft Cloud is built for financial workloads — not adapted for them. Four owned, carrier-neutral data centers across Africa with 99.99% uptime SLA.",
        },
        {
          icon: "RiDatabase2Line",
          title: "One version of the truth",
          description:
            "Transactions, customer records, and risk data in a single, queryable layer. Your teams stop arguing about numbers and start making decisions faster.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "The cloud serious banks use.",
      description:
        "Bridgesoft Cloud runs core banking, payments, and digital channels for financial institutions across Africa — with the security, uptime, and data residency controls the sector demands.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — financial services",
    },

    useCases: [
      {
        title: "Core banking infrastructure",
        description:
          "Run payments, accounts, and digital channels on infrastructure designed for institutions that operate around the clock. No planned downtime. No excuses.",
        image:
          "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Regulatory compliance",
        description:
          "Access controls, audit logs, and data management rules that keep your institution on the right side of every regulator — without slowing your team down.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "900+", label: "Financial clients supported" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "3", label: "Regional data centers" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Financial Services Solutions | Bridgesoft",
      description:
        "Reliable cloud and data infrastructure for banks, insurers, and fintech companies across Africa.",
    },
  },

  "public-sector": {
    id: "public-sector",
    slug: "public-sector",
    type: "industry",
    industry: "Public Sector",

    hero: {
      eyebrow: "Bridgesoft for Public Sector",
      headline: "The infrastructure governments run on.",
      subtext:
        "From national identity systems to civil service payroll — Bridgesoft builds and hosts the platforms citizens depend on every day.",
      backgroundImage:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_photo-1733317260639-6fb8eb703c78?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by institutions across the public sector",
      proofPoints: ["NIMC", "Ministry of Finance", "Lagos State", "Ghana eGov"],
    },

    problem: {
      statement: "Government technology has a credibility problem.",
      body:
        "Citizens expect digital services that work. What they get is often slow, fragmented, and unreliable. The problem isn't ambition — it's the infrastructure underneath. Governments need platforms that are secure enough for sensitive data, accountable enough for public trust, and stable enough to scale across states and agencies.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiGovernmentLine",
          title: "Data stays where it should",
          description:
            "Citizen data, payroll records, and identity infrastructure hosted in-country — on infrastructure the government controls, not a vendor overseas.",
        },
        {
          icon: "RiFileList3Line",
          title: "Built for accountability",
          description:
            "Every action logged. Every change tracked. The kind of audit trail that makes finance reviews, parliamentary inquiries, and third-party audits straightforward.",
        },
        {
          icon: "RiTeamLine",
          title: "Built once, deployed across agencies",
          description:
            "Stand up a platform for one ministry, then extend it to the next. No starting over. No reinventing the wheel.",
        },
      ],
    },

    spotlight: {
      divisionId: "enterprise",
      divisionName: "Bridgesoft Enterprise",
      eyebrow: "Featured product",
      title: "One platform for finance, HR, and operations.",
      description:
        "Bridgesoft Enterprise powers payroll, procurement, and citizen service management at national scale. We've been doing this since the Federal Ministry of Finance contract in 2001.",
      cta: { label: "Explore Bridgesoft Enterprise", href: "/products/enterprise" },
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Enterprise — public sector",
    },

    useCases: [
      {
        title: "National identity and citizen services",
        description:
          "Bridgesoft Data hosts and manages the database core linking over 160 million Nigerian citizens to the national digital ID system — and has done so reliably since 2014.",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Sovereign government cloud",
        description:
          "Agencies that handle sensitive data need cloud infrastructure they actually control. Bridgesoft Cloud offers on-premise and sovereign cloud deployment — data never leaves without authorisation.",
        image:
          "https://images.unsplash.com/photo-1735385102811-199278409ee2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "180+", label: "Public sector clients" },
      { value: "160M+", label: "Citizens on Bridgesoft-hosted national ID" },
      { value: "Since 2001", label: "Government-grade track record" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Public Sector Solutions | Bridgesoft",
      description:
        "Sovereign cloud, enterprise software, and data infrastructure for governments across Africa.",
    },
  },

  healthcare: {
    id: "healthcare",
    slug: "healthcare",
    type: "industry",
    industry: "Healthcare & Life Sciences",

    hero: {
      eyebrow: "Bridgesoft for Healthcare & Life Sciences",
      headline: "Connected health infrastructure, built to scale.",
      subtext:
        "Patient data, hospital operations, and compliance management on one platform — so care teams spend more time on patients, less on paperwork.",
      backgroundImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by institutions across healthcare",
      proofPoints: ["Reddington", "Hygeia", "mPharma", "Lagos Health"],
    },

    problem: {
      statement: "Patient information shouldn't live in six different places.",
      body:
        "Fragmented records slow down diagnosis, lead to repeated tests, and put patients at risk. Hospital leadership can't manage what they can't see. Health systems need connected data, clear privacy controls, and infrastructure stable enough to run 24 hours a day — not tomorrow. Now.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiHospitalLine",
          title: "One complete patient record",
          description:
            "Clinical notes, lab results, prescriptions, and admission history in a single record — accessible to the right people, at the right time.",
        },
        {
          icon: "RiLock2Line",
          title: "Privacy built in from the start",
          description:
            "Role-based access, encrypted storage, and full audit trails — designed for health data privacy rules across African markets.",
        },
        {
          icon: "RiBarChartGroupedLine",
          title: "Operational visibility for leadership",
          description:
            "Real-time views of bed capacity, wait times, and programme performance — so hospital leaders can make decisions on current information, not last week's reports.",
        },
      ],
    },

    spotlight: {
      divisionId: "data",
      divisionName: "Bridgesoft Data",
      eyebrow: "Featured product",
      title: "Health data that actually connects.",
      description:
        "Bridgesoft Data powers shared health records and operational reporting for large hospital networks — handling the kind of data volumes and sensitivity requirements the healthcare sector demands.",
      cta: { label: "Explore Bridgesoft Data", href: "/products/data" },
      backgroundImage:
        "https://images.unsplash.com/photo-1584036561561-d466889f8dcc?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Data — healthcare",
    },

    useCases: [
      {
        title: "Unified patient records",
        description:
          "A patient seen at an emergency unit shouldn't arrive at a specialist with no history. Bridgesoft connects records across facilities so care teams always have the full picture.",
        image:
          "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Compliance and record management",
        description:
          "Who accessed a record. When. Why. What changed. All of it logged automatically — so compliance reviews become straightforward instead of stressful.",
        image:
          "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&auto=format&fit=crop",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "120+", label: "Health networks supported" },
      { value: "14", label: "African markets" },
      { value: "24/7", label: "Uptime for critical health systems" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Healthcare & Life Sciences Solutions | Bridgesoft",
      description:
        "Connected health records, operational visibility, and privacy-compliant infrastructure for hospitals across Africa.",
    },
  },

  logistics: {
    id: "logistics",
    slug: "logistics",
    type: "industry",
    industry: "Supply Chain & Logistics",

    hero: {
      eyebrow: "Bridgesoft for Supply Chain & Logistics",
      headline: "Every link in the chain, connected.",
      subtext:
        "Ports, warehouses, and carriers on one platform — so goods move faster and your team always knows what's happening.",
      backgroundImage:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_vector-1723266253608-85a7f5251b26?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by institutions across supply chain and logistics",
      proofPoints: ["APM Terminals", "DHL", "Maersk", "Red Star Express"],
    },

    problem: {
      statement: "When every site runs different software, the chain breaks.",
      body:
        "Manual handoffs between ports, warehouses, and carriers create delays that compound across borders. The problem isn't effort — it's visibility. Logistics operators need to see the whole chain, connect the tools they already have, and move on from the firefighting.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiShipLine",
          title: "Port and terminal operations",
          description:
            "Berth planning, cargo tracking, and customs management on infrastructure built to run continuously — because logistics doesn't stop at 5pm.",
        },
        {
          icon: "RiLinksLine",
          title: "Connects what you already have",
          description:
            "Bridgesoft integrates with existing ERP, WMS, and carrier systems — so you get the connections without the full replacement project.",
        },
        {
          icon: "RiLineChartLine",
          title: "End-to-end visibility",
          description:
            "Track shipments, delays, and throughput across every site in one dashboard. See problems before they become customer complaints.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "Operations that can't afford to go offline.",
      description:
        "Bridgesoft Cloud runs port management, warehouse systems, and carrier platforms for logistics operators across Africa — with the reliability and 24/7 support the sector requires.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — supply chain",
    },

    useCases: [
      {
        title: "Warehouse and inventory management",
        description:
          "Real-time stock levels, pick lists, and orders across every site — so your warehouses and distribution centers stay aligned with actual demand.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Fleet and route management",
        description:
          "Plan routes, track vehicles in transit, and share delivery updates with partners automatically — from the port gate to the customer's door.",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&auto=format&fit=crop",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "200+", label: "Logistics operators supported" },
      { value: "40%", label: "Average reduction in IT overhead" },
      { value: "3", label: "Regional operating hubs" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Supply Chain & Logistics Solutions | Bridgesoft",
      description:
        "End-to-end visibility and connected operations for ports, carriers, and logistics operators across Africa.",
    },
  },

  migration: {
    id: "migration",
    slug: "migration",
    type: "use-case",
    industry: "Cloud Migration",

    hero: {
      eyebrow: "Bridgesoft for Cloud Migration",
      headline: "Move to the cloud without betting the business on it.",
      subtext:
        "A structured migration with clear steps, real testing, and infrastructure we own — not rent.",
      backgroundImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by teams moving to Bridgesoft Cloud",
      proofPoints: [
        "1,200+ migrations completed",
        "Four owned Tier-III data centers across Africa",
        "Zero data sovereignty compromises",
      ],
    },

    problem: {
      statement: "Most cloud migrations fail because the plan looked better on paper.",
      body:
        "Teams underestimate how connected their systems are, rush the cutover, and spend weeks recovering. The result is downtime that damages customer relationships and internal confidence. Good migrations aren't about speed — they're about doing it in the right order, with proper testing, and having infrastructure you can actually trust on the other side.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiRouteLine",
          title: "A plan built around your risk, not ours",
          description:
            "We sequence migrations by business impact — the most critical systems move last, with the most testing. Nothing goes live until it's ready.",
        },
        {
          icon: "RiRefreshLine",
          title: "Run both systems side by side",
          description:
            "Old and new infrastructure operate in parallel during the transition. If something isn't right, you go back. No drama.",
        },
        {
          icon: "RiServerLine",
          title: "Infrastructure we own",
          description:
            "Lagos, Nairobi, Johannesburg, Cairo. Four carrier-neutral, Tier-III certified data centers. Your data stays where you need it.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "Cloud built for African institutions.",
      description:
        "Bridgesoft Cloud is owned infrastructure — not a reseller arrangement. That means your data stays in-country, your SLA is real, and your migration has a team behind it that actually controls the environment.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — migration",
    },

    useCases: [
      {
        title: "Retiring legacy data centers",
        description:
          "Move applications and databases off aging on-premise hardware onto Bridgesoft facilities — with a phased plan that keeps services running throughout.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Modernising during the move",
        description:
          "Migration is the right time to improve — not just relocate. We help teams update legacy applications as they move, so you land in a better place than where you started.",
        image:
          "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "Hybrid setups for sensitive workloads",
        description:
          "Not everything moves at once. Sensitive data stays on dedicated infrastructure while less critical systems shift to shared cloud — giving you control without slowing everything down.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
    ],

    stats: [
      { value: "1,200+", label: "Migrations completed on Bridgesoft Cloud" },
      { value: "63MW", label: "Total data center capacity across Africa" },
      { value: "99.99%", label: "Uptime SLA post-migration" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Cloud Migration | Bridgesoft",
      description:
        "Structured, low-risk cloud migration on Bridgesoft's owned African infrastructure.",
    },
  },

  compliance: {
    id: "compliance",
    slug: "compliance",
    type: "use-case",
    industry: "Data Compliance",

    hero: {
      eyebrow: "Bridgesoft for Data Compliance",
      headline: "Compliance that works with your team, not against it.",
      subtext:
        "Clear records, consistent rules, and regional regulatory support — built into the platform, not bolted on after the fact.",
      backgroundImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by regulated institutions across Africa",
      proofPoints: [
        "4,300+ enterprise clients on Bridgesoft platforms",
        "Compliance support across 14 African markets",
        "Included on all Enterprise plans",
      ],
    },

    problem: {
      statement: "Compliance fails when the rules live in a spreadsheet.",
      body:
        "Different teams interpret regulations differently. Auditors arrive and the evidence is scattered across inboxes, shared drives, and legacy systems. The fix isn't more effort — it's building compliance into how data is managed from the beginning, so reviews stop being emergencies.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiScales3Line",
          title: "Rules that match your region",
          description:
            "Data residency, retention policies, and consent management aligned to banking, health, and government requirements across 14 African markets.",
        },
        {
          icon: "RiFileShield2Line",
          title: "Evidence that's always ready",
          description:
            "Who accessed what, when, and why — logged automatically and exportable on demand. Audit preparation goes from weeks to hours.",
        },
        {
          icon: "RiUserSettingsLine",
          title: "Access control that actually works",
          description:
            "Role-based permissions across cloud, data, and enterprise applications — so sensitive functions stay separated and the right people have the right access.",
        },
      ],
    },

    spotlight: {
      divisionId: "data",
      divisionName: "Bridgesoft Data",
      eyebrow: "Featured product",
      title: "Compliance built into how data is stored.",
      description:
        "Bridgesoft Data manages information at the source — so your compliance rules follow the data automatically instead of being applied manually after the fact.",
      cta: { label: "Explore Bridgesoft Data", href: "/products/data" },
      backgroundImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Data — compliance",
    },

    useCases: [
      {
        title: "Cross-border data management",
        description:
          "Operating across multiple African markets means navigating multiple regulatory frameworks. Bridgesoft applies the right rules per jurisdiction — automatically, without manual exceptions.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Audit-ready reporting",
        description:
          "Pull compliance reports, access logs, and data lineage records on demand. When regulators ask, your team answers in hours — not weeks.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "Privacy and consent management",
        description:
          "Track customer consent, data access requests, and deletion workflows in one place. Reduce legal exposure without adding operational overhead.",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
    ],

    stats: [
      { value: "4,300+", label: "Enterprise clients on Bridgesoft platforms" },
      { value: "14", label: "African markets with local compliance support" },
      { value: "2001", label: "Year Bridgesoft first earned public-sector trust" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Data Compliance | Bridgesoft",
      description:
        "Built-in compliance, audit-ready records, and regional regulatory support for African institutions.",
    },
  },

  automation: {
    id: "automation",
    slug: "automation",
    type: "use-case",
    industry: "AI Automation",

    hero: {
      eyebrow: "Bridgesoft for AI Automation",
      headline: "AI that earns sign-off from your compliance team.",
      subtext:
        "BridgeIntelligence automates the work that slows your team down — with the controls that regulated institutions actually require.",
      backgroundImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by teams adopting BridgeIntelligence across Africa",
      proofPoints: [
        "Private beta live with institutional clients in East Africa",
        "Models built with African regulatory context",
        "Every action logged and reviewable",
      ],
    },

    problem: {
      statement: "Generic AI tools don't work in regulated environments.",
      body:
        "Black-box decisions, unpredictable outputs, and no audit trail — that's not something a bank, hospital, or government agency can deploy. Institutions need AI that follows policy, keeps humans in control of consequential decisions, and works with the systems they already run on.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiBrainLine",
          title: "AI that stays within your rules",
          description:
            "Set boundaries, approval thresholds, and override conditions. BridgeIntelligence operates within the limits your institution defines — not the ones we decide.",
        },
        {
          icon: "RiFlowChart",
          title: "Automation across your existing stack",
          description:
            "Invoice matching, case routing, report generation — automated across Bridgesoft Cloud, Data, and Enterprise without replacing the tools your teams already know.",
        },
        {
          icon: "RiEyeLine",
          title: "Humans review what matters",
          description:
            "Unusual cases, high-value decisions, and exceptions route to the right person with full context — not a vague AI recommendation.",
        },
      ],
    },

    spotlight: {
      divisionId: "bridge-intelligence",
      divisionName: "BridgeIntelligence",
      eyebrow: "Featured product",
      title: "Enterprise AI with an audit trail.",
      description:
        "BridgeIntelligence is built for institutions that can't afford opaque AI. Every decision logged, every threshold configurable, every model trained on your data — not the internet's.",
      cta: { label: "Explore BridgeIntelligence", href: "/bridge-intelligence" },
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "BridgeIntelligence — AI automation",
    },

    useCases: [
      {
        title: "Document processing at scale",
        description:
          "Contracts, invoices, and claims sorted, read, and routed automatically — with anything unusual flagged for human review before any action is taken.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Forecasting and planning",
        description:
          "Use your own historical data to forecast demand, capacity, and revenue. Give leadership numbers they can act on — with the source data visible, not hidden inside a model.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "AI-assisted customer support",
        description:
          "Help customer-facing teams respond faster — with drafts based on your products, policies, and previous cases. Not generic web content.",
        image:
          "https://images.unsplash.com/photo-1531485608782-630e2edd2c61?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
    ],

    stats: [
      { value: "Q3 2026", label: "General availability of BridgeIntelligence" },
      { value: "14", label: "African markets in the rollout" },
      { value: "100%", label: "Deployed on your infrastructure" },
    ],

    cta: {
      headline: "Ready to get started?",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "AI Automation | Bridgesoft",
      description:
        "Auditable AI automation with BridgeIntelligence for regulated African institutions.",
    },
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const solutionSlugs = Object.keys(solutions);

export const industrySolutions = solutionSlugs
  .map((slug) => solutions[slug])
  .filter((s) => s.type === "industry");

export const useCaseSolutions = solutionSlugs
  .map((slug) => solutions[slug])
  .filter((s) => s.type === "use-case");

export function getSolutionBySlug(slug) {
  return solutions[slug] ?? null;
}