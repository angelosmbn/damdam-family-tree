import { useState } from "react";
import type { FamilyNode } from "../types/family";
import { PersonCard } from "./PersonCard";

interface FamilyBranchProps {
  node: FamilyNode;
  depth?: number;
  defaultExpanded?: boolean;
}

export function FamilyBranch({
  node,
  depth = 0,
  defaultExpanded = depth < 2,
}: FamilyBranchProps) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasFocal =
    node.partners.some((p) => p.focal) ||
    node.children?.some((c) => branchHasFocal(c));

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-1">
        {node.label && (
          <span className="mb-1 rounded-md bg-stone-200/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-stone-600">
            {node.label}
          </span>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {node.partners.map((person, i) => (
            <div key={person.id} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-lg font-light text-rose-400" aria-hidden>
                  ♥
                </span>
              )}
              <PersonCard person={person} compact={depth > 2} />
            </div>
          ))}
        </div>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-1 rounded-full px-2 py-0.5 text-[10px] text-stone-500 hover:bg-stone-100 hover:text-stone-700"
            aria-expanded={expanded}
          >
            {expanded ? "Hide" : "Show"} {node.children!.length} branch
            {node.children!.length !== 1 ? "es" : ""}
            {hasFocal && !expanded && (
              <span className="ml-1 text-amber-600">★</span>
            )}
          </button>
        )}
      </div>

      {hasChildren && expanded && (
        <>
          <div
            className="my-2 h-6 w-px bg-stone-300"
            aria-hidden
          />
          <div className="relative flex flex-wrap justify-center gap-6 pt-2">
            <div
              className="pointer-events-none absolute top-0 left-4 right-4 h-px bg-stone-300"
              aria-hidden
            />
            {node.children!.map((child) => (
              <div
                key={child.id}
                className="flex flex-col items-center px-2 pt-4"
              >
                <div
                  className="absolute -top-0 h-4 w-px bg-stone-300"
                  style={{ position: "relative", top: 0 }}
                  aria-hidden
                />
                <FamilyBranch
                  node={child}
                  depth={depth + 1}
                  defaultExpanded={depth < 1 || branchHasFocal(child)}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function branchHasFocal(node: FamilyNode): boolean {
  if (node.partners.some((p) => p.focal)) return true;
  return node.children?.some(branchHasFocal) ?? false;
}
