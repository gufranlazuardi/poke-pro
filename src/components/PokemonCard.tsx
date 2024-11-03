import React, { useEffect, useState } from "react";
import { PokemonDetail } from "@/api/types";
import Link from "next/link";

interface PokemonCardProps {
  data: PokemonDetail;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { data } = props;

  if (!data) return null;

  return (
    <Link href={`/pokemon/${data.id}`}>
      <div className="flex flex-col gap-2 max-w-[20rem] px-4 py-2 border border-slate-400 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-slate-500">
              {data.name}
            </h3>
            {data.types.map((type, index) => (
              <p key={index}>{type.type.name}</p>
            ))}
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={data.name}
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
