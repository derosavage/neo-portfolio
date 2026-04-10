import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
