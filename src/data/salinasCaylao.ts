import { family, pid } from "./helpers";
import type { FamilyNode } from "../types/family";

export const salinasCaylaoRoot: FamilyNode = family(
  [
    pid("Maria Caylao", { deceased: true }),
    pid("Mario Salinas", { deceased: true }),
  ],
  [
    family(
      [
        pid("Orlando Salinas", { deceased: true }),
        pid("Resurreccion Salinas", { deceased: true }),
      ],
      undefined,
      "1. Orlando & Resurreccion",
    ),
    family(
      [pid("Leonisa Salinas"), pid("Gervacio Tolentino")],
      undefined,
      "2. Leonisa & Gervacio",
    ),
    family(
      [pid("Lourdes Maglalang"), pid("Candido Maglalang")],
      [
        family(
          [pid("Rowena"), pid("Arnel Prudente")],
          [
            family([pid("Catelyn Prudente")]),
            family([pid("Kevin John Prudente")]),
            family([pid("Maria Catherine Prudente")]),
            family([pid("Claire Anne Prudente")]),
            family([pid("Maria Cassandra Prudente")]),
          ],
        ),
        family(
          [pid("Virgilio Maglalang"), pid("Connie Dela Cruz")],
          [family([pid("Vince Carlo Maglalang")])],
        ),
        family(
          [pid("Irene Maglalang"), pid("Paul Noelito Acosta")],
          [
            family([pid("Immanuel Paulo Acosta")]),
            family([pid("Izac Patrick Acosta")]),
          ],
        ),
        family(
          [pid("Lilibeth Maglalang"), pid("Richard Tia")],
          [
            family([pid("Ralph Lester Tia")]),
            family([pid("Ranzel Leigh Tia")]),
            family([pid("Rayver Lance Tia")]),
          ],
        ),
      ],
      "3. Lourdes & Candido",
    ),
    family(
      [pid("Homer Salinas"), pid("Rosie Salinas")],
      [
        family([pid("Rowell Salinas")]),
        family([pid("Analiza Salinas")]),
        family([pid("Vincent Salinas")]),
        family([pid("Homer Salinas")]),
        family([pid("April Salinas")]),
      ],
      "4. Homer & Rosie",
    ),
    family(
      [pid("Zosimo Salinas"), pid("Linalin Salinas")],
      [
        family(
          [pid("Genesis Ashley Salinas"), pid("Maricar Salinas")],
          undefined,
        ),
        family([pid("Stephen Ivan Salinas", { deceased: true })]),
        family(
          [pid("Earl John Salinas"), pid("Maureen Salinas")],
          [family([pid("Selah Maurice Salinas")])],
        ),
        family(
          [pid("Stefany Ann Salinas"), pid("John Anthony Ortiz")],
          undefined,
        ),
        family([pid("Elson Salinas")]),
        family([pid("Ayeza Salinas")]),
      ],
      "5. Zosimo & Linalin",
    ),
  ],
);
