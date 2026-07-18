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
      headline: "A platform banks, insurers, and fintechs can actually trust.",
      subtext:
        "Bridgesoft Cloud, Data, and Enterprise run core banking, payments, and digital channels for financial institutions across Africa with the security, uptime, and compliance controls the sector demands.",
      backgroundImage:
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D",
      heroImage:
        "https://plus.unsplash.com/premium_vector-1682303138926-784bf1b4ebd3?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by institutions across financial services",
      proofPoints: ["Access Bank", "Flutterwave", "Interswitch", "Stanbic IBTC"],
    },

    problem: {
      statement: "Legacy infrastructure is a liability for financial institutions.",
      body:
        "Banks, insurers, and fintechs need to move fast but their infrastructure moves slow. Outdated systems can't handle modern workloads, create compliance risk, and make it hard to respond to customer needs. The problem isn't ambition it's the platform underneath. Financial institutions need infrastructure that is secure, reliable, and built for the workloads they actually run.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiShieldKeyholeLine",
          title: "Security and compliance built in",
          description:
            "Bridgesoft Cloud, Data, and Enterprise are designed for regulated workloads. Role-based access, audit logs, and data residency controls are built into the platform not added after the fact.",
        },
        {
          icon: "RiCloudLine",
          title: "Infrastructure built for financial workloads",
          description:
            "Bridgesoft Cloud runs core banking, payments, and digital channels for financial institutions across Africa. With four owned Tier-III data centers, your workloads run on infrastructure we control not rent.",
        },
        {
          icon: "RiDatabase2Line",
          title: "Data that actually connects",
          description:
            "Bridgesoft Data powers shared records and operational reporting for financial institutions. Data is stored in a single source of truth, with the right access controls and audit logs to keep it secure.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "Platforms that run core banking, payments, and digital channels.",
      description:
        "Bridgesoft Cloud is built for financial institutions that can't afford downtime, outages, or compliance risk. With four owned Tier-III data centers across Africa, your workloads run on infrastructure we control — not rent.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — financial services",
    },

    useCases: [
      {
        title: "Online banking and digital channels",
        description:
          "Bridgesoft Cloud runs the digital channels that customers actually use — mobile apps, web portals, and APIs — with the uptime, security, and compliance controls financial institutions require.",
        image:
          "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Core banking and payments",
        description:
          "Bridgesoft Cloud runs core banking and payments platforms for financial institutions across Africa. With four owned Tier-III data centers, your workloads run on infrastructure we control — not rent.",
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
        "Secure, reliable, and compliant infrastructure for banks, insurers, and fintechs across Africa.",
    },
  },

  "public-sector": {
    id: "public-sector",
    slug: "public-sector",
    type: "industry",
    industry: "Public Sector",

    hero: {
      eyebrow: "Bridgesoft for Public Sector",
      headline: "Sovereign cloud, enterprise software, and data infrastructure for governments across Africa.",
      subtext:
        "Bridgesoft Cloud, Data, and Enterprise run national ID systems, payroll platforms, and citizen service management for governments across Africa — with the security, compliance, and uptime the public sector requires.",
      backgroundImage:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_photo-1733317260639-6fb8eb703c78?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by governments and public institutions across Africa",
      proofPoints: ["National Identity Management Commission", "Federal Ministry of Finance", "Lagos State Government", "Ghana eGov"],
    },

    problem: {
      statement: "Governments need digital services that actually work.",
      body:
        "Citizen data, payroll systems, and service management platforms are often fragmented, insecure, and unreliable. Governments need infrastructure that is sovereign, secure, and built for the scale of national operations — not a patchwork of rented services.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiGovernmentLine",
          title: "Trusted by governments across Africa",
          description:
            "Proven track record with national ID systems, payroll platforms, and citizen service management for governments across Africa — with the security, compliance, and uptime the public sector requires.",
        },
        {
          icon: "RiFileList3Line",
          title: "Proven auditability and compliance",
          description:
            "Bridgesoft Cloud, Data, and Enterprise are designed for regulated workloads. Role-based access, audit logs, and data residency controls are built into the platform not added after the fact.",
        },
        {
          icon: "RiTeamLine",
          title: "One platform, one team, one government",
          description:
            "Bridgesoft Enterprise provides a unified solution for governments, enabling seamless collaboration and efficient operations across all departments.",
        },
      ],
    },

    spotlight: {
      divisionId: "enterprise",
      divisionName: "Bridgesoft Enterprise",
      eyebrow: "Featured product",
      title: "Bridgesoft Enterprise powers national-scale government operations.",
      description:
        "Bridgesoft Enterprise is a unified platform for government operations, enabling secure citizen data management, payroll processing, and service delivery at national scale. With Bridgesoft Enterprise, governments can streamline operations, enhance transparency, and improve citizen services.",
      cta: { label: "Explore Bridgesoft Enterprise", href: "/products/enterprise" },
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Enterprise — public sector",
    },

    useCases: [
      {
        title: "National digital ID systems",
        description:
          "Bridgesoft Data powers national ID systems, enabling secure citizen identification, authentication, and service access. With Bridgesoft Data, governments can manage citizen data efficiently while ensuring privacy and compliance.",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Government payroll and HR management",
        description:
          "Bridgesoft Enterprise streamlines payroll and HR processes for government agencies, ensuring compliance and efficiency.",
        image:
          "https://images.unsplash.com/photo-1735385102811-199278409ee2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "14", label: "African markets supported" },
      { value: "160M+", label: "Citizens managed" },
      { value: "20+", label: "Years of government experience" },
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
      headline: "Connected health records, operational visibility, and privacy-compliant infrastructure for hospitals across Africa.",
      subtext:
        "Bridgesoft Cloud, Data, and Enterprise run shared health records, hospital operations, and clinical workflows for healthcare institutions across Africa — with the security, compliance, and uptime the sector demands.",
      backgroundImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Trusted by healthcare institutions across Africa",
      proofPoints: ["Lagos State University Teaching Hospital", "University of Nairobi Hospital", "Red Cross Society", "Ghana Health Service"]
    },

    problem: {
      statement: "Fragmented health records and operational blind spots put patients at risk.",
      body:
        "Hospitals and clinics often run on disconnected systems, making it hard to share patient records, track bed capacity, or monitor programme performance. The result is delays, errors, and missed opportunities for care. Healthcare institutions need infrastructure that connects records, provides operational visibility, and complies with privacy regulations.",
    },

    features: {
      title: "How Bridgesoft helps",
      items: [
        {
          icon: "RiHospitalLine",
          title: "Connected patient records across facilities",
          description:
            "Bridgesoft Data enables shared health records across hospitals and clinics, so care teams have the full patient history at their fingertips — improving diagnosis, treatment, and continuity of care.",
        },
        {
          icon: "RiLock2Line",
          title: "Privacy and compliance built in",
          description:
            "Bridgesoft Cloud and Data are designed for healthcare workloads, with role-based access, audit logs, and data residency controls built into the platform — not added after the fact.",
        },
        {
          icon: "RiBarChartGroupedLine",
          title: "Monitor operations in real time",
          description:
            "Bridgesoft Enterprise provides dashboards and reporting tools that give hospital administrators visibility into bed occupancy, staffing levels, and programme performance — enabling data-driven decisions that improve patient care.",
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
        title: "Medical records interoperability",
        description:
          "Bridgesoft Data enables hospitals and clinics to share patient records securely and efficiently, improving care coordination and patient outcomes.",
        image:
          "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Audit-ready access logs and change tracking",
        description:
          "Bridgesoft Data automatically logs who accessed patient records, when, and why — providing an audit trail that supports compliance with healthcare privacy regulations.",
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
        "Connected health records, operational visibility, and privacy-compliant infrastructure for hospitals and healthcare institutions across Africa.",
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
        "Bridgesoft Cloud, Data, and Enterprise run port management, warehouse systems, and carrier platforms for logistics operators across Africa — with the visibility, reliability, and 24/7 support the sector requires.",
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
      statement: "Transparency gaps in logistics create delays and customer complaints.",
      body:
        "Ports, carriers, and warehouses often run on disconnected systems, making it hard to track shipments, monitor throughput, or respond to delays. The result is missed deadlines, frustrated customers, and lost revenue. Logistics operators need infrastructure that connects operations, provides end-to-end visibility, and runs continuously — because logistics doesn't stop at 5pm.",
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