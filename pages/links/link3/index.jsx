import { Link3 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage3() {
	const htmlCode = `
  <p>
      <a class="link">Hover this link</a>
  </p>
	`;

	const cssCode = ` 
  .link {
    color: #18272f;
    position: relative;
    text-decoration: none;
  }
  
  .link::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .link:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with tricky effect'
			metaDescription='Copy html and css code of link with animated after element which appears on left side and desappears on right side'
			title='Link with animation'>
			<Link3 />
		</LayoutElement>
	);
}
