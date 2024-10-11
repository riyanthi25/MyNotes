import React from "react";

const currentYear = new Date().getFullYear();
const socials = [
  {
    to: "https://www.instagram.com/riyanthi_ng",
    label: "Instagram",
  },
  {
    to: "https://wa.me/085737005452",
    label: "WhatsApp",
  },
  {
    to: "https://linkedin.com/in/putu-yoeliessya-riyanthi-b8264a280",
    label: "LinkedIn",
  },
  {
    to: "https://github.com/riyanthi25",
    label: "Github",
  },
];

function Footer() {
  return (
    <div className="bg-[#FFF0D1] p-4">
      <footer className="rounded-lg shadow m-4 bg-[#3B3030]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#FFF0D1] sm:text-center">
            © {currentYear}{" "}
            <a href="/" className="hover:underline">
              Riyanthi
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6 text-[#FFF0D1]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
