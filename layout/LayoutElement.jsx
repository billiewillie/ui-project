import styles from "./LayoutElement.module.css";
import CodeBlock from "../components/codeBlock/CodeBlock.jsx";
import React, { useRef } from "react";

const LayoutElement = ({ children, ...props }) => {
	const cssAreaRef = useRef(null);
	const htmlAreaRef = useRef(null);

	function copyToClipboard(ref) {
		// save code to clipboard
		navigator.clipboard.writeText(ref.current.textContent);
	}

	return (
		<div className='container-element'>
			{children}
			{/* <CodeBlock onClick={() => copyToClipboard(htmlAreaRef)} ref={htmlAreaRef}>
				{props.htmlCode}
			</CodeBlock> */}
			<CodeBlock onClick={() => copyToClipboard(cssAreaRef)} ref={cssAreaRef}>
				{props.cssCode}
			</CodeBlock>
		</div>
	);
};

export default LayoutElement;
