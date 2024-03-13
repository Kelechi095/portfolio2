/* eslint-disable react/prop-types */

const CardButtons = ({ title, hidden, icon: Icon }) => {
  return (
    <div
      className={`
     py-2 md:py-3 px-4 bg-background text-text_color font-semibold  hover:border-text_color md:transition duration-300 text-xs md:text-base flex flex-col gap-1 items-center rounded
    ${hidden && "hidden md:flex"}
    `}
    >
      <Icon size={25}/>
      <p>{title}</p>
    </div>
  );
};

export default CardButtons;
