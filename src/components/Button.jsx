import PropTypes from "prop-types";

const Button = ({ text, onClickFunction, size, className }) => {
  const widthClass =
    size === "small" ? "w-40" : size === "large" ? "w-full" : "w-60";

  const buttonClasses = `flex items-center justify-center border capitalise rounded-lg bg-black ${widthClass} text-white py-4 px-3 ${
    className || ""
  }`;

  return (
    <button className={buttonClasses} onClick={onClickFunction}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Promise),
  ]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,

  className: PropTypes.string,
};

Button.defaultProps = {
  background: "primary",
};

export default Button;
