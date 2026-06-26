import React, { useState } from "react";
import { Mail, Phone, ShieldCheck, ArrowRight, MessageSquare, Check, Globe } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "compliance" | "privacy" | "manufacturing" | "contact") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) return;

    const subjectLine = formData.subject || "Direct Sourcing Inquiry";
    const bodyContent = `${formData.message}`;
    window.location.href = `mailto:tehmeena@izyanmiltex.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ subject: "", message: "" });
    }, 4000);
  };

  return (
    <footer className="bg-background border-t border-white/10 relative overflow-hidden">
      
      {/* 2. Main Footer Grid content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 luxury-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Logo & Compliance Column (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTx7jKCSQQMmK3U7XHMIP7vJX1ODLEeefcMUXnBKg_bdmwdqirFxpaWOJ5VQ0DyuofyYxbeGkjdO2alS_O1HBpdiGLIy5LoPRqx9ktmLgWuH8Sf_QCwvsb-JMt3ahiH494JAgACJMPWdyrQwqNspujEC3OoDE5I_TH5JM_UWLKkT9Oypx1rmzNVCJAeGZ4rDQCavGYE9OWvT_XnwMxBL7IQXATTFG-9Y32h9L_W2WtmLdl_iojHAFvzP2RqTd1Cx7XdA"
                alt="Izyan Miltex Logo"
                className="h-[35px] md:h-[43px] w-auto object-contain"
              />
              <button
                onClick={() => onNavigate("home")}
                className="font-headline text-lg md:text-2xl font-bold text-primary tracking-[0.3em] uppercase cursor-pointer text-left focus:outline-none"
              >
                IZYAN MILTEX
              </button>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
              © 2024 Izyan Miltex. Industrial Excellence Reserved. All custom designs, raw leather parameters, and engineering patterns are fully protected by mutual international non-disclosure agreements and enforceable quality-guarantee warranties.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              <a
                href="?page=compliance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline cursor-pointer text-left"
              >
                Compliance Specs
              </a>
              <span className="text-white/10">|</span>
              <a
                href="?page=privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline cursor-pointer text-left"
              >
                Privacy Warranty
              </a>
              <span className="text-white/10">|</span>
              <a
                href="?page=manufacturing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline cursor-pointer text-left"
              >
                Manufacturing Deck
              </a>
              <span className="text-white/10">|</span>
              <button
                onClick={() => onNavigate("contact")}
                className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline cursor-pointer text-left focus:outline-none"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Quick Contacts Column (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h5 className="text-[10px] uppercase font-bold tracking-widest text-primary font-mono">
              Direct Contact Lines
            </h5>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:tehmeena@izyanmiltex.com" className="text-xs md:text-sm text-white/80 hover:text-primary transition-colors font-light font-medium">
                    tehmeena@izyanmiltex.com
                  </a>
                  <a href="mailto:info@izyanmiltex.com" className="text-xs md:text-sm text-white/80 hover:text-primary transition-colors font-light mt-1">
                    info@izyanmiltex.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+917800496964" className="text-sm md:text-base font-bold text-primary hover:underline">
                  +91 78004 96964
                </a>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs text-white/50 font-light">
                  Kanpur Industrial Estate, India
                </span>
              </div>
            </div>

            {/* LinkedIn/Social SVG */}
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-full bg-white/5 hover:border-primary transition-all text-primary"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Message form column (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-surface-container/30 p-6 rounded-2xl border border-white/5 shadow-inner">
            <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase font-bold tracking-widest">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Sourcing Inquiry</span>
            </div>

            {submitted ? (
              <div className="text-center py-6 animate-fade-in flex flex-col items-center justify-center h-full">
                <div className="p-2.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h6 className="text-xs font-bold text-white uppercase tracking-wider">Inquiry Dispatched</h6>
                <p className="text-[10px] text-white/50 mt-1 max-w-[200px]">
                  Our technical sourcing representative will reply within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Subject / Target Sizing"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <textarea
                    required
                    placeholder="What specific specifications or materials are you looking to prototype? *"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Direct Inquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 3. Bottom disclaimer line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/30 font-mono">
          <div>
            ISO 9001:2015 &amp; EN-8430 compliance certified
          </div>
          <div className="flex items-center gap-1.5 text-primary">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Encrypted Sourcing Platform</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
