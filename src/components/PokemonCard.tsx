import { Data } from "@/pages/api/sample-pokemon";
import React from "react";

interface PokemonCardProps {
  data: Data;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-2 max-w-[20rem] px-4 py-2 border border-slate-400 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-slate-500">
              Pokemon
            </h3>
            {data.type.map((type) => (
              <p>{type}</p>
            ))}
          </div>
          <img
            src={data.image}
            alt={data.title}
            width={100}
            height={100}
            className="w-[100px] h-[100px]" // Add Tailwind classes for responsive styling
          />
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
