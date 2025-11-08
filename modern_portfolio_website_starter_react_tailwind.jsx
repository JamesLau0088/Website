import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Download } from "lucide-react";

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur ${className}`}>{children}</div>
);
const Button = ({ as: El = "button", className = "", href, download, onClick, children }) => (
  <El href={href} onClick={onClick} download={download} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 shadow-sm ring-1 ring-black/5 hover:shadow transition ${className}`}>
    {children}
  </El>
);

const DEMO = {
  name: "James Lau",
  role: "Learning, building, and securing the intelligent future.",
  summary:
    "I’m actively learning and growing in cloud technologies, AI/ML, and cybersecurity as I explore how these fields connect to shape tomorrow’s innovations. Join my journey as I build new projects, share what I learn, and welcome any feedback or collaboration along the way.",
  email: "you@example.com",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourprofile/",
  },
  actions: [
    { label: "Resume", href: "#", icon: Download },
    { label: "Contact", href: "#contact", icon: Mail },
  ],
  projects: [
    {
      title: "Tudor AI",
      description: "AI tutoring platform prototype: lesson planning, quiz generation, analytics dashboard.",
      tags: ["Next.js", "Python", "Postgres"],
      link: "https://example.com",
      github: "https://github.com/yourhandle/tudor-ai",
    },
    {
      title: "Stock Scout",
      description: "Screeners and agents for growth stocks and ETF monitoring with alerting.",
      tags: ["Pandas", "FastAPI", "Agents"],
      link: "https://example.com",
      github: "https://github.com/yourhandle/stock-scout",
    },
    {
      title: "Nursing Labs Helper",
      description: "Cheat‑sheet generator for lab values, flags, and clinical cues.",
      tags: ["TypeScript", "Tailwind"],
      link: "https://example.com",
      github: "https://github.com/yourhandle/nursing-labs-helper",
    },
  ],
  skills: [
    "Cloud computing fundamentals",
    "AI/ML model experimentation",
    "Cybersecurity principles",
    "Python scripting",
    "Networking (DNS/DHCP/TCP/IP)",
    "Active Directory basics",
    "Security+ in progress",
  ],
};

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-8">
    {eyebrow && (
      <span className="text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </span>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold leading-tight mt-1">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">{subtitle}</p>
    )}
  </div>
);

const Nav = ({ open, setOpen }) => {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-black/5">
      <Container className="flex items-center justify-between py-4">
        <a href="#home" className="font-semibold">{DEMO.name}</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-black/5">
          <Container className="py-4 flex flex-col gap-4">
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </Container>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <Container className="pt-16 sm:pt-24 pb-16">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      <div>
        <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full ring-1 ring-black/5 mb-4">
          <span>Join my journey</span>
          <ArrowUpRight size={14} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{DEMO.role}</h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">{DEMO.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {DEMO.actions.map((a) => (
            <Button key={a.label} as="a" href={a.href} className="bg-black text-white dark:bg-white dark:text-black">
              {a.icon && <a.icon size={18} />}
              <span>{a.label}</span>
            </Button>
          ))}
          <Button as="a" href={DEMO.social.github} className="ring-1">
            <Github size={18} /> Github
          </Button>
          <Button as="a" href={DEMO.social.linkedin} className="ring-1">
            <Linkedin size={18} /> LinkedIn
          </Button>
        </div>
      </div>
      <Card className="p-6 flex items-center justify-center">
        <div className="aspect-square w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
          JL
        </div>
      </Card>
    </motion.div>
  </Container>
);

// (The rest of the website remains unchanged)

export default function PortfolioSite() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = `${DEMO.name} – Portfolio`;
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Nav open={open} setOpen={setOpen} />
      <main>
        <Hero />
      </main>
    </div>
  );
}
