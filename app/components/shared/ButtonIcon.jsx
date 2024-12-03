import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import PropTypes from "prop-types";

const buttonIconVariants = cva(
	"rounded-full flex items-center justify-center transition-colors duration-200 p-[4px] m-0",
	{
		variants: {
			size: {
				small: "w-6 h-6",
				medium: "w-8 h-8",
				large: "w-10 h-10",
			},
			colorScheme: {
				dark: "bg-[#100416]/30 text-white border-[1px] border-white/10 hover:bg-white hover:text-gray-900",
				light:
					"bg-white text-gray-900 border-0 hover:bg-[#100416]/30 hover:border-[1px] hover:border-white/10",
			},
		},
		defaultVariants: {
			size: "medium",
			colorScheme: "dark",
		},
	}
);

const ButtonIcon = React.forwardRef(
	(
		{
			className,
			size = "medium",
			iconSize, // Optional custom icon size
			colorScheme = "dark",
			iconSrc,
			alt = "Icon",
			asChild = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";

		// Hover state to track when to toggle icon theme
		const [isHovered, setIsHovered] = useState(false);

		// Define default width and height based on size, or use iconSize if provided
		const defaultIconSize = {
			small: "16px",
			medium: "24px",
			large: "32px",
		}[size];
		const finalIconSize = iconSize || defaultIconSize;

		// Toggle theme on hover based on colorScheme
		const iconTheme = isHovered
			? colorScheme === "dark"
				? "light"
				: "dark"
			: colorScheme;

		// Apply filter only for image sources
		const iconColorFilter =
			colorScheme === "dark"
				? "invert(1) brightness(0%) contrast(100%)"
				: "invert(0%) brightness(100%) contrast(100%)";

		return (
			<Comp
				className={cn(buttonIconVariants({ size, colorScheme, className }))}
				ref={ref}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				{...props}
			>
				{typeof iconSrc === "string" ? (
					<img
						src={iconSrc}
						alt={alt}
						width={finalIconSize} // Use finalIconSize, which could be iconSize or default
						height={finalIconSize} // Use finalIconSize
						style={{ filter: iconColorFilter }}
					/>
				) : (
					// Apply the dynamic theme with width and height to JSX icons
					React.cloneElement(iconSrc, {
						theme: iconTheme,
						width: finalIconSize, // Use finalIconSize
						height: finalIconSize, // Use finalIconSize
					})
				)}
			</Comp>
		);
	}
);

ButtonIcon.displayName = "ButtonIcon";

ButtonIcon.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	iconSize: PropTypes.string, // Custom size prop for icon width/height
	colorScheme: PropTypes.oneOf(["dark", "light"]),
	iconSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	alt: PropTypes.string,
};

export { ButtonIcon, buttonIconVariants };
