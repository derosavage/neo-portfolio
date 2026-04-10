import { Panel } from "@/components/panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Journey() {
  return (
    <section id="journey" className="space-y-10">
      <SectionHeading
        eyebrow="Journey"
        title="From curiosity to real systems"
        description="The path has been less about trends and more about steadily building the judgment to create software that is both useful and resilient."
      />

      <div className="space-y-5">
        {siteConfig.journey.map((step, index) => (
          <Panel
            key={`${step.year}-${step.title}`}
            className="grid gap-5 md:grid-cols-[120px_1fr]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-accent" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                  {step.year}
                </p>
                <div className="mt-4 hidden h-16 w-px bg-white/10 md:block" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
