/* eslint-disable react/prop-types */
const Card = ({title, body}) => {
  return (
    <div className="w-full h-60 mt-4 bg-card3 p-10 rounded mb-4 border text-xl font-semibold border-zinc-700 shadow-sm text-text_transparent ">
      <h2 className="text-text_color">{title}</h2>
      <p className="text-text_transparent">
        {body}
      </p>
    </div>
  );
};

export default Card;
