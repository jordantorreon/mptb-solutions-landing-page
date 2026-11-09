export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="MPTV Solutions home">
      <span className="grid size-9 place-items-center rounded-md bg-brand text-sm font-bold tracking-tight text-white">
        M
      </span>
      <span
        className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        MPTV<span className="font-light text-brand"> Solutions</span>
      </span>
    </a>
  );
}
