import React from "react";
import { PokemonDetail } from "@/api/types";
import Link from "next/link";

interface PokemonCardProps {
  data: PokemonDetail;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { data } = props;

  const formattedId = String(data.id).padStart(3, "0");

  if (!data) return null;

  return (
    <Link href={`/pokemon/${data.id}`}>
      <div className="flex flex-col gap-2 max-w-[20rem] min-h-[8rem] px-4 py-2 border border-slate-400 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-slate-500">
              {data.name}
            </h3>
            {data.types.map((type, index) => (
              <ul key={index}>{type.type.name}</ul>
            ))}
          </div>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`}
            alt={data.name}
            width={100}
            height={100}
            className="w-[80px] h-[80px]"
          />
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
