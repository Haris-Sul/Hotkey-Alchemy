import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks: string[] = ["Home", "Guide", "Remap", "FAQ"];
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 px-6 py-3 flex font-orbitron transition duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md opacity-90" : "bg-transparent"
      }`}>
      <h1 className="text-3xl font-semibold">Hotkey Alchemy</h1>
      <nav className="ml-auto">
        <ul className="flex space-x-4 font-medium">
          {navLinks.map((linkText, index) => (
            <li key={index} className="py-2 px-5 text-2xl hover:text-secondary2">
              <Link
                to={linkText === "Home" ? "/" : `/${linkText.toLowerCase()}`}
                className="hover:text-background hover:font-semibold">
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
