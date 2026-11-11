import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/#home" className="flex items-center gap-2.5" aria-label="MPTB Solutions home">
      <span className="grid size-9 place-items-center rounded-md bg-brand text-sm font-bold tracking-tight text-white">
        M
      </span>
      <span
        className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        MPTB<span className="font-light text-brand"> Solutions</span>
      </span>
    </Link>
  );
}
