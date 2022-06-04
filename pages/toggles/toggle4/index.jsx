import { Toggle4 } from "../../../content/toggles";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function TogglePage4() {
	const htmlCode = `
    <div className="checkbox">
        <input type='checkbox' />
        <div className="left"></div>
        <div className="right"></div>
        <div className="switcher"></div>
    </div>
	`;

	const jsxCode = `
    import styles from "./Toggle.module.css";
    import { useState } from "react";
    
    export const Toggle = () => {
        const [checked, setChecked] = useState(true);
        const handler = () => {
            setChecked(!checked);
        };

        return (
            <div className={styles.checkbox}>
                <input type='checkbox' checked={checked} onChange={handler} />
                <div className={styles.left}></div>
                <div className={styles.right}></div>
                <div className={styles.switcher}></div>
            </div>
        );
    };  
	`;

	const cssCode = ` 
    .checkbox {
        --switch-width: 60px;
        --switch-height: calc(var(--switch-width) / 2);
        --left-ball-color: black;
        --right-ball-color: white;
        width: var(--switch-width);
        height: var(--switch-height);
        border-radius: 50px;
        background-color: var(--left-ball-color);
        position: relative;
        border: 1px solid var(--left-ball-color);
        overflow: hidden;
        cursor: pointer;
    }
    
    .checkbox input[type="checkbox"] {
        width: 100%;
        position: absolute;
        height: 100%;
        margin: 0;
        opacity: 0;
        cursor: pointer;
    }
    
    .checkbox .left {
        position: absolute;
        width: calc(var(--switch-width) / 3);
        height: calc(var(--switch-height) / 1.5);
        background-color: var(--left-ball-color);
        border-radius: 50%;
        left: calc((var(--switch-height) - (var(--switch-height) / 1.5)) / 2);
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
        pointer-events: none;
    }
    
    .checkbox .right {
        position: absolute;
        width: calc(var(--switch-width) / 3);
        height: calc(var(--switch-height) / 1.5);
        background-color: var(--right-ball-color);
        border-radius: 50%;
        right: calc((var(--switch-height) - (var(--switch-height) / 1.5)) / 2);
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
        pointer-events: none;
    }
    
    .checkbox .switcher {
        position: absolute;
        width: calc(100% + var(--switch-width) / 3);
        height: 100%;
        background-color: var(--right-ball-color);
        z-index: 1;
        left: calc(-50% + var(--switch-width) / (3 * 2));
        pointer-events: none;
        transition: left 500ms ease;
        border-top-left-radius: calc(var(--switch-width) / 3);
        border-bottom-left-radius: calc(var(--switch-width) / 3);
    }
    
    .checkbox .switcher:before {
        position: absolute;
        content: "";
        width: calc(var(--switch-width) / 3);
        height: 100%;
        background-color: var(--left-ball-color);
        display: block;
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        z-index: 2;
    }
    
    .checkbox .switcher:after {
        position: absolute;
        content: "";
        width: calc(var(--switch-width) / 3);
        height: 100%;
        background-color: var(--right-ball-color);
        display: block;
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
    }
    
    .checkbox input:checked ~ .switcher {
        left: 100%;
    }
    
    .checkbox input:checked ~ .switcher:before {
        display: none;
    }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Toggle with overflow animation'
			metaDescription='Copy html, css and jsx code of toggle switcher with stunning overflow animation of dark and light themes'
			title='Toggle switcher with overflow animation'>
			<Toggle4 />
		</LayoutElement>
	);
}
