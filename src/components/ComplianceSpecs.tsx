import { ArrowLeft, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

interface ComplianceSpecsProps {
  onBack: () => void;
}

export default function ComplianceSpecs({ onBack }: ComplianceSpecsProps) {
  const certifications = [
    { name: "EN ISO 20345:2022", scope: "Personal protective equipment — Safety footwear (S3, S5, WR, HRO, SRC)", authority: "SGS United Kingdom Ltd", status: "Active / Fully Certified" },
    { name: "ASTM F2413-18", scope: "Standard Specification for Performance Requirements for Protective (Steel/Composite) Toe Cap Footwear", authority: "Intertek Group plc", status: "Active / Fully Certified" },
    { name: "ISO 9001:2015", scope: "Quality Management Systems for Tannery & Footwear Manufacturing Operations", authority: "TUV SUD", status: "Active / Fully Certified" },
    { name: "LWG (Leather Working Group)", scope: "Gold Rated Audited Environmental Compliance & Sustainable Leather Sourcing", authority: "Leather Working Group Ltd", status: "Gold Rated Certification" },
  ];

  const laboratoryTests = [
    { parameter: "Impact Resistance (Steel/Composite Toe)", standard: "EN ISO 20345 / ASTM F2413", requirement: "≥ 200 Joules", result: "220J - 240J (Pass)", tolerance: "Zero fail margin" },
    { parameter: "Compression Resistance", standard: "EN ISO 20345 / ASTM F2413", requirement: "≥ 15 kN", result: "18.2 kN (Pass)", tolerance: "Zero fail margin" },
    { parameter: "Upper Leather Water Water Vapor Permeability", standard: "EN ISO 20345 § 5.4.6", requirement: "≥ 0.8 mg/(cm²·h)", result: "1.4 mg/(cm²·h) (Pass)", tolerance: "± 0.1 mg" },
    { parameter: "Sole Abrasion Resistance (Relative Volume Loss)", standard: "ISO 4649 (Method A)", requirement: "≤ 150 mm³", result: "108 mm³ (Pass)", tolerance: "± 5 mm³" },
    { parameter: "Outsole Flexing Resistance (Cut Growth)", standard: "EN ISO 20345 § 5.8.1.3", requirement: "≤ 4.0 mm at 30,000 flexes", result: "1.8 mm (Pass)", tolerance: "Zero crack propagation" },
    { parameter: "Antistatic Electrical Resistance (Dry/Wet)", standard: "EN ISO 20345 § 6.2.2.4", requirement: "100 kΩ to 1000 MΩ", result: "280 kΩ (Wet) / 450 MΩ (Dry)", tolerance: "100% batch verified" },
    { parameter: "Fuel Oil Resistance (Volume Increase)", standard: "EN ISO 20345 § 5.8.7", requirement: "≤ 12.0%", result: "2.4% (Pass)", tolerance: "± 0.5%" },
  ];

  return (
    <div className="bg-background min-h-screen text-on-background pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-white transition-all mb-8 bg-white/5 border border-white/5 hover:border-primary/30 px-4 py-2.5 rounded-full cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home Page
        </button>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center gap-3 text-primary mb-3">
            <ShieldCheck className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-[0.25em]">Compliance Registry</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Technical Compliance <span className="text-primary-container">&amp; Spec Registry</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-3xl mt-4 leading-relaxed font-light">
            Izyan Miltex engineered leather footwear meets or exceeds all key global standards for heavy-duty protection, environmental footprint, and ergonomic safety. Download certified test results or inspect laboratory batch parameters below.
          </p>
        </div>

        {/* Section 1: Official Certifications Grid */}
        <div className="mb-16">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-6 flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> International Certificates &amp; Audits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-surface-container/40 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {cert.name}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <h3 className="text-white font-bold text-base uppercase mb-2">{cert.scope}</h3>
                  <p className="text-white/40 text-xs font-light mb-4">Audited by: {cert.authority}</p>
                </div>
                <div className="flex items-center gap-2 text-green-400 font-mono text-[10px] uppercase font-bold tracking-wider pt-4 border-t border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Test Laboratory Logs */}
        <div className="mb-16">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-6 flex items-center gap-2">
            <span className="text-primary font-mono">02.</span> Laboratory Physical Test Metrics
          </h2>
          
          {/* Scrollable Desktop / Stacked Mobile Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-surface-container/20">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-surface-container/50 text-[10px] uppercase tracking-wider font-mono font-bold text-primary">
                  <th className="py-4 px-6">Physical Property / Parameter</th>
                  <th className="py-4 px-4">Standard Rule</th>
                  <th className="py-4 px-4">Minimum Threshold</th>
                  <th className="py-4 px-4">Izyan Miltex Output</th>
                  <th className="py-4 px-4 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {laboratoryTests.map((test, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors text-white/80 font-sans">
                    <td className="py-4 px-6 font-bold text-white">{test.parameter}</td>
                    <td className="py-4 px-4 text-white/60 font-mono">{test.standard}</td>
                    <td className="py-4 px-4 font-mono">{test.requirement}</td>
                    <td className="py-4 px-4 text-green-400 font-bold font-mono bg-green-500/5">{test.result}</td>
                    <td className="py-4 px-4 text-right text-white/40 text-[10px] font-mono">{test.tolerance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Call to Action Area */}
        <div className="bg-gradient-to-r from-primary/10 via-primary-container/5 to-transparent border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-primary">Technical Sourcing Support</span>
            </div>
            <h3 className="text-white font-headline text-lg md:text-xl font-bold uppercase">Need formal lab sheets or custom test protocols?</h3>
            <p className="text-white/60 text-xs md:text-sm mt-1 leading-relaxed font-light">
              We provide full batch certificates, ASTM chemical charts, and physical leather samples with full traceability for your pre-production evaluation.
            </p>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-xl shrink-0 cursor-pointer"
          >
            Configure Your Sample Call
          </button>
        </div>

      </div>
    </div>
  );
}
