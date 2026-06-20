"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

type GitHubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  latestCommit: string;
  latestRepo: string;
};

export function GitHubStatus() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/derosavage"),
          fetch(
            "https://api.github.com/users/derosavage/repos?per_page=100&sort=pushed"
          ),
        ]);

        const user = await userRes.json();
        const repos = await reposRes.json();

        const starCount = repos.reduce(
          (sum: number, r: { stargazers_count: number }) =>
            sum + r.stargazers_count,
          0
        );

        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          totalStars: starCount,
          latestCommit: user.updated_at
            ? new Date(user.updated_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "N/A",
          latestRepo: repos[0]?.name || "N/A",
        });
      } catch {
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const liveStats = [
    { label: "Public Repos", value: stats?.publicRepos ?? "—" },
    { label: "Total Stars", value: stats?.totalStars ?? "—" },
    { label: "Followers", value: stats?.followers ?? "—" },
    { label: "Last Active", value: stats?.latestCommit ?? "—" },
  ];

  return (
    <div className="relative space-y-4">
      {liveStats.map((item, index) => (
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
            {loading ? (
              <span className="inline-block h-4 w-16 animate-pulse rounded bg-white/10" />
            ) : (
              <span className="tabular-nums">{item.value}</span>
            )}
          </span>
        </motion.div>
      ))}

      {stats?.latestRepo && (
        <div className="rounded-2xl border border-accent/20 bg-accentSoft p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
            Live Signal
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-200">
            Latest activity:{" "}
            <span className="font-medium text-white">{stats.latestRepo}</span>
          </p>
        </div>
      )}

      {!stats && !loading && (
        <div className="rounded-2xl border border-accent/20 bg-accentSoft p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
            Live Signal
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-200">
            {siteConfig.status.map(
              (s) => s.label === "Current Focus" && s.value
            )}
          </p>
        </div>
      )}
    </div>
  );
}