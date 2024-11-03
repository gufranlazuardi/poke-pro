import { useRouter } from "next/router";
import React from "react";
import { pokemonData } from "../api/sample-pokemon";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the selected Pokémon based on the ID
  const pokemon = pokemonData.find((p) => p.id === id);

  if (!pokemon) {
    return <p>Pokemon not found</p>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-4xl font-bold">{pokemon.title}</h2>
      <img
        src={pokemon.image}
        alt={pokemon.title}
        width={300}
        height={300}
      />
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Type:</h3>
        <ul>
          {pokemon.type.map((type, index) => (
            <li key={index} className="text-lg">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
