/* eslint-disable react/prop-types */

const CardButtons = ({ title }) => {
  return (
    <div className="border border-text_transparent py-2 px-4 text-text_color font-semibold hover:border-text_transparent transition duration-300 text-sm text-center">
      {title}
    </div>
  );
};

export default CardButtons;
