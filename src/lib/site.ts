// Central place for site copy. Edit text, images and contact details here.

export const site = {
  name: "MPTB Solutions",
  tagline: "Technology that works as hard as you do.",
  email: "admin@mptbsolutions.com",
  phone: "+63 976 171 0642",
  address: "Cebu City, Philippines",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "How to Order", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Return Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const heroSlides = [
  {
    eyebrow: "Tech Hardware & Software",
    title: "Technology products for modern businesses.",
    description:
      "Shop biometric devices, CCTV cameras, networking equipment and ready-to-use software from MPTB Solutions.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80",
  },
  {
    eyebrow: "Biometric Devices",
    title: "Secure access. Accurate attendance.",
    description:
      "Fingerprint and face-recognition terminals for time attendance and access control, from trusted brands.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=2000&q=80",
  },
  {
    eyebrow: "CCTV & Security",
    title: "Clear coverage, day and night.",
    description:
      "IP cameras, DVR/NVR recorders and complete security camera kits for homes, offices and stores.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=2000&q=80",
  },
  {
    eyebrow: "Software & SaaS",
    title: "Software ready to use from day one.",
    description:
      "Subscribe to our proprietary SaaS platforms and software licenses built for growing businesses.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=2000&q=80",
  },
];

export const products = [
  {
    icon: "fingerprint",
    title: "Biometric Devices",
    description:
      "Fingerprint and face-recognition terminals for time attendance and access control, with optional setup included with your purchase.",
    items: [
      "Fingerprint scanners",
      "Face recognition",
      "Access control",
      "RFID readers",
    ],
    image: "/products/zkteco-bio-1.jpeg",
  },
  {
    icon: "camera",
    title: "CCTV Cameras & Security Systems",
    description:
      "IP and analog cameras, DVR/NVR recorders, storage drives and complete surveillance kits.",
    items: ["IP cameras", "DVR / NVR", "Camera kits", "Storage drives"],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80",
  },
  {
    icon: "server",
    title: "Networking Devices & Equipment",
    description:
      "Routers, switches, wireless access points, cables and accessories for homes and offices.",
    items: ["Routers", "Switches", "Access points", "Cables & accessories"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
  },
  {
    icon: "code",
    title: "Software & SaaS Products",
    description:
      "Ready-to-use software licenses and subscription-based SaaS platforms developed by MPTB Solutions.",
    items: ["SaaS subscriptions", "Software licenses", "Cloud dashboards"],
    image: "/products/saas-workforce-analytics.png",
    contain: true,
  },
] as const;

export const productPerks = [
  {
    icon: "badge",
    title: "Genuine products",
    description: "Sourced from trusted brands",
  },
  {
    icon: "card",
    title: "Secure online payment",
    description: "Pay safely online",
  },
  {
    icon: "truck",
    title: "Delivered to you",
    description: "Shipped straight to your door",
  },
  {
    icon: "shield",
    title: "Warranty included",
    description: "With after-sales assistance",
  },
] as const;

export const stats = [
  { value: "100+", label: "Orders delivered" },
  { value: "50+", label: "Business customers" },
  { value: "4", label: "Product categories" },
  { value: "24/7", label: "Online inquiries" },
];

export const steps = [
  {
    title: "Browse",
    description:
      "Explore our biometric, CCTV, networking and software product lines.",
  },
  {
    title: "Request a Quote",
    description:
      "Send us the products and quantities you need and get a clear price.",
  },
  {
    title: "Order & Pay",
    description: "Confirm your order and pay securely online.",
  },
  {
    title: "Delivery & Activation",
    description:
      "Hardware is shipped to you; software licenses and SaaS accounts are activated online.",
  },
];
