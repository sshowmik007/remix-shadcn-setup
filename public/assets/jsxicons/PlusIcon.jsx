import React from "react";

const PlusIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
  const fillColor = fill || (theme === "light" ? "#000" : "#fff");

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread additional props
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5C8 0.947715 7.55228 0.5 7 0.5C6.44772 0.5 6 0.947715 6 1.5V6H1.5C0.947715 6 0.5 6.44772 0.5 7C0.5 7.55228 0.947715 8 1.5 8H6V12.5C6 13.0523 6.44772 13.5 7 13.5C7.55228 13.5 8 13.0523 8 12.5V8H12.5C13.0523 8 13.5 7.55228 13.5 7C13.5 6.44772 13.0523 6 12.5 6H8V1.5Z"
        fill={fillColor}
        fillOpacity={strokeOpacity !== undefined ? strokeOpacity : 1}
      />
    </svg>
  );
};

export default PlusIcon;
