/* eslint-disable react/prop-types */
import CardButtons from "./buttons/CardButtons";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const Card = () => {
  return (
    <section className="">
      <div className="w-full mt-4 bg-card3 p-1 rounded mb-4 border-[0.5px] text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
        <div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[5px]">
            <CardButtons title="HTML5" icon={FaHtml5}/>
            <CardButtons title="CSS3" icon={IoLogoCss3}/>
            <CardButtons title="JavaScript" icon={IoLogoJavascript}/>
            <CardButtons title="TypeScript" icon={SiTypescript} />
            <CardButtons title="Node.js" icon={FaNodeJs}/>
            <CardButtons title="React.js" icon={FaReact}/>
            <CardButtons title="Next.js" icon={TbBrandNextjs}/>
            <CardButtons title="Express.js" icon={SiExpress}/>
            <CardButtons title="MongoDB" icon={DiMongodb}/>
            <CardButtons title="PostgreSQL" icon={SiPostgresql}/>
            <CardButtons title="ReactQuery" icon={SiReactquery}/>
            <CardButtons title="Redux" icon={SiRedux}/>
            <CardButtons title="Prisma" icon={SiPrisma}/>
            <CardButtons title="Tailwind" icon={SiTailwindcss}/>
            <CardButtons title="Git" icon={FaGitAlt}/>
            <CardButtons title="NPM" icon={FaNpm} hidden/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
