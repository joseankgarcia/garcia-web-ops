import { motion } from "motion/react";
import { 
  Shield, 
  Activity, 
  RefreshCw, 
  Database, 
  BarChart3, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Menu,
  X,
  Clock,
  Zap,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Garcia Web Ops</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 px-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#plans" className="btn-secondary">View Plans</a>
          <a href="#contact" className="btn-primary">Get a Free Site Check</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-accent-500"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100" />
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center">Get a Free Site Check</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="section-padding relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Website operations <br/><span className="text-blue-600">without the confusion.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
            Garcia Web Ops helps businesses keep their websites secure, updated, backed up, monitored, and ready for customers — with clear reports and plain-English support.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary py-3 px-8 text-base">Get a Free Site Check</a>
            <a href="#plans" className="btn-secondary text-base">View Plans</a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex flex-col shrink-0">
              <span className="text-2xl font-bold text-slate-800 italic">99.9%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Uptime Focus</span>
            </div>
            <div className="w-px h-10 bg-slate-200 shrink-0"></div>
            <div className="flex flex-col shrink-0">
              <span className="text-2xl font-bold text-slate-800 uppercase tracking-tighter">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Monitoring</span>
            </div>
            <div className="w-px h-10 bg-slate-200 shrink-0"></div>
            <div className="flex flex-col shrink-0">
              <span className="text-2xl font-bold text-slate-800">Clear</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Reporting</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-brand-900 border border-slate-800 shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-tighter">ops.garciaweb.monitoring</span>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Current Status</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-xl font-bold text-white tracking-tight">Active & Online</span>
                  </div>
                  <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wide">
                    99.98% Uptime
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2">Uptime History (Last 24h)</span>
                <div className="flex gap-1 h-8 items-end">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-sm ${i === 25 ? 'bg-amber-400 h-4' : 'bg-emerald-500 h-6'} opacity-80`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] text-slate-600 font-mono">24h ago</span>
                  <span className="text-[8px] text-slate-600 font-mono">Now</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2">Backups</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">Daily Verified</span>
                    <Database size={14} className="text-blue-400" />
                  </div>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2">Security</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">System Clean</span>
                    <Shield size={14} className="text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                 <div className="flex items-center gap-3 justify-between group">
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                     <span className="text-xs text-slate-300 font-medium">Core Update Applied (v6.4.1)</span>
                   </div>
                   <span className="text-[10px] text-slate-500 font-mono">12:30</span>
                 </div>
                 <div className="flex items-center gap-3 justify-between opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                     <span className="text-xs text-slate-300 font-medium tracking-tight">SSL Certificate Renewal Verified</span>
                   </div>
                   <span className="text-[10px] text-slate-500 font-mono">08:00</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Downtime loses trust",
      desc: "Every minute your site is down is a minute customers can't reach you. Most owners only find out when a client calls to complain.",
      icon: <Clock className="text-red-500" />
    },
    {
      title: "Outdated sites create risk",
      desc: "Neglected plugins and themes are the #1 entry point for hackers. Security isn't just a firewall; it's proactive maintenance.",
      icon: <Shield className="text-orange-500" />
    },
    {
      title: "No reporting means no visibility",
      desc: "If you don't know what's happening under the hood, you can't optimize for growth. Silent problems eventually become loud emergencies.",
      icon: <AlertCircle className="text-yellow-500" />
    }
  ];

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your website should not be a silent risk.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Many businesses only notice website problems after something breaks. Garcia Web Ops gives you a proactive system instead of waiting for emergencies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card card-hover shadow-sm"
            >
              <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-6 shadow-sm shadow-slate-100">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Uptime Monitoring", icon: <Activity />, desc: "We watch your site 24/7. If it goes down, we're the first to know and the first to respond." },
    { title: "Website Updates", icon: <RefreshCw />, desc: "Safe review and application of core, theme, and plugin updates to prevent conflicts." },
    { title: "Backup Checks", icon: <Database />, desc: "Automatic off-site backups with regular verification to ensure data can actually be restored." },
    { title: "Security Scans", icon: <Shield />, desc: "Daily monitoring for malware, vulnerability patches, and brute-force protection." },
    { title: "Performance Review", icon: <Zap />, desc: "Quarterly checks on loading speed, core web vitals, and image optimization." },
    { title: "Monthly Reporting", icon: <BarChart3 />, desc: "Plain-English summaries of everything we did, so you see the value, not just the code." },
    { title: "Basic Content Support", icon: <MessageSquare />, desc: "Need a quick text change or a blog post uploaded? We're here to help with small edits." },
    { title: "Incident Triage", icon: <AlertCircle />, desc: "If there's an emergency, we jump in to resolve hosting issues or site errors immediately." },
  ];

  return (
    <section id="services" className="bg-slate-50">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-500 font-bold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">WebOps care for the website your business depends on.</h2>
          </div>
          <a href="#plans" className="text-accent-500 font-semibold flex items-center gap-2 hover:underline">
            View pricing plans <ChevronDown size={16}/>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 glass-card card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-800 mb-2 transition-colors group-hover:text-blue-700">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompetitiveAdvantage = () => {
  const advantages = [
    { title: "Plain-English reports", desc: "No confusing technical jargon. We explain what happened and why it matters in simple business terms.", icon: <CheckCircle2 className="text-accent-500" /> },
    { title: "Transparent monthly plans", desc: "Know exactly what you're paying and what's included. No hidden fees or surprise emergency hourly rates.", icon: <CheckCircle2 className="text-accent-500" /> },
    { title: "Proactive monitoring", desc: "We fix problems before you or your customers even realize they exist. Proactive over reactive, always.", icon: <CheckCircle2 className="text-accent-500" /> },
    { title: "Human review", desc: "We don't just set up an automated script. Every update and report is reviewed by a real human engineer.", icon: <CheckCircle2 className="text-accent-500" /> }
  ];

  return (
    <section className="bg-brand-900 text-white overflow-hidden py-24 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/5 blur-3xl rounded-full"></div>
      <div className="section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for business owners who want clarity, not complexity.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Garcia Web Ops does not just "set it and forget it." The goal is to make your website's health visible, understandable, and easier to manage.
            </p>
            <div className="space-y-6">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">{adv.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{adv.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="dark-glass-card p-1 bg-slate-800 border-slate-700">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                 alt="Professional dashboard" 
                 className="rounded-xl opacity-90 brightness-75"
               />
             </div>
             <div className="absolute -top-6 -right-6 p-4 glass-card bg-white text-slate-800 shadow-2xl max-w-[200px] hidden lg:block">
               <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Health Score</p>
               <div className="flex items-center gap-3">
                 <div className="text-3xl font-black text-accent-500">98</div>
                 <div className="text-[10px] leading-tight font-medium">Excellent<br/>Standing</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Free Site Check", desc: "We review your website basics, uptime risk, visible issues, CMS, hosting setup, and maintenance needs." },
    { num: "02", title: "WebOps Setup", desc: "Monitoring, backups, update workflow, security checks, and reporting structure are configured." },
    { num: "03", title: "Monthly Care", desc: "Your site is reviewed, monitored, updated, and documented based on your selected plan." },
    { num: "04", title: "Clear Reporting", desc: "You receive a simple report showing what was checked, updated, fixed, or flagged." },
  ];

  return (
    <section id="process" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
          <p className="mt-4 text-slate-600">A simple, transparent process for complete website peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 -z-0"></div>
          {steps.map((step, i) => (
            <div key={step.title} className="relative z-10 text-center md:text-left">
              <div className="w-12 h-12 bg-white border-2 border-accent-500 rounded-full flex items-center justify-center text-accent-500 font-bold mb-6 mx-auto md:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter WebOps",
      price: "149",
      desc: "Best for simple business websites.",
      features: [
        "Uptime monitoring",
        "Monthly website health check",
        "Core/plugin/theme update review",
        "Backup verification",
        "Basic security scan",
        "Monthly report",
        "Email support"
      ]
    },
    {
      name: "Growth WebOps",
      price: "249",
      desc: "Best for lead-generation websites.",
      isPopular: true,
      features: [
        "Everything in Starter, plus:",
        "More frequent update review",
        "Performance review",
        "Priority issue triage",
        "Basic content edits (monthly limit)",
        "Form/contact check",
        "Analytics/reporting notes"
      ]
    },
    {
      name: "Pro WebOps",
      price: "399",
      desc: "Best for higher-value active websites.",
      features: [
        "Everything in Growth, plus:",
        "More hands-on support",
        "Staging environment recs",
        "Advanced issue review",
        "Conversion and UX notes",
        "Expanded monthly report",
        "Faster response priority"
      ]
    }
  ];

  return (
    <section id="plans" className="bg-slate-50 relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Simple website care plans</h2>
          <p className="mt-4 text-slate-500">No long-term contracts. Just reliable operations support.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 rounded-xl border transition-all duration-500 flex flex-col hover:shadow-xl ${plan.isPopular ? "bg-white border-blue-600 shadow-xl lg:scale-105 relative z-10" : "bg-white border-slate-200 shadow-sm hover:border-blue-300"}`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded uppercase tracking-widest shadow-lg shadow-blue-500/20">Most Popular</span>
              )}
              <h3 className="text-xl font-bold mb-2 text-slate-900">{plan.name}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">${plan.price}</span>
                <span className="text-slate-400 text-sm font-medium">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-slate-600 leading-snug">
                    <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${i === 0 && plan.name !== "Starter WebOps" ? "text-blue-600" : "text-emerald-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all ${plan.isPopular ? "btn-primary" : "btn-dark"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 bg-brand-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-slate-800">
          <div>
            <h3 className="text-2xl font-bold mb-2">Custom WebOps</h3>
            <p className="text-slate-400 max-w-xl">Best for e-commerce, membership sites, complex WordPress sites, multi-site businesses, or agencies.</p>
          </div>
          <a href="#contact" className="btn-primary border-none shrink-0">Request a Custom Quote</a>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs italic">
          Plans are starting points. Final fit depends on site complexity, CMS, plugin stack, hosting, traffic, and business requirements.
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Get a free website health check</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No pressure. No confusing technical report. Just a clear review of what may need attention, from security risks to uptime stability.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center text-accent-500 shrink-0">
                  <CheckCircle2 size={20}/>
                </div>
                <div>
                  <h4 className="font-bold">Manual Review</h4>
                  <p className="text-sm text-slate-500">A human engineer reviews your site basics.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center text-accent-500 shrink-0">
                  <Activity size={20}/>
                </div>
                <div>
                  <h4 className="font-bold">Risk Assessment</h4>
                  <p className="text-sm text-slate-500">We identify visible security and uptime vulnerabilities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800">Free Site Health Check</h3>
              <p className="text-xs text-slate-500 italic">See what your website needs to stay secure.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Name</label>
                  <input type="text" className="w-full p-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500" placeholder="John Doe" required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Website URL</label>
                  <input type="text" className="w-full p-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500" placeholder="mysite.com" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email</label>
                <input type="email" className="w-full p-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500" placeholder="jane@example.com" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CMS / Platform</label>
                  <select className="w-full p-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500">
                    <option>WordPress</option>
                    <option>Shopify</option>
                    <option>Webflow</option>
                    <option>Other / Not sure</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Main Concern</label>
                  <select className="w-full p-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500">
                    <option>Downtime</option>
                    <option>Security</option>
                    <option>Speed</option>
                    <option>Backups</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-dark w-full py-3.5 mt-2">Request My Site Check</button>
              <p className="text-[10px] text-center text-slate-400">No pressure. No tech-speak. Just clarity.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SampleReport = () => {
  const sections = [
    { label: "Uptime Summary", status: "Healthy", val: "99.98%" },
    { label: "Updates Reviewed", status: "Healthy", val: "14 Pending" },
    { label: "Backups Verified", status: "Checked", val: "Daily Off-site" },
    { label: "Security Scans", status: "Clean", val: "No threats" },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Know what is happening with your website.</h2>
          <p className="mt-4 text-slate-600">Sample of the monthly report you'll receive.</p>
        </div>

        <div className="max-w-4xl mx-auto glass-card p-0 overflow-hidden shadow-2xl">
          <div className="bg-brand-900 p-6 text-white flex justify-between items-center">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-accent-500 rounded flex items-center justify-center font-bold">G</div>
               <span className="font-bold">Monthly WebOps Report</span>
             </div>
             <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">April 2026</span>
          </div>
          <div className="p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {sections.map((s) => (
                <div key={s.label} className="p-4 bg-slate-100 rounded-xl border border-slate-200/50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{s.label}</p>
                  <p className="text-xl font-bold text-slate-900">{s.val}</p>
                  <p className="text-[10px] font-semibold text-green-600 uppercase mt-1">● {s.status}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-bold text-slate-900 mb-2">Performance Notes</h4>
                <p className="text-sm text-slate-600">Mobile PageSpeed score improved by 12 points after image optimization. Core Web Vitals are within green limits.</p>
              </div>
              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-bold text-slate-900 mb-2">Issues Found</h4>
                <p className="text-sm text-slate-600 italic">No critical issues found this month. Redirect loop on /contact fixed on April 12th.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Recommended Next Steps</h4>
                <p className="text-sm text-slate-600">We recommend upgrading your PHP version to 8.2 to improve server-side execution speed in the next quarter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What is WebOps?", a: "WebOps (Website Operations) is the proactive practice of managing, maintaining, and monitoring a website to ensure it remains fast, secure, and available for users." },
    { q: "Is this only for WordPress?", a: "While we specialize in WordPress, we also support Shopify, Webflow, and custom sites. Each site check allows us to confirm if we're a good fit for your stack." },
    { q: "Do you replace my hosting company?", a: "No. We work with your existing hosting to manage the software layer. If your hosting is subpar, we can provide recommendations for improvement or migration." },
    { q: "What happens if my site goes down?", a: "Our monitoring alerts us immediately. We investigate to see if it's a server issue or a software conflict and either resolve it or coordinate with your host for a fix." },
    { q: "Do you make website edits?", a: "Our Growth and Pro plans include a monthly allowance for small text and image changes. For larger redevelopment, we can provide custom quotes." },
    { q: "Do you guarantee my site can never break?", a: "No service can honestly guarantee 100% security or uptime. However, we significantly reduce risk, improve response time, and ensure you have clean backups ready to restore." },
    { q: "Can I cancel anytime?", a: "Yes. Our plans are month-to-month. We believe in earning your business every month through quality service and clear reporting." },
    { q: "Do you work with agencies?", a: "Yes. We offer white-label WebOps support for agencies that want to provide maintenance plans to their clients without handling the technical day-to-day." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="section-padding max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6 text-slate-600 text-sm leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="bg-brand-900 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-blue-900)_0%,_transparent_70%)] opacity-30"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px]"></div>
      
      <div className="section-padding relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">Your website should be monitored <br className="hidden md:block"/> before something breaks.</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-80">
            Start with a free site check and see what your website needs to stay secure, updated, and reliable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary py-4 px-10 text-lg">Get a Free Site Check</a>
            <a href="#plans" className="btn-ghost py-4 px-10 text-lg border border-slate-700 hover:border-slate-500">View Plans</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6">
      <div className="section-padding py-0 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px]">G</div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">&copy; {new Date().getFullYear()} Garcia Web Ops. Professional Maintenance for growing businesses.</p>
        </div>
        <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#contact" className="hover:text-blue-600">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <CompetitiveAdvantage />
      <Process />
      <Pricing />
      <ContactForm />
      <SampleReport />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
