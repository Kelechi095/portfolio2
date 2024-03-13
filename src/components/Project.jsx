/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Project = ({
  title,
  tech,
  description1,
  description2,
  src,
  siteLink,
  gitLink,
}) => {
  return (
    <>
      <div className="my-2 text-center"></div>
      <img
        src={src}
        alt="Booktekka image"
        className="rounded w-full md:max-w-[70%] mx-auto opacity-90"
      />
      <div className="md:max-w-[70%] mx-auto mt-4">
        <h2 className="text-text_color font-semibold text-base md:text-2xl font-mono">
          {title}:{" "}
          <span className="text-text_transparent md:text-xl text-base ">
            {tech}
          </span>
        </h2>
        <p className="text-base md:text-lg text-text_color mt-2 md:max-w-[70%]">
          {description1}
        </p>
        <p className="text-base md:text-lg text-text_color mt-2 md:max-w-[70%]">
          {description2}
        </p>
        <div className="mt-2 flex gap-3">
          <a
            className="border border-violet-700 p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300"
            href={siteLink}
          >
            <GoLinkExternal className="mt-[2px]" />
            <p className="text-sm md:text-base">Live Site</p>
          </a>
          <a
            className="border border-violet-700 p-2 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300"
            href={gitLink}
          >
            <FaGithub className="mt-[2px]" />
            <p className="text-sm md:text-base">Github Code</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
