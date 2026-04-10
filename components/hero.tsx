"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Panel } from "@/components/panel";

export function Hero() {
  return (
    <section className="relative pt-10 md:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span>Operator Dashboard / Portfolio Interface</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
                {siteConfig.location}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
                {siteConfig.role}
              </p>
            </div>

            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-medium text-white md:text-3xl">
                {siteConfig.tagline}
              </h2>
              <p className="text-base leading-8 text-slate-300 md:text-lg">
                {siteConfig.intro}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.cta.projects}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={siteConfig.cta.contact}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              {siteConfig.location}
            </span>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Github size={16} className="text-accent" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Linkedin size={16} className="text-accent" />
              LinkedIn
            </a>
          </div>
        </div>

        <Panel className="relative overflow-hidden border-accent/20 bg-white/[0.04] p-0">
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  System Status
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Personal Operating State
                </p>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                <span className="h-3 w-3 rounded-full bg-slate-500/80" />
              </div>
            </div>
          </div>

          <div className="relative p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,240,207,0.16),transparent_32%)]" />
            <div className="relative space-y-4">
              {siteConfig.status.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="grid grid-cols-[140px_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 * index }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {item.value}
                  </span>
                </motion.div>
              ))}

              <div className="rounded-2xl border border-accent/20 bg-accentSoft p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
                  Live Signal
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Shipping clean systems, connecting intelligence to product
                  workflows, and treating code like infrastructure.
                </p>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
