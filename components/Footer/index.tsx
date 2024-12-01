import { UI } from "@/uiComponents";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquarePhone } from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";
import { SiGmail } from "react-icons/si";
import { FOOTER_BUTTONS_DATA } from "./footer.constant";

const Footer = () => {
  return (
    <section className="py-6 flex flex-col justify-center items-center gap-2">
      <div className="flex items-end gap-2">
        <p>Download Resume</p>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf"; // URL of the PDF
            link.download = "resume.pdf"; // Suggested download file name
            link.click();
          }}
        >
          <HiArrowDownTray className="size-7" />
        </button>
      </div>
      <div className="">
        {FOOTER_BUTTONS_DATA.map((button) => (
          <UI.Button
            key={button.id}
            buttonType="secondary"
            icon={<button.icon className="size-8 max-sm:size-7" />}
            onClick={() => {
              window.open(button.link), "_blank";
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Footer;
