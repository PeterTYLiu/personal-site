import type { ReactElement, SVGProps } from "react";

const SHARED_PECK_ATTRIBUTES: SVGProps<SVGElement> = {
	attributeName: "transform",
	dur: "0.18s",
	type: "rotate",
	from: "0 37 40",
	to: "90 37 40",
	direction: "alternate",
	calcMode: "spline",
	keyTimes: "0;1",
	keySplines: "0.14 0.73 0.35 0.9",
};
const SHARED_BLINK_ATTRIBUTES: SVGProps<SVGElement> = {
	dur: "0.12s",
	begin: "peck2.end+0.3s",
	attributeName: "y",
};
const FEET_COLOUR: string = "#FF9E62";
const EYELID_COLOR: string = "#458d8d";

export const Pigeon = (): ReactElement => {
	return (
		<svg
			style={{
				position: "fixed",
				bottom: "0",
				left: "100px",
				overflow: "visible",
			}}
			width="55"
			height="55"
			viewBox="0 0 55 55"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>pigeon</title>
			<path d="M30 55L29 46H31L30 55Z" fill={FEET_COLOUR} />
			<path d="M30 53L28 55H34L30 53Z" fill={FEET_COLOUR} />
			<path d="M37 55L36 46H38L37 55Z" fill={FEET_COLOUR} />
			<path d="M37 53L35 55H41L37 53Z" fill={FEET_COLOUR} />
			<g data-title="head">
				<animateTransform
					id="peck1"
					begin="0s;peck2.end+2s"
					{...SHARED_PECK_ATTRIBUTES}
				/>
				<animateTransform
					id="peck2"
					begin="peck1.end+0.2s"
					{...SHARED_PECK_ATTRIBUTES}
				/>
				<path
					d="M45 16V8L53.887 15.1096C54.256 15.4048 54.0472 16 53.5746 16H45Z"
					fill="#353535"
				/>
				<ellipse cx="47" cy="11" rx="3" ry="2" fill="white" />
				<rect x="27" width="20" height="50" rx="10" fill="#B9B9B9" />
				<g clip-path="url(#clip0_0_1)" data-title="eye">
					<circle cx="37" cy="9" r="8" fill="orange" />
					<circle cx="37" cy="11" r="4" fill="black" />
					<circle cx="39" cy="9" r="2" fill="white" />
					<rect x="26" y="-5" width="20" height="9" fill={EYELID_COLOR}>
						<animate {...SHARED_BLINK_ATTRIBUTES} values="-5;3;-5" />
					</rect>
					<rect x="26" y="17" width="20" height="9" fill={EYELID_COLOR}>
						<animate {...SHARED_BLINK_ATTRIBUTES} values="17;11;17" />
					</rect>
				</g>
			</g>
			<rect
				x="47"
				y="30"
				width="20"
				height="30"
				rx="10"
				transform="rotate(90 47 30)"
				fill="#D9D9D9"
			/>
			<mask
				id="mask0_0_1"
				maskUnits="userSpaceOnUse"
				x="3"
				y="25"
				width="39"
				height="23"
			>
				<rect x="31" y="5" width="12" height="12" fill="#FF794C" />
				<path
					d="M35.5572 45.2033C30.568 47.2381 3.77637 47.365 3.77637 47.365C3.77637 47.365 23.0153 28.719 28.0045 26.6843C32.9936 24.6495 38.7289 27.1456 40.8145 32.2595C42.9001 37.3734 40.5464 43.1686 35.5572 45.2033Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_0_1)">
				<rect
					x="37.0381"
					y="23"
					width="20"
					height="40"
					transform="rotate(67.8126 37.0381 23)"
					fill="#323232"
				/>
				<circle
					cx="20.4436"
					cy="40.5676"
					r="11"
					transform="rotate(67.8126 20.4436 40.5676)"
					fill="#D9D9D9"
				/>
				<circle
					cx="26.9252"
					cy="37.9241"
					r="11"
					transform="rotate(67.8126 26.9252 37.9241)"
					fill="#323232"
				/>
				<circle
					cx="29.7031"
					cy="36.7912"
					r="11"
					transform="rotate(67.8126 29.7031 36.7912)"
					fill="#D9D9D9"
				/>
				<circle
					cx="32.4809"
					cy="35.6583"
					r="11"
					transform="rotate(67.8126 32.4809 35.6583)"
					fill="#323232"
				/>
				<circle
					cx="35.2588"
					cy="34.5254"
					r="11"
					transform="rotate(67.8126 35.2588 34.5254)"
					fill="#D9D9D9"
				/>
			</g>
			<defs>
				<clipPath id="clip0_0_1">
					<circle cx="37" cy="11" r="6" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
