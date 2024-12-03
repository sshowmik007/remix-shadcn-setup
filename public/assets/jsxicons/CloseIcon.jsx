import * as React from "react";
const CloseIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
				fillRule="evenodd"
				d="M19.457 5.957a1 1 0 0 0-1.414-1.414L12 10.586 5.957 4.543a1 1 0 0 0-1.414 1.414L10.586 12l-6.043 6.043a1 1 0 1 0 1.414 1.414L12 13.414l6.043 6.043a1 1 0 0 0 1.414-1.414L13.414 12l6.043-6.043Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export default CloseIcon;
