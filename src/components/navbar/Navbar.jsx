/* eslint-disable react/prop-types */
import Resume from "/resume.pdf";

const Navbar = ({ skillsRef, projectsRef }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollIntoView = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", top: -2 });
    }
  };

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 px-6 md:px-10 py-6 w-full z-10 bg-background shadow-sm">
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <h1 className="text-2xl md:flex hidden text-text_color font-semibold font-mono">
          Kelechi.
        </h1>
        <ul className="flex items-center gap-8 text-text_color">
          <li
            className="text-sm md:text-lg hover:text-text_transparent transition duration-300 cursor-pointer  noSelect "
            onClick={scrollToTop}
          >
            Home
          </li>

          <li
            className="text-sm md:text-lg  hover:text-text_transparent transition duration-300 cursor-pointer noSelect"
            onClick={() => scrollIntoView(skillsRef)}
          >
            Skills
          </li>

          <li
            className="text-sm md:text-lg hover:text-text_transparent transition duration-300 cursor-pointer noSelect"
            onClick={() => scrollIntoView(projectsRef)}
          >
            Projects
          </li>
        </ul>
      </div>
      <a
        className="text-white border py-1 rounded px-2 border-text_color hover:text-text_transparent transition duration-300 text-sm md:text-base"
        href={Resume}
        download="resume"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
