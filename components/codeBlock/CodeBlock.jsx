import React, { useState } from "react";
import styles from "./CodeBlock.module.css";

const CodeBlock = React.forwardRef((props, ref) => {
	const style = props.title === /\.(sc|c)ss$/ ? `${styles.cssblock} ${styles.codeblock}` : `${styles.codeblock}`;
	return (
		<div className={style}>
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
