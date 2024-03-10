import { Link } from "react-router-dom";

const MainNav = () => {
  return (
      <nav className="flex items-center justify-between fixed top-0 left-0 px-10 py-6 w-full z-10 bg-background shadow-sm">
        <div className="flex items-center gap-8">
          <h1 className="text-xl text-text_color font-semibold font-mono">Kelechi.</h1>
          <ul className="flex items-center gap-8 text-text_color text-[16px]">
            <Link className="  hover:text-text_transparent transition duration-300">
              <li>Home</li>
            </Link>
            <Link className="hover:text-text_transparent transition duration-300">
              <li>About Me</li>
            </Link>
            <Link className="hover:text-text_transparent transition duration-300">
              <li>Skills</li>
            </Link>
            <Link className="hover:text-text_transparent transition duration-300">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <button className="text-white border py-1 rounded px-2 border-text_color hover:text-text_transparent transition duration-300">
          Resume
        </button>
      </nav>
  );
};

export default MainNav;