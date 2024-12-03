import * as React from "react";
const ChevronDownIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
	const strokeColor = theme === "light" ? "#000" : "#fff";
	const defaultOpacity = theme === "muted" ? 0.5 : 1;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18 10"
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
				d="M17 1L9 9L1 1"
				stroke="white"
				stroke-opacity="0.5"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default ChevronDownIcon;
