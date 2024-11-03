import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center pt-[4.5rem] gap-[1.5rem] ${inter.className}`}
    >
      <Image
        src="/pokemon-logo.webp"
        width={600}
        height={600}
        alt="pokemon-logo"
        className="w-[30rem]"
      />
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-violet-400">
        Catch Your Beautiful Pokemon ✨
      </h1>
      <div className="flex flex-col items-center text-gray-600">
        <p className="text-xl">
          Find the unique pokemon with great experience with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-violet-400">
            Poke Pro
          </span>{" "}
          and share to your friends!
        </p>
        <p className="text-xl">
          Dont take too long! you got lose your opportunity
        </p>
      </div>
      <Link href="/pokemon">
        <Button className="rounded-2xl  bg-gradient-to-br from-sky-300 to-violet-400 px-[3rem]">
          Lets try it
        </Button>
      </Link>
    </main>
  );
}
