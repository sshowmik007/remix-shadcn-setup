import * as React from "react";
const HorseIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
			<path d="M18.942 5.156a9.68 9.68 0 0 0-6.943-2.906h-.75a.75.75 0 0 0-.75.75v2.581l-9.392 5.78a.75.75 0 0 0-.243 1.037l1.292 2.062.028.04a2.986 2.986 0 0 0 2.938 1.203c1.306-.221 3.62-.613 5.756.309L8.385 19.44A7.941 7.941 0 0 1 6.5 18.187a.753.753 0 0 0-1 1.125 9.686 9.686 0 0 0 6.493 2.438h.203a9.75 9.75 0 0 0 6.75-16.594h-.004ZM11.624 10.5a1.124 1.124 0 1 1 0-2.249 1.124 1.124 0 0 1 0 2.249Z" />
		</svg>
	);
};
export default HorseIcon;
