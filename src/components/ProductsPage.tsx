import { PRODUCT_LINES, ProductLine } from "../data";
import { Check, ShieldCheck, Sparkles, Layers, Info, Calendar } from "lucide-react";

interface ProductsPageProps {
  onConfigureProduct: (productId: string) => void;
}

export default function ProductsPage({ onConfigureProduct }: ProductsPageProps) {
  return (
    <div className="bg-background min-h-screen text-on-background pt-36 md:pt-44 pb-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <div className="flex items-center gap-3 text-primary mb-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-[0.25em]">Factory-Direct Catalog</span>
          </div>
          <h1 className="font-headline text-3xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.1]">
            Anatomical &amp; <br />
            <span className="text-primary-container">Kinetic Product Lines</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-light">
            High-spec equestrian lines engineered for elite performance and commercial distribution. Built with premium raw materials and anatomical pressure-relief mapping.
          </p>
        </div>

        {/* Product List - One below the other */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PRODUCT_LINES.map((product: ProductLine, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={product.id}
                id={`product-detail-${product.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-20 last:border-0 last:pb-0"
              >
                {/* Product Image Column - Staggered layout on desktop */}
                <div className={`lg:col-span-6 flex flex-col gap-5 lg:sticky lg:top-28 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  
                  {/* Single High-Quality Primary Picture */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black group product-vignette">
                    <img
                      referrerPolicy="no-referrer"
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-95 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Colorways Selection UI - Inline and compact */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="bg-surface-container/20 border border-white/5 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
                        B2B Colorways:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                            <span 
                              className="w-3 h-3 rounded-full border border-white/10 block shrink-0" 
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-[11px] text-white/80 font-medium font-sans">
                              {color.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Specs Column - Less heavy text, more to-the-point */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-1.5 block">
                      {product.category}
                    </span>
                    <h2 className="font-headline text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-3">
                      {product.name}
                    </h2>
                    <p className="font-sans text-white/60 text-sm leading-relaxed font-light">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Anatomical Innovations - Rendered as highly visual high-impact tags instead of large text blocks */}
                  <div>
                    <h3 className="text-white font-mono text-[10px] uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      Anatomical Innovations
                    </h3>
                    <div className="flex flex-col gap-2">
                      {product.hotspots.map((hotspot) => (
                        <div 
                          key={hotspot.id} 
                          className="bg-surface-container/30 border border-white/5 rounded-xl px-4 py-2.5 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs uppercase font-bold tracking-wider text-white">
                              {hotspot.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-white/40 uppercase">
                            Engineered Spec
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications - Bullet lists made compact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-container/10 border border-white/5 rounded-2xl p-5">
                    <div>
                      <h4 className="text-primary text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                        Premium Materials
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {product.specs.materials.slice(0, 3).map((material, mIdx) => (
                          <li key={mIdx} className="flex items-center gap-2 text-xs text-white/70 font-light">
                            <Check className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                            <span className="font-sans">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-primary text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                        Technical Features
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {product.specs.features.slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-white/70 font-light">
                            <Check className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                            <span className="font-sans">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sm:col-span-2 pt-3 border-t border-white/5 flex items-center justify-between gap-3 text-[11px] text-white/50">
                      <span className="font-mono uppercase font-bold tracking-wider">
                        Sizing Distribution:
                      </span>
                      <span className="font-medium">
                        {product.specs.dimensions}
                      </span>
                    </div>
                  </div>

                  {/* Call to Action - Changed to Book Free Prototype Call */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                    <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary font-mono text-[10px] font-bold uppercase tracking-widest mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        B2B Sourcing Samples
                      </div>
                      <p className="text-[11px] text-white/40 font-sans font-light">
                        Book a free design consultation call to customize materials, colors, and sizing details.
                      </p>
                    </div>
                    <button
                      onClick={() => onConfigureProduct(product.id)}
                      className="btn-shimmer text-on-primary font-headline text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg shrink-0 w-full sm:w-auto text-center cursor-pointer"
                    >
                      Book my FREE sample →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
