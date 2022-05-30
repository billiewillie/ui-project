import { Link7 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage7() {
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
    transform-origin: 0% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link::after {
    top: calc(100% + 4px);
    transition: transform 0.3s;
    transform-origin: 100% 50%;
  }
  
  .link:hover::before {
    transform: scale3d(1, 1, 1);
  }
  
  .link:hover::after {
    transform: scale3d(0, 1, 1);
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with broken line'
			metaDescription='Copy html and css code of link with animation of two unconsistent lines on hover'
			title='Link with animation of unconsistent lines'>
			<Link7 />
		</LayoutElement>
	);
}
