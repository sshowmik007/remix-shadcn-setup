import * as React from "react";
const LottoIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
			<path d="M21.75 9.75A.75.75 0 0 0 22.5 9V6A1.5 1.5 0 0 0 21 4.5H3A1.5 1.5 0 0 0 1.5 6v3a.75.75 0 0 0 .75.75 2.25 2.25 0 1 1 0 4.5.75.75 0 0 0-.75.75v3A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5v-3a.75.75 0 0 0-.75-.75 2.25 2.25 0 0 1 0-4.5ZM3 15.675a3.75 3.75 0 0 0 0-7.35V6h5.25v12H3v-2.325Z" />
		</svg>
	);
};
export default LottoIcon;
