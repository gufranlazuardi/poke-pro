import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <Separator className="bg-slate-400" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
