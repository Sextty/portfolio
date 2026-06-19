import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  ArrowRight,
  Terminal,
  Globe,
  Menu,
  X,
  ChevronDown,
  Linkedin,
  Twitter,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nexus Gateway",
    description:
      "High-performance distributed API gateway handling 2M+ req/s with intelligent load balancing, circuit breaking, and real-time telemetry dashboards.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["Rust", "Go", "Docker", "Redis"],
  },
  {
    id: 2,
    title: "QuantDash",
    description:
      "Real-time financial analytics platform with sub-50ms data pipelines, WebSocket streaming, and interactive charting for quantitative workflows.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["TypeScript", "React", "PostgreSQL", "Python"],
  },
  {
    id: 3,
    title: "Orbital 3D",
    description:
      "Browser-based 3D satellite orbit visualizer using WebGL with real-time TLE data parsing and procedural celestial body rendering.",
    image:
      "https://images.unsplash.com/photo-1446941303997-83fefd82afca?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["JavaScript", "WebGL", "C++", "WASM"],
  },
  {
    id: 4,
    title: "FlowBase ORM",
    description:
      "Type-safe database ORM with compile-time query validation, automatic migration generation, and zero-overhead abstractions over SQL.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["Rust", "TypeScript", "PostgreSQL", "SQLite"],
  },
  {
    id: 5,
    title: "Pulse Monitor",
    description:
      "Infrastructure observability platform with ML-powered anomaly detection, multi-cloud telemetry aggregation, and automated on-call runbooks.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["Go", "Python", "Kubernetes", "Prometheus"],
  },
  {
    id: 6,
    title: "CipherKit",
    description:
      "Cross-platform cryptographic toolkit with WASM bindings, hardware key support, and formally verified core cipher implementations.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=480&fit=crop&auto=format",
    github: "#",
    live: "#",
    tags: ["C++", "Rust", "Python", "WASM"],
  },
];

const tagPalette: Record<string, string> = {
  Rust: "bg-orange-500/[0.12] text-orange-300 border-orange-500/20",
  Go: "bg-cyan-400/[0.12] text-cyan-300 border-cyan-400/20",
  TypeScript: "bg-blue-500/[0.12] text-blue-300 border-blue-500/20",
  JavaScript: "bg-yellow-400/[0.12] text-yellow-300 border-yellow-400/20",
  Python: "bg-emerald-500/[0.12] text-emerald-300 border-emerald-500/20",
  "C++": "bg-violet-500/[0.12] text-violet-300 border-violet-500/20",
  Docker: "bg-sky-400/[0.12] text-sky-300 border-sky-400/20",
  Redis: "bg-red-400/[0.12] text-red-300 border-red-400/20",
  PostgreSQL: "bg-indigo-400/[0.12] text-indigo-300 border-indigo-400/20",
  SQLite: "bg-slate-400/[0.12] text-slate-300 border-slate-400/20",
  Kubernetes: "bg-purple-400/[0.12] text-purple-300 border-purple-400/20",
  Prometheus: "bg-orange-300/[0.12] text-orange-200 border-orange-300/20",
  WASM: "bg-fuchsia-400/[0.12] text-fuchsia-300 border-fuchsia-400/20",
  WebGL: "bg-pink-400/[0.12] text-pink-300 border-pink-400/20",
};

const skills = [
  {
    category: "Languages",
    icon: "{ }",
    items: ["Rust", "TypeScript", "Go", "Python", "C++", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: "< >",
    items: ["React", "Next.js", "WebGL", "Three.js", "Tailwind CSS", "WASM"],
  },
  {
    category: "Backend",
    icon: "~$",
    items: ["Node.js", "FastAPI", "Axum", "gRPC", "GraphQL", "REST"],
  },
  {
    category: "Infrastructure",
    icon: "⬡",
    items: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "Prometheus"],
  },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "12M+", label: "Requests / day" },
  { value: "8", label: "Open source libs" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      {/* ─── Nav ─── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/75 backdrop-blur-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-mono text-[13px] font-semibold tracking-[0.2em] uppercase text-[#3b82f6]">
            J.Reeves
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm px-4 py-1.5 rounded-full border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-200"
            >
              Hire me
            </a>
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border px-6 py-5 flex flex-col gap-4">
            {[
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-800/6 blur-[80px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-emerald-400 tracking-widest uppercase">
                Open to opportunities
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.93] tracking-tight mb-7">
              <span className="block text-foreground">Crafting systems</span>
              <span className="block bg-gradient-to-r from-[#60a5fa] via-[#818cf8] to-[#a78bfa] bg-clip-text text-transparent">
                built to last.
              </span>
            </h1>

            <p className="text-[1.1rem] text-muted-foreground max-w-[500px] leading-relaxed mb-10">
              Jordan Reeves — full-stack engineer specializing in distributed systems,
              high-performance APIs, and developer tooling. Five years turning
              hard problems into elegant, maintainable software.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-[#3b82f6]/40 text-muted-foreground hover:text-foreground text-sm font-semibold transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 flex flex-wrap gap-x-10 gap-y-6"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-foreground">
                  {value}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/30 animate-bounce">
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#60a5fa] mb-3">
              Selected work
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.065,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-[#3b82f6]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/50"
              >
                {/* Image container */}
                <div className="relative h-44 bg-slate-900 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.04] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                  {/* Hover link icons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-[#3b82f6] transition-colors duration-150"
                      aria-label="GitHub repository"
                    >
                      <Github size={13} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-[#3b82f6] transition-colors duration-150"
                      aria-label="Live site"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-[1.05rem] text-foreground group-hover:text-[#93c5fd] transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-2 pt-0.5">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-[#60a5fa] transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-[#60a5fa] transition-colors"
                        aria-label="Live"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-[0.83rem] text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium border ${
                          tagPalette[tag] ??
                          "bg-slate-400/10 text-slate-300 border-slate-400/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About & Skills ─── */}
      <section
        id="about"
        className="py-32 px-6 border-t border-border relative overflow-hidden"
      >
        <div className="pointer-events-none absolute right-0 top-0 w-96 h-96 bg-violet-800/6 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start relative">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#a78bfa] mb-3">
              Who I am
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground mb-8">
              About
            </h2>

            <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-[1.75]">
              <p>
                I'm a full-stack engineer based in Berlin with a focus on systems
                programming and web infrastructure. I care deeply about performance,
                correctness, and developer experience — and the intersection of all three.
              </p>
              <p>
                My background spans distributed systems at scale, low-latency API design,
                and building developer tools used by thousands of engineers. I thrive at
                the boundary between product thinking and systems engineering.
              </p>
              <p>
                Outside of work I contribute to open source, write about systems design,
                and experiment with procedural graphics and generative art.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors font-medium"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors font-medium"
              >
                <Globe size={15} />
                Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors font-medium"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>

            {/* Photo / decorative card */}
            <div className="mt-10 relative rounded-2xl overflow-hidden border border-border h-52 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=700&h=400&fit=crop&auto=format"
                alt="Developer workspace"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
                  Berlin, Germany · UTC+2
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#a78bfa] mb-3">
              Toolbox
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground mb-10">
              Skills
            </h2>

            <div className="space-y-8">
              {skills.map(({ category, icon, items }, gi) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: gi * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="font-mono text-[11px] text-[#3b82f6] select-none">
                      {icon}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#60a5fa]">
                      {category}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-[12px] font-mono font-medium bg-secondary text-secondary-foreground border border-border hover:border-[#3b82f6]/40 hover:text-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-32 px-6 border-t border-border relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 bottom-0 w-80 h-80 bg-blue-700/6 rounded-full blur-[90px]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#60a5fa] mb-3">
                Say hello
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground mb-5">
                Let's build
                <br />
                something.
              </h2>
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-xs">
                Open to contract work, interesting collaborations, and full-time
                opportunities. Drop me a message and let's talk.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Mail size={13} className="text-[#60a5fa]" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    jordan@reeves.dev
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <MapPin size={13} className="text-[#60a5fa]" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Berlin, Germany
                  </span>
                </div>
              </div>

              <div className="mt-10 p-5 rounded-2xl border border-border bg-card">
                <p className="font-mono text-[11px] text-muted-foreground mb-3 tracking-widest uppercase">
                  Response time
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  &lt; 24 hours
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Usually much faster.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about what you're building..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 relative overflow-hidden"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  boxShadow: sent
                    ? "0 8px 32px rgba(16,185,129,0.2)"
                    : "0 8px 32px rgba(59,130,246,0.2)",
                }}
              >
                {sent ? "✓ Message sent — I'll be in touch!" : "Send Message →"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
              J.Reeves
            </span>
            <span className="text-border">·</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              © 2026
            </span>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-muted-foreground hover:text-[#60a5fa] transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
