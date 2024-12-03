import React from "react";

import ChevronRightIcon from "/public/assets/jsxicons/chevron-right"; // Adjust this import to your actual icon path
import { ButtonIcon } from "../shared/ButtonIcon";

export default {
	title: "Components/ButtonIcon",
	component: ButtonIcon,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
			description: "Sets the button size.",
		},
		iconSize: {
			control: "text",
			description: "Overrides default icon size, e.g., '24px', '16px'.",
		},
		colorScheme: {
			control: { type: "select" },
			options: ["dark", "light"],
			description: "Sets the color scheme of the button.",
		},
		iconSrc: {
			control: "object",
			description: "The icon component or image path to display.",
		},
		alt: {
			control: "text",
			description: "Alternative text for the icon image.",
		},
	},
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: "medium",
	colorScheme: "dark",
	iconSrc: <ChevronRightIcon />, // Default icon as a JSX component
	alt: "Chevron Right",
};

export const WithCustomIconSize = Template.bind({});
WithCustomIconSize.args = {
	size: "medium",
	iconSize: "20px", // Custom icon size overriding the default
	colorScheme: "light",
	iconSrc: <ChevronRightIcon width="20px" height="20px" />, // Override width and height directly
	alt: "Chevron Right with custom size",
};
