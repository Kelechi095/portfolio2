/* eslint-disable react/prop-types */

const ListItem = ({ text, icon: Icon, }) => {
  return (
    <li className="flex  flex-col justify-center items-center h-20 md:h-28 rounded px-8 py-2 transition md:hover:scale-105 duration-300">
      {Icon && (
        <Icon
          className={`
      text-white text-lg md:text-lg
        `}
        />
      )}
      
      <span className="text-white font-normal text-xs md:text-sm">{text}</span>
    </li>
  );
};

/*  */

export default ListItem;
