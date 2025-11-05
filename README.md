# Types et modules - TP2 - Gestion d'une bibliothèque

## Consignes

Vous allez créer un programme pour gérer une bibliothèque.

L’application devra permettre de :

- Enregistrer des livres
- Rechercher un livre par auteur
- Afficher la liste complète des livres
- Filtrer les livres disponibles (non empruntés)

## Arborescence de fichiers

```
📁 src/
├── 📄 affichage.ts
├── 📄 gestion.ts
├── 📄 main.ts
└── 📄 type.ts
```

## Fonctions

### Fichier `livre.ts`

- Définit le type `Livre`

### Fichier `gestion.ts`

- `ajouterLivre(bibliotheque: Livre[], livre: Livre): void`
  Ajoute le livre à la fin de la liste des livres de la bibliothèque.
- `rechercherParTitre(bibliotheque: Livre[], titre: string): Livre | undefined`
  Retourne le premier livre dont le nom est égal au titre donné en paramètre.
  Cette fonction ne tient pas compte des différences entre majuscules et minuscules.
- `rechercherParAuteur(bibliotheque: Livre[], auteur: string): Livre[]`
  Retourne l'ensemble des livres dont l'auteur est égal à l'auteur donné en paramètre.
  Cette fonction ne tient pas compte des différences entre majuscules et minuscules.
- `livresDisponibles(bibliotheque: Livre[]): Livre[]`
  Retourne l'ensemble des livres disponsibles.

### Fichier `affichage.ts`

- `afficherLivres(livres: Livre[]): void`
  Cette fonction affiche les livres contenus dans le tableau à l'aide de la commande `console.table(...)` ou le message `Aucun livre trouvé.` si le tableau est vide.

## Programme principal

Le fichier `main.ts` utilise les fonctions définies dans les autres fichiers pour produire l'affichage suivant :

```
Liste complète des livres :
┌─────────┬───────────────────┬────────────────────────────┬────────────┐
│ (index) │ titre             │ auteur                     │ disponible │
├─────────┼───────────────────┼────────────────────────────┼────────────┤
│ 0       │ '1984'            │ 'George Orwell'            │ true       │
│ 1       │ 'Le Petit Prince' │ 'Antoine de Saint-Exupéry' │ false      │
│ 2       │ "L'Étranger"      │ 'Albert Camus'             │ true       │
│ 3       │ 'Animal Farm'     │ 'George Orwell'            │ true       │
└─────────┴───────────────────┴────────────────────────────┴────────────┘

Recherche par auteur : George Orwell
┌─────────┬───────────────┬─────────────────┬────────────┐
│ (index) │ titre         │ auteur          │ disponible │
├─────────┼───────────────┼─────────────────┼────────────┤
│ 0       │ '1984'        │ 'George Orwell' │ true       │
│ 1       │ 'Animal Farm' │ 'George Orwell' │ true       │
└─────────┴───────────────┴─────────────────┴────────────┘

Livres disponibles :
┌─────────┬───────────────┬─────────────────┬────────────┐
│ (index) │ titre         │ auteur          │ disponible │
├─────────┼───────────────┼─────────────────┼────────────┤
│ 0       │ '1984'        │ 'George Orwell' │ true       │
│ 1       │ "L'Étranger"  │ 'Albert Camus'  │ true       │
│ 2       │ 'Animal Farm' │ 'George Orwell' │ true       │
└─────────┴───────────────┴─────────────────┴────────────┘
```

## Astuces

- Pour réussir les tests unitaires, n'utilisez que des imports nommés.
