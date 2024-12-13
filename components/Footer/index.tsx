import { UI } from "@/uiComponents";
import { HiArrowDownTray } from "react-icons/hi2";
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
      <div className="flex gap-4 max-sm:gap-2 justify-center items-center">
        {FOOTER_BUTTONS_DATA.map((button) => (
          <UI.Button
            key={button.id}
            icon={<button.icon className="size-7" />}
            className="border-none"
            onClick={() => {
              window.open(button.link, "_blank");
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Footer;
