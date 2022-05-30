import { Link5 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage5() {
	const htmlCode = `
  <a class="link">Hover this</a>
  `;

	const cssCode = ` 
  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }
  
  .link::before,
  .link::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }
  
  .link::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .link::after {
    top: calc(100% + 4px);
    transform-origin: 0% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .link:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
    transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
  }
  
  .link:hover::after {
    transform-origin: 100% 50%;
    transform: scale3d(1, 1, 1);
    transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
  }
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with double lines'
			metaDescription='Copy html and css code of link with animation of parallel lines under on hover'
			title='Link with animation of parallel lines'>
			<Link5 />
		</LayoutElement>
	);
}
