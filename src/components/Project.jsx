/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Project = ({ title, tech, description1, description2, src }) => {
  return (
    <>
      <div className="my-2">
        <h2 className="text-violet-400 font-semibold text-lg">
          {title}:{" "}
          <span className="text-text_color text-base font-semibold">
            {tech}
          </span>
        </h2>
      </div>
      <img src={src} alt="Booktekka image" className="rounded" />
      <p className="text-sm md:text-base text-text_transparent mt-2">
        {description1}
      </p>
      <p className="text-sm md:text-base text-text_transparent mt-2">
        {description2}
      </p>

      <div className="mt-2 flex gap-3">
        <button className="border border-violet-400 p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300">
          <GoLinkExternal className="mt-[2px]" />
          <p className="text-sm md:text-base">Live Site</p>
        </button>
        <button className="border border-violet-400 p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300">
          <FaGithub className="mt-[2px]" />
          <p className="text-sm md:text-base">Github Code</p>
        </button>
      </div>
    </>
  );
};

export default Project;
