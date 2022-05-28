import { Button4 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage4() {
	const htmlCode = `
	<button class="button">
		<span>Hover me</span>
	</button>
	`;

	const cssCode = `
	.button {
		pointer-events: auto;
		cursor: pointer;
		background: #e7e7e7;
		border: none;
		padding: 1.5rem 3rem;
		position: relative;
		display: inline-block;
		overflow: hidden;
		border-radius: 0.85rem;
		color: #fff;
		text-transform: uppercase;
	}
	
	.button::before {
		position: absolute;
		content: "";
		background: #000;
		width: 120%;
		height: 0;
		padding-bottom: 120%;
		top: -110%;
		left: -10%;
		border-radius: 50%;
		transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);
	}
	
	.button::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		transform: translate3d(0, -100%, 0);
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
	}
	
	.button:hover::before {
		transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
	}
	
	.button:hover::after {
		transform: translate3d(0, 0, 0);
		transition-duration: 0.05s;
		transition-delay: 0.4s;
		transition-timing-function: linear;
	}
	
	.button span {
		display: block;
		position: relative;
		mix-blend-mode: difference;
		z-index: 10;
	}
	
	.button:hover span {
		animation: MoveScaleUpInitial 0.3s forwards, MoveScaleUpEnd 0.3s forwards 0.3s;
	}
	
	@keyframes MoveScaleUpInitial {
		to {
			transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
			opacity: 0;
		}
	}
	
	@keyframes MoveScaleUpEnd {
		from {
			transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
			opacity: 0;
		}
		to {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}	
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Button4 />
		</LayoutElement>
	);
}
