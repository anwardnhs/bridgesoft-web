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
      headline: "A foundational platform for banks, insurers, and fintechs.",
      subtext:
        "Power your core banking systems, payment gateways, and digital channels with institutional-grade technology. Bridgesoft delivers the strict security, guaranteed uptime, and regulatory alignment demanded by Africa's financial sector.",
      backgroundImage:
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D",
      heroImage:
        "https://plus.unsplash.com/premium_vector-1682303138926-784bf1b4ebd3?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Powering the backbone of African finance",
      proofPoints: ["Access Bank", "Flutterwave", "Interswitch", "Stanbic IBTC"],
    },

    problem: {
      statement: "Legacy infrastructure throttles financial innovation and introduces critical risk.",
      body:
        "Financial institutions face a dual mandate: accelerate digital transformation while maintaining zero-tolerance for downtime and security breaches. Outdated core systems struggle to handle high-frequency transaction loads and fail to meet evolving regulatory requirements. The bottleneck isn't strategy—it's the underlying architecture. The sector requires high-performance environments engineered specifically for sensitive transactional workloads.",
    },

    features: {
      title: "The Bridgesoft advantage for finance",
      items: [
        {
          icon: "RiShieldKeyholeLine",
          title: "Institutional-grade security architecture",
          description:
            "Bridgesoft Enterprise incorporates comprehensive role-based access, automated audit trails, and strict data residency protocols to secure sensitive financial records.",
        },
        {
          icon: "RiCloudLine",
          title: "Dedicated environments for critical workloads",
          description:
            "Deploy core banking and payment engines on Bridgesoft Cloud. We provide the robust compute and network throughput required for seamless, high-volume transaction processing.",
        },
        {
          icon: "RiDatabase2Line",
          title: "Unified transactional intelligence",
          description:
            "Bridgesoft Data consolidates siloed account information into a single, highly available source of truth, enabling real-time analytics and precise regulatory reporting.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "The engine for core banking and payments.",
      description:
        "Bridgesoft Cloud is engineered for financial enterprises that demand absolute reliability. Operating from our four Tier-III data centres across Africa, we deliver the low-latency performance necessary to process millions of daily transactions without interruption.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — financial services",
    },

    useCases: [
      {
        title: "Digital channel delivery",
        description:
          "Host your mobile banking apps, customer portals, and open banking APIs on highly available infrastructure designed to eliminate customer-facing downtime.",
        image:
          "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Core system modernization",
        description:
          "Transition legacy core banking platforms to scalable cloud environments, unlocking the agility to launch new financial products faster.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
        imageSide: "left",
      },
    ],

    stats: [
      { value: "900+", label: "Financial clients supported" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "4", label: "Tier-III data centres" },
    ],

    cta: {
      headline: "Modernise your financial infrastructure",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Financial Services Solutions | Bridgesoft",
      description:
        "Institutional-grade cloud, data, and enterprise platforms for banks, insurers, and fintechs across Africa.",
    },
  },

  "public-sector": {
    id: "public-sector",
    slug: "public-sector",
    type: "industry",
    industry: "Public Sector",

    hero: {
      eyebrow: "Bridgesoft for Public Sector",
      headline: "Sovereign technology for resilient government operations.",
      subtext:
        "Deploy national identity systems, public finance platforms, and citizen services on sovereign infrastructure. We provide African governments with secure, scalable solutions built to serve millions.",
      backgroundImage:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_photo-1733317260639-6fb8eb703c78?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Partnering with governments to digitise public services",
      proofPoints: ["National Identity Management Commission", "Federal Ministry of Finance", "Lagos State Government", "Ghana eGov"],
    },

    problem: {
      statement: "Fragmented civic systems compromise service delivery and national security.",
      body:
        "Public administration often relies on disjointed, vulnerable legacy systems that obscure operational visibility. Managing citizen registries, payroll distribution, and tax collection across disparate databases leads to inefficiencies and data vulnerabilities. Modern governance requires sovereign, unified platforms capable of handling massive demographic scale while ensuring absolute data sovereignty and national security.",
    },

    features: {
      title: "Equipping the modern public sector",
      items: [
        {
          icon: "RiGovernmentLine",
          title: "Designed for national scale",
          description:
            "Our architecture supports massive public databases, ensuring that national identity, census, and electoral systems remain responsive under extreme computing loads.",
        },
        {
          icon: "RiFileList3Line",
          title: "Transparent public finance",
          description:
            "Implement transparent treasury management and civil service payroll systems with comprehensive auditability to eliminate leakage and ensure fiscal accountability.",
        },
        {
          icon: "RiTeamLine",
          title: "Inter-agency interoperability",
          description:
            "Bridgesoft Enterprise breaks down departmental silos, allowing secure, governed information sharing between ministries, departments, and agencies.",
        },
      ],
    },

    spotlight: {
      divisionId: "enterprise",
      divisionName: "Bridgesoft Enterprise",
      eyebrow: "Featured product",
      title: "Unifying national government operations.",
      description:
        "Developed from our headquarters at Eko Atlantic City, Lagos, Bridgesoft Enterprise consolidates civic data management, civil service administration, and public service delivery into a cohesive framework to enhance transparency.",
      cta: { label: "Explore Bridgesoft Enterprise", href: "/products/enterprise" },
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Enterprise — public sector",
    },

    useCases: [
      {
        title: "Sovereign identity registries",
        description:
          "Securely host and manage biometric and demographic data for national identity programs, ensuring strict privacy standards and preventing unauthorised access.",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Civil service administration",
        description:
          "Automate complex government HR and payroll workflows, maintaining precise financial and personnel records for hundreds of thousands of public employees.",
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
      headline: "Advance your digital government strategy",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Public Sector Solutions | Bridgesoft",
      description:
        "Sovereign cloud, enterprise software, and data infrastructure for governments and public institutions across Africa.",
    },
  },

  healthcare: {
    id: "healthcare",
    slug: "healthcare",
    type: "industry",
    industry: "Healthcare & Life Sciences",

    hero: {
      eyebrow: "Bridgesoft for Healthcare & Life Sciences",
      headline: "Resilient digital foundations for modern healthcare.",
      subtext:
        "Unify patient records, streamline hospital administration, and secure sensitive medical data. Bridgesoft equips clinical networks with the high-availability infrastructure needed for uninterrupted patient care.",
      backgroundImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Empowering clinical networks and medical institutions",
      proofPoints: ["Lagos State University Teaching Hospital", "University of Nairobi Hospital", "Red Cross Society", "Ghana Health Service"]
    },

    problem: {
      statement: "Disconnected clinical data jeopardises patient outcomes and hospital efficiency.",
      body:
        "In medical environments, missing information can be catastrophic. When hospitals operate on isolated systems, care providers lack a complete view of patient history, and administrators cannot accurately gauge bed capacity or supply levels. The healthcare industry requires robust, interconnected platforms that centralise medical records and provide real-time operational insights without compromising patient confidentiality.",
    },

    features: {
      title: "Transforming healthcare delivery",
      items: [
        {
          icon: "RiHospitalLine",
          title: "Centralised Electronic Health Records",
          description:
            "Consolidate patient histories, lab results, and imaging into unified profiles, granting authorised medical staff immediate access to critical diagnostic information.",
        },
        {
          icon: "RiLock2Line",
          title: "Strict medical data governance",
          description:
            "Safeguard Protected Health Information (PHI) with advanced encryption and granular access controls, ensuring absolute compliance with medical privacy mandates.",
        },
        {
          icon: "RiBarChartGroupedLine",
          title: "Clinical resource optimisation",
          description:
            "Gain instant visibility into ward occupancy, equipment availability, and staff allocation to dynamically route resources where they are needed most.",
        },
      ],
    },

    spotlight: {
      divisionId: "data",
      divisionName: "Bridgesoft Data",
      eyebrow: "Featured product",
      title: "The pulse of hospital operations.",
      description:
        "Bridgesoft Data processes massive volumes of clinical information with near-zero latency. From diagnostic imaging archives to real-time vitals monitoring, we ensure that care teams have the exact information they need.",
      cta: { label: "Explore Bridgesoft Data", href: "/products/data" },
      backgroundImage:
        "https://images.unsplash.com/photo-1584036561561-d466889f8dcc?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Data — healthcare",
    },

    useCases: [
      {
        title: "Health network interoperability",
        description:
          "Facilitate seamless, secure data exchange between affiliated clinics, diagnostic centres, and primary hospitals to ensure continuity of care across multiple facilities.",
        image:
          "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Compliant medical archiving",
        description:
          "Store decades of patient records in secure, highly available databases equipped with comprehensive access logging to satisfy regulatory audits and retention policies.",
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
      headline: "Upgrade your clinical infrastructure",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Healthcare & Life Sciences Solutions | Bridgesoft",
      description:
        "Connected health records, operational visibility, and privacy-compliant infrastructure for African hospitals.",
    },
  },

  logistics: {
    id: "logistics",
    slug: "logistics",
    type: "industry",
    industry: "Supply Chain & Logistics",

    hero: {
      eyebrow: "Bridgesoft for Supply Chain & Logistics",
      headline: "Uninterrupted operations for global supply chains.",
      subtext:
        "Digitise port management, warehousing, and fleet tracking. Bridgesoft provides the high-performance computing required to maintain total visibility across complex logistical networks.",
      backgroundImage:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
      heroImage:
        "https://plus.unsplash.com/premium_vector-1723266253608-85a7f5251b26?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "The technology partner for major logistics operators",
      proofPoints: ["APM Terminals", "DHL", "Maersk", "Red Star Express"],
    },

    problem: {
      statement: "Blind spots in the supply chain result in cascading delays and lost margins.",
      body:
        "Modern logistics operates on razor-thin margins and strict schedules. When warehouse management, customs clearance, and freight tracking exist in silos, operators cannot proactively manage bottlenecks. The inability to track assets in transit leads to inventory distortion and customer dissatisfaction. Logistics providers need integrated, high-availability systems to synchronise physical movement with digital tracking.",
    },

    features: {
      title: "Optimising logistical operations",
      items: [
        {
          icon: "RiShipLine",
          title: "Terminal and yard management",
          description:
            "Coordinate vessel berthing, crane assignments, and container stacking with high-speed processing systems designed for the demands of continuous port operations.",
        },
        {
          icon: "RiLinksLine",
          title: "Seamless enterprise integration",
          description:
            "Our architecture smoothly interfaces with your existing ERP and WMS, bridging legacy systems to create a cohesive operational dashboard without full replacement.",
        },
        {
          icon: "RiLineChartLine",
          title: "Real-time asset tracking",
          description:
            "Monitor fleet telemetry, container locations, and warehouse throughput instantly to anticipate disruptions and reroute assets dynamically before delays occur.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "Always-on infrastructure for freight and transit.",
      description:
        "Logistics cannot tolerate downtime. Bridgesoft Cloud provides the resilient, scalable hosting required to run critical scheduling and dispatch software without interruption, ensuring your freight never stops moving.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — supply chain",
    },

    useCases: [
      {
        title: "Dynamic inventory control",
        description:
          "Synchronise stock levels across regional distribution centres in real time, preventing stockouts and optimising space utilisation for maximum efficiency.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Fleet dispatch and telemetry",
        description:
          "Process live telemetry data from hundreds of vehicles simultaneously to optimise routing, monitor fuel consumption, and predict mechanical maintenance needs.",
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
      headline: "Digitise your supply chain operations",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Supply Chain & Logistics Solutions | Bridgesoft",
      description:
        "Integrated, high-availability technology systems for African ports, carriers, and warehouses.",
    },
  },

  migration: {
    id: "migration",
    slug: "migration",
    type: "use-case",
    industry: "Cloud Migration",

    hero: {
      eyebrow: "Bridgesoft for Cloud Migration",
      headline: "De-risk your transition to enterprise cloud.",
      subtext:
        "Execute complex architectural shifts with precision. Bridgesoft Consulting delivers structured migrations to infrastructure we control — not rent.",
      backgroundImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Chosen by enterprises for critical architectural shifts",
      proofPoints: [
        "1,200+ migrations completed",
        "Four owned Tier-III data centers across Africa",
        "Zero data sovereignty compromises",
      ],
    },

    problem: {
      statement: "Hasty migrations jeopardise business continuity and data integrity.",
      body:
        "Transitioning legacy systems to the cloud is fraught with risk. Enterprises often underestimate workload dependencies, resulting in severe service outages and prolonged recovery periods during cutover. A successful shift requires meticulous dependency mapping, phased execution, and deep engineering expertise to ensure that critical applications remain stable throughout the entire process.",
    },

    features: {
      title: "A methodical approach to modernising IT",
      items: [
        {
          icon: "RiRouteLine",
          title: "Risk-adjusted sequencing",
          description:
            "We map your entire application topology, transitioning low-risk workloads first to validate the architecture before touching mission-critical databases.",
        },
        {
          icon: "RiRefreshLine",
          title: "Parallel operational testing",
          description:
            "Maintain identical staging and production environments during the shift. We validate performance metrics against legacy benchmarks before flipping the switch.",
        },
        {
          icon: "RiServerLine",
          title: "Sovereign African hosting",
          description:
            "Deploy workloads directly to our four Tier-III facilities in Lagos, Nairobi, Johannesburg, and Cairo. We provide true sovereignty on infrastructure we control — not rent.",
        },
      ],
    },

    spotlight: {
      divisionId: "cloud",
      divisionName: "Bridgesoft Cloud",
      eyebrow: "Featured product",
      title: "A destination engineered for enterprise scale.",
      description:
        "Migrating to Bridgesoft Cloud means moving to a platform built for Africa's largest corporations. Listed on both the NGX and LSE, we provide the financial stability, technical depth, and physical infrastructure necessary to host your most demanding applications.",
      cta: { label: "Explore Bridgesoft Cloud", href: "/products/cloud" },
      backgroundImage:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Cloud — migration",
    },

    useCases: [
      {
        title: "Legacy hardware retirement",
        description:
          "Systematically decommission aging on-premise servers by migrating core databases to our highly available, fully managed cloud environments.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Application refactoring",
        description:
          "Don't just lift and shift. Our engineers help containerise monolithic applications during the move to maximise future scalability and computational performance.",
        image:
          "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "Secure hybrid deployments",
        description:
          "Maintain air-gapped on-premise servers for highly classified data while leveraging our scalable cloud for customer-facing web services and APIs.",
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
      headline: "Plan your migration strategy",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Cloud Migration | Bridgesoft",
      description:
        "Structured, low-risk cloud migration to owned African infrastructure for major enterprises.",
    },
  },

  compliance: {
    id: "compliance",
    slug: "compliance",
    type: "use-case",
    industry: "Data Compliance",

    hero: {
      eyebrow: "Bridgesoft for Data Compliance",
      headline: "Regulatory alignment without the operational drag.",
      subtext:
        "Automate governance, streamline audits, and enforce data privacy standards across your entire organisation with native compliance controls.",
      backgroundImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Securing data for regulated institutions",
      proofPoints: [
        "4,300+ enterprise clients on Bridgesoft platforms",
        "Compliance support across 14 African markets",
        "Included on all Enterprise plans",
      ],
    },

    problem: {
      statement: "Manual compliance protocols expose organisations to devastating regulatory penalties.",
      body:
        "Relying on ad-hoc spreadsheets and disjointed policies to manage corporate governance is unsustainable. When regulatory audits occur, the scramble to consolidate access logs and verify data residency rules drains institutional resources. Enterprises require a systematic approach where governance is embedded directly into the technical architecture, transforming compliance from a reactive emergency into a continuous, automated state.",
    },

    features: {
      title: "Systemic governance for the modern enterprise",
      items: [
        {
          icon: "RiScales3Line",
          title: "Jurisdiction-specific routing",
          description:
            "Automatically route and store information based on local geographic requirements, ensuring absolute compliance with varied African regulatory frameworks.",
        },
        {
          icon: "RiFileShield2Line",
          title: "Immutable audit trails",
          description:
            "Generate comprehensive, cryptographically verified logs of all user activity and system changes to satisfy the most stringent regulatory inspections.",
        },
        {
          icon: "RiUserSettingsLine",
          title: "Native access governance",
          description:
            "Implement strict, role-based restrictions and consent workflows. These security measures are built into the platform not added after the fact.",
        },
      ],
    },

    spotlight: {
      divisionId: "data",
      divisionName: "Bridgesoft Data",
      eyebrow: "Featured product",
      title: "The framework for corporate data governance.",
      description:
        "Bridgesoft Data enforces your internal policies at the storage layer. By standardising how information is classified, encrypted, and retained, we ensure that your organisation remains fully compliant without burdening your engineering teams.",
      cta: { label: "Explore Bridgesoft Data", href: "/products/data" },
      backgroundImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "Bridgesoft Data — compliance",
    },

    useCases: [
      {
        title: "Multi-national data residency",
        description:
          "Operate across borders seamlessly. Our platform automatically enforces the distinct data storage and processing laws of each specific African country.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Automated regulatory reporting",
        description:
          "Instantly generate formatted compliance documents and activity summaries, reducing the time required to prepare for external audits from weeks to hours.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "Privacy lifecycle management",
        description:
          "Programmatically handle user consent requests, data anonymisation, and scheduled deletion to minimise legal exposure and uphold privacy standards.",
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
      headline: "Strengthen your data governance",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "Data Compliance | Bridgesoft",
      description:
        "Systemic data governance and automated compliance frameworks for African institutions.",
    },
  },

  automation: {
    id: "automation",
    slug: "automation",
    type: "use-case",
    industry: "AI Automation",

    hero: {
      eyebrow: "Bridgesoft for AI Automation",
      headline: "Intelligent automation for strict regulatory environments.",
      subtext:
        "Deploy enterprise artificial intelligence that respects your operational boundaries. BridgeIntelligence handles repetitive workflows while maintaining complete transparency and human oversight.",
      backgroundImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      heroImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      ctas: [demoCta, salesCta],
    },

    trustBar: {
      headline: "Pioneering secure enterprise AI in Africa",
      proofPoints: [
        "Private beta live with institutional clients in East Africa",
        "Models trained for African regulatory contexts",
        "Comprehensive decision logging",
      ],
    },

    problem: {
      statement: "Consumer-grade AI introduces unacceptable risks for corporate governance.",
      body:
        "Regulated businesses cannot deploy black-box algorithms that hallucinate facts or leak proprietary data. The lack of a clear audit trail and the inability to explain automated decisions disqualify generic AI models from enterprise use. Organisations require intelligent systems that strictly adhere to corporate policy, operate exclusively on internal knowledge bases, and defer to human judgement for high-stakes resolutions.",
    },

    features: {
      title: "Deploying responsible artificial intelligence",
      items: [
        {
          icon: "RiBrainLine",
          title: "Policy-constrained processing",
          description:
            "Configure explicit operational boundaries. BridgeIntelligence rigorously follows your defined approval hierarchies and processing limits.",
        },
        {
          icon: "RiFlowChart",
          title: "Seamless procedural integration",
          description:
            "Embed intelligent routing, document classification, and data extraction directly into your existing Bridgesoft Enterprise workflows without disruption.",
        },
        {
          icon: "RiEyeLine",
          title: "Mandatory human-in-the-loop",
          description:
            "Establish automatic escalation triggers. Any ambiguous input or high-value transaction is immediately routed to a designated specialist with full contextual history.",
        },
      ],
    },

    spotlight: {
      divisionId: "bridge-intelligence",
      divisionName: "BridgeIntelligence",
      eyebrow: "Featured product",
      title: "Algorithmic power with enterprise accountability.",
      description:
        "BridgeIntelligence processes complex tasks using models grounded entirely in your secure, proprietary data. Every action, extraction, and recommendation is fully transparent and mathematically traceable.",
      cta: { label: "Explore BridgeIntelligence", href: "/bridge-intelligence" },
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      visualLabel: "BridgeIntelligence — AI automation",
    },

    useCases: [
      {
        title: "High-volume document extraction",
        description:
          "Ingest thousands of contracts and invoices daily. The system extracts key clauses and financial figures, flagging discrepancies for human verification.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
        imageSide: "right",
      },
      {
        title: "Predictive resource modelling",
        description:
          "Analyse historical operational data to accurately forecast infrastructure demands, staffing requirements, and supply chain fluctuations.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        imageSide: "left",
      },
      {
        title: "Intelligent specialist support",
        description:
          "Accelerate your customer success teams with dynamically generated response drafts based strictly on approved corporate documentation and historical case resolutions.",
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
      headline: "Explore enterprise automation",
      primary: demoCta,
      secondary: contactSalesCta,
    },

    meta: {
      title: "AI Automation | Bridgesoft",
      description:
        "Auditable, secure AI automation and processing tools for regulated African institutions.",
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