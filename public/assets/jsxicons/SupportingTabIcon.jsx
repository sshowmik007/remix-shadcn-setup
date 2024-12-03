import * as React from "react";
const SupportingTabIcon = ({
	theme = "dark",
	fill,
	strokeOpacity,
	...props
}) => {
	// Determine stroke color and opacity based on the theme prop
	const strokeColor = theme === "light" ? "#000" : "#fff";
	const defaultOpacity = theme === "muted" ? 0.5 : 1;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 23 26"
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
				d="M22.9383 25.3616C22.9383 25.3616 19.1591 23.9256 16.1015 22.7752H3.24306C1.72066 22.7752 0.487061 21.5112 0.487061 19.9528V3.40876C0.487061 1.85116 1.72066 0.587158 3.24306 0.587158H20.1807C21.7031 0.587158 22.9375 1.85116 22.9375 3.40876V17.6576L22.9383 17.6568V25.3616ZM19.6199 16.0848C19.3559 15.7696 18.8911 15.7336 18.5839 16.0032C18.5599 16.024 16.1663 18.08 11.7111 18.08C7.31266 18.08 4.88226 16.0384 4.83826 16.0016C4.53026 15.7328 4.06786 15.7704 3.80386 16.0848C3.53906 16.4008 3.57586 16.8752 3.88386 17.1464C3.99826 17.2456 6.72066 19.5848 11.7111 19.5848C16.7039 19.5848 19.4271 17.2456 19.5399 17.1464C19.8479 16.8752 19.8847 16.4008 19.6199 16.0848Z"
				fill="#421056"
			/>
		</svg>
	);
};
export default SupportingTabIcon;
