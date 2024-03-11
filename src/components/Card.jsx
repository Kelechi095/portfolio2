import CardButtons from "./buttons/CardButtons";

/* eslint-disable react/prop-types */
const Card = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="w-full mt-4 bg-card3 p-6 rounded mb-4 border text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
        <div>
          <div className="flex items-center mx-auto">
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-violet-400 mx-2"></div>
            <h2 className="text-lg text-violet-400">Technologies</h2>
            <div className="w-[40%] h-[1px] bg-gradient-to-l from-violet-400 mx-2"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <CardButtons title="JavaScript" />
            <CardButtons title="TypeScript" />
            <CardButtons title="Node.js" />
            <CardButtons title="React.js" />
            <CardButtons title="Next.js" />
            <CardButtons title="Express.js" />
            <CardButtons title="MongoDB" />
            <CardButtons title="PostgreSQL" />
          </div>
        </div>
        
    </div>
    <div className="w-full mt-4 bg-card3  p-6 rounded mb-4 border text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
        <div>
          <div className="flex items-center mx-auto">
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-violet-400 mx-2"></div>
            <h2 className="text-lg text-violet-400">Tools</h2>
            <div className="w-[40%] h-[1px] bg-gradient-to-l from-violet-400 mx-2"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
          <CardButtons title="ReactQuery" />
            <CardButtons title="Redux" />
            <CardButtons title="Prisma" />
            <CardButtons title="Tailwind" />
            <CardButtons title="Axios" />
            <CardButtons title="Git" />
            <CardButtons title="Npm" />
            <CardButtons title="Github" />
          </div>
        </div>
        
    </div>
    </section>
  );
};

export default Card;


