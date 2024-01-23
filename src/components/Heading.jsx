import React from "react";
import PropTypes from "prop-types";

export default function Heading({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center md:text-left ${className}`}>
      <h1 className="text-black text-[1.5rem] md:text-[2.25rem] font-normal ">
        {title}
      </h1>
      <p className="text-gray text-[1rem] md:text-[1.25rem]">{subtitle}</p>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
