"use client";
import { UI } from "@/uiComponents";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquarePhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="h-16 sticky top-0 z-50 p-2 flex justify-between items-center border-b-[1px] border-secondary/20 bg-primary text-white">
      <h1 className="text-xl font-bold">SC</h1>
      <section className="flex justify-center items-center gap-2">
        <UI.Button
          buttonType="secondary"
          icon={<FaLinkedin className="size-8" />}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/sagar-chakkarkota-b6334b159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            );
          }}
        />
        <UI.Button
          buttonType="secondary"
          icon={<FaSquareGithub className="size-8" />}
          onClick={() => {
            window.open(
              "https://github.com/Sagarchakkarkota?tab=repositories",
              "_blank"
            );
          }}
        />
        <UI.Button
          buttonType="secondary"
          icon={<FaSquarePhone className="size-8" />}
          onClick={() => {
            window.location.href = "tel:+917769037336";
          }}
        />
      </section>
    </nav>
  );
};

export default Navbar;
