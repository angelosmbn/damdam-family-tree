import { family, pid } from "./helpers";
import type { FamilyNode } from "../types/family";

export const carlosRoot: FamilyNode = family(
  [pid("Remedios Dungo", { deceased: true }), pid("Jose Carlos", { deceased: true })],
  [
    family(
      [pid("Bernardita Carlos", { deceased: true }), pid("Reneto Cruz", { deceased: true })],
      [
        family([pid("Richborn")]),
        family([pid("Renato"), pid("Anna")]),
      ],
      "1. Bernardita & Reneto",
    ),
    family(
      [pid("Joaquin"), pid("Aida")],
      [
        family([pid("Jaime")]),
        family([pid("Arlene")]),
        family([pid("Jesus")]),
      ],
      "2. Joaquin & Aida",
    ),
    family(
      [pid("Ruben", { deceased: true }), pid("Lilia")],
      [
        family([pid("Aristotle")]),
        family([pid("Kristine")]),
        family([pid("Albert")]),
      ],
      "3. Ruben & Lilia",
    ),
    family(
      [pid("Celestino", { deceased: true })],
      [family([pid("Katrina")]), family([pid("Jayson")])],
      "4. Celestino",
    ),
    family(
      [pid("Edna"), pid("Reynaldo", { deceased: true })],
      [
        family(
          [pid("Richard Ronquillo"), pid("Maria Elena Salinas")],
          [
            family([pid("Orlando Nathaniel Salinas")]),
            family([
              pid("Resurreccion Nathalie Salinas", { focal: true }),
            ]),
          ],
          "5.1 — Her parents",
        ),
        family(
          [pid("Christian"), pid("Jannette")],
          [
            family([pid("Joandrea")]),
            family([pid("Jihan")]),
            family([pid("Jc")]),
          ],
        ),
        family([pid("Cherry Lyn")], [family([pid("Dylan")])]),
        family(
          [pid("Reynaldo Jr.")],
          [
            family([pid("Jen")]),
            family([pid("Jaylen")]),
            family([pid("Jacob")]),
          ],
        ),
      ],
      "5. Edna & Reynaldo",
    ),
    family(
      [pid("Evangeline Dionisio"), pid("Gregorio Dionisio Jr.")],
      [
        family([pid("Kaye Dionisio")]),
        family([pid("Carmella Dionisio")]),
        family([pid("Karell Dionisio")]),
        family([pid("Gregorio Dionisio III")]),
      ],
      "6. Evangeline & Gregorio Jr.",
    ),
    family(
      [pid("Joselito"), pid("Benita")],
      [
        family([pid("Jayar")]),
        family([pid("Sheena")]),
        family([pid("Joseph", { deceased: true })]),
        family([pid("Pauline")]),
      ],
      "7. Joselito & Benita",
    ),
    family(
      [pid("Elsa")],
      [family([pid("Nadine")]), family([pid("Julian")])],
      "8. Elsa",
    ),
  ],
  "Carlos clan",
);

export const ronquilloRoot: FamilyNode = family(
  [pid("Zetang"), pid("Isaias Ronquillo")],
  [
    family([pid("Efren"), pid("Rowena")], undefined, "1. Efren & Rowena"),
    family(
      [pid("Reynaldo"), pid("Edna")],
      undefined,
      "2. Reynaldo & Edna (links to Carlos branch)",
    ),
    family([pid("Perla"), pid("Oscar")], undefined, "3. Perla & Oscar"),
    family([pid("Teng"), pid("Esting")], undefined, "4. Teng & Esting"),
    family([pid("Nelson")], undefined, "5. Nelson"),
    family([pid("Edna")], undefined, "6. Edna"),
    family([pid("Marrisa")], undefined, "7. Marrisa"),
    family([pid("Joseph")], undefined, "8. Joseph"),
    family([pid("Dante")], undefined, "9. Dante"),
  ],
  "Ronquillo clan",
);
