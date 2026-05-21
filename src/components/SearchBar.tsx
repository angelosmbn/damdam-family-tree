import { useMemo, useState } from "react";
import type { FamilyNode } from "../types/family";
import { sections } from "../data/sections";

interface SearchBarProps {
  onSelect: (sectionId: string, personId: string) => void;
}

interface SearchHit {
  personId: string;
  name: string;
  sectionId: string;
  sectionTitle: string;
}

function collectPeople(
  node: FamilyNode,
  sectionId: string,
  sectionTitle: string,
  hits: SearchHit[],
) {
  for (const p of node.partners) {
    hits.push({
      personId: p.id,
      name: p.name,
      sectionId,
      sectionTitle,
    });
  }
  node.children?.forEach((c) =>
    collectPeople(c, sectionId, sectionTitle, hits),
  );
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const index = useMemo(() => {
    const hits: SearchHit[] = [];
    for (const s of sections) {
      collectPeople(s.root, s.id, s.title, hits);
    }
    return hits;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter((h) => h.name.toLowerCase().includes(q)).slice(0, 12);
  }, [query, index]);

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="family-search" className="sr-only">
        Search family members
      </label>
      <input
        id="family-search"
        type="search"
        placeholder="Search a name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border border-stone-300 bg-white px-4 py-2 text-sm shadow-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
      />
      {results.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-stone-200 bg-white py-1 shadow-lg">
          {results.map((r) => (
            <li key={r.personId}>
              <button
                type="button"
                className="w-full px-4 py-2 text-left text-sm hover:bg-emerald-50"
                onClick={() => {
                  onSelect(r.sectionId, r.personId);
                  setQuery("");
                }}
              >
                <span className="font-medium">{r.name}</span>
                <span className="ml-2 text-xs text-stone-500">
                  {r.sectionTitle}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
