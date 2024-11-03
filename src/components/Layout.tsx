import React from "react";
import Navbar from "@/components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <main className="mt-[5rem] px-[1rem] xl:px-[8rem] lg:px-[8rem]">
        {children}
      </main>
    </>
  );
};

export default Layout;
