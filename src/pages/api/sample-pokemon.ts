// samplePokemonData.ts

export interface Data {
  id: string;
  title: string;
  image: string;
  type: string[];
}

export const pokemonData: Data[] = [
  {
    id: "1",
    title: "Bulbasaur",
    image: "https://pokemon-img.pages.dev/600x600/1.webp",
    type: ["Grass", "Poison"],
  },
  {
    id: "2",
    title: "Ivysaur",
    image: "https://pokemon-img.pages.dev/600x600/2.webp",
    type: ["Grass", "Poison"],
  },
  {
    id: "3",
    title: "Venusaur",
    image: "https://pokemon-img.pages.dev/600x600/3.webp",
    type: ["Grass", "Poison"],
  },
  {
    id: "4",
    title: "Charmander",
    image: "https://pokemon-img.pages.dev/600x600/4.webp",
    type: ["Fire"],
  },
  {
    id: "5",
    title: "Charmeleon",
    image: "https://pokemon-img.pages.dev/600x600/5.webp",
    type: ["Fire"],
  },
  {
    id: "6",
    title: "Charizard",
    image: "https://pokemon-img.pages.dev/600x600/6.webp",
    type: ["Fire", "Flying"],
  },
  {
    id: "7",
    title: "Squirtle",
    image: "https://pokemon-img.pages.dev/600x600/7.webp",
    type: ["Water"],
  },
  {
    id: "8",
    title: "Wartortle",
    image: "https://pokemon-img.pages.dev/600x600/8.webp",
    type: ["Water"],
  },
  {
    id: "9",
    title: "Blastoise",
    image: "https://pokemon-img.pages.dev/600x600/9.webp",
    type: ["Water"],
  },
];
