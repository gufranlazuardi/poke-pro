import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const DontHavePokemon = () => {
  return (
    <>
      <div className="flex flex-col gap-[1.5rem] justify-center items-center pt-[10rem]">
        <h1 className="text-2xl text-center">
          You didn't catch any pokemon, please catch first
        </h1>
        <Link href="/pokemon">
          <Button className="w-fit">Catch</Button>
        </Link>
      </div>
    </>
  );
};

export default DontHavePokemon;
