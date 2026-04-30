import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="FinLever home">
      <span className="grid size-8 grid-cols-2 gap-1">
        <span className="rounded-[6px] bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
        <span className="rounded-[6px] bg-cyan-500/75" />
        <span className="rounded-[6px] bg-cyan-500/75" />
        <span className="rounded-[6px] border border-cyan-200/40 bg-white/10" />
      </span>
      <span className="text-xl font-bold tracking-[0.08em] text-white">
        FINLEVER
      </span>
    </Link>
  );
}
