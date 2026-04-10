import { SectionHeading } from "@/components/section-heading";
import { Panel } from "@/components/panel";
import { siteConfig } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Capabilities"
        title="A stack built for useful, scalable products"
        description="My toolkit is strongest where product needs meet technical depth: interfaces, APIs, databases, and intelligent automation."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {siteConfig.skillGroups.map((group) => (
          <Panel key={group.title} className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {group.title}
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-950/35 px-3 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </section>
  );
}
