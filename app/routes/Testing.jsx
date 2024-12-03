import React from "react";
import { ButtonIcon } from "../components/shared/ButtonIcon";
import ChevronRightIcon from "../../public/assets/jsxicons/chevron-right";
const Testing = () => {
	return (
		<>
			<ButtonIcon
				alt="Chevron Right"
				colorScheme="dark"
				iconSrc={<ChevronRightIcon />}
				size="medium"
			/>
		</>
	);
};

export default Testing;
