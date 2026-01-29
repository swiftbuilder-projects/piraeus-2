import { OceaniaTemplateContent } from "@/types/template";

export const oceaniaDefaultContent: OceaniaTemplateContent = {
    navbar: {
        logoText: "PIRAEUS GROUP",
        logoImage: "/images/templates/oceania/logo.png",
        menuItems: [
            { label: "ABOUT", href: "#about" },
            { label: "SERVICES", href: "#services" },
            { label: "PROJECTS", href: "#projects" },
        ],
        ctaText: "CONTACT US",
        ctaLink: "#contact",
    },
    hero: {
        badgeText: "piraeus group Limited",
        title: "Global management Consulting",
        highlightedText: "and Investment Firm",
        description: "Welcome to piraeus group Limited, stand out as a global management consulting and investment firm, dedicated to creating sustainable, efficient, and profitable strategies for governments, businesses, and communities, specializing in the dynamic sectors of healthcare, finance, technology, and energy.",
        primaryCtaText: "",
        primaryCtaLink: "",
        secondaryCtaText: "",
        secondaryCtaLink: "",
        backgroundImage: "/images/templates/oceania/hero-firm.jpg",
    },
    about: {
        badgeText: "WHO WE ARE",
        title: "Excellence in Strategy, Finance & Sustainability",
        description: "Piraeus group limited s a multidisciplinary consulting firm built on integrity, professionalism, and long-term value creation. Our team of experienced consultants works closely with clients to understand their goals and provide tailored solutions that drive measurable impact.",
        mission: "To provide exceptional consulting, financial, and sustainable solutions that empower governments, businesses, and communities to thrive.",
        vision: "To be Africa’s leading consultancy in strategic, financial, and sustainable initiatives, delivering measurable impact and long-term growth.",
        values: ["Integrity & Transparency", "Innovation & Sustainability", "Client-Centric Excellence", "Environmental Responsibility"],
        purposeTitle: "STRATEGIC PARTNERSHIP",
        purposeDescription: "Partner with us today for strategic solutions that drive growth, sustainability, and prosperity.",
    },
    services: {
        badgeText: "CORE SERVICE AREAS",
        title: "Expertise That Drives Results",
        description: "Our firm provides specialized consultancy across six critical pillars of modern industry and governance.",
        services: [
            {
                id: "wealth-management",
                title: "Wealth Management",
                description: "Tailored solutions designed to protect, grow, and transfer wealth effectively for individuals and institutions through strategic asset management.",
                image: "/images/templates/oceania/leadership.png",
                icon: "Wallet",
            },
            {
                id: "financial-excellence",
                title: "Financial Excellence",
                description: "Corporate and government financial solutions focusing on audits, compliance, and process optimization for robust financial health.",
                image: "/images/templates/oceania/boardroom.jpg",
                icon: "DoubleCheck",
            },
            {
                id: "gov-consulting",
                title: "Government Strategic Consulting",
                description: "Helping public sector organizations achieve efficiency, transparency, and long-term growth through strategic guidance aligned with national development goals.",
                image: "/images/templates/oceania/government-meeting.jpg",
                icon: "Landmark",
            },
            {
                id: "sustainable-energy",
                title: "Sustainable Energy Solutions",
                description: "Professional consulting for solar and wind energy projects, supporting the international transition to clean and renewable energy solutions.",
                image: "/images/templates/oceania/service-energy.png",
                icon: "Zap",
            },
            {
                id: "advisory-risk",
                title: "Advisory & Risk Management",
                description: "Mitigating risks for sustainable growth through corporate governance advisory, risk assessment, and robust compliance solutions.",
                image: "/images/templates/oceania/excellence-showroom.jpg",
                icon: "ShieldAlert",
            },
            {
                id: "scrap-metal",
                title: "Scrap Metal Recycling & Environmental solutions",
                description: "Providing recycling solutions that benefit the environment and create economic opportunities through industrial scrap collection and circular economy strategies.",
                image: "/images/templates/oceania/scrap-metal-clean.png",
                icon: "Recycle",
            },
        ],
    },
    engagement: {
        badgeText: "TENDER & COMPLIANCE",
        title: "Structured Engagement",
        description: "We navigate the complexities of public sector decision-making with a commitment to transparency and ethical standards.",
        counties: {
            title: "Tender Advisory",
            content: "We support both government entities and bidding organizations through bidding frameworks, technical evaluations, and compliance reviews.",
            image: "/images/templates/oceania/engagement.png",
        },
        parliament: {
            title: "Project Management",
            content: "Beyond tendering, we provide ongoing support during implementation, managing timelines, budgets, and performance indicators.",
            image: "/images/templates/oceania/hero.png",
        },
    },
    projects: {
        badgeText: "OUR TRACK RECORD",
        title: "Measurable Impact",
        description: "Success stories from across our core service areas, demonstrating lasting value for our stakeholders.",
        caseStudies: [
            {
                id: "case-1",
                title: "Government Reform Project",
                client: "Ministry of Environment, Climate Change & Forestry",
                objective: "Fiscal reform and efficiency improvement",
                outcome: "Reduced waste by 25%, optimized budget allocation",
                impact: "Enhanced governance and optimized resource usage.",
            },
            {
                id: "case-2",
                title: "Renewable Energy Implementation",
                client: "Industrial Corporation",
                objective: "Solar energy integration and efficiency improvement",
                outcome: "30% reduction in energy costs and lower carbon footprint",
                impact: "Significant operational savings and environmental compliance.",
            },
            {
                id: "case-3",
                title: "Wealth Management Success",
                client: "High-Net-Worth Individuals",
                objective: "Diversified investment strategy and portfolio optimization",
                outcome: "Portfolio growth of 40% over 3 years",
                impact: "Long-term financial security and asset protection.",
            },
            {
                id: "case-4",
                title: "Scrap Metal Initiative",
                objective: "Industrial scrap recycling program",
                client: "Industrial Partners",
                outcome: "Processed over 1,000 tons of metal waste",
                impact: "Generated new revenue streams and reduced landfill usage.",
            }
        ]
    },
    ethics: {
        confidentialityTitle: "Integrity & Transparency",
        confidentialityContent: "PIRAEUS Group Limited places strong emphasis on compliance and ethical standards, ensuring alignment with national procurement laws and international best practices.",
        ethicsTitle: "Sustainability Commitment",
        ethicsContent: "We are dedicated to supporting the international transition to clean energy and circular economy practices to protect the planet while creating economic value.",
    },
    leadership: {
        name: "EXECUTIVE LEADERSHIP",
        role: "GOVERNANCE & STRATEGY",
        bio: "Our team of experienced consultants works closely with clients to understand their goals and provide tailored solutions that drive measurable impact.",
        message: "Our commitment is to drive growth, sustainability, and innovation in every project we undertake. We build partnerships that create long-lasting value for all stakeholders.",
        image: "/images/templates/oceania/leadership.png",
    },
    careers: {
        badgeText: "JOIN OUR TEAM",
        title: "Careers & Opportunities",
        description: "We are always looking for talented, passionate professionals to join our impactful work.",
        positions: ["Strategic Consulting", "Financial Management", "Renewable Energy Solutions", "Recycling Services"],
        benefits: ["Professional Growth", "Innovative Projects", "Collaborative Culture", "Impactful Work"],
    },
    footer: {
        logoText: "PIRAEUS GROUP",
        logoImage: "/images/templates/oceania/logo.png",
        description: "A leading strategic consulting firm dedicated to finance, innovation, and sustainability.",
        contactInfo: {
            phone: "+254 (0) 700 000 000",
            email: "info@piraeusgroup.co.ke",
            address: "Nairobi, Kenya",
        },
        links: [
            {
                title: "COMPANY",
                items: [
                    { label: "ABOUT US", href: "#about" },
                    { label: "PROJECTS", href: "#projects" },
                    { label: "CAREERS", href: "#careers" },
                ],
            },
            {
                title: "SERVICES",
                items: [
                    { label: "GOV CONSULTING", href: "#services" },
                    { label: "FINANCE", href: "#services" },
                    { label: "ENERGY", href: "#services" },
                ],
            },
        ],
        socialLinks: [
            { platform: "LinkedIn", url: "#", icon: "Linkedin" },
            { platform: "Twitter", url: "#", icon: "Twitter" },
        ],
        copyrightText: "© 2026 PIRAEUS Group Limited. All rights reserved.",
    },
};
