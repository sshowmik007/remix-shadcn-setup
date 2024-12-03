import * as React from "react";
const ChevronRightIcon = ({
  theme = "dark",
  fill,
  strokeOpacity,
  ...props
}) => {
  const strokeColor = theme === "light" ? "#000" : "#fff";
  const defaultOpacity = theme === "muted" ? 0.5 : 1;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      fill={fill || "none"}
      stroke={strokeColor}
      strokeOpacity={
        strokeOpacity !== undefined ? strokeOpacity : defaultOpacity
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="lucide lucide-badge-check"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={2}
        d="m9 4 8 8-8 8"
      />
    </svg>
  );
};
export default ChevronRightIcon;
