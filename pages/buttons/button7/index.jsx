import { Button7 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage7() {
	const htmlCode = `
	<button class="button">
		<span>Hover me</span>
		<svg viewBox='0 0 13 10' height='10px' width='15px'>
			<path d='M1,5 L11,5'></path>
			<polyline points='8 1 12 5 8 9'></polyline>
		</svg>
	</button>
	`;

	const cssCode = `
	.button {
		position: relative;
		margin: auto;
		padding: 12px 18px;
		transition: all 0.25s ease;
		border: none;
		background: none;
		cursor: pointer;
	}
	
	.button:before {
		content: "";
		top: 0;
		left: 0;
		display: block;
		position: absolute;
		border-radius: 50px;
		background: #a9d6e4;
		transition: all 0.35s ease;
		width: 42px;
		height: 42px;
	}
	
	.button span {
		position: relative;
		color: #1c3d5e;
	}
	
	.button svg {
		position: relative;
		top: 0;
		margin-left: 10px;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke: #234567;
		stroke-width: 2;
		transform: translateX(-5px);
		transition: all 0.33s ease;
	}
	
	.button:hover:before {
		width: 100%;
		background: #b1dae7;
	}
	
	.button:hover svg {
		transform: translateX(0);
	}
	
	.button:active {
		transform: scale(0.9);
	}	
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Button with sliding animation'
			metaDescription='Copy html and css code of button with sliding left effect on hover'
			title='Button with sliding effect on hover'>
			<Button7 />
		</LayoutElement>
	);
}
