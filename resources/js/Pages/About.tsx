import { motion } from "motion/react";
import { Github, Globe, Linkedin } from "lucide-react";
import Layout from "../Layouts/Layout";

const skills = [
  {
    category: "Languages",
    icon: "{ }",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
  },
  {
    category: "Frontend",
    icon: "< >",
    items: ["React", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "~$",
    items: ["Laravel", "Node.js"],
  },
  {
    category: "Databases",
    icon: "⛁",
    items: ["MySQL", "MongoDB", "NoSQL"],
  },
  {
    category: "DevOps",
    icon: "⬡",
    items: ["Docker"],
  },
];

export default function About() {
  return (
    <Layout
      title="About"
      description="Learn about Wassim Jebali, a full-stack web developer skilled in React, Laravel, PHP, Python, and modern web technologies."
    >
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start relative">
          <div className="pointer-events-none absolute right-0 top-0 w-96 h-96 bg-violet-800/6 rounded-full blur-[100px]" />

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >


            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#a78bfa] mb-3">
              Who I am
            </p>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground mb-8">
              About
            </h1>

            <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-[1.75]">
              <p>
                I'm a full-stack web developer with a passion for building
                modern, scalable web applications. I enjoy the challenge of
                turning complex problems into simple, elegant solutions.
              </p>
              <p>
                My experience spans both frontend and backend development —
                from crafting pixel-perfect interfaces with React and Tailwind CSS,
                to building robust APIs and data-driven backends with Laravel and MySQL.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, working on
                open source projects, or leveling up my skills every day.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://github.com/Sextty"
                target="_blank" rel="noopener noreferrer"
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
                href="https://www.linkedin.com/in/wassim-wess-b3a544380/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors font-medium"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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
    </Layout>
  );
}
