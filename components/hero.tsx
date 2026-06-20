"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, Terminal } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Panel } from "@/components/panel";
import { Typewriter } from "@/components/typewriter";
import { GitHubStatus } from "@/components/github-status";

export function Hero() {
  return (
    <section className="relative pt-10 md:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <Terminal size={14} className="text-accent" />
            <span className="font-mono text-xs tracking-wider">
              $ ./portfolio --status
            </span>
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
                <Typewriter text={siteConfig.tagline} speed={30} />
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
                    Live GitHub Feed
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                  <span className="h-3 w-3 rounded-full bg-slate-500/80" />
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,240,207,0.16),transparent_32%)]" />
              <GitHubStatus />
            </div>
          </Panel>
      </div>
    </section>
  );
}
