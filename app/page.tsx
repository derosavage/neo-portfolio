import { About } from "@/components/about";
import { BackgroundGrid } from "@/components/background-grid";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { Skills } from "@/components/skills";
import { Vision } from "@/components/vision";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundGrid />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 mb-10 rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                DS // Portfolio
              </p>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Journey", "#journey"],
                ["Vision", "#vision"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="space-y-28">
          <Reveal>
            <Hero />
          </Reveal>

          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <Skills />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Journey />
          </Reveal>

          <Reveal>
            <Vision />
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
