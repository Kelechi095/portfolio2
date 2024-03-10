import CardButtons from "./buttons/CardButtons";

/* eslint-disable react/prop-types */
const Card = () => {
  return (
    <div className="w-full h-60 mt-4 bg-card3 p-6 rounded mb-4 border text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
      <div className="grid grid-cols-2 gap-8 w-full mt-2">
        <div>
          <div className="flex items-center mx-auto">
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-purple-400 mx-2"></div>
            <h2 className="text-lg text-purple-400">Languages</h2>
            <div className="w-[40%] h-[1px] bg-gradient-to-l from-purple-400 mx-2"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <CardButtons title="Javascript" />
            <CardButtons title="TypeScript" />
            <CardButtons title="Node.js" />
            <CardButtons title="React.js" />
            <CardButtons title="Next.js" />
            <CardButtons title="Express.js" />
            <CardButtons title="MongoDB" />
            <CardButtons title="PostgreSQL" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-[40%] h-[1px] bg-gradient-to-r from-purple-400 mx-2"></div>
            <h2 className="text-lg text-purple-400">Tools</h2>
            <div className="w-[40%] h-[1px] bg-gradient-to-l from-purple-400 mx-2"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <CardButtons title="React Query" />
            <CardButtons title="Redux tool kit" />
            <CardButtons title="Prisma" />
            <CardButtons title="Tailwind CSS" />
            <CardButtons title="Axios" />
            <CardButtons title="Git" />
            <CardButtons title="Npm" />
            <CardButtons title="Github" />
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
