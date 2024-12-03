import * as React from "react";

const CurrencyPromoBadgeIcon = ({ width = 26, height = 26, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 26 26"
		fill="none"
		{...props}
	>
		<path
			d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM14.5 19H14V20C14 20.2652 13.8946 20.5196 13.7071 20.7071C13.5196 20.8946 13.2652 21 13 21C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20V19H10C9.73479 19 9.48044 18.8946 9.2929 18.7071C9.10536 18.5196 9.00001 18.2652 9.00001 18C9.00001 17.7348 9.10536 17.4804 9.2929 17.2929C9.48044 17.1054 9.73479 17 10 17H14.5C14.8978 17 15.2794 16.842 15.5607 16.5607C15.842 16.2794 16 15.8978 16 15.5C16 15.1022 15.842 14.7206 15.5607 14.4393C15.2794 14.158 14.8978 14 14.5 14H11.5C10.5717 14 9.68151 13.6313 9.02513 12.9749C8.36875 12.3185 8.00001 11.4283 8.00001 10.5C8.00001 9.57174 8.36875 8.6815 9.02513 8.02513C9.68151 7.36875 10.5717 7 11.5 7H12V6C12 5.73478 12.1054 5.48043 12.2929 5.29289C12.4804 5.10536 12.7348 5 13 5C13.2652 5 13.5196 5.10536 13.7071 5.29289C13.8946 5.48043 14 5.73478 14 6V7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9H11.5C11.1022 9 10.7206 9.15804 10.4393 9.43934C10.158 9.72064 10 10.1022 10 10.5C10 10.8978 10.158 11.2794 10.4393 11.5607C10.7206 11.842 11.1022 12 11.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19Z"
			fill="url(#paint0_linear_40000137_16609)"
		/>
		<path
			d="M5.81232 2.24286C7.93987 0.821277 10.4412 0.0625067 13 0.0625C16.4301 0.0661307 19.7187 1.43035 22.1442 3.85583C24.5697 6.28131 25.9339 9.56992 25.9375 13.0001C25.9375 15.5588 25.1787 18.0601 23.7571 20.1877C22.3356 22.3153 20.315 23.9735 17.951 24.9527C15.587 25.9319 12.9857 26.1881 10.476 25.6889C7.9664 25.1897 5.66115 23.9575 3.85181 22.1482C2.04247 20.3389 0.810293 18.0336 0.311096 15.524C-0.1881 13.0144 0.0681056 10.4131 1.04731 8.04903C2.02652 5.68501 3.68475 3.66445 5.81232 2.24286ZM14.0625 6.9375V6C14.0625 5.71821 13.9506 5.44796 13.7513 5.2487C13.552 5.04944 13.2818 4.9375 13 4.9375C12.7182 4.9375 12.448 5.04944 12.2487 5.2487C12.0494 5.44796 11.9375 5.71821 11.9375 6V6.9375H11.5C10.5552 6.9375 9.64904 7.31283 8.98094 7.98093C8.31284 8.64903 7.93751 9.55517 7.93751 10.5C7.93751 11.4448 8.31284 12.351 8.98094 13.0191C9.64904 13.6872 10.5552 14.0625 11.5 14.0625H14.5C14.8813 14.0625 15.2469 14.214 15.5165 14.4835C15.7861 14.7531 15.9375 15.1188 15.9375 15.5C15.9375 15.8812 15.7861 16.2469 15.5165 16.5165C15.2469 16.786 14.8813 16.9375 14.5 16.9375H10C9.71821 16.9375 9.44796 17.0494 9.2487 17.2487C9.04945 17.448 8.93751 17.7182 8.93751 18C8.93751 18.2818 9.04945 18.552 9.2487 18.7513C9.44796 18.9506 9.71821 19.0625 10 19.0625H11.9375V20C11.9375 20.2818 12.0494 20.552 12.2487 20.7513C12.448 20.9506 12.7182 21.0625 13 21.0625C13.2818 21.0625 13.552 20.9506 13.7513 20.7513C13.9506 20.552 14.0625 20.2818 14.0625 20V19.0625H14.5C15.4448 19.0625 16.351 18.6872 17.0191 18.0191C17.6872 17.351 18.0625 16.4448 18.0625 15.5C18.0625 14.5552 17.6872 13.649 17.0191 12.9809C16.351 12.3128 15.4448 11.9375 14.5 11.9375H11.5C11.1188 11.9375 10.7531 11.786 10.4835 11.5165C10.214 11.2469 10.0625 10.8812 10.0625 10.5C10.0625 10.1188 10.214 9.75312 10.4835 9.48353C10.7531 9.21395 11.1188 9.0625 11.5 9.0625H16C16.2818 9.0625 16.552 8.95056 16.7513 8.7513C16.9506 8.55204 17.0625 8.28179 17.0625 8C17.0625 7.71821 16.9506 7.44796 16.7513 7.2487C16.552 7.04944 16.2818 6.9375 16 6.9375H14.0625Z"
			stroke="black"
			stroke-opacity="0.01"
			stroke-width="0.125"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_40000137_16609"
				x1="13"
				y1="2.88438"
				x2="13"
				y2="26"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#812A9E" />
				<stop offset="1" stop-color="#1D0728" />
			</linearGradient>
		</defs>
	</svg>
);

export default CurrencyPromoBadgeIcon;