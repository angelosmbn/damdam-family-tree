export interface Person {
  id: string;
  name: string;
  deceased?: boolean;
  note?: string;
  /** Marks the featured person — Resurreccion Nathalie Salinas */
  focal?: boolean;
}

export interface FamilyNode {
  id: string;
  label?: string;
  partners: Person[];
  children?: FamilyNode[];
}

export type SideId = "mother" | "father";

export interface TreeSection {
  id: string;
  side: SideId;
  title: string;
  subtitle: string;
  root: FamilyNode;
}
