import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <main className="mt-[5rem] px-[1rem] xl:px-[8rem] lg:px-[8rem]">
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
