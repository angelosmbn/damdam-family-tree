import { useEffect, useRef } from "react";
import type { FamilyNode } from "../types/family";
import { FamilyBranch } from "./FamilyBranch";

interface TreeCanvasProps {
  root: FamilyNode;
  sectionId: string;
  focusPersonId?: string | null;
}

export function TreeCanvas({
  root,
  sectionId,
  focusPersonId = null,
}: TreeCanvasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToTarget = () => {
      const container = scrollRef.current;
      if (!container) return;

      const selector = focusPersonId
        ? `[data-person-id="${focusPersonId}"]`
        : "[data-focal='true']";
      const target = container.querySelector(selector);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    };

    const timer = window.setTimeout(scrollToTarget, 200);
    return () => window.clearTimeout(timer);
  }, [sectionId, focusPersonId]);

  return (
    <div
      ref={scrollRef}
      className="tree-scroll overflow-auto rounded-xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-6 md:p-10"
    >
      <FamilyBranch
        key={focusPersonId ?? sectionId}
        node={root}
        focusPersonId={focusPersonId}
      />
    </div>
  );
}
