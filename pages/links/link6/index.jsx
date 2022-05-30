import { Link6 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage6() {
	const htmlCode = `
  <a className="link">
      <span>Click here</span>
      <svg class="linkLine" width='300%' height='100%' viewBox='0 0 1200 60' preserveAspectRatio='none'>
          <path d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'></path>
      </svg>
  </a> 
  `;

	const cssCode = ` 
  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    padding: 7px 0;
  }
  
  .link::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }
  
  .linkLine {
    position: absolute;
    left: 0;
    pointer-events: none;
    fill: none;
    stroke: #000;
    top: -3px;
    stroke-width: 2px;
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
  }
  
  .link:hover .linkLine {
    transform: translate3d(-66.6%, 0, 0);
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with wave animation'
			metaDescription='Copy html and css code of link with wave animation of before line on hover'
			title='Link with wave animation of line'>
			<Link6 />
		</LayoutElement>
	);
}
