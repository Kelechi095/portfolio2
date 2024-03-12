import CardButtons from "./buttons/CardButtons";

/* eslint-disable react/prop-types */
const Card = () => {
  return (
    <section className="">
      <div className="w-full mt-4 bg-card3 p-4 rounded mb-4 border text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
        <div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            <CardButtons title="JavaScript" />
            <CardButtons title="TypeScript" />
            <CardButtons title="Node.js" />
            <CardButtons title="React.js" />
            <CardButtons title="Next.js" />
            <CardButtons title="Express.js" />
            <CardButtons title="MongoDB" />
            <CardButtons title="PostgreSQL" />
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
