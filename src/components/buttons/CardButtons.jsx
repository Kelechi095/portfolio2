/* eslint-disable react/prop-types */

const CardButtons = ({ title }) => {
  return (
    <div className="border border-text_transparent py-2 px-4 text-text_color font-semibold  hover:border-text_color md:file:transition duration-300 text-xs md:text-base flex justify-center">
      <p>{title}</p>
    </div>
  );
};

export default CardButtons;
