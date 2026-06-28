import { Star, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  tags: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Darragh McCarthy",
    role: "Director of Sourcing",
    company: "Dublin Saddle Co.",
    content: "We were highly skeptical about the $0 physical sample offer, but the custom anatomical saddle pad arrived in Dublin exactly 24 days later. The stitching precision and spacer-mesh core were flawless, leading to an immediate 800-unit container contract.",
    rating: 3.5,
    tags: ["Saddle Pad Line", "Free Samples"]
  },
  {
    id: "review-2",
    name: "Karin Lindqvist",
    role: "Head of Product Design",
    company: "Stockholm Sport Horse",
    content: "The English calfskin leather quality on the custom anatomical bridles is exceptional. No edge-curling or brass pitting after 6 months of active sweat field-tests on professional horses. Their cranial-relief patterns completely eliminate crown pressure.",
    rating: 3.5,
    tags: ["Bridle Line", "Anatomical Fit"]
  },
  {
    id: "review-3",
    name: "William Vance",
    role: "Founder & Chief Officer",
    company: "Apex Equine USA",
    content: "Our previous factory was bleeding us with $500 prototyping fees per iteration and 1000-unit minimums. Transitioning to Izyan Miltex reduced our fitting complaints to exactly 0% and saved us over $15,000 in upfront tooling capital.",
    rating: 4,
    tags: ["Girth Line", "Capital-Safe Sourcing"]
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#121414] text-white relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.05),transparent_60%)]" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Trustpilot Top Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 mb-16 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            {/* Trustpilot Icon & Name in original branding style */}
            <div className="flex items-center gap-2 select-none">
              <svg className="w-6 h-6 text-[#00b67a] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.25 10H14.5L12 2.5L9.5 10H1.75l6.25 4.5l-2.5 7.5L12 17.5l6.5 4.5l-2.5-7.5l6.25-4.5z" />
              </svg>
              <span className="font-headline font-bold text-lg md:text-xl tracking-tight text-white">
                Trustpilot
              </span>
            </div>
            <div className="h-[1px] md:h-6 w-12 md:w-[1px] bg-white/10" />
            <div>
              <div className="flex items-center gap-1 justify-center md:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
                    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                ))}
                <span className="text-xs font-bold font-mono ml-2 text-white">4.9 / 5</span>
              </div>
              <p className="text-[10px] sm:text-xs text-white/50 mt-1 uppercase tracking-wider font-mono font-medium">
                Excellent based on 148+ verified B2B Sourcing Partners
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-primary font-mono text-[10px] md:text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Verified Corporate Clients</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
            Equestrian Importer Proof
          </span>
          <h2 className="font-headline text-2xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Unmatched Precision. Zero Initial Investment.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 mt-4 leading-relaxed font-light">
            Read how global saddlery brands and commercial equestrian importers bypass traditional supply chain risk with our certified high-precision prototyping.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEST_REVIEWS()}
        </div>

      </div>
    </section>
  );

  function TEST_REVIEWS() {
    return TESTIMONIALS.map((t) => (
      <div 
        key={t.id} 
        className="matte-card relative p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full hover:scale-[1.01] transition-all duration-300"
      >
        {/* Quote Top Accent */}
        <div className="absolute top-6 right-6 text-white/5 pointer-events-none text-6xl font-serif">
          “
        </div>

        <div className="flex flex-col gap-5">
          {/* Rating */}
          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, i) => {
              const starIndex = i + 1;
              const fullStars = Math.floor(t.rating);
              const hasHalf = t.rating % 1 !== 0;

              if (starIndex <= fullStars) {
                return <Star key={i} className="w-3.5 h-3.5 text-[#00b67a] fill-[#00b67a]" />;
              } else if (starIndex === fullStars + 1 && hasHalf) {
                return (
                  <div key={i} className="relative w-3.5 h-3.5 shrink-0">
                    <Star className="absolute top-0 left-0 w-3.5 h-3.5 text-white/15 fill-none" />
                    <div className="absolute top-0 left-0 w-[50%] h-full overflow-hidden">
                      <Star className="w-3.5 h-3.5 text-[#00b67a] fill-[#00b67a] max-w-none" />
                    </div>
                  </div>
                );
              } else {
                return <Star key={i} className="w-3.5 h-3.5 text-white/15 fill-none" />;
              }
            })}
            <span className="text-[10px] font-mono font-bold text-[#00b67a]/90 ml-1.5 bg-[#00b67a]/10 px-1.5 py-0.5 rounded">
              {t.rating.toFixed(1)}
            </span>
          </div>

          {/* Review Text */}
          <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-light italic">
            "{t.content}"
          </p>
        </div>

        {/* User Info */}
        <div className="border-t border-white/5 pt-5 mt-6">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {t.name}
            </span>
            <span className="text-[10px] text-white/40 mt-0.5">
              {t.role} — <strong className="text-primary font-medium">{t.company}</strong>
            </span>
          </div>

          {/* Product Tag */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {t.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[8px] font-bold font-mono uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded text-white/50 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ));
  }
}
