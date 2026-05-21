import type { Person } from "../types/family";

interface PersonCardProps {
  person: Person;
  compact?: boolean;
  searchHighlight?: boolean;
}

export function PersonCard({
  person,
  compact,
  searchHighlight,
}: PersonCardProps) {
  const isFocal = person.focal;
  const isDead = person.deceased;

  return (
    <div
      className={[
        "relative rounded-lg border px-3 py-2 text-center shadow-sm transition",
        compact ? "min-w-[7.5rem] text-xs" : "min-w-[9rem] text-sm",
        searchHighlight
          ? "border-sky-500 bg-sky-50 ring-2 ring-sky-400 animate-search-pulse"
          : isFocal
            ? "border-amber-400 bg-amber-50 ring-2 ring-amber-300"
            : isDead
              ? "border-stone-300 bg-stone-100 text-stone-600"
              : "border-emerald-200 bg-white text-stone-800",
      ].join(" ")}
      data-person-id={person.id}
      data-focal={isFocal ? "true" : undefined}
      data-search-highlight={searchHighlight ? "true" : undefined}
    >
      {isFocal && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Featured
        </span>
      )}
      <p className={`font-medium leading-tight ${isFocal ? "mt-1" : ""}`}>
        {person.name}
      </p>
      {person.note && (
        <p className="mt-0.5 text-[10px] italic text-stone-500">{person.note}</p>
      )}
      {isDead && (
        <p className="mt-0.5 text-[10px] text-stone-400">†</p>
      )}
    </div>
  );
}
