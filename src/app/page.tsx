"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Droplets, Droplet, Wind, Grip, Fan, Table, Beaker, RefreshCcw, Share2, Leaf, Shield, Settings, BarChart3, Phone, Mail, MapPin, ChevronRight, Target, Sliders, Layers, Briefcase, Factory, LifeBuoy, Globe, Users, FileText, Send, Cloud, FlaskConical, Pill, Car, PaintRoller, Utensils, Cpu, Scissors, Gem, FileSearch, MonitorCog, Wrench, Headset, Building2, Anchor, FileBadge, ArrowRight, ArrowUpRight, Plane, Database, Info, CircleDot, Asterisk, LineChart, Thermometer, Clock, Box, ClipboardCheck, Search } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import ThreeBackground from "@/components/napcen-landing/ThreeBackground";
import LogoTicker from "@/components/napcen-landing/LogoTicker";
import WorkflowSection from "@/components/napcen-landing/WorkflowSection";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function NapcenLandingPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", industry: "", application: "", equipment: "", desc: "",
    country: "", location: "", airflow: "", unit: "", temp: "", timeline: ""
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [productFilter, setProductFilter] = useState("All equipment");
  const [exhaustTab, setExhaustTab] = useState(0);

  const exhaustTabs = [
    {
      title: "H₂S / odour",
      cardTitle: "Reactive media for H₂S control",
      cardDesc: "Share inlet H₂S concentration, peak loading, humidity and required outlet concentration. Media chemistry and contact time must suit the stream; a lead–lag arrangement can be considered for monitoring and changeover.",
      image: "/Modern Stainless Industrial Processing Plant.png"
    },
    {
      title: "VOC / solvent",
      cardTitle: "Assess adsorption suitability first",
      cardDesc: "Share the individual VOC species, concentrations and gas temperature. Carbon adsorption requires a review of capacity, humidity, breakthrough and potential heat generation. Not every VOC stream is suitable.",
      image: "/Industrial Activated Carbon Adsorption Skid.png"
    },
    {
      title: "Acid gas",
      cardTitle: "Review dry reagent treatment",
      cardDesc: "Acid-gas control may require a reactive sorbent injection system and downstream particulate collection. Share acid-gas species, temperature, flow and treatment targets so the process can be evaluated.",
      image: "/Industrial Reagent Injection and Baghouse System.png"
    },
    {
      title: "Biogas",
      cardTitle: "Biogas H₂S removal with selected dry media",
      cardDesc: "Share methane and H₂S composition, gas flow, temperature, moisture, oxygen content and the downstream outlet requirement. Evaluate media compatibility, loading, pressure loss and safe changeout. Biogas treatment requires a process-specific review of flammable-gas handling.",
      image: "/Biogas Processing and Adsorption System.png"
    },
    {
      title: "Mixed / unsure",
      cardTitle: "Start with a gas analysis",
      cardDesc: "A mixed or unknown stream needs characterisation before selecting media. Share any available test report, safety data, process description and odour observations to guide the application review.",
      image: "/Industrial H₂S Adsorption Skid (1).png"
    }
  ];
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Your inquiry has been successfully submitted.");
        setFormData({
          name: "", company: "", email: "", phone: "", industry: "", application: "", equipment: "", desc: "",
          country: "", location: "", airflow: "", unit: "", temp: "", timeline: ""
        });
        setFormStep(1);
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-napcean-blue selection:text-white">
      {/* TOPBAR */}
      <div className="hidden lg:block bg-[#051124] text-slate-300 text-[11.5px] py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <div className="flex items-center gap-1.5 text-emerald-500 font-bold tracking-wide">
              <Globe size={13} /> Global Engineering & Export Hub
            </div>

            <div className="flex items-center gap-1.5 pl-4 font-medium text-slate-300 tracking-wide">
              <Plane size={13} className="text-slate-400" /> Exporting to 30+ Countries
            </div>

            <div className="flex items-center gap-2 pl-4">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ISO 9001:2015</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">CE MARKED</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ATEX / ASME</span>
            </div>
          </div>

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <a href="mailto:info@napcen.com" className="flex items-center gap-1.5 font-medium hover:text-white transition-colors tracking-wide">
              <Mail size={13} className="text-blue-500" />
              info@napcen.com
            </a>

            <a href="tel:+917904469219" className="flex items-center gap-1.5 pl-4 text-white font-bold hover:text-emerald-400 transition-colors tracking-wide">
              <Phone size={13} className="text-emerald-500" /> +91 79044 69219
            </a>
          </div>

        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={140} height={50} className="object-contain" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-700">
            <a href="#how-it-works" className="hover:text-primary-blue transition-colors">How it works</a>
            <a href="#products" className="hover:text-primary-blue transition-colors">Products</a>
            <a href="#engineering" className="hover:text-primary-blue transition-colors">Engineering</a>
            <a href="#industries" className="hover:text-primary-blue transition-colors">Industries</a>
            <a href="#faq" className="hover:text-primary-blue transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary-blue transition-colors">Enquire</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden pt-16 pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-20 right-40 w-64 h-64 border border-blue-100 rounded-full opacity-50" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 xl:gap-12 items-center md:items-stretch min-h-[480px]">

              {/* LEFT: TEXT & STATS */}
              <div className="w-full md:w-[46%] xl:w-[45%] flex flex-col justify-start pt-3 sm:pt-4 lg:pt-6">
                <div className="mb-4 sm:mb-5">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase">
                    ENGINEERED INDUSTRIAL AIR POLLUTION CONTROL SOLUTIONS
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#0f1b3a] leading-[1.15] tracking-tight mb-4">
                  Industrial Dry Scrubber <span className="text-primary-blue">Manufacturers in India</span>
                </h1>

                <h2 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#0f1b3a] leading-snug mb-4">
                  Engineered Solutions for H₂S, VOC, Biogas and Industrial Odour Control
                </h2>

                <p className="text-slate-600 text-[14.5px] sm:text-[15px] mb-8 max-w-xl leading-relaxed font-normal">
                  NAPCEN designs and manufactures industrial dry scrubber systems using activated carbon and application-specific reactive media to treat contaminated process gases. Our solutions are engineered around gas flow rate, pollutant concentration, operating conditions and required outlet performance.
                </p>

                <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-slate-200 w-fit">
                  <a href="#contact" className="bg-primary-blue  text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2">
                    Request a technical proposal <ArrowRight size={16} className="-rotate-45" />
                  </a>
                  <a href="#products" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-2">
                    Explore systems <ArrowRight size={16} className="rotate-90" />
                  </a>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Project-specific selection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">India & export enquiries</span>
                  </div>
                </div>
              </div>



              {/* RIGHT: FORM */}
              <div className="w-full md:w-[52%] xl:w-[54%] relative z-20 flex flex-col justify-start mt-12 md:mt-0 md:-ml-4 lg:-ml-8 xl:-ml-12" id="contact">
                <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
                  <h3 className="text-2xl lg:text-3xl font-black text-[#0f1b3a] mb-6">Request an engineered quotation</h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Name *</label>
                        <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Company *</label>
                        <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Treatment requirement</label>
                      <select
                        value={formData.application}
                        onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                        className={`w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all font-medium shadow-sm ${!formData.application ? "text-slate-400" : "text-slate-700"}`}
                      >
                        <option value="" disabled hidden>Select the option</option>
                        <option value="H₂S dry scrubber" className="text-slate-700">H₂S dry scrubber</option>
                        <option value="VOC dry scrubber" className="text-slate-700">VOC dry scrubber</option>
                        <option value="STP odour control" className="text-slate-700">STP odour control</option>
                        <option value="Portable dry scrubber" className="text-slate-700">Portable dry scrubber</option>
                        <option value="Biogas dry scrubber" className="text-slate-700">Biogas dry scrubber</option>
                        <option value="Dry acid-gas treatment" className="text-slate-700">Dry acid-gas treatment</option>
                        <option value="Mixed gas / application review" className="text-slate-700">Mixed gas / application review</option>
                        {formData.application && ![
                          "H₂S dry scrubber", "VOC dry scrubber", "STP odour control",
                          "Portable dry scrubber", "Biogas dry scrubber",
                          "Dry acid-gas treatment", "Mixed gas / application review"
                        ].includes(formData.application) && (
                          <option value={formData.application} className="text-slate-700">{formData.application}</option>
                        )}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Project details *</label>
                      <textarea required placeholder="Location, gas flow, pollutants, concentration and outlet target (if known)" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all min-h-[120px] resize-y font-medium text-slate-700 shadow-sm" />
                    </div>

                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed mt-2">
                      This form prepares an email in your email app. Review it and press Send to submit your enquiry. No details are stored on this website.
                    </p>

                    <button type="button" onClick={() => {
                      const subject = encodeURIComponent(`Enquiry: ${formData.application || 'H₂S / odour control'} from ${formData.company}`);
                      const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nTreatment Requirement: ${formData.application || 'H₂S / odour control'}\n\nProject Details:\n${formData.desc}`);
                      window.location.href = `mailto:info@napcen.com?subject=${subject}&body=${body}`;
                    }} className="w-full bg-[#0a5cbb] hover:bg-blue-800 text-white font-black py-4 rounded-xl transition-all shadow-md text-sm lg:text-[15px] flex items-center justify-center gap-2 tracking-wide mt-4">
                      Prepare my enquiry email <ArrowRight size={18} className="-rotate-45" />
                    </button>
                  </form>

                  <div className="flex justify-center items-center gap-6 md:gap-10 mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5"><Shield size={12} className="text-[#0f1b3a]" /> Quick Response</div>
                    <div className="flex items-center gap-1.5"><Users size={12} className="text-[#0f1b3a]" /> Expert Support</div>
                    <div className="flex items-center gap-1.5"><Settings size={12} className="text-[#0f1b3a]" /> Custom Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES BAR */}
            <div className="mt-20 border-b border-slate-200 py-6 hidden md:block">
              <div className="flex items-center justify-center gap-8 lg:gap-20 w-full">
                {[
                  { text: "H₂S & sulphur odours", icon: <Cloud className="text-black w-4 h-4" /> },
                  { text: "VOC adsorption", icon: <Beaker className="text-black w-4 h-4" /> },
                  { text: "STP odour control", icon: <Shield className="text-black w-4 h-4" /> },
                  { text: "Industrial gas treatment", icon: <Factory className="text-black w-4 h-4" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-[13px] font-bold text-[#0f1b3a] tracking-wide">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </section>

        <LogoTicker />

        {/* WHAT IS A DRY SCRUBBER SECTION */}
        <section className="pt-6 pb-16 sm:pt-10 sm:pb-20 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 lg:opacity-100">
            <div className="relative w-full h-full lg:w-[70%] lg:h-[85%] lg:-translate-x-4 xl:-translate-x-6 lg:translate-y-14 xl:translate-y-16">
              <Image src="/Industrial Scrubber Plant with Smokestack.png" alt="Industrial Scrubber Background" fill className="object-cover lg:object-contain object-center scale-110 lg:scale-100" />
            </div>
          </div>

          <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr_1.1fr] xl:grid-cols-[1fr_1fr_1.1fr] gap-8 lg:gap-8 items-center">

              {/* Left Column: Text & Bullets */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-md bg-white/80 lg:bg-transparent p-4 sm:p-6 lg:p-0 rounded-3xl backdrop-blur-sm lg:backdrop-blur-none">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gray-700 font-bold text-[11px] tracking-[0.2em] uppercase">
                    DRY SCRUBBER MEANING
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  What is a<br />
                  <span className="text-primary-blue">dry scrubber?</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                  A reliable solution for cleaner air and a healthier environment.
                </p>

                <div className="flex flex-col gap-8">
                  {[
                    { title: "Removes Harmful Pollutants", desc: "From industrial gas streams", icon: Leaf },
                    { title: "Uses Solid Treatment Media", desc: "No liquid scrubbing required", icon: Settings },
                    { title: "Efficient & Reliable", desc: "For various industrial applications", icon: Shield }
                  ].map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-5 group">
                        <div className="w-14 h-14 transition-colors flex items-center justify-center shrink-0 ">
                          <Icon className="text-green-600 w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[#0f1b3a] font-bold text-base mb-1">{feat.title}</h4>
                          <p className="text-slate-500 text-sm font-medium">{feat.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Center Column: Empty spacer to let background show through */}
              <div className="hidden lg:block h-[400px] md:h-[500px] lg:h-[650px] w-full"></div>

              {/* Right Column: Card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col justify-center relative overflow-hidden lg:translate-y-12 xl:translate-y-16">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10"></div>

                <p className="text-slate-600 text-sm xl:text-[15px] leading-relaxed mb-4 font-medium relative z-10">
                  <strong className="text-[#0f1b3a]">A dry scrubber</strong> is an air pollution control system that uses a <strong className="text-[#0f1b3a]">solid treatment medium or dry reagent</strong> to remove selected pollutants from a gas stream. Unlike liquid-based scrubbing, its main treatment mechanism does not rely on circulating a scrubbing solution.
                </p>
                <p className="text-slate-600 text-sm xl:text-[15px] leading-relaxed mb-6 font-medium relative z-10">
                  In media-bed systems, gas passes through activated carbon or a reactive material. Adsorption holds suitable molecules on the media surface; chemisorption involves a reaction with the treatment medium. In dry sorbent injection systems, a reagent enters the gas stream and the resulting solids are collected downstream.
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 mt-auto relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-4 bg-primary-blue rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">HOW IT WORKS</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-6 px-2">
                    <div className="flex flex-col items-center">
                      <Cloud className="text-slate-400 w-6 h-6 mb-2" />
                      <span className="text-[9px] font-bold text-slate-500 text-center uppercase tracking-wider">Polluted<br />Gas Inlet</span>
                    </div>
                    <ArrowRight className="text-slate-300 w-4 h-4" />
                    <div className="flex flex-col items-center">
                      <Layers className="text-primary-blue w-6 h-6 mb-2" />
                      <span className="text-[9px] font-bold text-[#0f1b3a] text-center uppercase tracking-wider">Solid Media<br />(Adsorption)</span>
                    </div>
                    <ArrowRight className="text-slate-300 w-4 h-4" />
                    <div className="flex flex-col items-center">
                      <Leaf className="text-green-500 w-6 h-6 mb-2" />
                      <span className="text-[9px] font-bold text-green-700 text-center uppercase tracking-wider">Clean<br />Gas Outlet</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3.5 bg-primary-blue text-white rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-2 text-center"
                  >
                    See the treatment sequence
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="pt-8 pb-8 sm:pt-12 sm:pb-10 md:pt-16 md:pb-12 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16">
            {/* Header Area */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:gap-12 items-center mb-10 md:mb-16 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl">
                <div className="mb-3 md:mb-4">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block">CHOOSE THE RIGHT APPROACH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.08] tracking-tight mb-4 md:mb-6">
                  One category. <br className="hidden md:block" />
                  Different treatment duties.
                </h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex justify-start md:justify-end items-center mt-4 md:mt-0">
                <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-medium">
                  A dry scrubber uses a solid medium or dry reagent to capture or react with pollutants. The right design depends on the contaminant, gas flow and operating conditions—not the equipment name alone.
                </p>
              </motion.div>
            </div>

            {/* Product Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  category: "01 / REACTIVE MEDIA",
                  title: "H₂S dry scrubber",
                  desc: "For hydrogen sulphide and sulphur-related odours in collected gas streams. Selected impregnated carbon or reactive media captures H₂S within a contact bed.",
                  features: [
                    "Wastewater and STP exhaust",
                    "Biogas treatment enquiries",
                    "Media life based on actual loading"
                  ],
                  btnText: "Discuss H₂S treatment ↗",
                  icon: Cloud,
                  image: "/H₂S dry scrubber.png",
                  equipmentSelect: "H2S Dry Scrubber",
                  filterTag: "Scrubbers",
                  imageClass: "-bottom-2 -right-8 lg:-right-10 w-[240px] h-[190px] lg:w-[280px] lg:h-[220px]"
                },
                {
                  category: "02 / ADSORPTION",
                  title: "VOC dry scrubber",
                  desc: "Activated carbon adsorption can suit selected solvent vapours and organic odours. Suitability varies with the VOC species, humidity and concentration.",
                  features: [
                    "Process exhaust and solvent vapours",
                    "Species-specific media selection",
                    "Breakthrough and heat-risk assessment"
                  ],
                  btnText: "Discuss VOC control ↗",
                  icon: Beaker,
                  image: "/VOC dry scrubber.png",
                  equipmentSelect: "VOC Dry Scrubber",
                  filterTag: "Scrubbers",
                  imageClass: "-bottom-2 -right-8 lg:-right-16 w-[240px] h-[190px] lg:w-[280px] lg:h-[220px]"
                },
                {
                  category: "03 / ODOUR MANAGEMENT",
                  title: "STP odour control",
                  desc: "Capture odorous air near its source and route it through a suitable treatment bed. A complete system considers covers, ducts, extraction and discharge.",
                  features: [
                    "Collection tanks and pumping stations",
                    "Sludge handling exhaust",
                    "Access for planned media replacement"
                  ],
                  btnText: "Discuss an odour project ↗",
                  icon: Shield,
                  image: "/STP odour control.png",
                  equipmentSelect: "STP Odour Control",
                  filterTag: "Scrubbers",
                  imageClass: "-bottom-2 -right-8 lg:-right-10 w-[240px] h-[190px] lg:w-[280px] lg:h-[220px]"
                },
                {
                  category: "04 / MOBILE EXTRACTION",
                  title: "Portable dry scrubber",
                  desc: "A compact, movable system brings local extraction and replaceable treatment media closer to suitable fume, vapour or odour sources. Consider it for changing workstations and intermittent process duties.",
                  features: [
                    "Source capture with application-specific airflow",
                    "Pre-filtration and carbon media where suitable",
                    "Accessible filters for planned replacement"
                  ],
                  btnText: "Discuss portable treatment ↗",
                  icon: Wind,
                  image: "/Portable Dry Scrubber.png",
                  equipmentSelect: "Portable Dry Scrubber",
                  filterTag: "Scrubbers",
                  imageClass: "-bottom-2 -right-8 lg:-right-16 w-[240px] h-[190px] lg:w-[280px] lg:h-[220px]"
                },
                {
                  category: "05 / BIOGAS DESULPHURISATION",
                  title: "Biogas dry scrubber",
                  desc: "Remove hydrogen sulphide from biogas using selected reactive or impregnated media. Treatment can help protect downstream equipment, with the outlet target matched to the engine, upgrading process or other end use.",
                  features: [
                    "Biogas and CBG project enquiries",
                    "Media selection based on H₂S loading and moisture",
                    "Outlet monitoring and safe media changeout"
                  ],
                  btnText: "Discuss biogas treatment ↗",
                  icon: Factory,
                  image: "/Biogas dry scrubber.png",
                  equipmentSelect: "Biogas Dry Scrubber",
                  filterTag: "Scrubbers",
                  imageClass: "-bottom-2 -right-8 lg:-right-20 w-[240px] h-[190px] lg:w-[280px] lg:h-[220px]"
                }
              ]
                .filter(item => productFilter === "All equipment" || item.filterTag === productFilter)
                .map((item, i) => {
                  const Icon = item.icon;
                  const isHighlight = false;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden min-h-[420px] flex flex-col">
                      {/* Top row: Number and Icon */}
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        {/* <div className="text-8xl md:text-9xl font-black text-slate-200 group-hover:text-primary-blue/20 transition-colors tracking-tighter">0{i + 1}</div> */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isHighlight ? 'bg-primary-blue/10 text-primary-blue' : 'bg-slate-50 text-slate-400'} group-hover:bg-primary-blue group-hover:text-white transition-colors`}>
                          <Icon size={24} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-20 flex-1 flex flex-col">
                        <div className="text-[10px] font-bold text-primary-blue tracking-widest uppercase mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-800">{item.title}</h3>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4 pr-4 lg:pr-12">{item.desc}</p>

                        <ul className="mb-8 pr-4 lg:pr-12 space-y-2">
                          {item.features?.map((feat, idx) => (
                            <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                              <span className="text-primary-blue mt-0.5 font-bold">•</span>
                              <span className="font-medium">{feat}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex justify-start relative z-30">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFormData({ ...formData, application: item.title, equipment: item.title });
                              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all
                          ${isHighlight ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600' : 'border border-slate-200 text-slate-700 hover:border-primary-blue hover:text-primary-blue bg-white/80 backdrop-blur-sm'}`}>
                            {item.btnText}
                          </button>
                        </div>
                      </div>

                      {/* Background Equipment Image - Absolute at bottom right */}
                      <div className={`absolute z-10 group-hover:scale-110 transition-transform duration-500 origin-bottom-right opacity-30 group-hover:opacity-100 ${item.imageClass || '-bottom-2 -right-6 lg:-right-8 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px]'}`}>
                        <Image src={item.image} alt={item.title} fill className="object-contain drop-shadow-2xl" />
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>

            {/* Bottom Text for Products Section */}
            <div className="mt-6 md:mt-8 text-center md:text-left bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
              <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-3xl">
                Need dry acid-gas treatment? Reagent injection with downstream particulate collection is a different design approach. Share your gas analysis for an application review.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="shrink-0 bg-primary-blue text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-blue-600 transition-colors">
                SHARE ANALYSIS
              </button>
            </div>
          </div>
        </section>

        {/* INSIDE THE PROCESS / TREATMENT SEQUENCE SECTION */}
        <section id="how-it-works" className="pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="w-full px-6 lg:px-14 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            {/* Mobile Header (displayed only on small screens above vertical diagram) */}
            <div className="block md:hidden max-w-xl mb-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.25em] uppercase">
                    02 / INSIDE THE PROCESS
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0f1b3a] leading-[1.12] tracking-tight mb-2.5">
                  From contaminated gas <br />
                  <span className="text-primary-blue">to controlled discharge.</span>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Differential pressure monitoring helps identify airflow restrictions and media-bed resistance. Pollutant breakthrough should be assessed through suitable outlet gas monitoring or scheduled media testing, rather than pressure drop alone.
                </p>
              </motion.div>
            </div>

            {/* Process Diagram Graphic: Responsive Mobile & Desktop Views */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full mb-10 sm:mb-14 relative"
            >
              {/* Desktop / Tablet Landscape View with Header seamlessly integrated into the top-left area */}
              <div className="hidden md:block relative w-full aspect-[2103/790]">
                {/* Desktop Overlaid Header - Strictly 2 lines */}
                <div className="absolute top-0 left-0 max-w-xl lg:max-w-2xl z-10 pt-1 lg:pt-3 xl:pt-4 pointer-events-none">
                  <div className="flex items-center gap-3 mb-2 lg:mb-2.5">
                    <span className="text-slate-500 font-bold text-[10px] lg:text-[11px] xl:text-[12px] tracking-[0.25em] uppercase">
                      INSIDE THE PROCESS
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl lg:text-[30px] xl:text-[36px] font-black text-[#0f1b3a] leading-[1.12] tracking-tight mb-2 lg:mb-2.5">
                    <span className="block whitespace-nowrap">From contaminated gas</span>
                    <span className="block whitespace-nowrap text-primary-blue">to controlled discharge.</span>
                  </h2>

                  <p className="text-slate-600 text-xs lg:text-[13px] xl:text-[13.5px] leading-relaxed font-normal max-w-md lg:max-w-xl">
                    Differential pressure monitoring helps identify airflow restrictions and media-bed resistance. Pollutant breakthrough should be assessed through suitable outlet gas monitoring or scheduled media testing, rather than pressure drop alone.
                  </p>
                </div>

                {/* Diagram shifted slightly to the bottom */}
                <Image
                  src="/Industrial Gas Treatment Process Diagram.png"
                  alt="Industrial Gas Treatment Process Diagram - From contaminated gas to controlled discharge"
                  fill
                  sizes="(max-width: 1600px) 100vw, 1600px"
                  className="object-contain translate-y-6 lg:translate-y-9 xl:translate-y-12"
                  priority
                />
              </div>

              {/* Mobile Portrait View */}
              <div className="block md:hidden relative w-full aspect-[1024/1536] max-w-md mx-auto mt-2">
                <Image
                  src="/Industrial Gas Treatment Process.png"
                  alt="Industrial Gas Treatment Process - Mobile Vertical Flow"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* 4 Process Stage Cards for Mobile & Responsive Detail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Stage 01 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#0084ff]/10 text-[#0084ff] font-extrabold text-sm flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">STAGE 1</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f1b3a] mb-2">Capture & convey</h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Hoods or covers collect the gas. Ductwork carries it to the treatment system at the required extraction rate.
                </p>
              </motion.div>

              {/* Stage 02 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#00c0f0]/15 text-[#009bbd] font-extrabold text-sm flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">STAGE 2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f1b3a] mb-2">Condition the stream</h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Assess temperature, moisture and particulates. Add suitable filtration or conditioning where necessary.
                </p>
              </motion.div>

              {/* Stage 03 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] font-extrabold text-sm flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">STAGE 3</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f1b3a] mb-2">Contact the media</h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Distribute flow across the bed. Adsorption or a chemical reaction retains the target pollutant.
                </p>
              </motion.div>

              {/* Stage 04 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-400 transition-all flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#f97316]/15 text-[#ea580c] font-extrabold text-sm flex items-center justify-center">
                    04
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">STAGE 4</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f1b3a] mb-2">Monitor & maintain</h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Check outlet quality and pressure drop. Replace media before breakthrough exceeds the design target.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FIND YOUR STARTING POINT SECTION */}
        <section className="pt-3 pb-16 sm:pt-8 sm:pb-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
          {/* Background image container taking up the right half */}
          <div className="absolute top-0 right-0 w-1/2 h-full z-0 overflow-hidden hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={exhaustTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image src={exhaustTabs[exhaustTab].image} alt={exhaustTabs[exhaustTab].title} fill className="object-cover object-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-[30%]"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[1600px] relative z-10 flex flex-col lg:flex-row lg:items-center min-h-0 lg:min-h-[450px]">
            {/* Left Content */}
            <div className="w-full lg:w-[45%] pr-0 lg:pr-10 pt-0">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-2.5 sm:mb-4 lg:mb-6">
                  <span className="text-gray-700 font-bold text-[11px] tracking-[0.2em] uppercase">
                    FIND YOUR STARTING POINT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-3.5 sm:mb-6">
                  What's in your<br /> <span className="text-primary-blue">exhaust stream?</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
                  Select your main concern for a useful first discussion. Final equipment sizing requires a verified design basis.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3">
                  {exhaustTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setExhaustTab(idx)}
                      className={`px-6 py-3 rounded-full text-[14px] font-bold border transition-all duration-300 flex items-center gap-2 ${exhaustTab === idx
                        ? "bg-[#0f1b3a] border-[#0f1b3a] text-white shadow-lg"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                    >
                      {tab.title}
                      {exhaustTab === idx && <ArrowRight size={16} />}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content / Info Box */}
            <div className="w-full lg:w-[45%] flex items-center mt-16 lg:mt-0 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={exhaustTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/95 backdrop-blur-sm p-8 lg:p-10 rounded-r-2xl shadow-xl max-w-[450px]"
                >
                  <div className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                    INITIAL APPLICATION GUIDE
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0f1b3a] mb-4">
                    {exhaustTabs[exhaustTab].cardTitle}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                    {exhaustTabs[exhaustTab].cardDesc}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#0f1b3a] font-bold text-[14px] border-b border-[#0f1b3a] pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                    Request an application review <ArrowRight size={16} className="-rotate-45" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* WHERE TREATMENT MATTERS SECTION */}
        <section id="industries" className="pt-24 bg-white relative border-t border-slate-100 overflow-hidden">
          <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[1600px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gray-700 font-bold text-[11px] tracking-[0.2em] uppercase">
                    WHERE TREATMENT MATTERS
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight">
                  Built around your industry.
                </h2>
              </motion.div>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
              {/* Card 1 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 group pt-10 bg-white hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
                <div className="px-8 pb-10 flex-1">
                  <h3 className="text-[22px] font-bold text-[#0f1b3a] mb-4">Wastewater & STP</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Odour extraction from tanks, wet wells and sludge areas.
                  </p>
                </div>
                <div className="relative w-full h-[100px] mt-auto overflow-hidden">
                  <Image src="/Circular Wastewater Clarifier with Central Scraper Mechanism.png" alt="Wastewater" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 group pt-10 bg-white hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
                <div className="px-8 pb-10 flex-1">
                  <h3 className="text-[22px] font-bold text-[#0f1b3a] mb-4">Chemical processing</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Characterised process exhaust and selected gas-treatment duties.
                  </p>
                </div>
                <div className="relative w-full h-[100px] mt-auto overflow-hidden">
                  <Image src="/Stainless Steel Processing Plant Skid.png" alt="Chemical processing" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 group pt-10 bg-white hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
                <div className="px-8 pb-10 flex-1">
                  <h3 className="text-[22px] font-bold text-[#0f1b3a] mb-4">Biogas & CBG</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    H₂S treatment subject to gas composition and process safety review.
                  </p>
                </div>
                <div className="relative w-full h-[100px] mt-auto overflow-hidden">
                  <Image src="/Industrial Biogas Facility with Domed Tanks.png" alt="Biogas & CBG" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col group pt-10 bg-white hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
                <div className="px-8 pb-10 flex-1">
                  <h3 className="text-[22px] font-bold text-[#0f1b3a] mb-4">Manufacturing</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Selected VOC, solvent and nuisance odour applications.
                  </p>
                </div>
                <div className="relative w-full h-[100px] mt-auto overflow-hidden">
                  <Image src="/Modern Industrial Facility with Chimney Stack.png" alt="Manufacturing" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SCRUBBER COMPARISON SECTION */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-20 lg:opacity-100 flex items-start justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/Clean Eco-Industrial Scrubber Comparison.png"
                  alt="Scrubber Comparison Background"
                  fill
                  className="object-contain object-right-top"
                />
              </div>
            </div>
            {/* Gradient overlay for text readability on mobile/tablet */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:w-2/3" />
          </div>

          <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
            <div className="max-w-2xl mb-12 lg:mb-20 mt-2 sm:mt-4 lg:mt-6 relative z-20">
              <span className="text-gray-700 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                AN INFORMED EQUIPMENT DECISION
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                Dry scrubber or<br /><span className="text-primary-blue">wet scrubber?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-lg">
                Neither approach fits every stream. Compare pollutant chemistry, operating costs and waste handling before selecting a system.
              </p>
            </div>

            {/* Table: horizontal scrolling on mobile, clean normal layout on desktop */}
            <div className="w-full overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-w-[680px] md:min-w-0 w-full relative z-20">
                {/* Header row */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] bg-white">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center">
                    <span className="font-bold text-base md:text-lg">Design factor</span>
                  </div>
                  <div className="bg-[#e6f4ea] p-4 md:p-5 flex items-center gap-3 border-r border-slate-200/60">
                    <Leaf className="text-green-700 w-5 h-5" />
                    <span className="font-bold text-green-900 text-base md:text-lg">Media-based dry scrubber</span>
                  </div>
                  <div className="bg-[#eaf4fc] p-4 md:p-5 flex items-center gap-3">
                    <Droplet className="text-blue-600 w-5 h-5" />
                    <span className="font-bold text-blue-900 text-base md:text-lg">Wet scrubber</span>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <Settings className="text-emerald-400 w-4 h-4 shrink-0" />
                    <span className="font-semibold text-sm">Capture mechanism</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 border-r border-slate-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Grip className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Adsorption or reaction in solid media</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 bg-white">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Droplet className="text-blue-500 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Absorption and, where applicable, liquid-phase reaction</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <Database className="text-emerald-400 w-4 h-4 shrink-0" />
                    <span className="font-semibold text-sm">Utilities & waste</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 border-r border-slate-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Leaf className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">No recirculating scrubbing liquid; spent media requires appropriate handling</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 bg-white">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Settings className="text-blue-500 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Liquid circulation, dosing and blowdown management</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <Wrench className="text-emerald-400 w-4 h-4 shrink-0" />
                    <span className="font-semibold text-sm">Maintenance focus</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 border-r border-slate-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <BarChart3 className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Media loading, breakthrough and bed pressure drop</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 bg-white">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Wrench className="text-blue-500 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Liquid chemistry, pumps, packing and mist elimination</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <FileText className="text-emerald-400 w-4 h-4 shrink-0" />
                    <span className="font-semibold text-sm">Selection driver</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 border-r border-slate-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Target className="text-green-600 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Pollutant affinity, media capacity and stream condition</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 bg-white">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <FlaskConical className="text-blue-500 w-4 h-4" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm">Solubility, reagent chemistry and mass transfer</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING BEFORE QUOTATION SECTION */}
        <section id="engineering" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">

          {/* Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Concentric Arc & Dashed Rings centered together */}
            <div className="absolute top-1/2 left-[10%] lg:left-[15%] xl:left-[20%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] lg:w-[1100px] lg:h-[1100px] flex items-center justify-center">
              {/* Crisp Slate Circle */}
              <div className="absolute w-[75%] h-[75%] bg-gradient-to-tr from-slate-100 to-slate-50 rounded-full"></div>
              {/* Dashed circular lines */}
              <div className="absolute w-[90%] h-[90%] border-[1.5px] border-dashed border-slate-300 rounded-full"></div>
              <div className="absolute w-[100%] h-[100%] border-[1px] border-dashed border-slate-200 rounded-full"></div>
            </div>

            {/* The Scrubber Image */}
            <div className="absolute bottom-0 left-[-10%] lg:left-0 xl:left-[5%] w-[450px] lg:w-[650px] xl:w-[700px] h-[450px] lg:h-[650px] xl:h-[700px] opacity-20 lg:opacity-100">
              <Image src="/Industrial Scrubber Complex with Yellow Railings.png" alt="Industrial Processing Plant" fill className="object-contain object-bottom" />
            </div>
          </div>

          <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-center">

              {/* Left Column: Text */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl bg-white/80 lg:bg-transparent p-6 lg:p-0 rounded-3xl backdrop-blur-sm lg:backdrop-blur-none relative z-20 lg:-translate-y-24 xl:-translate-y-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">
                    ENGINEERING BEFORE QUOTATION
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                  A useful proposal starts with useful data.
                </h2>
                <p className="text-slate-500 text-[15px] lg:text-lg leading-relaxed font-medium mb-10 max-w-md">
                  Dry scrubber price and media replacement costs depend on flow, pollutant load, treatment target and operating hours. A flow rate alone cannot establish performance or lifecycle cost.
                </p>

              </motion.div>

              {/* Right Column: List */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 lg:pl-12 xl:pl-16">
                <div className="flex flex-col gap-5 lg:gap-7">
                  {[
                    { title: "Normal and peak gas flow", desc: "in m³/hr, with reference conditions", num: "01", icon: LineChart },
                    { title: "Pollutant composition", desc: "inlet concentration and outlet target", num: "02", icon: FlaskConical },
                    { title: "Gas temperature, humidity", desc: "dust and condensable content", num: "03", icon: Thermometer },
                    { title: "Operating hours", desc: "duty cycle and loading fluctuations", num: "04", icon: Clock },
                    { title: "Available space", desc: "duct route, utilities and installation location", num: "05", icon: Box },
                    { title: "Monitoring and media handling", desc: "and applicable consent conditions", num: "06", icon: ClipboardCheck }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    // Define SVG paths for the precise connecting lines
                    let svgPath = "";
                    let dotCy = "40";
                    let showTinyDot = true;
                    if (idx === 0) { svgPath = "M 100 40 L 50 40 L 0 0"; dotCy = "0"; svgPath = "M 100 40 L 50 40 L 0 80"; dotCy = "80"; }
                    else if (idx === 1) { svgPath = "M 100 40 L 50 40 L 0 60"; dotCy = "60"; }
                    else if (idx === 2) { svgPath = "M 100 40 L 0 40"; dotCy = "40"; showTinyDot = false; }
                    else if (idx === 3) { svgPath = "M 100 40 L 0 40"; dotCy = "40"; showTinyDot = false; }
                    else if (idx === 4) { svgPath = "M 100 40 L 50 40 L 0 20"; dotCy = "20"; }
                    else if (idx === 5) { svgPath = "M 100 40 L 50 40 L 0 0"; dotCy = "0"; }

                    return (
                      <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-6 group relative">
                        {/* Connecting Line to background */}
                        <div className="hidden lg:block absolute right-full mr-2 top-1/2 -translate-y-1/2 w-[100px] h-[80px] overflow-visible pointer-events-none">
                          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[100px] h-[80px] overflow-visible" viewBox="0 0 100 80">
                            {/* Main Line */}
                            <path d={svgPath} fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Tiny outer dot at the angle point */}
                            {showTinyDot && (
                              <circle cx="50" cy="40" r="2" fill="#64748b" />
                            )}
                            {/* Larger inner dot on the inner dashed circle */}
                            <circle cx="0" cy={dotCy} r="3" fill="#64748b" />
                          </svg>
                        </div>

                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.05)] relative z-20 group-hover:scale-105 transition-transform duration-300">
                          <Icon className="text-[#0f1b3a] w-6 h-6" strokeWidth={2.2} />
                        </div>

                        {/* Text and Number */}
                        <div className="flex-1 pb-5 border-b border-slate-200/70 flex items-center justify-between group-last:border-0 group-last:pb-0 relative z-20">
                          <div>
                            <h4 className="text-[#0f1b3a] font-bold text-[15px] lg:text-[17px] mb-1">{item.title}</h4>
                            <p className="text-slate-500 text-xs lg:text-[14px]">{item.desc}</p>
                          </div>
                          <span className="text-slate-300 text-4xl lg:text-[44px] font-light ml-4">
                            {item.num}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* BENEFITS OF DRY SCRUBBING SECTION */}
        <section id="benefits" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="w-full px-6 lg:px-14 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            {/* Header: 2 Columns */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-12 sm:mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl">
                <span className="text-gray-600 font-bold text-[11px] sm:text-[12px] tracking-[0.22em] uppercase block mb-3">
                  BENEFITS OF DRY SCRUBBING
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0f1b3a] leading-[1.12] tracking-tight">
                  Less liquid handling.<br />
                  More focused treatment.
                </h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-md lg:pb-2">
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed font-normal">
                  These advantages apply when a media-based dry scrubber is suitable for the gas stream. Compare them against media consumption and replacement costs.
                </p>
              </motion.div>
            </div>

            {/* 3 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative overflow-hidden group bg-slate-50/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(15,27,58,0.08)] hover:border-primary-blue/30 hover:bg-white transition-all duration-300 flex flex-col justify-start min-h-[260px] sm:min-h-[280px]"
              >
                {/* Large Background Decorative Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none text-slate-900/[0.04] group-hover:text-primary-blue/[0.08] transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                  <Droplets className="w-36 h-36" strokeWidth={1.2} />
                </div>

                <div className="relative z-10">
                  {/* Icon badge with background */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue mb-5 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue shadow-sm transition-all duration-300">
                    <Droplet className="w-5 h-5" strokeWidth={2} />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-primary-blue uppercase mb-4 block">
                    OPERATING SIMPLICITY
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f1b3a] leading-snug mb-3.5">
                    No scrubbing-liquid loop
                  </h3>
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                    Media-bed treatment avoids a recirculation pump, liquid dosing loop and routine liquid blowdown within the treatment stage. Any upstream conditioning has separate utility needs.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative overflow-hidden group bg-slate-50/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(15,27,58,0.08)] hover:border-primary-blue/30 hover:bg-white transition-all duration-300 flex flex-col justify-start min-h-[260px] sm:min-h-[280px]"
              >
                {/* Large Background Decorative Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none text-slate-900/[0.04] group-hover:text-primary-blue/[0.08] transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                  <Layers className="w-36 h-36" strokeWidth={1.2} />
                </div>

                <div className="relative z-10">
                  {/* Icon badge with background */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue mb-5 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue shadow-sm transition-all duration-300">
                    <Layers className="w-5 h-5" strokeWidth={2} />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-primary-blue uppercase mb-4 block">
                    SPACE &amp; INTEGRATION
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f1b3a] leading-snug mb-3.5">
                    Flexible arrangements
                  </h3>
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                    Vessels, modular beds or portable units can be considered around site access and extraction routes. Actual footprint depends on flow, contact time and service clearance.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative overflow-hidden group bg-slate-50/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(15,27,58,0.08)] hover:border-primary-blue/30 hover:bg-white transition-all duration-300 flex flex-col justify-start min-h-[260px] sm:min-h-[280px]"
              >
                {/* Large Background Decorative Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none text-slate-900/[0.04] group-hover:text-primary-blue/[0.08] transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                  <ClipboardCheck className="w-36 h-36" strokeWidth={1.2} />
                </div>

                <div className="relative z-10">
                  {/* Icon badge with background */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue mb-5 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue shadow-sm transition-all duration-300">
                    <ClipboardCheck className="w-5 h-5" strokeWidth={2} />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-primary-blue uppercase mb-4 block">
                    PLANNED MAINTENANCE
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f1b3a] leading-snug mb-3.5">
                    Measurable media service
                  </h3>
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                    Sampling points, pressure checks and outlet monitoring support an orderly maintenance plan. A lead–lag bed arrangement may help manage breakthrough and changeover.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TREATMENT MEDIA SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full opacity-20 lg:opacity-100 flex items-start justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/Industrial Scrubber System Infographic.png"
                  alt="Treatment Media Background"
                  fill
                  className="object-contain object-right-top"
                />
              </div>
            </div>
            {/* Gradient overlay for text readability on mobile/tablet */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:w-2/3" />
          </div>

          <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
            <div className="max-w-2xl mb-12 lg:mb-20 relative z-20">
              <span className="text-gray-700 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                TREATMENT MEDIA & DESIGN OPTIONS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                The media makes<br /><span className="text-primary-blue">the difference.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-lg mb-8">
                Choosing a dry scrubber filter starts with pollutant chemistry. "Activated carbon" is a material family, not a universal performance specification.
              </p>

              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-xl">
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Info className="text-white w-4 h-4" />
                </div>
                <span className="text-slate-700 text-sm font-medium">General media options for application review; availability and suitability must be confirmed.</span>
              </div>
            </div>

            {/* Table: horizontal scrolling on mobile, clean normal layout on desktop */}
            <div className="w-full overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-w-[680px] md:min-w-0 w-full relative z-20">
                {/* Header row */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] bg-white">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3">
                    <Layers className="text-emerald-400 w-5 h-5 shrink-0" />
                    <span className="font-bold text-base md:text-lg">Media / approach</span>
                  </div>
                  <div className="bg-[#f0fdf4] p-4 md:p-5 flex items-center gap-3 border-r border-slate-200/60">
                    <Target className="text-green-600 w-5 h-5 shrink-0" />
                    <span className="font-bold text-green-900 text-base md:text-lg">Typical purpose</span>
                  </div>
                  <div className="bg-[#f0f9ff] p-4 md:p-5 flex items-center gap-3">
                    <FileSearch className="text-blue-600 w-5 h-5 shrink-0" />
                    <span className="font-bold text-blue-900 text-base md:text-lg">What to evaluate</span>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <Leaf className="text-emerald-400 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-sm">Activated carbon</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center border-r border-slate-100 bg-white">
                    <span className="text-slate-600 font-medium text-sm">Adsorption of suitable VOCs and organic odours</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center bg-white">
                    <span className="text-slate-600 font-medium text-sm">Species, concentration, humidity, capacity and thermal behaviour</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <CircleDot className="text-emerald-400 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-sm">Impregnated carbon</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center border-r border-slate-100 bg-white">
                    <span className="text-slate-600 font-medium text-sm">Targeted capture or reaction for selected gases</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center bg-white">
                    <span className="text-slate-600 font-medium text-sm">Impregnant chemistry, operating conditions and media compatibility</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <FlaskConical className="text-emerald-400 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-sm">Reactive solid media</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center border-r border-slate-100 bg-white">
                    <span className="text-slate-600 font-medium text-sm">Specific chemical treatment, including suitable H₂S duties</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center bg-white">
                    <span className="text-slate-600 font-medium text-sm">Reaction capacity, contact time, moisture window and disposal route</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-[1.1fr_1.5fr_1.5fr] border-t border-slate-100">
                  <div className="bg-[#113a2c] text-white p-4 md:p-5 flex items-center gap-3 border-t border-white/10">
                    <Wind className="text-emerald-400 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-sm">Dry reagent injection</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center border-r border-slate-100 bg-white">
                    <span className="text-slate-600 font-medium text-sm">Selected acid-gas treatment with downstream solids collection</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center bg-white">
                    <span className="text-slate-600 font-medium text-sm">Reagent demand, reaction conditions and particulate collection design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DRY SCRUBBER COMPONENTS SECTION */}
        <section id="components" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="w-full px-6 lg:px-14 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
              
              {/* Left Column: Heading & System Description */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-xl"
              >
                <span className="text-slate-500 font-bold text-[11px] sm:text-[12px] tracking-[0.22em] uppercase block mb-4">
                  DRY SCRUBBER COMPONENTS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f1b3a] leading-[1.12] tracking-tight mb-7">
                  A complete system.<br />
                  <span className="text-primary-blue">Beyond the vessel.</span>
                </h2>
                
                <div className="space-y-5 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  <p>
                    A dry scrubber system may include a capture hood, ductwork, pre-filter, treatment vessel, media support, blower and discharge stack. Instruments and access arrangements turn these components into a maintainable installation.
                  </p>
                  <p>
                    Vessel material and seals must suit corrosion, temperature and chemical compatibility. Bed geometry affects flow distribution, pressure loss and residence time. Fan selection must account for the resistance of the complete extraction path.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Specify the details that matter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full lg:pt-2"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1b3a] tracking-tight mb-6 sm:mb-8">
                  Specify the details that matter
                </h3>

                <div className="flex flex-col">
                  {[
                    "Inlet distribution and media support arrangement",
                    "Pressure measurement and gas sampling points",
                    "Media-loading access and replacement clearance",
                    "Duct interfaces, blower duty and discharge location",
                    "Electrical controls, interlocks and monitoring scope",
                    "Safe isolation, spent-media handling and service access",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="py-4 sm:py-4.5 border-b border-slate-200/80 flex items-center gap-3.5 group cursor-default transition-all duration-200 hover:pl-1.5"
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary-blue shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span className="text-slate-700 font-medium text-[15px] sm:text-[16px] group-hover:text-primary-blue transition-colors duration-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* OPERATION & MAINTENANCE SECTION */}
        <section id="operation-maintenance" className="pt-14 pb-3 sm:pt-20 sm:pb-8 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
          {/* Background accents & decorative industrial illustration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Industrial plant graphic top right */}
            <div className="absolute top-0 right-0 w-[55%] md:w-[48%] lg:w-[44%] xl:w-[40%] h-[320px] sm:h-[380px] lg:h-[440px] hidden md:block opacity-90 pointer-events-none overflow-hidden">
              <Image
                src="/om_header_plant.jpg"
                alt="Industrial Scrubber Towers"
                fill
                unoptimized
                className="object-cover object-left-bottom"
              />
              {/* Gradient fades for seamless background blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>

          <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 mx-auto max-w-[1600px] relative z-10">
            {/* Section Header */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl mb-12 sm:mb-16">
              <div className="mb-3">
                <span className="text-slate-500 font-bold text-[11px] sm:text-[12px] tracking-[0.22em] uppercase block">
                  OPERATION &amp; MAINTENANCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-4 sm:mb-5 text-[#0a1128]">
                <span className="block">Keep performance</span>
                <span className="block">visible</span>
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-xl font-normal">
                Proactive monitoring and timely maintenance help ensure reliable operation and consistent gas-treatment performance.
              </p>
            </motion.div>

            {/* 3 Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 01 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-3xl sm:text-4xl font-light text-slate-700 font-sans tracking-tight">01</span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">CHECK</span>
                  </div>

                  <div className="flex items-stretch justify-between gap-3 sm:gap-4">
                    <div className="flex-1 flex flex-col justify-between pr-1">
                      <div>
                        <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#0f1b3a] leading-snug mb-2.5">
                          Trend the operating data
                        </h3>
                        <p className="text-slate-500 text-[12px] sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                          Record airflow, bed pressure drop and inlet/outlet readings at a frequency appropriate to the duty. Changes can reveal clogging, loading fluctuations or declining capture.
                        </p>
                      </div>
                    </div>

                    <div className="w-[105px] sm:w-[120px] lg:w-[130px] h-[190px] sm:h-[220px] shrink-0 relative rounded-tl-[46px] rounded-br-2xl rounded-tr-lg rounded-bl-lg overflow-hidden self-end shadow-sm">
                      <Image
                        src="/om_gauge.jpg"
                        alt="Trend operating data pressure gauge"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 02 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-3xl sm:text-4xl font-light text-slate-700 font-sans tracking-tight">02</span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">INVESTIGATE</span>
                  </div>

                  <div className="flex items-stretch justify-between gap-3 sm:gap-4">
                    <div className="flex-1 flex flex-col justify-between pr-1">
                      <div>
                        <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
                          <Search className="w-5 h-5" />
                        </div>
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#0f1b3a] leading-snug mb-2.5">
                          Respond to changes early
                        </h3>
                        <p className="text-slate-500 text-[12px] sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                          Unexpected odour, outlet concentration or pressure changes need investigation. Check capture, leaks, flow distribution and media condition rather than relying on odour alone.
                        </p>
                      </div>
                    </div>

                    <div className="w-[105px] sm:w-[120px] lg:w-[130px] h-[190px] sm:h-[220px] shrink-0 relative rounded-tl-[46px] rounded-br-2xl rounded-tr-lg rounded-bl-lg overflow-hidden self-end shadow-sm">
                      <Image
                        src="/om_pipe.jpg"
                        alt="Respond to changes early flanged pipe"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 03 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-3xl sm:text-4xl font-light text-slate-700 font-sans tracking-tight">03</span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">REPLACE</span>
                  </div>

                  <div className="flex items-stretch justify-between gap-3 sm:gap-4">
                    <div className="flex-1 flex flex-col justify-between pr-1">
                      <div>
                        <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mb-4 shadow-sm">
                          <RefreshCcw className="w-5 h-5" />
                        </div>
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#0f1b3a] leading-snug mb-2.5">
                          Plan media changeout
                        </h3>
                        <p className="text-slate-500 text-[12px] sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                          Use the agreed breakthrough criterion. Isolate equipment safely and handle spent media according to its contamination, supplier guidance and applicable waste requirements.
                        </p>
                      </div>
                    </div>

                    <div className="w-[105px] sm:w-[120px] lg:w-[130px] h-[190px] sm:h-[220px] shrink-0 relative rounded-tl-[46px] rounded-br-2xl rounded-tr-lg rounded-bl-lg overflow-hidden self-end shadow-sm">
                      <Image
                        src="/om_carbon.jpg"
                        alt="Plan media changeout carbon pellets"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Callout Banner */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-6 sm:mt-10 bg-slate-100/80 border border-slate-200 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3.5 sm:gap-4 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full border border-slate-400 flex items-center justify-center text-slate-600 shrink-0">
                <Info className="w-3.5 h-3.5 stroke-[2.2]" />
              </div>
              <p className="text-[12.5px] sm:text-[13.5px] text-slate-700 font-medium leading-relaxed">
                A low pressure drop does not prove that gas-treatment capacity remains available. Media saturation and mechanical blockage are separate concerns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 07 / NAPCEN PRACTICAL FOCUS SECTION */}
        <section className="relative w-full py-14 sm:py-20 lg:py-32 min-h-0 sm:min-h-[500px] lg:min-h-[580px] overflow-hidden bg-black text-white flex items-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-end">
            <div className="relative w-full md:w-[56%] lg:w-[50%] xl:w-[46%] h-full translate-x-6 md:translate-x-10 lg:translate-x-14">
              <Image
                src="/Industrial Tower Amidst Rising Steam (1).png"
                alt="Industrial Tower Amidst Rising Steam"
                fill
                quality={100}
                priority
                unoptimized
                className="object-cover object-right"
              />
              {/* Fade on the left edge of the image */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent" />
            </div>
            {/* Gradient overlay on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:hidden" />
          </div>

          <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 mx-auto max-w-[1600px] relative z-20">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 max-w-fit">

              {/* Left Column: Heading */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="shrink-0 max-w-md lg:max-w-[500px] xl:max-w-[540px]">
                <div className="mb-3 sm:mb-4">
                  <span className="text-gray-400 font-mono font-bold text-[11px] sm:text-xs lg:text-[13px] tracking-[0.25em] uppercase block">
                    NAPCEN
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-black text-white leading-[1.12] sm:leading-[1.08] tracking-tight">
                  Industrial Air Pollution Control Equipment Manufacturer
                </h2>
              </motion.div>

              {/* Right Column: Paragraphs + Button */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-md lg:max-w-[440px] xl:max-w-[460px]"
              >
                <p className="text-slate-200 text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed mb-3 sm:mb-4 font-normal">
                  NAPCEN provides engineered air pollution control equipment for industrial applications, including dry scrubbers, wet scrubbers, dust collectors and fume extraction systems.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed mb-5 sm:mb-7 font-normal">
                  Our dry scrubber solutions are developed around the customer&apos;s gas composition, process requirements, operating conditions and treatment objectives. From initial technical evaluation and equipment design to manufacturing and project support, NAPCEN focuses on application-specific industrial gas treatment solutions.
                </p>

                <a
                  href="https://napcen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-2.5 bg-white hover:bg-slate-100 text-black font-extrabold px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl transition-all shadow-lg hover:shadow-white/20 text-xs sm:text-sm lg:text-[14px] whitespace-nowrap group"
                >
                  <span>Visit the NAPCEN company website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WORKFLOW / PROJECT LIFECYCLE SECTION */}
        <WorkflowSection />

        {/* FAQ SECTION */}
        <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-5 sm:px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-24 items-start">

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="static lg:sticky lg:top-32 mb-2 lg:mb-0">
                <span className="text-slate-500 font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase block mb-2 sm:mb-4">
                  TECHNICAL QUESTIONS, ANSWERED
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-4 lg:mb-6">
                  Dry scrubber FAQs.
                </h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col">
                {[
                  {
                    q: "What is a biogas dry scrubber?",
                    a: "A biogas dry scrubber treats hydrogen sulphide using selected solid reactive or impregnated media. Its design depends on gas composition, H₂S loading, humidity and the outlet requirement of downstream equipment. Methane-rich gas requires appropriate process safety measures and compatible media."
                  },
                  {
                    q: "How does a dry scrubber work?",
                    a: "A media-based dry scrubber passes contaminated gas through a solid bed. Pollutants are retained by adsorption or chemical reaction, depending on the selected media. Dry reagent injection is another approach used for suitable acid-gas duties."
                  },
                  {
                    q: "Can a dry scrubber remove H₂S and VOCs together?",
                    a: "A mixed stream may need staged treatment or more than one media type. The gas composition and operating conditions must be checked before deciding whether a combined system is suitable."
                  },
                  {
                    q: "Does a dry scrubber use water?",
                    a: "A media-based system does not use a circulating scrubbing liquid. Gas conditioning may still be needed, and some reactive media require a suitable humidity range."
                  },
                  {
                    q: "How often does the scrubber media need replacement?",
                    a: "Media life depends on contaminant loading, media capacity, flow distribution, humidity and operating hours. Outlet monitoring and a defined breakthrough limit provide a better basis than a fixed calendar interval."
                  },
                  {
                    q: "What affects the price of an industrial dry scrubber?",
                    a: "Gas flow, pollutant load, media type, bed arrangement, vessel materials, blower duty, monitoring and installation scope all affect the price. Provide a design basis for a meaningful quotation."
                  },
                  {
                    q: "Is a dry scrubber suitable for every industrial exhaust?",
                    a: "No. Hot, dusty, condensing or high-concentration streams may require pretreatment or a different treatment technology. Suitability must be established from actual process data."
                  },
                  {
                    q: "Can a dry scrubber meet pollution control limits?",
                    a: "A system can be engineered against an agreed outlet target after reviewing the application. Compliance depends on the applicable consent conditions, design, operation and verified monitoring; no universal removal efficiency applies."
                  },
                  {
                    q: "How do I request a NAPCEN dry scrubber quotation?",
                    a: "Send your gas flow, composition, inlet and outlet concentrations, operating conditions, location and scope requirements. Use the enquiry email, telephone or WhatsApp options on this page."
                  },
                  {
                    q: "What is a portable dry scrubber used for?",
                    a: "A portable dry scrubber can provide local extraction and treatment for selected fumes, vapours or odours at changing workstations. Pollutant compatibility, airflow, filter stages and discharge arrangements must be reviewed for the application."
                  },
                  {
                    q: "Does activated carbon remove industrial dust?",
                    a: "Activated carbon is primarily selected for suitable gas adsorption duties. Particulates typically need a dedicated pre-filter or dust collection stage; gas adsorption and particulate filtration are different treatment mechanisms."
                  },
                  {
                    q: "What is the difference between adsorption and absorption?",
                    a: "Adsorption retains molecules on a solid surface, such as activated carbon. Absorption transfers a gas into a bulk phase, commonly a liquid in a wet scrubber. Reactive media may also remove pollutants through chemical reactions."
                  },
                  {
                    q: "What are the main benefits of a media-based dry scrubber?",
                    a: "For suitable gas streams, benefits include avoiding a circulating scrubbing-liquid loop, flexible equipment arrangements and planned media replacement. The overall choice must also consider media consumption, spent-media handling and monitoring."
                  },
                  {
                    q: "Can treated air be recirculated indoors?",
                    a: "Indoor recirculation requires a specific exposure and safety assessment, verified pollutant control and an appropriate monitoring strategy. It should not be assumed from the presence of a carbon filter or dry scrubber."
                  }
                ].map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="border-b border-slate-200 last:border-0 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                      >
                        <h3 className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-blue' : 'text-[#0f1b3a] group-hover:text-primary-blue'}`}>
                          {faq.q}
                        </h3>
                        <div className={`relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-primary-blue bg-primary-blue shadow-md' : 'border-slate-200 bg-slate-50 group-hover:border-primary-blue group-hover:bg-blue-50'}`}>
                          <div className={`absolute w-3.5 h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'bg-white' : 'bg-slate-600 group-hover:bg-primary-blue'}`}></div>
                          <div className={`absolute w-[2px] h-3.5 transition-all duration-300 rounded-full ${isOpen ? 'bg-white rotate-90 scale-0' : 'bg-slate-600 group-hover:bg-primary-blue scale-100'}`}></div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-8 pr-12 text-slate-500 text-[15px] font-medium leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMBINED CTA & FOOTER SECTION */}
        <Footer
          className="bg-black pt-24"
          brandName="NAPCEN"
          brandDescription="Industrial Air Pollution Control Equipment & Engineering Solutions. Built around the application, not just the equipment."
          creatorName="NAPCEN Team"
          creatorUrl="#"
          navLinks={[
            { label: "How it works", href: "#how-it-works" },
            { label: "Products", href: "#products" },
            { label: "Engineering", href: "#engineering" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
            { label: "Enquire", href: "#contact" },
          ]}
          socialLinks={[
            { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
            { icon: <Users className="w-5 h-5" />, href: "#", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
          ]}
          brandIcon={<Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={80} height={80} className="object-contain p-2" />}
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20 border-b border-white/10 pb-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl">
                <span className="text-white font-mono text-[11px] tracking-[0.3em] uppercase mb-6 block">
                  Let's Build Together
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Need industrial air <br className="hidden md:block" />
                  pollution control equipment?
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Start a technical discussion with NAPCEN engineers. We analyze your process to provide the most effective pollution control solution.
                </p>

                {/* Contact Minimal Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Phone className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">SALES INQUIRY</div>
                        <a href="tel:+917904469219" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block">
                          +91 79044 69219
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Mail className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">GENERAL SUPPORT</div>
                        <a href="mailto:info@napcen.com" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block"> info@napcen.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0 mt-1">
                      <MapPin className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block leading-relaxed">
                        No. 42, Main Road, Villianur,<br />
                        Puducherry, India - 605110
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Dark Sleek Card) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

                <h3 className="text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Request a quotation</h3>
                <p className="text-slate-400 mb-10 font-medium leading-relaxed relative z-10">
                  Provide your process specifications, and our engineers will evaluate the requirements for a customized solution.
                </p>
                <a href="mailto:info@napcen.com" className="relative z-10 flex w-full justify-between items-center bg-white hover:bg-slate-200 text-black font-black py-4 px-8 rounded-full transition-all text-sm tracking-widest uppercase group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span>Get my quotation</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Privacy Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <h4 className="text-slate-300 font-bold text-sm mb-2">Enquiry data & privacy</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-4xl">
                This preview processes form values in your browser to prepare a message. It does not upload or store your form entries on this website. If you choose WhatsApp or email, the information you review is passed to that service when you open it and sent to NAPCEN only when you confirm Send. Contact <a href="mailto:info@napcen.com" className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors">info@napcen.com</a> about handling of enquiries. No advertising conversion tag is installed in this preview.
              </p>
            </div>
          </div>
        </Footer>
      </main>
    </div>
  );
}