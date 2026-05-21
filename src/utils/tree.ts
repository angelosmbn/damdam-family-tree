import type { FamilyNode, Person } from "../types/family";

export function branchContainsPerson(
  node: FamilyNode,
  personId: string,
): boolean {
  if (node.partners.some((p) => p.id === personId)) return true;
  return node.children?.some((c) => branchContainsPerson(c, personId)) ?? false;
}

export function findFocalPerson(node: FamilyNode): Person | undefined {
  for (const p of node.partners) {
    if (p.focal) return p;
  }
  for (const child of node.children ?? []) {
    const found = findFocalPerson(child);
    if (found) return found;
  }
  return undefined;
}
