import { ExternalLink, Github } from "lucide-react";
import { Panel } from "@/components/panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that reflect how I build"
        description="These projects show a pattern: solve practical problems, design clean systems, and build with room for scale and iteration."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {siteConfig.projects.map((project) => (
          <Panel
            key={project.title}
            className="group flex h-full flex-col justify-between overflow-hidden"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                  Project Panel
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="leading-7 text-slate-300">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/40"
              >
                <Github size={16} className="text-accent" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
