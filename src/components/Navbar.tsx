import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between px-[2rem] pt-[0.5rem] pb-2 z-50 fixed top-0 bg-white border-b border-b-gray-300">
        <div className="flex gap-[2rem] items-center">
          <Link href="/">
            <Image
              src="/pokemon-logo.webp"
              width={600}
              height={600}
              alt="pokemon-logo"
              className="w-[6rem]"
            />
          </Link>
        </div>
        <div className="flex gap-3 items-center text-gray-600">
          <Link href="/my-pokemon">
            <Button className="bg-gradient-to-br from-sky-300 to-violet-400">
              <p className="text-sm">My Pokemon</p>
              <ShoppingBag size={15} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
