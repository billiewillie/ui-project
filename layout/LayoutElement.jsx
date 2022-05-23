import styles from "./LayoutElement.module.css";
import CodeBlock from "../components/codeBlock/CodeBlock.jsx";
import React, { useRef, useState } from "react";

const LayoutElement = ({ children, ...props }) => {
	const cssAreaRef = useRef(null);
	const htmlAreaRef = useRef(null);
	const jsAreaRef = useRef(null);

	function copyToClipboard(ref) {
		const copied = ref.current.closest("div").querySelector(".copyblock").querySelector("span");
		// save code to clipboard
		navigator.clipboard.writeText(ref.current.textContent);
		copied.style.color = "white";
		setTimeout(() => {
			copied.style.color = "transparent";
		}, 2000);
	}

	return (
		<div className={styles.containerElement}>
			{children}
			<CodeBlock onClick={() => copyToClipboard(htmlAreaRef)} ref={htmlAreaRef} title='HTML'>
				{props.htmlCode}
			</CodeBlock>
			<CodeBlock onClick={() => copyToClipboard(cssAreaRef)} ref={cssAreaRef} title='CSS'>
				{props.cssCode}
			</CodeBlock>

			{props.jsCode && (
				<CodeBlock onClick={() => copyToClipboard(jsAreaRef)} ref={jsAreaRef} title='JS'>
					{props.jsCode}
				</CodeBlock>
			)}
		</div>
	);
};

export default LayoutElement;
