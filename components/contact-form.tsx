"use client";

import { FormEvent, useState } from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Panel } from "@/components/panel";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Open to building strong things with good people"
        description="If you are working on a product, system, API, or AI-enabled workflow that needs thoughtful execution, let’s talk."
      />

      <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-[1.15fr_0.85fr]">
        <Panel>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-accent/50"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-accent/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className="w-full rounded-3xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-accent/50"
                placeholder="Tell me what you're building."
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Launch Email Draft
            </button>
          </form>
        </Panel>

        <div className="space-y-5">
          <Panel className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              Direct Lines
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-slate-200 transition hover:text-white"
            >
              <Mail size={18} className="text-accent" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-200 transition hover:text-white"
            >
              <Github size={18} className="text-accent" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-200 transition hover:text-white"
            >
              <Linkedin size={18} className="text-accent" />
              LinkedIn
            </a>
            <div className="flex items-center gap-3 text-slate-200">
              <MapPin size={18} className="text-accent" />
              {siteConfig.location}
            </div>
          </Panel>

          <Panel className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              Availability
            </p>
            <p className="leading-7 text-slate-300">
              Best fit: full-stack builds, backend architecture, API work, AI
              integrations, internal tools, and product-minded automation.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
