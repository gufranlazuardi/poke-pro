import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PokemonCard from "@/components/PokemonCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPokemon, getPokemonDetail } from "@/api";
import { PokemonDetail, ResponseResults } from "@/api/types";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);

  async function fetchPokemonList() {
    try {
      const response = await getPokemon();
      const results = response.results;

      const detailsPromises = results.map(
        (pokemon: ResponseResults) => getPokemonDetail(pokemon.url)
      );

      const pokemonDetails = await Promise.all(detailsPromises);
      setPokemonList(pokemonDetails);
    } catch (error) {
      console.error("Failed to fetch Pokémon data:", error);
    }
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col ">
      <div className="flex gap-2 mt-[2rem] items-start">
        <Dialog>
          <DialogTrigger className="flex py-1.5 px-4 items-center border gap-4 rounded-lg border-slate-400 bg-gray-300 cursor-pointer">
            <Search color="gray" size={15} />
            <p className="text-sm text-gray-600">Search pokemon</p>
          </DialogTrigger>
          <DialogContent className="absolute top-40">
            <DialogHeader>
              <DialogTitle className="mr-4">
                <Input placeholder="Search pokemon..." />
              </DialogTitle>
              <DialogDescription className="pt-2">
                Wanna help to find your favorite pokemon?
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div>
          <Select>
            <SelectTrigger className="bg-gray-300 rounded-lg border border-slate-400">
              <div className="flex items-center gap-4 cursor-pointer">
                <Filter color="gray" size={15} />
                <p className="text-sm text-gray-600">
                  Filter by type
                </p>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger className="bg-gray-300 rounded-lg border border-slate-400">
              <div className="flex items-center gap-4 cursor-pointer">
                <Filter color="gray" size={15} />
                <p className="text-sm text-gray-600">Sort by</p>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Desc</SelectItem>
              <SelectItem value="dark">Asc</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 flex-wrap items-center justify-center overflow-auto">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;