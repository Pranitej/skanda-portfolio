// Central configuration file for Skanda Industries.
// Change anything here and the entire website updates automatically.

export const config = {
  company: {
    name: "Skanda Industries",
    brandWords: ["Industries", "Interiors", "Constructions"],
    headerTagline: "For Every Dream Home",
    tagline:
      "Premium Home Interiors & Construction — Elevating Your Living Spaces",
    description:
      "We transform ordinary spaces into extraordinary experiences. From concept to completion, our team of expert designers and builders craft bespoke interiors that reflect your unique personality and lifestyle.",
    email: "industry.skanda@gmail.com",
    phones: [
      "+91 97003 60963",
      "+91 98665 65057",
      "+91 92468 93307",
      "+91 77996 77762",
    ],
    showrooms: [
      {
        label: "Showroom — Warangal",
        line: "12-8-295, Hunter Road, Hanuman Temple Rd, opp. to HP Petrol Pump, near Santoshi Matha, Warangal, Telangana 506002",
        mapUrl: "https://maps.app.goo.gl/FZmk7x3rvTe2s2Ds9",
      },
      {
        label: "Showroom — Hyderabad",
        line: "Mallampet Road, opp. to Ratnadeep Supermarket, Mallampet, Hyderabad, Telangana 500118",
        mapUrl: "https://maps.app.goo.gl/gNcrNDi5i1iQfjCr5?g_st=iwb",
      },
    ],
    industryAddress: {
      label: "Manufacturing Unit",
      line: "Sy No. 138/A/1 & 138/2, Elkurthi Road, Grama Panchayat Office, Dharmasagar, Elkurthy PD, Hanumakonda, Telangana - 506142",
      mapUrl: "https://maps.app.goo.gl/bhRn7KD2FA3uJpP86",
    },
    founded: "2018",
    socials: {
      instagram:
        "https://www.instagram.com/skandainteriors_60?igsh=MWw0eG15Zm5qOGZsdw==",
      facebook: "https://www.facebook.com/share/17XDBr7Kza/",
      youtube: "https://youtube.com/@skandainteriors?si=7H5JXFzjQE3YQBOx",
      twitter: "https://x.com/SkandaIndu54727",
    },
  },

  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    heading: ["Crafting Spaces", "That Inspire"],
    subheading:
      "Award-winning interior design & construction with uncompromising quality and elegance.",
    cta: "Book Free Consultation",
    ctaSecondary: "View Our Work",
    backgroundImage: "/images/hero.png",
  },

  stats: [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Automated Modular Factory" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ],

  services: [
    {
      id: "modular-kitchens",
      title: "Modular Kitchens",
      description:
        "State-of-the-art modular kitchens designed to complement your culinary lifestyle. Featuring premium hardware, customizable wood finishes, and fully personalized layouts — all backed by a 10-year unconditional warranty.",
      image: "/images/kitchen.png",
    },
    {
      id: "wardrobes",
      title: "Premium Wardrobes",
      description:
        "Custom-built, space-saving wardrobes available in wooden and glass finishes with sliding, openable, and walk-in configurations. Crafted with luxury hardware and smart organization systems for effortless living.",
      image: "/images/wardrobe.png",
    },
    {
      id: "home-interiors",
      title: "Full Home Interiors",
      description:
        "Comprehensive end-to-end interior design and execution — including ceilings, electrical work, plumbing, flooring, partitions, TV units, kitchens, and wardrobes — tailored for living rooms, bedrooms, and every corner of your home.",
      image: "/images/bedroom.png",
    },
    {
      id: "construction",
      title: "Construction & Renovation",
      description:
        "Expert planning, designing, and execution of structural changes, civil work, and premium renovations — delivered by seasoned construction professionals with precision and reliability.",
      image: "/images/construction.png",
    },
    {
      id: "commercial",
      title: "Commercial Spaces",
      description:
        "Dynamic, ergonomic office interiors engineered to boost productivity, reflect your brand identity, and leave a lasting impression on clients and employees alike.",
      image: "/images/office.png",
    },
    {
      id: "decor",
      title: "Decor & Furnishing",
      description:
        "Transform your space with our complete decor and furnishing service — from statement sofas, recliners, and dining tables to custom curtains, blinds, and designer wallpapers. Every piece is thoughtfully curated to bring warmth, character, and a cohesive luxury feel to your home.",
      image: "/images/hero.png",
    },
    {
      id: "home-theater-smart-solutions",
      title: "Home Theater & Automation/Smart Solutions",
      description:
        "Immersive home theater setups with premium acoustics, projection systems, and ambient lighting — paired with cutting-edge home automation and smart solutions for seamless control of lighting, climate, security, and entertainment.",
      image: "/images/hometheater.png",
    },
  ],

  portfolio: [
    // Residential
    {
      image: "/images/portfolio_res_1.png",
      title: "Luxe Living Room",
      category: "Residential",
      featured: true,
    },
    {
      image: "/images/portfolio_res_2.png",
      title: "Contemporary Living Room",
      category: "Residential",
    },
    {
      image: "/images/portfolio_res_3.png",
      title: "Minimalist Lounge",
      category: "Residential",
    },
    // Kitchen
    {
      image: "/images/portfolio_kitchen_1.png",

      featured: true,
      title: "Premium Island Kitchen",
      category: "Kitchen",
    },
    {
      image: "/images/kitchen-1.jpg",
      title: "Modern Kitchen",
      category: "Kitchen",
    },
    {
      image: "/images/kitchen_3.png",
      title: "Luxury Breakfast Bar",
      category: "Kitchen",
    },
    // Bedroom
    {
      image: "/images/bedroom.png",
      title: "Master Suite",
      category: "Bedroom",
      featured: true,
    },
    {
      image: "/images/portfolio_bed_2.png",
      title: "Luxury Guest Bedroom",
      category: "Bedroom",
    },
    {
      image: "/images/bedroom_2.png",
      title: "Grand Master Bedroom",
      category: "Bedroom",
    },
    // Wardrobe
    {
      image: "/images/wardrobe-3.jpg",
      title: "Glass Sliding Wardrobe",
      category: "Wardrobe",
    },
    {
      image: "/images/wardrobe.png",
      title: "Walk-in Closet",
      category: "Wardrobe",
      featured: true,
    },
    {
      image: "/images/wardrobe-1.jpg",
      title: "Built-in Luxury Wardrobe",
      category: "Wardrobe",
    },
    // Commercial
    {
      image: "/images/office.png",
      title: "Corporate Office",
      category: "Commercial",
    },
    {
      image: "/images/portfolio_comm_3.png",
      title: "Executive Workspace",
      category: "Commercial",
      featured: true,
    },
    {
      image: "/images/portfolio_comm_1.png",
      title: "Lounge Area",
      category: "Commercial",
    },
    // Construction
    {
      image: "/images/const-1.jpg",
      title: "Villa Project",
      category: "Construction",
      featured: true,
    },
    {
      image: "/images/const-2.jpg",
      title: "Modern Mansion Build",
      category: "Construction",
    },
    {
      image: "/images/renovation-1.jpg",
      title: "Luxury Apartment Reno",
      category: "Construction",
    },
  ],

  testimonials: [
    {
      name: "Mr. Maniteja",
      role: "Homeowner, Warangal",
      text: "Skanda Industries turned our house into a home we're truly proud of. From modular kitchens to wardrobes, every detail was executed with precision and delivered right on schedule. Their craftsmanship and professionalism are unmatched.",
      rating: 5,
    },
    {
      name: "Dr. Chaitanya",
      role: "Ayurvedic Hospital, Hyderabad",
      text: "We needed a calming, functional environment for our patients, and Skanda delivered beyond expectations. The interiors beautifully balance traditional aesthetics with modern utility. Our patients and staff love the space.",
      rating: 5,
    },
    {
      name: "Mr. Uday",
      role: "Sri Rama Jewellery, Hanamkonda",
      text: "For a jewellery showroom, ambience is everything — and Skanda understood that perfectly. The lighting, finishes, and display layout elevate our brand and leave a lasting impression on every customer who walks in.",
      rating: 5,
    },
    {
      name: "Dr. Suresh",
      role: "Sunaina Eye Hospital, Mahabubabad",
      text: "Skanda handled our hospital interiors with remarkable attention to hygiene standards, patient comfort, and workflow efficiency. The team was responsive, disciplined, and delivered a space that truly reflects our quality of care.",
      rating: 5,
    },
    {
      name: "Mr. Nithin",
      role: "Vision Saloon, Hanamkonda",
      text: "The team at Skanda transformed our saloon into a stylish, premium experience for our clients. Their design sense, material choices, and execution quality are top-notch. Our bookings have grown ever since.",
      rating: 5,
    },
    {
      name: "Valued Clients",
      role: "Farm Houses & Resorts",
      text: "From luxury farm houses to boutique resorts, Skanda Industries has crafted countless unforgettable spaces across the region. Their ability to blend elegance with functionality makes them the trusted choice for discerning clients.",
      rating: 5,
    },
  ],

  about: {
    subtitle: "Who We Are",
    heading: "About Us",
    story:
      "Our vision is a world where every family lives in the dream house they deserve — designed with purpose, built with pride, and crafted to reflect who they are. Since 2018, this belief has guided us from a passionate small team into one of India's most trusted names in interior design and construction.",
    mission:
      "Our mission is to deliver exceptional interiors and construction through a transparent, client-first process — from the very first consultation to the final handover. We combine premium craftsmanship, honest pricing, and innovative design to create spaces that are as functional as they are beautiful.",
    values: [
      {
        title: "Quality Craftsmanship",
        description:
          "We use only premium materials and partner with the finest artisans to deliver interiors that stand the test of time.",
      },
      {
        title: "Client-First Approach",
        description:
          "Every project begins and ends with you. We listen, iterate, and perfect until your vision becomes reality.",
      },
      {
        title: "Innovation & Design",
        description:
          "We stay ahead of trends with cutting-edge 3D visualization, smart home integration, and sustainable practices.",
      },
    ],
  },

  process: [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin with a consultation to understand your vision, lifestyle, and budget preferences.",
    },
    {
      step: "02",
      title: "Budgeting",
      description:
        "Transparent and detailed budgeting to align your vision with a clear cost breakdown — ensuring no surprises and maximum value for your investment.",
    },
    {
      step: "03",
      title: "Design & Planning",
      description:
        "Our designers create detailed 3D visualizations and material selections for your approval.",
    },
    {
      step: "04",
      title: "Execution",
      description:
        "All components are precision-manufactured in our state-of-the-art factory and assembled on-site by expert craftsmen using quality materials and engineering.",
    },
    {
      step: "05",
      title: "Handover",
      description:
        "Thorough deep cleaning, final walkthrough, quality inspection, and handover with a comprehensive warranty package — ready for you to move in.",
    },
  ],

  footer: {
    tagline: "Transforming spaces, enriching lives — one home at a time.",
    quickLinks: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      "Modular Kitchens",
      "Premium Wardrobes",
      "Home Interiors",
      "Construction",
      "Commercial Spaces",
      "Home Theater & Smart Solutions",
    ],
  },
};
