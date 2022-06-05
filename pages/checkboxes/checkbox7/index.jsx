import { Checkbox7 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage7() {
	const htmlCode = `
    <label class="checkbox">
        <input type='checkbox' checked />
        <span></span>
    </label>
	`;

	const jsxCode = `
    import styles from "./Checkbox.module.css";
    import { useState } from "react";

    export const Checkbox = () => {
        const [checked, setChecked] = useState(true);
        const handler = () => {
            setChecked(!checked);
        };
        return (
            <label className={styles.checkbox}>
                <input type='checkbox' checked={checked} onChange={handler} />
                <span></span>
            </label>
        );
    };
  `;

	const cssCode = ` 
    .checkbox {
        position: relative;
        z-index: 1;
        display: inline-block;
    }
    
    .checkbox > input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        z-index: -1;
        position: absolute;
        left: -10px;
        top: -8px;
        display: block;
        margin: 0;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: none;
        outline: none;
        opacity: 0;
        transform: scale(1);
        pointer-events: none;
        transition: opacity 0.3s, transform 0.2s;
    }
    
    .checkbox > span {
        display: inline-block;
        width: 100%;
        cursor: pointer;
    }
    
    .checkbox > span::before {
        content: "";
        display: inline-block;
        box-sizing: border-box;
        margin: 3px 11px 3px 1px;
        border: solid 2px;
        border-color: rgba(0, 0, 0, 0.6);
        border-radius: 2px;
        width: 18px;
        height: 18px;
        vertical-align: top;
        transition: border-color 0.2s, background-color 0.2s;
    }
    
    .checkbox > span::after {
        content: "";
        display: block;
        position: absolute;
        top: 3px;
        left: 1px;
        width: 10px;
        height: 5px;
        border: solid 2px transparent;
        border-right: none;
        border-top: none;
        transform: translate(3px, 4px) rotate(-45deg);
    }
    
    .checkbox > input:checked,
    .checkbox > input:indeterminate {
        background-color: #028f8f;
    }
    
    .checkbox > input:checked + span::before,
    .checkbox > input:indeterminate + span::before {
        border-color: #028f8f;
        background-color: #028f8f;
    }
    
    .checkbox > input:checked + span::after,
    .checkbox > input:indeterminate + span::after {
        border-color: #fff;
    }
    
    .checkbox > input:indeterminate + span::after {
        border-left: none;
        transform: translate(4px, 3px);
    }
    
    .checkbox:hover > input {
        opacity: 0.04;
    }
    
    .checkbox > input:focus {
        opacity: 0.12;
    }
    
    .checkbox:hover > input:focus {
        opacity: 0.16;
    }
    
    .checkbox > input:active {
        opacity: 1;
        transform: scale(0);
        transition: transform 0s, opacity 0s;
    }
    
    .checkbox > input:active + span::before {
        border-color: #85b8b7;
    }
    
    .checkbox > input:checked:active + span::before {
        border-color: transparent;
        background-color: rgba(0, 0, 0, 0.6);
    }
    
    .checkbox > input:disabled {
        opacity: 0;
    }
    
    .checkbox > input:disabled + span {
        color: rgba(0, 0, 0, 0.38);
        cursor: initial;
    }
    
    .checkbox > input:disabled + span::before {
        border-color: currentColor;
    }
    
    .checkbox > input:checked:disabled + span::before,
    .checkbox > input:indeterminate:disabled + span::before {
        border-color: transparent;
        background-color: currentColor;
    }         
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Checkbox with shadow'
			metaDescription='Copy html, css and jsx code of checkbox with shadow animation on check on and check off'
			title='Checkbox with animated shadow'>
			<Checkbox7 />
		</LayoutElement>
	);
}
