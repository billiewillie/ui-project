import { Button5 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage5() {
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
		position: relative;
		display: inline-block;
		padding: 1rem 1.5rem;
		border: 1px solid #000;
		overflow: hidden;
		color: #fff;
	}
	
	.button::after {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
		transform-origin: 100% 50%;
	}
	
	.button:hover::after {
		transform: scale3d(0, 1, 1);
		transform-origin: 0% 50%;
	}
	
	.button span {
		display: block;
		position: relative;
	}
	
	.button > span {
		overflow: hidden;
	}
	
	.button > span > span {
		overflow: hidden;
		z-index: 1;
		mix-blend-mode: difference;
	}
	
	.button:hover > span > span {
		animation: MoveUpInitial 0.3s forwards, MoveUpEnd 0.3s forwards 0.3s;
	}
	
	@keyframes MoveUpInitial {
		to {
			transform: translate3d(0, -105%, 0);
		}
	}
	
	@keyframes MoveUpEnd {
		from {
			transform: translate3d(0, 100%, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}	
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Button5 />
		</LayoutElement>
	);
}
