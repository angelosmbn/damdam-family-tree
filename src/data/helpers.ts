import type { FamilyNode, Person } from "../types/family";

let _id = 0;
export function pid(
  name: string,
  opts?: { deceased?: boolean; note?: string; focal?: boolean },
): Person {
  return {
    id: `p-${++_id}`,
    name,
    ...opts,
  };
}

export function family(
  partners: Person[],
  children?: FamilyNode[],
  label?: string,
): FamilyNode {
  return {
    id: `f-${++_id}`,
    label,
    partners,
    children,
  };
}
