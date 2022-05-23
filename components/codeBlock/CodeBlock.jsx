import React from "react";
import styles from "./CodeBlock.module.css";

const CodeBlock = React.forwardRef((props, ref) => {
	return (
		<div className={styles.codeblock}>
			<header className={styles.codeHeader}>
				<span>{props.title}</span>
				<button onClick={props.onClick}>Copy</button>
			</header>
			<pre className={styles.pre}>
				<code ref={ref}>{props.children}</code>
			</pre>
		</div>
	);
});
CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
