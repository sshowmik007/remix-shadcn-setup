import * as React from "react";
const CaretDownIcon = ({ theme = "dark", fill, strokeOpacity, ...props }) => {
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
				d="M20.193 8.713a.75.75 0 0 0-.693-.463h-15a.75.75 0 0 0-.53 1.28l7.5 7.5a.747.747 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0 .163-.817Z"
			/>
		</svg>
	);
};
export default CaretDownIcon;

// import React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva } from "class-variance-authority";
// import { cn } from "@/lib/utils";
// import PropTypes from "prop-types";

// import ChevronLeft from "/icons/chevron-left.svg";

// const buttonIconVariants = cva(
// 	"rounded-full flex items-center justify-center transition-colors duration-200 p-1.5 m-0",
// 	{
// 		variants: {
// 			size: {
// 				small: "w-6 h-6",
// 				medium: "w-8 h-8",
// 				large: "w-10 h-10",
// 			},
// 			colorScheme: {
// 				dark: "bg-[#100416]/30  text-white border-[1px] border-white/10 hover:bg-white hover:text-gray-900",
// 				light:
// 					"bg-white text-gray-900 border-0 hover:bg-[#100416]/30 hover:border-[1px] hover:border-white/10",
// 			},
// 		},
// 		defaultVariants: {
// 			size: "medium",
// 			colorScheme: "dark",
// 		},
// 	}
// );

// const ButtonIcon = React.forwardRef(
// 	(
// 		{
// 			className,
// 			size = "medium",
// 			colorScheme = "dark",
// 			iconSrc,
// 			alt = "Icon",
// 			asChild = false,
// 			...props
// 		},
// 		ref
// 	) => {
// 		const Comp = asChild ? Slot : "button";

// 		const iconSizeClass = {
// 			small: "w-[16px] h-[16px]",
// 			medium: "w-[24px] h-[24px]",
// 			large: "w-[32px] h-[32px]",
// 		}[size];

// 		const iconColorFilter =
// 			colorScheme === "dark"
// 				? "invert(1) brightness(0%) contrast(10%)"
// 				: "invert(0%) brightness(0%) contrast(10%)";

// 		const iconTheme = colorScheme === "light" ? "light" : "dark";
// 		return (
// 			<Comp
// 				className={cn(buttonIconVariants({ size, colorScheme, className }))}
// 				ref={ref}
// 				{...props}
// 			>
// 				{typeof iconSrc === "string" ? (
// 					<img
// 						src={iconSrc} // Use `src` if `iconSrc` is a string URL
// 						alt={alt}
// 						className={`${iconSizeClass} flex-shrink-0`}
// 						style={{ filter: iconColorFilter }}
// 					/>
// 				) : (
// 					<div className={`${""}`}>{iconSrc}</div>
// 				)}
// 			</Comp>
// 		);
// 	}
// );

// ButtonIcon.displayName = "ButtonIcon";

// ButtonIcon.propTypes = {
// 	size: PropTypes.oneOf(["small", "medium", "large"]),
// 	colorScheme: PropTypes.oneOf(["dark", "light"]),
// 	iconSrc: PropTypes.string,
// 	alt: PropTypes.string,
// };

// export { ButtonIcon, buttonIconVariants };
