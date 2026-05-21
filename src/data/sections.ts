import { carlosRoot, ronquilloRoot } from "./carlosRonquillo";
import { maligBieRoot } from "./maligBie";
import { salinasCaylaoRoot } from "./salinasCaylao";
import type { TreeSection } from "../types/family";

export const FOCAL_NAME = "Resurreccion Nathalie Salinas";

export const sections: TreeSection[] = [
  {
    id: "malig-bie",
    side: "mother",
    title: "Malig–Bie Clan",
    subtitle: "Salvador Malig Sr. & Elena Bie — maternal great-grandparents",
    root: maligBieRoot,
  },
  {
    id: "salinas-caylao",
    side: "mother",
    title: "Salinas (Caylao line)",
    subtitle: "Maria Caylao & Mario Salinas — Salinas ancestors",
    root: salinasCaylaoRoot,
  },
  {
    id: "carlos",
    side: "father",
    title: "Carlos (Dungo line)",
    subtitle: "Remedios Dungo & Jose Carlos — paternal great-grandparents",
    root: carlosRoot,
  },
  {
    id: "ronquillo",
    side: "father",
    title: "Tolentino–Ronquillo",
    subtitle: "Zetang & Isaias Ronquillo — Ronquillo ancestors",
    root: ronquilloRoot,
  },
];

export const motherSections = sections.filter((s) => s.side === "mother");
export const fatherSections = sections.filter((s) => s.side === "father");
