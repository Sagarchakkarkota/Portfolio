import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      <div>{children}</div>
    </section>
  );
};

export default layout;
