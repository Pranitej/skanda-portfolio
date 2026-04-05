// Central configuration file for Skanda Industries.
// Change anything here and the entire website updates automatically.

export const config = {
  company: {
    name: "Skanda Industries",
    tagline: "Premium Home Interiors & Construction — Elevating Your Living Spaces",
    description: "We transform ordinary spaces into extraordinary experiences. From concept to completion, our team of expert designers and builders craft bespoke interiors that reflect your unique personality and lifestyle.",
    email: "contact@skandaindustries.com",
    phone: "+91 98765 43210",
    address: "123 Elite Avenue, Tech Park, Hyderabad, India",
    founded: "2015",
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
    subheading: "Award-winning interior design & construction with uncompromising quality and elegance.",
    cta: "Book Free Consultation",
    ctaSecondary: "View Our Work",
    backgroundImage: "/images/hero.png",
  },

  stats: [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Expert Designers" },
  ],

  services: [
    {
      id: "modular-kitchens",
      title: "Modular Kitchens",
      description: "State-of-the-art functional kitchens designed to match your culinary lifestyle with premium European hardware.",
      image: "/images/kitchen.png",
    },
    {
      id: "wardrobes",
      title: "Premium Wardrobes",
      description: "Custom-built, space-saving sliding and walk-in wardrobes with luxury finishes and smart organization.",
      image: "/images/wardrobe.png",
    },
    {
      id: "home-interiors",
      title: "Full Home Interiors",
      description: "End-to-end interior design and execution for living rooms, bedrooms, and every corner of your home.",
      image: "/images/bedroom.png",
    },
    {
      id: "construction",
      title: "Construction & Renovation",
      description: "Structural changes, civil work, and premium renovations handled by seasoned construction experts.",
      image: "/images/construction.png",
    },
    {
      id: "commercial",
      title: "Commercial Spaces",
      description: "Dynamic and ergonomic office interiors that boost productivity and leave lasting impressions.",
      image: "/images/office.png",
    },
    {
      id: "decor",
      title: "Decor & Furnishing",
      description: "Curated lighting, custom soft furnishings, and bespoke home decor elements from around the world.",
      image: "/images/hero.png",
    },
  ],

  portfolio: [
    { image: "/images/hero.png", title: "Luxe Living Room", category: "Residential" },
    { image: "/images/kitchen.png", title: "Modern Kitchen", category: "Kitchen" },
    { image: "/images/bedroom.png", title: "Master Suite", category: "Bedroom" },
    { image: "/images/wardrobe.png", title: "Walk-in Closet", category: "Wardrobe" },
    { image: "/images/office.png", title: "Corporate Office", category: "Commercial" },
    { image: "/images/construction.png", title: "Villa Project", category: "Construction" },
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      role: "Homeowner, Hyderabad",
      text: "Skanda Industries transformed our 3BHK into a dream home. The attention to detail and quality of materials used were beyond our expectations.",
      rating: 5,
    },
    {
      name: "Rajesh Mehta",
      role: "CEO, TechVentures",
      text: "Our new office interior by Skanda has completely changed the work atmosphere. Employees love the space, and clients are always impressed.",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      role: "Homeowner, Bangalore",
      text: "From kitchen to wardrobes, every element was crafted with precision. The team was professional, timely, and incredibly creative.",
      rating: 5,
    },
  ],

  process: [
    { step: "01", title: "Consultation", description: "We begin with a free consultation to understand your vision, lifestyle, and budget preferences." },
    { step: "02", title: "Design & Planning", description: "Our designers create detailed 3D visualizations and material selections for your approval." },
    { step: "03", title: "Execution", description: "Expert craftsmen bring the designs to life with precision engineering and quality materials." },
    { step: "04", title: "Handover", description: "Final walkthrough, quality check, and handover with a comprehensive warranty package." },
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
    ],
  },
};
