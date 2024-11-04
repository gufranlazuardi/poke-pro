import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("asc");

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

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      filterType === "all" ||
      (filterType
        ? pokemon.types.some((type) => type.type.name === filterType)
        : true);
    return matchesSearch && matchesType;
  });

  const sortedPokemonList = filteredPokemonList.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex gap-2 mt-[2rem] items-start">
        <Dialog>
          <DialogTrigger className="flex py-1.5 px-2 xl:px-4 items-center border gap-4 rounded-lg border-slate-400 bg-gray-300 cursor-pointer">
            <Search color="gray" size={15} />
            <p className="text-sm text-gray-600">Search pokemon</p>
          </DialogTrigger>
          <DialogContent className="absolute top-40">
            <DialogHeader>
              <DialogTitle className="mr-4">
                <Input
                  placeholder="Search pokemon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </DialogTitle>
              <DialogDescription className="pt-2">
                Wanna help to find your favorite pokemon?
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="flex gap-2">
          <div>
            <Select onValueChange={(value) => setFilterType(value)}>
              <SelectTrigger className="bg-gray-300 rounded-lg border border-slate-400">
                <SelectValue
                  placeholder="Filter by type"
                  className="placeholder:text-pink-500"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="grass">Grass</SelectItem>
                <SelectItem value="grass">Flying</SelectItem>
                <SelectItem value="grass">Bug</SelectItem>
                <SelectItem value="grass">Normal</SelectItem>
                <SelectItem value="grass">Poison</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select onValueChange={(value) => setSortOrder(value)}>
              <SelectTrigger className="bg-gray-300 rounded-lg border border-slate-400">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 flex-wrap items-center justify-center overflow-auto">
        {sortedPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
