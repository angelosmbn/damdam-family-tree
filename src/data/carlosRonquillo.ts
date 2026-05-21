import { family, pid } from "./helpers";
import type { FamilyNode } from "../types/family";

export const carlosRoot: FamilyNode = family(
  [pid("Remedios Dungo"), pid("Jose Carlos")],
  [
    family(
      [pid("Bernardita Carlos"), pid("Reneto Cruz")],
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
      [pid("Ruben"), pid("Lilia")],
      [
        family([pid("Aristotle")]),
        family([pid("Kristine")]),
        family([pid("Albert")]),
      ],
      "3. Ruben & Lilia",
    ),
    family(
      [pid("Celestino")],
      [family([pid("Katrina")]), family([pid("Jayson")])],
      "4. Celestino",
    ),
    family(
      [pid("Edna"), pid("Reynaldo")],
      [
        family(
          [pid("Richard Ronquillo"), pid("Maria Elena Salinas")],
          [
            family([pid("Orlando Nathaniel Salinas")]),
            family([
              pid("Resurreccion Nathalie Salinas", { focal: true }),
            ]),
          ],
          "5.1 — Your parents",
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
