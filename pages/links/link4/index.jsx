import { Link4 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage3() {
	const htmlCode = `
  <p>
      <a class="link">Hover this link</a>
  </p>
	`;

	const cssCode = ` 
  .link {
      box-shadow: inset 0 0 0 0 #54b3d6;
      color: #54b3d6;
      padding: 0 0.25rem;
      margin: 0 -0.25rem;
      text-decoration: none;
      cursor: pointer;
      font-size: 18px;
      transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .link:hover {
      color: #fff;
      box-shadow: inset 200px 0 0 0 #54b3d6;
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Link4 />
		</LayoutElement>
	);
}
