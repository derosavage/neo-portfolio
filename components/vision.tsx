import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Vision() {
  return (
    <section id="vision" className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
      <SectionHeading
        eyebrow="Vision"
        title="Build technology that compounds"
        description="The long game is simple: create systems and products that stay useful, scale with intention, and open up more freedom through technology."
      />

      <Panel className="space-y-6">
        <p className="text-lg leading-8 text-slate-300">{siteConfig.vision}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Scalable systems with strong foundations",
            "Intelligent products that solve real work",
            "Useful tools with practical leverage",
            "Technology as a path to financial freedom",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm text-slate-200"
            >
              <ArrowUpRight size={16} className="mt-0.5 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  );
}
