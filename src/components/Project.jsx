/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Project = ({ title, tech, description1, description2, src, siteLink, gitLink }) => {

    
  return (
    <>
      <div className="my-2">
        <h2 className="text-text_color font-semibold text-lg md:text-xl">
          {title}:{" "}
          <span className="text-text_transparent md:text-lg text-base font-normal ">
            {tech}
          </span>
        </h2>
      </div>
      <img src={src} alt="Booktekka image" className="rounded w-full md:max-w-[70%]" />
      <p className="text-sm md:text-lg text-text_transparent mt-2 md:max-w-[70%]">
        {description1}
      </p>
      <p className="text-sm md:text-base text-text_transparent mt-2 md:max-w-[70%]">
        {description2}
      </p>

      <div className="mt-2 flex gap-3">
        <a className="border border-text_cyan p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300" href={siteLink}>
          <GoLinkExternal className="mt-[2px]" />
          <p className="text-sm md:text-base">Live Site</p>
        </a>
        <a className="border border-text_cyan p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300" href={gitLink}>
          <FaGithub className="mt-[2px]" />
          <p className="text-sm md:text-base">Github Code</p>
        </a>
      </div>
    </>
  );
};

export default Project;
