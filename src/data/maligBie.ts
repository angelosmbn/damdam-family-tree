import { family, pid } from "./helpers";
import type { FamilyNode } from "../types/family";

const salvador = pid("Salvador Malig Sr.", { deceased: true });
const elena = pid("Elena Bie", { deceased: true });

const clarita = pid("Clarita B. Malig", { note: "panaganay" });
const benedictoSr = pid("Benedicto Gonzales Sr.", { deceased: true });

export const maligBieRoot: FamilyNode = family(
  [salvador, elena],
  [
    family(
      [clarita, benedictoSr],
      [
        family([pid("Clemen Gonzales"), pid("Martin Gehlhar")], [
          family([pid("Martin", { deceased: true })]),
        ]),
        family(
          [pid("Benedicto Jr. Gonzales"), pid("Aracelie Gonzales", { deceased: true })],
          [
            family([pid("Bea Gonzales")]),
            family([pid("Ej Gonzales")]),
            family([pid("Jag Gonzales")]),
          ],
        ),
        family(
          [pid("Jose Isagani Gonzales"), pid("Adelfa Gonzales")],
          [
            family(
              [pid("Jodel Gonzales"), pid("Marjorie Del Rosario")],
              [
                family([pid("Aisea Cade Gonzales")]),
                family([pid("Zev Fortino Gonzales")]),
                family([pid("Xan Yashneil Gonzales")]),
              ],
            ),
          ],
        ),
        family([pid("Angelita Gonzales")]),
        family([pid("Dalisay Ocampo")], [
          family([pid("Claisa Rica Ocampo")]),
          family([pid("Clemence Enree Ocampo")]),
          family([pid("Christian Ocampo")]),
          family([pid("Cynthia Iris Ocampo")]),
          family([pid("Cassandra Marie Luna")]),
        ]),
        family(
          [pid("Jesus Gonzales"), pid("Isabella Gonzales")],
          [
            family([pid("Jayson Gonzales")]),
            family([pid("Jesus Jr. Gonzales")]),
            family([pid("Julius Gonzales")]),
            family([pid("Princess Gonzales")]),
            family([pid("John Daniel Gonzales")]),
          ],
        ),
        family([pid("Bayani Gonzales")], [family([pid("Trisha Gonzales")])]),
        family(
          [pid("Angel Gonzales"), pid("Edna Gonzales")],
          [
            family([pid("Alejandro Gonzales")]),
            family([pid("Ava Gonzales")]),
          ],
        ),
      ],
      "1. Clarita & Benedicto",
    ),
    family(
      [pid("Benjamin Bie Malig"), pid("Luz Malig", { deceased: true })],
      [
        family(
          [pid("Jig Malig"), pid("Lai Malig")],
          [family([pid("Cedrick Malig")]), family([pid("Carlo Malig")])],
        ),
        family([pid("Bless Malig")]),
        family([pid("Caloy Malig")]),
        family([pid("Babeth Malig")]),
      ],
      "2. Benjamin & Luz",
    ),
    family(
      [pid("Rolando Malig Sr.", { deceased: true }), pid("Rosario Magat")],
      [
        family([pid("Rowena Duenas")], [
          family([pid("Bernard Dungca")]),
          family([pid("Claudine Dungca")]),
          family([pid("Kevin Dungca")]),
          family([pid("Shella Dungca")]),
          family([pid("Shiella Dungca")]),
        ]),
        family([pid("Ronald Malig", { deceased: true })], [
          family([pid("Hajie Malig")]),
        ]),
        family([pid("Rolando Malig Jr.")]),
        family(
          [pid("Ronniel Malig Sr."), pid("Luzviminda Malig")],
          [
            family([pid("Rovir Malig")]),
            family([pid("Ronniel Malig Jr.")]),
            family([pid("Nicole Malig")]),
          ],
        ),
        family(
          [pid("Rona Marie Luanzon"), pid("Arnel Luanzon")],
          [
            family([pid("Mariel Luanzon")]),
            family([pid("Kate Luanzon")]),
            family([pid("Aj Luanzon")]),
          ],
        ),
      ],
      "3. Rolando & Rosario",
    ),
    family(
      [pid("Erlindo Malig", { deceased: true }), pid("Barbara Ferrer")],
      [
        family([pid("Angelica Kate Malig")], [family([pid("Brei Malig")])]),
      ],
      "4. Erlindo & Barbara",
    ),
    family(
      [pid("Wilfredo Malig", { deceased: true }), pid("Antonia Bungay")],
      [
        family(
          [pid("Elenita Isip"), pid("Romeo Isip")],
          [family([pid("Regina Isip")])],
        ),
        family(
          [pid("Marnie Malig", { deceased: true }), pid("Josie Magat")],
          [
            family([pid("Sha Sha Malig")]),
            family([pid("Jeje Malig")]),
            family([pid("Jen Jen Malig")]),
            family([pid("Jamjam Malig")]),
          ],
        ),
        family(
          [pid("Marion Yambao"), pid("Jovy Yambao")],
          [
            family([pid("Janicka Yambao")]),
            family([pid("Jem Yambao")]),
            family([pid("Janis Yambao")]),
          ],
        ),
        family(
          [pid("Wilfredo Malig"), pid("Amy Changtenco")],
          [family([pid("Jom Malig")]), family([pid("Issay Malig")])],
        ),
        family(
          [pid("Annette Malig"), pid("Ricky Tulud")],
          [family([pid("Ricky Lois Tulud")]), family([pid("Dem Malig")])],
        ),
        family(
          [pid("Wilson Malig"), pid("Ana Alfonso")],
          [family([pid("Mady Malig")]), family([pid("Pao Malig")])],
        ),
      ],
      "5. Wilfredo & Antonia",
    ),
    family(
      [pid("Zenaida Malig"), pid("Rogelio Mallari")],
      [
        family(
          [pid("Marcelo Malony Mallari Sr."), pid("Evelyn Mallari")],
          [
            family([pid("Mavell Jeremy Mallari")]),
            family([pid("Rogemer Marny Mallari")]),
            family([pid("Marcelo Malony Mallari Jr.")]),
          ],
        ),
        family(
          [pid("Vivian Quilantang"), pid("Rodel Quilantang")],
          [
            family([pid("Elena Ann Quilantang")]),
            family([pid("Roddel Abraham Quilantang")]),
            family([pid("Madel Zeny Quilantang")]),
            family([pid("Daniela Jann Quilantang")]),
          ],
        ),
        family([pid("Meldrin Mallari")]),
        family([pid("Rogelio Jr. Mallari")], [
          family([pid("Rheigna Mallari")]),
          family([pid("Jann Harvey Mallari")]),
        ]),
        family(
          [pid("Miguelito"), pid("Michelle")],
          [
            family([pid("Andrei Mallari", { deceased: true })]),
            family([pid("Rogelio Mallari")]),
            family([pid("Miguel Mallari")]),
          ],
        ),
        family([pid("Mellanie Mallari")], [
          family([pid("Ceejay Bautista")]),
          family([pid("Aaron Aguila")]),
        ]),
      ],
      "6. Zenaida & Rogelio",
    ),
    family(
      [pid("Estelito Malig", { deceased: true })],
      [family([pid("Jonas Malig")]), family([pid("Jerome Malig")])],
      "7. Estelito",
    ),
    family([pid("Salvador Bie Malig Jr.")], undefined, "8. Salvador Jr."),
    family(
      [
        pid("Resurreccion Salinas", { deceased: true }),
        pid("Orlando Salinas", { deceased: true }),
      ],
      [
        family(
          [pid("Emmanuel Reginaldo"), pid("Airene Aniciete")],
          [
            family([pid("Kersthyn Angela Salinas")]),
            family([pid("Kyle Angelo Salinas")]),
          ],
        ),
        family(
          [pid("Glenn Salinas", { deceased: true }), pid("Aroma Yabut")],
          [
            family(
              [pid("Clark Kent Salinas"), pid("Rudianne Tolentino")],
              [family([pid("Omara Salinas")])],
            ),
            family([pid("Kean Chloe Salinas")]),
            family([pid("Carl Kobe Salinas")]),
          ],
        ),
        family([pid("Raymir Salinas")], [
          family([pid("Princess Angelica Mina"), pid("Diether Mina")]),
          family([pid("Patricia Ann Salinas")]),
          family([pid("Vlademir Salinas")]),
          family([pid("Merlie Joy Salinas")]),
          family([pid("Francheska Alei Salinas")]),
          family([pid("Mirasol Salinas")]),
          family([pid("Mirlo Salinas")]),
          family([pid("Mira Joy Salinas")]),
          family([pid("Merlie Joyce Salinas")]),
        ]),
        family(
          [pid("Maria Elena Salinas"), pid("Richard Ronquillo")],
          [
            family([pid("Orlando Nathaniel Salinas")]),
            family([
              pid("Resurreccion Nathalie Salinas", { focal: true }),
            ]),
          ],
          "9.4 — Her parents",
        ),
        family(
          [pid("Noreen Salinas"), pid("Jonathan Sarmiento")],
          [
            family([pid("Jonas Noriel Sarmiento")]),
            family([pid("Narnia Joreen Sarmiento")]),
            family([pid("Jon Nelg Sarmiento")]),
          ],
        ),
      ],
      "9. Resurreccion & Orlando",
    ),
  ],
);
