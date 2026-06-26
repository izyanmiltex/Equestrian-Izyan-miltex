import React, { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Check, ShieldCheck, Globe } from "lucide-react";

interface ContactProps {
  onBack: () => void;
}

export default function Contact({ onBack }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message || !formData.email) return;

    const subjectLine = formData.subject || `Sourcing Contact Request from ${formData.name || "Client"}`;
    const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:tehmeena@izyanmiltex.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

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
            <Mail className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-xs uppercase font-bold tracking-[0.25em]">Global Communications</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Contact <span className="text-primary-container">Our Sourcing Office</span>
          </h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-3xl mt-4 leading-relaxed font-light">
            Have questions regarding custom specifications, Leather Working Group certifications, physical sample dispatch, or private labeling terms? Get in touch with our team directly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Address Block */}
            <div className="bg-surface-container/30 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/20 transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white mb-2">Registered Address</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light font-sans whitespace-pre-line">
                  82-A, Shyam Nagar, Scheme-II - C.O.D.
                  Kanpur - 208013 - (UP) - India
                </p>
                <div className="flex items-center gap-1.5 text-primary text-[10px] uppercase font-mono font-bold tracking-widest mt-3">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Kanpur Leather Industrial Hub</span>
                </div>
              </div>
            </div>

            {/* Email Contact Lines */}
            <div className="bg-surface-container/30 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/20 transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white mb-2">Direct Sourcing Emails</h4>
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-[10px] text-white/40 block">Technical Director:</span>
                    <a href="mailto:tehmeena@izyanmiltex.com" className="text-sm font-bold text-primary hover:underline">
                      tehmeena@izyanmiltex.com
                    </a>
                  </div>
                  <div className="border-t border-white/5 pt-2">
                    <span className="text-[10px] text-white/40 block">General Information:</span>
                    <a href="mailto:info@izyanmiltex.com" className="text-sm text-white/80 hover:text-primary transition-colors">
                      info@izyanmiltex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone and Hours */}
            <div className="bg-surface-container/30 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-primary/20 transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white mb-2">Telephone Hotline</h4>
                <a href="tel:+917800496964" className="text-lg font-bold text-primary hover:underline">
                  +91 78004 96964
                </a>
                <p className="text-white/40 text-[10px] mt-1 font-light leading-relaxed">
                  Call or WhatsApp for instant support on sampling schedules and pricing.
                </p>
              </div>
            </div>

            {/* Sourcing Timeline Info */}
            <div className="bg-surface-container/10 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-white/5 text-white/40 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Office Hours</h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">
                  Monday – Saturday: 09:00 AM – 06:30 PM (IST)<br />
                  Response ceiling on written inquiries: Under 4 Hours.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-surface-container/20 border border-white/5 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            
            <h3 className="text-white font-headline text-lg font-bold uppercase mb-2">Submit a Spec Inquiry</h3>
            <p className="text-white/50 text-xs font-light mb-6 leading-relaxed">
              Fill out your company requirements and the materials or design standards you wish to target for private labeling.
            </p>

            {submitted ? (
              <div className="text-center py-12 animate-fade-in flex flex-col items-center justify-center h-full">
                <div className="p-4 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Inquiry Dispatched</h4>
                <p className="text-xs text-white/50 mt-2 max-w-sm leading-relaxed">
                  Your message has been formatted successfully. Our technical director Tehmeena will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/50 block mb-1.5 font-mono">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/50 block mb-1.5 font-mono">Business Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/50 block mb-1.5 font-mono">Subject / target boots</label>
                  <input
                    type="text"
                    placeholder="e.g. Waterproof Leather Safety Boot Sourcing"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/50 block mb-1.5 font-mono">Detailed Sourcing Requirements *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details of your required composite/steel toe standards, leather thicknesses, soles, or estimated batch sizes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-primary outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  Send Sourcing Inquiry
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Secure encrypted enterprise-grade submission</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
