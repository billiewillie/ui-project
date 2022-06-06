import { Link9 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage9() {
	const htmlCode = `
  <a class="link">
    <span>Hover</span>
  </a>
  `;

	const cssCode = ` 
  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }
  
  .link::before {
    position: absolute;
    content: "";
    width: 100%;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
    height: 7px;
    border-radius: 20px;
    transform: scale3d(1, 1, 1);
    transition: transform 0.2s, opacity 0.2s;
    transition-timing-function: cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }
  
  .link:hover::before {
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    opacity: 1;
    transform: scale3d(1.2, 0.1, 1);
  }
  
  .link span {
    transform: translate3d(0, -4px, 0);
    display: inline-block;
    transition: transform 0.2s 0.05s cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }
  
  .link:hover span {
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    transition-delay: 0s;
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with bouncy underline'
			metaDescription='Copy html and css code of link with bouncing animation of borderline on hover'
			title='Link with bouncy animation'>
			<Link9 />
		</LayoutElement>
	);
}
