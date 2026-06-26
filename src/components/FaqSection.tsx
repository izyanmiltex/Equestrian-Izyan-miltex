import { useState, useMemo } from "react";
import { FAQS } from "../data";
import { Search, ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const categories = useMemo(() => {
    const cats = new Set(FAQS.map((faq) => faq.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleToggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-surface-container-lowest luxury-grid py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-start gap-12 lg:gap-16">
          
          {/* Left Block: Description, Search, and Filters */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
                Expert Sourcing Intelligence
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                Frequently Asked Questions
              </h2>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
              Detailed technical answers for supply chain managers, design houses, and selective B2B horseware importers looking to mitigate manufacturing risk and maximize operational throughput.
            </p>

            {/* Live Search Input */}
            <div className="relative mt-4">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white/30 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search FAQs (e.g. MOQ, leather, sizing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container/60 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white placeholder-white/30 focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? "bg-primary border-primary text-on-primary font-bold shadow-md shadow-primary/15"
                      : "bg-surface border-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Block: Dynamic Interactive Accordions */}
          <div className="flex flex-col border-t border-white/10">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 flex flex-col items-center">
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">No matches found</p>
                <p className="text-xs text-white/40 max-w-[250px] mx-auto leading-relaxed">
                  Try adjusting your search query or switching categories.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-white/10 py-6 md:py-8 transition-all duration-300"
                  >
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full flex justify-between items-start text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-headline text-sm md:text-lg font-bold uppercase tracking-wide text-white group-hover:text-primary transition-colors pr-6">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 mt-1 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Smooth Collapsible Answer Box */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-primary font-mono">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Category Focus: {faq.category}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Direct Tech Assistance Banner */}
            <div className="mt-8 p-6 bg-surface-container/60 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Have a highly technical custom spec?</h4>
                <p className="text-[10px] text-white/50 mt-1 font-light">Speak directly to our primary pattern-makers. No intermediaries.</p>
              </div>
              <a
                href="mailto:info@izyanmiltex.com"
                className="px-5 py-2.5 border border-white/10 hover:border-primary text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-all rounded-lg flex items-center gap-1.5 text-white/80"
              >
                Send Specifications
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
