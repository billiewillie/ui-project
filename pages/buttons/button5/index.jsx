import { Button5 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage5() {
	const htmlCode = `
	<button className="button">
		<span>
			<span>Hover me</span>
		</span>
	</button>
	`;

	const cssCode = `
	.button {
		pointer-events: auto;
		text-transform: uppercase;
		cursor: pointer;
		background: #e7e7e7;
		border: none;
		position: relative;
		display: inline-block;
		overflow: hidden;
		color: #fff;
		padding: 1rem 2rem;
	}
	
	.button::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		background: #000;
		width: 100%;
		height: 100%;
		transform-origin: 50% 100%;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		transition: clip-path 0.2s, -webkit-clip-path 0.2s;
		transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
	}
	
	.button:hover::before {
		transition-duration: 0.3s;
		-webkit-clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
	}
	
	.button span {
		display: block;
		position: relative;
	}
	
	.button > span {
		overflow: hidden;
		mix-blend-mode: difference;
	}
	
	.button:hover > span > span {
		animation: MoveUpInitial 0.3s forwards, MoveUpEnd 0.3s forwards 0.2s;
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
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Button with turning corner animation'
			metaDescription='Copy html and css code of button with cool effect of turning corner animation on hover'
			title='Button with turning corner effect on hover'>
			<Button5 />
		</LayoutElement>
	);
}
