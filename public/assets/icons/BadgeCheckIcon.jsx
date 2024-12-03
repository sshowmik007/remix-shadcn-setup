import * as React from "react";

const BadgeCheckIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
	// Determine stroke color and opacity based on the theme prop
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
			<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	);
};

export default BadgeCheckIcon;
