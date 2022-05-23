import { Button1 } from "../../../content/buttons";
import dynamic from "next/dynamic";
import LayoutElement from "../../../layout/LayoutElement.jsx";

const CodeEditor = dynamic(() => import("@uiw/react-textarea-code-editor").then((mod) => mod.default), { ssr: false });

export default function ButtonPage1() {
	const htmlCode = `<button>Hover me</button>`;
	const cssCode = `button {\n  padding: 0.8em 1.8em;\n  border-radius: 10px;\n  border: 2px solid #17C3B2;\n  position: relative;\n  overflow: hidden;\n  background-color: transparent;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  transition: .3s;\n  z-index: 1;\n  font-family: inherit;\n  color: #17C3B2;\n}\n\nbutton::before {\n  content: '';\n  width: 0;\n  height: 300%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  background: #17C3B2;\n  transition: .5s ease;\n  display: block;\n  z-index: -1;\n}\n\nbutton:hover::before {\n  width: 105%;\n}\n\nbutton:hover {\n  color: #111;\n}`;
	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Button1 />
		</LayoutElement>
	);
}
