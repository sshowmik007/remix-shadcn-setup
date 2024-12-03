import * as React from "react";
const SpadeIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
			<path d="M21.75 12.75a5.25 5.25 0 0 1-7.819 4.577l1.037 3.457a.75.75 0 0 1-.718.966h-4.5a.75.75 0 0 1-.718-.966l1.037-3.457A5.25 5.25 0 0 1 2.25 12.75c0-3 1.655-5.891 4.781-8.37a21.95 21.95 0 0 1 4.677-2.822.744.744 0 0 1 .578 0 21.951 21.951 0 0 1 4.683 2.823c3.126 2.478 4.781 5.369 4.781 8.369Z" />
		</svg>
	);
};
export default SpadeIcon;
