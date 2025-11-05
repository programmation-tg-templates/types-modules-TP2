import { Livre } from "../livre";

describe("Type Livre", () => {
  it("doit permettre la création d'un objet Livre valide", () => {
    const livre: Livre = {
      titre: "Le Petit Prince",
      auteur: "Antoine de Saint-Exupéry",
      disponible: true,
    };
    expect(livre.titre).toBe("Le Petit Prince");
    expect(livre.auteur).toBe("Antoine de Saint-Exupéry");
    expect(livre.disponible).toBe(true);
  });

  it("doit permettre que disponible soit faux", () => {
    const livre: Livre = {
      titre: "1984",
      auteur: "George Orwell",
      disponible: false,
    };
    expect(livre.disponible).toBe(false);
  });
});
