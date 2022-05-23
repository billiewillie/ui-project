import React, { useState } from "react";
import styles from "./CodeBlock.module.css";

const CodeBlock = React.forwardRef((props, ref) => {
	const tagClass = props.title === "HTML" ? "htmlblock" : null;
	return (
		<div className={styles.codeblock}>
			<header className={styles.codeHeader}>
				<span>{props.title}</span>
				<div className='copyblock'>
					<span className={styles.copytext}>copied</span>
					<button className={styles.codebutton} onClick={props.onClick}>
						Copy
					</button>
				</div>
			</header>
			<pre className={styles.pre}>
				<code ref={ref}>{props.children}</code>
			</pre>
		</div>
	);
});
CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
