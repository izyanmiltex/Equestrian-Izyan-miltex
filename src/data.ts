// Predefined data for Izyan Miltex kinetic luxury equestrian manufacturing

export interface ProductLine {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  specs: {
    materials: string[];
    features: string[];
    dimensions: string;
    description: string;
  };
  hotspots: {
    id: string;
    title: string;
    description: string;
    top: string; // position percentages
    left: string;
  }[];
  colors?: { name: string; hex: string }[];
  careType?: "cotton" | "waterproof" | "general";
}

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "saddle-pad",
    name: "Anatomical Contour Saddle Pad",
    category: "Saddle Pad Line",
    tagline: "Anatomical pressure relief with custom breathability inserts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl1BnCczmjT-qqry1fBcXSHa2afS9CbX_gTTEMQ3D9JLxW8Vby5B-qI-IDGpxjrMc2XSQZsLWy9e2It9xOmw2ys_glPzDjizwNeDmYtNr5pdCmemwJi-IMSmpSfksNIj0ZWOAl5H-Db4Z55_JAw18kCJoi8xan_jf9edUbIE8AVF-TRyQQX-ontGFgg_s5nb2lLZzTu91TIDlxt1JUnzpM1SsL29HV0fi8rV5EmMKCoVUJvwRQFPjt",
    specs: {
      materials: ["3D Spacer mesh core", "Premium suede exterior", "Merino fleece underside", "High-density foam reinforcement"],
      features: ["Wither relief clearance contour", "D-ring attachment straps", "Anti-slip silicone grip printing", "Heavy-duty binding"],
      dimensions: "Dressage, Jump, or Pony cut-out profiles available",
      description: "Crafted to eliminate direct spine pressure and dissipate heat under extreme performance conditions. Meticulously constructed with a curved spine line for maximum comfort."
    },
    hotspots: [
      { id: "sp-1", title: "Anatomical Spine Curve", description: "Contoured to follow the natural arch of the horse's back, lifting pressure entirely off the wither.", top: "15%", left: "50%" },
      { id: "sp-2", title: "3D Air-Spacer Core", description: "Dynamic air circulation matrix that dissipates heat 4.2x faster than traditional batting.", top: "45%", left: "45%" },
      { id: "sp-3", title: "Girth Reinforcement", description: "Ballistic leather reinforcement panels at high-wear zones to guarantee multi-season longevity.", top: "75%", left: "30%" }
    ],
    colors: [
      { name: "White Velvet", hex: "#FFFFFF" },
      { name: "Carbon Black", hex: "#1A1A1A" },
      { name: "Navy Blue", hex: "#1B2A4A" }
    ],
    careType: "cotton"
  },
  {
    id: "horse-rug",
    name: "Ballistic Turnout Rug Blanket",
    category: "Horse Rug Line",
    tagline: "1680D ballistic weather shield tailored to breed conformations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADZmnjIHRN_YOP0LvGbINYIdIdYr8ckX9RhO2E7ejm-o6jCagvhOScTdnut3JeWxM--dLeG97dty1-1BF3kQEIgFe6b_MxchKoDsTMTe9lD-6m8CnEzBo3ftQc0ZAZV1DxPvlzCo5BJanrThKxVfBvQKpaDC5K-7DRwykk_Ca1uuwO48hThUiNUg9zDSSE0jCG-joLy8KIkRCbSVkeldae9lD7o3IjjjXAOW_X5BXenJdYFqeFArTr",
    specs: {
      materials: ["1680D Ballistic Nylon", "Antibacterial silk lining", "Thermo-bonded fiberfill (0g - 400g options)", "Teflon outer coating"],
      features: ["Patented V-front closure system", "Integrated dual-adjust leg arches", "Elasticated safety surcingles", "Reflective safety piping"],
      dimensions: "Sizes ranging from 66\" to 84\" (custom sizing on technical specifications)",
      description: "An absolute shield against extreme weather elements. Features our proprietary shoulder-relief angle that eliminates rubbing and allows unrestricted grazing."
    },
    hotspots: [
      { id: "hr-1", title: "1680D Ballistic Shell", description: "Extremely tear-resistant waterproof outer shell with premium Teflon stain repel coating.", top: "30%", left: "60%" },
      { id: "hr-2", title: "V-Front Pressure Plate", description: "Bypasses the shoulder joint entirely, alleviating chest pressure and eliminating standard hair-rubbing.", top: "40%", left: "15%" },
      { id: "hr-3", title: "Deep-Cut Tail Flap", description: "Oversized windproof rear barrier with secure magnetic clip tethering.", top: "65%", left: "85%" }
    ],
    colors: [
      { name: "Midnight Navy Blue", hex: "#1B2A4A" },
      { name: "Forest Green", hex: "#1A3322" }
    ],
    careType: "waterproof"
  },
  {
    id: "bridle",
    name: "B2B Equestrian Sourcing Leather Bridle",
    category: "Bridle Line",
    tagline: "Anatomically padded English hide with brass hardware.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmdBvx4CSJOq03Cj9m03Es8LoBDra4b7UYx_EkCfo-S9ar-EDMNrMdO4HnekNvi88SpovgTD-2SbH8QrUHsqh2qOcgSLSk-EJjvrf8XWDHCDivBIU2G0uyVFZrFqSrChoDguotieD1CN5MvBFHgDAj6miWnfEBskRxs5sghbIyhU5rmO8m8ocwHr1bP-JtBzXBQI9JC5c_ADGz1VrFxgaobH1ZexRYnBPo1nTuO6XIZUTABLsBrbzA",
    specs: {
      materials: ["Vegetable-tanned full-grain English hide", "Soft nappa leather padding", "Solid cast marine brass buckle set", "Heavy wax-threaded stitching"],
      features: ["Cranial-relief ear cutout crownpiece", "Padded noseband with comfort jaw-pad", "Dual-side buckle adjustments", "Comfort browband with crystal/brass inlay options"],
      dimensions: "Cob, Full, and Warmblood anatomical cuts",
      description: "Hand-stitched over 24 hours of dedicated b2b equestrian sourcing labor. This bridle bypasses crucial cranial nerves behind the ears and on the cheekbone for unparalleled focus."
    },
    hotspots: [
      { id: "b-1", title: "Cranial-Relief Crown", description: "Formed ear cutout and widened profile that distributes temple pressure away from critical nerve pathways.", top: "10%", left: "50%" },
      { id: "b-2", title: "Nappa Padded Noseband", description: "Extra-soft, non-constrictive noseband designed to maximize jaw movement and comfort during contact.", top: "55%", left: "32%" },
      { id: "b-3", title: "Solid Marine Brass", description: "Heavy-duty cast buckles that never pit or corrode, guaranteeing absolute reliability in all conditions.", top: "45%", left: "68%" }
    ],
    colors: [
      { name: "Ebony Black", hex: "#111111" },
      { name: "Havana Brown", hex: "#3B2219" }
    ],
    careType: "general"
  },
  {
    id: "girth",
    name: "Pressure-Relief Contoured Girth",
    category: "Girth Line",
    tagline: "Symmetric elbow-relief curvature with dual-core cushioning.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiyx59aGfxL0SzUzuucgHGMHU2d_xatuk1s86pYKVuQBuLFmiOmjkm1EDGGhYryxxQ_IHv6A7lZoitZGBrfDm3-0PvNX2seyXGCxYHLElLorMkPRrTOQwq63SbCp8PNO-48o-yNPlY1haGl6v1iOAxY2W1ots6v2x5mXGOrzPwdgvjIWjdOkH0c8WH9c5-CYhQHPjiEqqGBVtOg89-VGN9NHWBdOsFglc6GlBiEHb2Ue4OaFWSxiVY",
    specs: {
      materials: ["Ultra-soft oiled calfskin lining", "Dynamic memory foam inner core", "Triple-layered heavy-duty elastic", "AISI 316 Stainless steel roller buckles"],
      features: ["Symmetrical elbow-clearance contour", "Central D-ring training auxiliary loop", "Even-pull elastic distribution", "Wipe-clean protective sweat-barrier"],
      dimensions: "Sizes 20\" to 34\" (Short/Dressage) or 44\" to 56\" (Long/Jump)",
      description: "Designed specifically to eliminate elbow rubbing and encourage maximum forelimb extension. Its wide sternum section spreads tension evenly across the ribcage."
    },
    hotspots: [
      { id: "g-1", title: "Elbow Recess Contour", description: "Sculpted side cutaways that prevent under-arm pinching and skin chafing on every stride.", top: "20%", left: "20%" },
      { id: "g-2", title: "Memory-Foam Sternum Core", description: "Spreads pressure evenly across the breastplate, allowing full lung expansion during gallop.", top: "50%", left: "50%" },
      { id: "g-3", title: "Triple-Layer Elastic Anchors", description: "Marine-grade elastic ends with integrated roller buckles that glide effortlessly when tightening.", top: "80%", left: "80%" }
    ],
    colors: [
      { name: "Ebony Black", hex: "#111111" },
      { name: "Oakbark Brown", hex: "#4A2F13" }
    ],
    careType: "general"
  }
];

export const MITIGATION_FACTORS = [
  {
    id: "fitment",
    painpoint: "Poor Fitment & Horse Rubbing",
    cause: "Standard flat patterns and stiff, non-breathable textiles that chaff the skin.",
    mitigation: "Every Izyan design has a built-in 3D anatomical arch. Our templates are molded for specific North American breed groups, providing immediate wither clearance and shoulder-angle relief.",
    icon: "straighten"
  },
  {
    id: "quality",
    painpoint: "Supplier Quality Drops & Defective Stitching",
    cause: "Outsourced industrial lines cutting corners on thread quality and material standards.",
    mitigation: "We use triple-twisted waxed heavy-duty thread, reinforced dual-stitching, and our premium vegetable-tanned hides undergo double QA cycles. Zero defects across four consecutive quarters guaranteed.",
    icon: "verified"
  },
  {
    id: "hardware",
    painpoint: "Rusting Buckles & Hardware Failures",
    cause: "Cheap alloy buckle sets which corrode instantly upon sweat exposure.",
    mitigation: "We exclusively cast solid marine brass or utilize AISI 316 stainless steel roller buckle configurations with heavy leather backing plates.",
    icon: "construction"
  },
  {
    id: "delivery",
    painpoint: "Uncertain Lead Times & Prototyping Delay",
    cause: "Lengthy negotiating periods, slow sample creation, and postal service blackouts.",
    mitigation: "We handcraft and air-ship your customized physical samples straight to your office desk in 25 days at exactly $0, with live DHL/FedEx status feeds.",
    icon: "flight_takeoff"
  },
  {
    id: "moq",
    painpoint: "Extremely Rigid, High Factory MOQs",
    cause: "Traditional factories require mass runs of 1000+ units, trapping your capital.",
    mitigation: "We provide highly flexible B2B ordering lines. Our MOQs are 30% to 50% lower, enabling seamless scaling for boutique premium brands and selective importers.",
    icon: "shopping_bag"
  }
];

export const CALENDAR_DAYS = [
  { id: "day-12", label: "AUG 12", active: true },
  { id: "day-14", label: "AUG 14", active: true },
  { id: "day-15", label: "AUG 15", active: true, selected: true },
  { id: "day-16", label: "AUG 16", active: true },
  { id: "day-17", label: "AUG 17", active: true },
  { id: "day-19", label: "AUG 19", active: true }
];

export const CALENDAR_TIMES = [
  { id: "time-1", range: "09:00 AM - 10:00 AM", tz: "EST" },
  { id: "time-2", range: "01:30 PM - 02:30 PM", tz: "EST" },
  { id: "time-3", range: "04:00 PM - 05:00 PM", tz: "EST" }
];

export const FAQS = [
  {
    id: "faq-1",
    category: "Pricing",
    question: "How can you offer free samples?",
    answer: "We absorb 100% of the R&D, blueprint, pattern-making, and physical assembly costs because we have complete skin in the game. Our specialized manufacturing system enables us to construct initial custom physical samples without capital commitment from you, proving our superior b2b equestrian sourcing-grade quality."
  },
  {
    id: "faq-2",
    category: "Sizing",
    question: "What US horse breeds do you fit for?",
    answer: "Our anatomical CAD databases store precise measurements for Quarter Horses, Thoroughbreds, Warmbloods, and ponies commonly found in the premium North American market. We adjust panel angles, girth recesses, and rug neck contours accordingly so they fit true to size."
  },
  {
    id: "faq-3",
    category: "MOQ",
    question: "What are your minimum order quantities (MOQs)?",
    answer: "We support high B2B flexibility. Depending on the custom line, our MOQs are 30-50% lower than typical heavy-industry overseas factories, meaning you can launch a premium, capital-safe capsule collection starting around 100-200 units."
  },
  {
    id: "faq-4",
    category: "Exclusivity",
    question: "Do you offer territorial or brand exclusivity?",
    answer: "Yes. Once an active partnership contract is signed, we establish a robust 2-year territorial exclusivity moat, guaranteeing we will not manufacture identical or competing custom lines for any other retailer in your target geographic district."
  },
  {
    id: "faq-5",
    category: "Logistics",
    question: "How is shipping handled for production and samples?",
    answer: "Initial samples are sent via express air-couriers (DHL/FedEx/UPS) completely free, arriving within 25 days from the spec sheet sign-off. Bulk orders are processed via trusted maritime or priority air cargo channels based on your target distribution timeline, accompanied by comprehensive customs brokerage clearance documentation."
  }
];
