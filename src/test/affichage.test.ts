import { afficherLivres } from "../affichage";
import { Livre } from "../livre";

// Mock console methods
let consoleLogSpy: jest.SpyInstance;
let consoleTableSpy: jest.SpyInstance;

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  consoleTableSpy = jest.spyOn(console, "table").mockImplementation(() => {});
});

afterEach(() => {
  consoleLogSpy.mockRestore();
  consoleTableSpy.mockRestore();
});

describe("afficherLivres", () => {
  it("affiche 'Aucun livre trouvé.' si le tableau est vide", () => {
    afficherLivres([]);
    expect(consoleLogSpy).toHaveBeenCalledWith("Aucun livre trouvé.");
    expect(consoleTableSpy).not.toHaveBeenCalled();
  });

  it("affiche la table des livres si le tableau contient des livres", () => {
    const livres: Livre[] = [
      { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
      { titre: "L'Étranger", auteur: "Albert Camus", disponible: false },
    ];
    afficherLivres(livres);
    expect(consoleTableSpy).toHaveBeenCalledWith(livres);
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Aucun livre trouvé.");
  });

  it("affiche la table même si un seul livre est présent", () => {
    const livres: Livre[] = [{ titre: "1984", auteur: "George Orwell", disponible: true }];
    afficherLivres(livres);
    expect(consoleTableSpy).toHaveBeenCalledWith(livres);
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Aucun livre trouvé.");
  });
});
