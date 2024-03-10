/* eslint-disable react/prop-types */

const HomeContent = ({ title, body, color }) => {
  return (
    <div>
      <h2
        className={`
            text-4xl max-w-[80%] font-semibold
      ${
        color === "green"
          ? "text-text_green"
          : color === "cyan"
          ? "text-cyan-500"
          : color === "pink"
          ? "text-pink-500"
          : ""
      }
      `}
      >
        {title}
      </h2>
      <p className="text-text_color text-4xl">{body}</p>
    </div>
  );
};

export default HomeContent;
