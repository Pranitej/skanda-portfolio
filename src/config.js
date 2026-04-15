// Central configuration file for Skanda Industries.
// Change anything here and the entire website updates automatically.

export const config = {
  company: {
    name: "Skanda Industries",
    tagline:
      "Premium Home Interiors & Construction — Elevating Your Living Spaces",
    description:
      "We transform ordinary spaces into extraordinary experiences. From concept to completion, our team of expert designers and builders craft bespoke interiors that reflect your unique personality and lifestyle.",
    email: "contact@skandaindustries.com",
    phone: "+91 98765 43210",
    address: "123 Elite Avenue, Tech Park, Hyderabad, India",
    founded: "2002",
    socials: {
      instagram: "https://instagram.com/skandaindustries",
      facebook: "https://facebook.com/skandaindustries",
      linkedin: "https://linkedin.com/company/skandaindustries",
      twitter: "https://twitter.com/skandaind",
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
    { value: 2000, suffix: "+", label: "Projects Completed" },
    { value: 12, suffix: "+", label: "Years Experience" },
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
        "Curated lighting solutions, custom soft furnishings including curtains and blinds, designer wallpapers, and bespoke home decor elements sourced from around the world.",
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
      "Founded in 2002, Skanda Industries was born from a simple belief — every space has the potential to inspire. What started as a small team of passionate designers has grown into one of India's most trusted interior design and construction firms.",
    mission:
      "Our mission is to craft living and working environments that perfectly balance aesthetics, functionality, and sustainability — all delivered with uncompromising quality.",
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
      title: "Design & Planning",
      description:
        "Our designers create detailed 3D visualizations and material selections for your approval.",
    },
    {
      step: "03",
      title: "Budgeting",
      description:
        "Transparent and detailed budgeting to align your vision with a clear cost breakdown — ensuring no surprises and maximum value for your investment.",
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
