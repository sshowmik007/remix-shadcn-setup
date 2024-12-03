import * as React from "react";
const caretUpdownIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
			<path
				fill="#fff"
				fillOpacity={0.5}
				d="M17.193 16.213a.75.75 0 0 1-.162.818l-4.5 4.5a.75.75 0 0 1-1.062 0l-4.5-4.5A.75.75 0 0 1 7.5 15.75h9a.75.75 0 0 1 .693.463ZM7.5 8.25h9a.75.75 0 0 0 .53-1.28l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 .53 1.28Z"
			/>
		</svg>
	);
};
export default caretUpdownIcon;
