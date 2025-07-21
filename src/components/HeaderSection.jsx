import { seoConfig } from "../constants/seoConfig.js";

const Header = () => {
  return (
    <header className="border-b-[1.5px] border-border">
      <nav className="flex justify-center py-5 md:py-8 lg:justify-between lg:px-16 lg:py-8">
        <a
          className="text-2xl font-bold font-display flex items-center md:text-3xl lg:text-4xl"
          href="./"
        >
          <img
            className="w-12 inline"
            src="./../../vite.svg"
            alt={seoConfig.title}
          />
          {seoConfig.title}
        </a>

        <ul className="hidden lg:flex gap-8 items-center">
          {["Home", "About Me", "Contact"].map((link, index) => (
            <li key={index} className="text-xl font-light">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
