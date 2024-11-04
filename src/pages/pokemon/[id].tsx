import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { pokemonData } from "../api/sample-pokemon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const getDataFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("myPokemon");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { toast } = useToast();
  const [nickname, setNickName] = useState<string>();
  const [pokemons, setPokemons] = useState(getDataFromLocalStorage());
  const [catchPoke, setCatchPoke] = useState(false);

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(pokemons));
  }, [pokemons]);

  const pokemon = pokemonData.find((p) => p.id === id);

  const handleCatchPokemon = () => {
    setCatchPoke(true);
  };
  const handleAddPokemon = () => {
    const myPokemons = {
      nickname,
      data_pokemon: pokemon,
    };
    setPokemons([...pokemons, myPokemons]);
    setNickName("");
    setCatchPoke(false);
    toast({
      title: "Great Job!!!",
      description: "Pokemon added to your My Pokemon list.",
      variant: "default",
    });
  };

  if (!pokemon) {
    return <p>Pokemon not found</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-4xl font-bold">{pokemon.title}</h2>
        <img
          src={pokemon.image}
          alt={pokemon.title}
          width={200}
          height={200}
        />
        <div className="mt-4 gap-2 flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Type:</h3>
          <ul>
            {pokemon.type.map((type, index) => (
              <li key={index} className="text-md">
                {type}
              </li>
            ))}
          </ul>
          <Button onClick={handleCatchPokemon}>Catch</Button>
        </div>
      </div>
      {catchPoke && (
        <div className="w-full flex justify-center absolute top-32">
          <div className="w-[30rem] h-[30rem] border flex flex-col gap-8 justify-center items-center bg-white rounded-xl">
            <h1 className="text-4xl font-bold">Congratulations!</h1>
            <div className="flex flex-col items-center">
              <p className="text-xl">You've caught</p>
              <p className="font-bold text-2xl">{pokemon.title}</p>
            </div>
            <div className="flex flex-col items-center w-full px-16">
              <p>Nickname</p>
              <form className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  className="border w-full h-8 justify-center text-center rounded-md bg-white"
                  onChange={(e) => setNickName(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={handleAddPokemon}
                  disabled={!nickname}
                >
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
