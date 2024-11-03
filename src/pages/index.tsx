import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full flex-col items-center pt-[1rem] gap-[1.5rem] ${inter.className}`}
    >
      <Image
        src="/pokemon-logo.webp"
        width={600}
        height={600}
        alt="pokemon-logo"
        className="w-[20rem] xl:w-[30rem]"
      />
      <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-violet-400">
        Catch Your Beautiful Pokemon ✨
      </h1>
      <div className="flex flex-col items-center text-gray-600 text-center">
        <p className="text-lg md:text-xl lg:text-xl xl:text-xl dark:text-slate-200">
          Find the unique pokemon with great experience with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-violet-400">
            Poke Pro
          </span>{" "}
          and share to your friends!
        </p>
        <p className="text-lg md:text-xl lg:text-xl xl:text-xl text-center dark:text-slate-200">
          Dont take too long! you got lose your opportunity
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/pokemon">
          <Button className="rounded-2xl bg-pink-500 px-[3rem]">
            Let's try it
          </Button>
        </Link>
      </div>
    </main>
  );
}
