import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-[2rem] pt-[0.5rem] pb-2 z-50">
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
          <div className="flex border rounded-md px-3 py-2 border-gray-600 items-center cursor-pointer">
            <Sun size={15} />
          </div>
          <div className="w-full flex border rounded-md px-3 py-1.5 border-gray-600 items-center gap-2 cursor-pointer">
            <p className="text-sm">My Pokemon</p>
            <ShoppingBag size={15} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
