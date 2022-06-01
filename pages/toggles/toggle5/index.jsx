import { Toggle5 } from "../../../content/toggles";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function TogglePage5() {
	const htmlCode = `
    <label className="checkbox">
        <input type='checkbox' />
        <span className="slider">
            <span className="circle"></span>
        </span>
    </label>
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
			<label className={styles.checkbox}>
				<input type='checkbox' checked={checked} onChange={handler} />
				<span className={styles.slider}>
					<span className={styles.circle}></span>
				</span>
			</label>
        );
    };  
	`;

	const cssCode = ` 
    .checkbox {
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 0.5em;
    }
    
    .checkbox input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #5b5b5b;
        transition: 0.4s;
        border-radius: 30px;
        display: flex;
        align-items: center;
    }
    
    .slider .circle {
        background-color: rgb(255, 255, 255);
        height: 3em;
        width: 3em;
        border-radius: 50%;
        position: absolute;
        left: 0;
        transform: translateX(-50%);
        transition: 0.4s;
    }
    
    .slider .circle::before {
        position: absolute;
        content: "";
        height: 2.3em;
        width: 2.3em;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(182, 182, 182);
        transition: 0.4s;
    }
    
    .slider .circle::after {
        content: "";
        background-color: #212121;
        height: 1.7em;
        width: 1.7em;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s;
    }
    
    input:checked + .slider .circle {
        transform: translateX(2em);
        transition: 0.4s;
    }
    
    input:checked + .slider .circle::before {
        background-color: #e1e1e1;
        transition: 0.4s;
    }
    
    input:checked + .slider .circle::after {
        width: 0;
        height: 0;
        transition: 0.4s;
    }     
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Toggle with slide effect'
			metaDescription='Copy html, css and jsx code of toggle switcher with excellent sliding animations of changing color and smooth translation'
			title='Toggle switcher with sliding animation'>
			<Toggle5 />
		</LayoutElement>
	);
}
