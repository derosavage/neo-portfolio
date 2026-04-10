export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(97,240,207,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(93,105,255,0.1),transparent_24%),linear-gradient(180deg,#050814_0%,#070b17_50%,#050814_100%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
