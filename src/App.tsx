import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { TreeCanvas } from "./components/TreeCanvas";
import {
  FOCAL_NAME,
  fatherSections,
  motherSections,
  sections,
} from "./data/sections";

type Tab = "home" | "mother" | "father";

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [sectionId, setSectionId] = useState(sections[0].id);

  const activeSection =
    sections.find((s) => s.id === sectionId) ?? sections[0];

  const sideSections = tab === "mother" ? motherSections : fatherSections;

  function goToSection(id: string) {
    const sec = sections.find((s) => s.id === id);
    if (!sec) return;
    setSectionId(id);
    setTab(sec.side);
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Damdam Family Tree
            </p>
            <h1 className="font-serif text-2xl font-semibold text-stone-900 md:text-3xl">
              {FOCAL_NAME}
            </h1>
          </div>
          <SearchBar onSelect={goToSection} />
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 px-4 pb-3">
          {(
            [
              ["home", "Overview"],
              ["mother", "Mother — Malig & Salinas"],
              ["father", "Father — Carlos & Ronquillo"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={[
                "rounded-full px-4 py-1.5 text-sm font-medium transition",
                tab === id
                  ? "bg-emerald-700 text-white shadow"
                  : "text-stone-600 hover:bg-stone-200",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {tab === "home" && (
          <div className="space-y-8">
            <section className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl text-stone-800">
                Your two family lines
              </h2>
              <p className="mt-2 max-w-2xl text-stone-600">
                This site maps your maternal Malig–Salinas line and your paternal
                Carlos–Ronquillo line. Trees are interactive: expand branches,
                search names, and your entry is highlighted in gold.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <SideCard
                  title="Mother's side"
                  clans={["Malig–Bie", "Salinas (Caylao)"]}
                  onOpen={() => {
                    setTab("mother");
                    setSectionId("malig-bie");
                  }}
                />
                <SideCard
                  title="Father's side"
                  clans={["Carlos (Dungo)", "Tolentino–Ronquillo"]}
                  onOpen={() => {
                    setTab("father");
                    setSectionId("carlos");
                  }}
                />
              </div>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
              <h3 className="font-medium text-amber-900">Where you appear</h3>
              <ul className="mt-3 space-y-2 text-sm text-amber-950">
                <li>
                  <strong>Malig–Bie → branch 9.4:</strong> Maria Elena Salinas &
                  Richard Ronquillo — siblings Orlando Nathaniel & you.
                </li>
                <li>
                  <strong>Carlos → Edna & Reynaldo → 5.1:</strong> Richard &
                  Maria Elena — same household from your father&apos;s tree.
                </li>
              </ul>
              <button
                type="button"
                className="mt-4 text-sm font-medium text-emerald-800 underline hover:text-emerald-950"
                onClick={() => goToSection("malig-bie")}
              >
                Jump to your branch →
              </button>
            </section>

            <Legend />
          </div>
        )}

        {(tab === "mother" || tab === "father") && (
          <div className="flex flex-col gap-6 lg:flex-row">
            <aside className="lg:w-56 shrink-0">
              <p className="mb-2 text-xs font-semibold uppercase text-stone-500">
                {tab === "mother" ? "Maternal" : "Paternal"} trees
              </p>
              <ul className="flex flex-row flex-wrap gap-2 lg:flex-col">
                {sideSections.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setSectionId(s.id)}
                      className={[
                        "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                        sectionId === s.id
                          ? "border-emerald-600 bg-emerald-700 text-white"
                          : "border-stone-200 bg-white hover:border-emerald-300",
                      ].join(" ")}
                    >
                      <span className="font-medium">{s.title}</span>
                      <span
                        className={[
                          "mt-0.5 block text-xs",
                          sectionId === s.id
                            ? "text-emerald-100"
                            : "text-stone-500",
                        ].join(" ")}
                      >
                        {s.subtitle}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="mb-4">
                <h2 className="font-serif text-xl">{activeSection.title}</h2>
                <p className="text-sm text-stone-600">{activeSection.subtitle}</p>
              </div>
              <TreeCanvas
                root={activeSection.root}
                sectionId={activeSection.id}
              />
              <Legend />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-500">
        Damdam Family Tree · Frontend only · Deploy on Vercel
      </footer>
    </div>
  );
}

function SideCard({
  title,
  clans,
  onOpen,
}: {
  title: string;
  clans: string[];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-left transition hover:border-emerald-400 hover:shadow-md"
    >
      <h3 className="font-medium text-stone-800">{title}</h3>
      <ul className="mt-2 list-inside list-disc text-sm text-stone-600">
        {clans.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <span className="mt-3 inline-block text-sm text-emerald-700">
        View trees →
      </span>
    </button>
  );
}

function Legend() {
  return (
    <div className="mt-8 flex flex-wrap gap-4 text-xs text-stone-600">
      <span className="flex items-center gap-2">
        <span className="h-4 w-8 rounded border-2 border-amber-400 bg-amber-50" />
        You (Resurreccion Nathalie Salinas)
      </span>
      <span className="flex items-center gap-2">
        <span className="h-4 w-8 rounded border border-stone-300 bg-stone-100" />
        Deceased (†)
      </span>
      <span className="flex items-center gap-2">
        <span className="text-rose-400">♥</span> Marriage / partnership
      </span>
      <span className="flex items-center gap-2">
        <span className="text-amber-600">★</span> Branch contains you (collapsed)
      </span>
    </div>
  );
}
