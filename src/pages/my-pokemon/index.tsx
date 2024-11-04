import DontHavePokemon from "@/components/DontHavePokemon";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface PokemonData {
  nickname?: string;
  data_pokemon: {
    title: string;
    image: string;
    type: string[];
  };
}

const MyPokemon = () => {
  const [myPokemons, setMyPokemons] = useState<PokemonData[]>([]);

  const handleDelete = (nickname: string) => {
    const filter = myPokemons.filter((e: any) => {
      return e.nickname !== nickname;
    });
    setMyPokemons(filter);

    localStorage.setItem("myPokemon", JSON.stringify(filter));
  };

  useEffect(() => {
    const data = localStorage.getItem("myPokemon");
    if (data) {
      setMyPokemons(JSON.parse(data));
    }
  }, []);

  if (myPokemons.length === 0) {
    return <DontHavePokemon />;
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {myPokemons.map((pokemon, index) => (
        <div
          key={index}
          className="w-60 p-4 border rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-center">
            {pokemon.nickname}
          </h3>
          <img
            src={pokemon.data_pokemon.image}
            alt={pokemon.data_pokemon.title}
            width={150}
            height={150}
            className="mx-auto"
          />
          <div className="text-center mt-2">
            <p>Type:</p>
            <ul>
              {pokemon.data_pokemon.type.map((type, i) => (
                <li key={i}>{type}</li>
              ))}
            </ul>
          </div>
          <Button
            className="w-full mt-4"
            variant={"destructive"}
            onClick={() => handleDelete(pokemon.nickname!)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyPokemon;
