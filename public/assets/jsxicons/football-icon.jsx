import * as React from "react";
const FootballIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
			<path d="M21.474 5.052a3.09 3.09 0 0 0-2.526-2.526c-3.036-.515-8.756-.75-12.963 3.459-4.208 4.21-3.974 9.928-3.46 12.963a3.09 3.09 0 0 0 2.532 2.526c1.063.182 2.14.274 3.218.276 3.008 0 6.755-.75 9.74-3.735 4.208-4.208 3.974-9.928 3.46-12.963M5.302 19.997a1.59 1.59 0 0 1-1.3-1.3 17 17 0 0 1-.197-4.396L9.7 20.195c-1.468.126-2.946.06-4.397-.198M15.53 9.532l-1.345 1.343.595.594a.749.749 0 1 1-1.06 1.06l-.594-.594-1.19 1.19.594.594a.75.75 0 1 1-1.059 1.06l-.595-.595L9.53 15.53a.748.748 0 0 1-1.238-.234.75.75 0 0 1 .178-.827l1.345-1.343-.594-.594a.75.75 0 0 1 1.06-1.06l.595.595 1.188-1.191-.594-.594a.75.75 0 0 1 1.06-1.06l.595.595 1.344-1.345a.751.751 0 0 1 1.231.817.8.8 0 0 1-.171.244m4.665.167L14.3 3.805q.67-.063 1.398-.064c1.006.003 2.01.091 3 .262a1.59 1.59 0 0 1 1.299 1.3c.257 1.45.323 2.928.197 4.396"></path>
		</svg>
	);
};
export default FootballIcon;
