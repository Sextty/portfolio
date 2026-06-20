import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import Layout from "../Layouts/Layout";

interface Project {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  live_link: string | null;
  github_link: string | null;
  languages: string[]; // Decoded JSON
}

function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  const s = 65 + (Math.abs(hash) % 20); // 65-85% saturation
  const l = 60 + (Math.abs(hash) % 15); // 60-75% lightness

  return {
    backgroundColor: `hsla(${h}, ${s}%, ${l}%, 0.12)`,
    color: `hsl(${h}, ${s}%, ${l}%)`,
    borderColor: `hsla(${h}, ${s}%, ${l}%, 0.2)`,
  };
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Layout
      title="Projects"
      description="Explore web development projects by Wassim Jebali — full-stack applications built with React, Laravel, and modern technologies."
    >
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#60a5fa] mb-3">
              Selected work
            </p>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-foreground">
              Projects
            </h1>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-2xl">
              No projects found. Add some from the Admin panel!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      src={project.image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=480&fit=crop&auto=format"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.04] transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                    {/* Hover link icons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          className="p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-[#3b82f6] transition-colors duration-150"
                          aria-label="GitHub repository"
                        >
                          <Github size={13} />
                        </a>
                      )}
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          className="p-2 rounded-full bg-background/70 backdrop-blur-md text-foreground hover:bg-[#3b82f6] transition-colors duration-150"
                          aria-label="Live site"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-[1.05rem] text-foreground group-hover:text-[#93c5fd] transition-colors duration-200 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 gap-2 pt-0.5">
                        {project.github_link && (
                          <a
                            href={project.github_link}
                            className="text-muted-foreground hover:text-[#60a5fa] transition-colors"
                            aria-label="GitHub"
                          >
                            <Github size={14} />
                          </a>
                        )}
                        {project.live_link && (
                          <a
                            href={project.live_link}
                            className="text-muted-foreground hover:text-[#60a5fa] transition-colors"
                            aria-label="Live"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[0.83rem] text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(project.languages || []).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium border"
                          style={getTagColor(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
