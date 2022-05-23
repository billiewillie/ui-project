import React from "react";
import styles from "./CodeBlock.module.css";

const CodeBlock = React.forwardRef((props, ref) => {
	return (
		<div className={styles.codeBlock}>
			<button onClick={props.onClick}>Copy</button>
			<pre>
				<code ref={ref}>{props.children}</code>
			</pre>
		</div>
	);
});
CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
