import React from "react";
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
import { pokemonData } from "../api/sample-pokemon";
import Link from "next/link";

const PokemonPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-[1rem] xl:px-[8rem] lg:px-[8rem]">
      <div className="flex gap-2 mt-[2rem] items-start">
        <Dialog>
          <DialogTrigger>
            <div className="flex py-2 px-4 items-center border gap-4 rounded-lg border-slate-400 bg-gray-300 cursor-pointer">
              <Search color="gray" size={15} />
              <p className="text-sm text-gray-600">Search pokemon</p>
            </div>
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
        <div className="flex bg-gray-300 rounded-lg border border-slate-400 ">
          <Select>
            <SelectTrigger>
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
      </div>

      {/* mapping pokemon card */}

      <div className="mt-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 flex-wrap items-center justify-center overflow-auto">
        {pokemonData.map((pokemon) => (
          <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard data={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
