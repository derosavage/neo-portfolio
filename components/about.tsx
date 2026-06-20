import { SectionHeading } from "@/components/section-heading";
import { Panel } from "@/components/panel";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="grid gap-8 md:grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeading
        eyebrow="About"
        title="Systems thinking with product intent"
        description="I approach software as a connected system where interfaces, logic, data, and automation all need to work in harmony."
      />

      <Panel className="space-y-5">
        <p className="text-lg leading-8 text-slate-300">{siteConfig.about}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Backend-first problem solving",
            "AI features that feel genuinely useful",
            "Automation as leverage, not noise",
            "Products shaped by practical workflows",
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm text-slate-200"
            >
              {point}
            </div>
          ))}
        </div>
      </Panel>
    </section>
  );
}
