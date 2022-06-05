import { Checkbox6 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage6() {
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
        display: flex;
        align-items: center;
        transform: scale(1);
    }
    
    .checkbox input[type="checkbox"] {
        height: 1.7rem;
        width: 1.7rem;
        margin: 5px;
        display: inline-block;
        appearance: none;
        position: relative;
        background-color: #efebf9;
        border-radius: 14%;
        cursor: pointer;
        overflow: hidden;
    }
    
    .checkbox input[type="checkbox"]::after {
        content: "";
        display: block;
        height: 0.9rem;
        width: 0.4rem;
        border-bottom: 0.31rem solid #98ffe5;
        border-right: 0.31rem solid #98ffe5;
        opacity: 0;
        transform: rotate(45deg) translate(-50%, -50%);
        position: absolute;
        top: 45%;
        left: 21%;
        transition: 0.25s ease;
    }
    
    .checkbox input[type="checkbox"]::before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        background-color: #00c090;
        border-radius: 50%;
        opacity: 0.5;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.32s ease;
    }
    
    .checkbox input[type="checkbox"]:checked::before {
        height: 130%;
        width: 130%;
        opacity: 100%;
    }
    
    .checkbox input[type="checkbox"]:checked::after {
        opacity: 100%;
    }
    
    .checkbox span {
        font-size: 2rem;
    }        
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Checkbox with expanding animation'
			metaDescription='Copy html, css and jsx code of checkbox with fancy expanding animation on check'
			title='Checkbox with expanding animation on check'>
			<Checkbox6 />
		</LayoutElement>
	);
}
