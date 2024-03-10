/* eslint-disable react/prop-types */

const HomeContent = ({ title, body, color }) => {
  return (
    <div className="w-full">
      <h2
        className={`
            text-4xl font-semibold mx-auto text-center
      ${
        color === "purple"
          ? "text-purple-500"
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
      <p className="text-text_color text-2xl">{body}</p>
    </div>
  );
};

export default HomeContent;
