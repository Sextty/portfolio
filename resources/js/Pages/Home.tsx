import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const stats = [
  { value: "3", label: "Projects completed" },
  { value: "6+", label: "Technologies" },
  { value: "Full-Stack", label: "Specialization" },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6">
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
              <span className="block text-foreground">Building ideas</span>
              <span className="block bg-gradient-to-r from-[#60a5fa] via-[#818cf8] to-[#a78bfa] bg-clip-text text-transparent">
                into reality.
              </span>
            </h1>

            <p className="text-[1.1rem] text-muted-foreground max-w-[500px] leading-relaxed mb-10">
              Wassim Jebali — full-stack developer passionate about building
              clean, impactful web applications. From sleek frontends to
              robust backends, I turn ideas into fully working products.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-[#3b82f6]/40 text-muted-foreground hover:text-foreground text-sm font-semibold transition-all duration-200"
              >
                Get in touch
              </Link>
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
    </Layout>
  );
}
