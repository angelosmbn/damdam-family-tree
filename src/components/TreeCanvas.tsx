import { useEffect, useRef } from "react";
import type { FamilyNode } from "../types/family";
import { FamilyBranch } from "./FamilyBranch";

interface TreeCanvasProps {
  root: FamilyNode;
  sectionId: string;
}

export function TreeCanvas({ root, sectionId }: TreeCanvasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focal = scrollRef.current?.querySelector("[data-focal='true']");
    if (focal) {
      focal.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }, [sectionId]);

  return (
    <div
      ref={scrollRef}
      className="tree-scroll overflow-auto rounded-xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-6 md:p-10"
    >
      <FamilyBranch node={root} defaultExpanded />
    </div>
  );
}
