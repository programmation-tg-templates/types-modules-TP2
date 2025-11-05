import { ajouterLivre, rechercherParTitre, rechercherParAuteur, livresDisponibles } from "../gestion";
import { Livre } from "../livre";

describe("ajouterLivre", () => {
  it("ajoute un livre à la bibliothèque", () => {
    const bibliotheque: Livre[] = [];
    const livre: Livre = { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true };
    ajouterLivre(bibliotheque, livre);
    expect(bibliotheque).toContain(livre);
  });
});

describe("rechercherParTitre", () => {
  const bibliotheque: Livre[] = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "1984", auteur: "George Orwell", disponible: false },
  ];

  it("trouve un livre par son titre exact", () => {
    expect(rechercherParTitre(bibliotheque, "Le Petit Prince")).toEqual(bibliotheque[0]);
  });

  it("trouve un livre par son titre en ignorant la casse", () => {
    expect(rechercherParTitre(bibliotheque, "le petit prince")).toEqual(bibliotheque[0]);
  });

  it("retourne undefined si le titre n'existe pas", () => {
    expect(rechercherParTitre(bibliotheque, "Inconnu")).toBeUndefined();
  });
});

describe("rechercherParAuteur", () => {
  const bibliotheque: Livre[] = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "Vol de nuit", auteur: "Antoine de Saint-Exupéry", disponible: false },
    { titre: "1984", auteur: "George Orwell", disponible: true },
  ];

  it("trouve tous les livres d'un auteur exact", () => {
    const result = rechercherParAuteur(bibliotheque, "Antoine de Saint-Exupéry");
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
      { titre: "Vol de nuit", auteur: "Antoine de Saint-Exupéry", disponible: false },
    ]);
  });

  it("trouve tous les livres d'un auteur en ignorant la casse", () => {
    const result = rechercherParAuteur(bibliotheque, "antoine de saint-exupéry");
    expect(result.length).toBe(2);
  });

  it("retourne un tableau vide si aucun livre de l'auteur", () => {
    expect(rechercherParAuteur(bibliotheque, "Auteur Inconnu")).toEqual([]);
  });
});

describe("livresDisponibles", () => {
  const bibliotheque: Livre[] = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "Vol de nuit", auteur: "Antoine de Saint-Exupéry", disponible: false },
    { titre: "1984", auteur: "George Orwell", disponible: true },
  ];

  it("retourne tous les livres disponibles", () => {
    const result = livresDisponibles(bibliotheque);
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
      { titre: "1984", auteur: "George Orwell", disponible: true },
    ]);
  });

  it("retourne un tableau vide si aucun livre n'est disponible", () => {
    const biblio: Livre[] = [{ titre: "A", auteur: "B", disponible: false }];
    expect(livresDisponibles(biblio)).toEqual([]);
  });

  it("retourne un tableau vide pour une bibliothèque vide", () => {
    expect(livresDisponibles([])).toEqual([]);
  });
});

// Corner cases
describe("corner cases", () => {
  it("rechercherParTitre sur une bibliothèque vide", () => {
    expect(rechercherParTitre([], "Titre")).toBeUndefined();
  });

  it("rechercherParAuteur sur une bibliothèque vide", () => {
    expect(rechercherParAuteur([], "Auteur")).toEqual([]);
  });

  it("livresDisponibles avec tous les livres non disponibles", () => {
    const bibliotheque: Livre[] = [
      { titre: "A", auteur: "B", disponible: false },
      { titre: "C", auteur: "D", disponible: false },
    ];
    expect(livresDisponibles(bibliotheque)).toEqual([]);
  });

  it("rechercherParTitre avec titre vide", () => {
    const bibliotheque: Livre[] = [{ titre: "", auteur: "Auteur", disponible: true }];
    expect(rechercherParTitre(bibliotheque, "")).toEqual(bibliotheque[0]);
  });

  it("rechercherParAuteur avec auteur vide", () => {
    const bibliotheque: Livre[] = [{ titre: "Titre", auteur: "", disponible: true }];
    expect(rechercherParAuteur(bibliotheque, "")).toEqual([bibliotheque[0]]);
  });
});
