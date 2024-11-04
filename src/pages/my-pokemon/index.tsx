import DontHavePokemon from "@/components/DontHavePokemon";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pokemonToDelete, setPokemonToDelete] = useState<
    string | null
  >(null);

  const handleDelete = () => {
    if (pokemonToDelete) {
      const filter = myPokemons.filter(
        (pokemon) => pokemon.nickname !== pokemonToDelete
      );
      setMyPokemons(filter);
      setIsDialogOpen(false);
      localStorage.setItem("myPokemon", JSON.stringify(filter));
      setPokemonToDelete(null);
    }
  };

  const openDialogBeforeDelete = (nickname: string) => {
    setPokemonToDelete(nickname);
    setIsDialogOpen(true);
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
          className="w-60 flex flex-col p-4 border rounded-lg shadow-md justify-between"
        >
          <div className="flex flex-col gap-4">
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
          </div>
          <Button
            className="w-full mt-4"
            variant={"destructive"}
            onClick={() => openDialogBeforeDelete(pokemon.nickname!)}
          >
            Delete
          </Button>
        </div>
      ))}

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogTitle>Are you sure want to delete?</DialogTitle>
            <DialogDescription>
              This will permanently delete your pokemon and remove
              your data from our servers.
            </DialogDescription>
            <div className="flex gap-2">
              <Button variant={"destructive"} onClick={handleDelete}>
                Yes
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                No
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MyPokemon;
