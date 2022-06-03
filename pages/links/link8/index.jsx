import { Link8 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage8() {
	const htmlCode = `
  <a class="link">
    <span>Hover me</span>
    <svg class="svg" width='100%' height='9' viewBox='0 0 101 9'>
      <path
        d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294'
        pathLength='1'></path>
    </svg>
  </a> 
  `;

	const cssCode = ` 
  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }
  
  .svg {
    position: absolute;
    top: 100%;
    left: 0;
    pointer-events: none;
    fill: none;
    stroke: #000;
    stroke-width: 1px;
  }
  
  .svg path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  }
  
  .link:hover .svg path {
    stroke-dashoffset: 0;
    transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
    transition-duration: 0.3s;
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with wavy line'
			metaDescription='Copy html and css code of link with animation of wavy line on hover'
			title='Link with animation of wavy lines'>
			<Link8 />
		</LayoutElement>
	);
}
