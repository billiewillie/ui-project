import { Checkbox5 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage4() {
	const htmlCode = `
    <label class="checkbox">
        <input type="checkbox" />
        <svg viewBox="0 0 21 18">
            <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </symbol>
            <defs><mask id="tick"><use class="tick mask" href="#tick-path" /></mask></defs>
            <use class="tick" href="#tick-path" stroke="currentColor" />
            <path fill="white" mask="url(#tick)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
        </svg>
        <svg viewBox="0 0 11 11">
            <path d="M5.88086 5.89441L9.53504 4.26746" />
            <path d="M5.5274 8.78838L9.45391 9.55161" />
            <path d="M3.49371 4.22065L5.55387 0.79198" />
        </svg>
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
            <svg viewBox='0 0 21 18'>
                <symbol id='tick-path' viewBox='0 0 21 18' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69'
                        fill='none'
                        strokeWidth='2.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </symbol>
                <defs>
                    <mask id='tick'>
                        <use className={\`\${styles.tick} \${styles.mask}\`} href='#tick-path' />
                    </mask>
                </defs>
                <use className={styles.tick} href='#tick-path' stroke='currentColor' />
                <path
                    fill='white'
                    mask='url(#tick)'
                    d='M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z'
                />
            </svg>
            <svg viewBox='0 0 11 11'>
                <path d='M5.88086 5.89441L9.53504 4.26746' />
                <path d='M5.5274 8.78838L9.45391 9.55161' />
                <path d='M3.49371 4.22065L5.55387 0.79198' />
            </svg>
        </label>
        );
    };
  `;

	const cssCode = ` 
    .checkbox {
        --border-default: #bbbbc1;
        --border-hover: #9898a3;
        --active: #6e7bf2;
        --active-tick: #ffffff;
        display: block;
        width: 18px;
        height: 18px;
        cursor: pointer;
        position: relative;
        -webkit-tap-highlight-color: transparent;
    }
    
    .checkbox svg {
        display: block;
        position: absolute;
    }
    
    .checkbox input {
        display: block;
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 36% / 36%;
        box-shadow: inset 0 0 0 1.5px var(--border, var(--border-default));
        background-color: var(--background, transparent);
        transition: background-color 0.25s linear, box-shadow 0.25s linear;
    }
    
    .checkbox input + svg {
        width: 21px;
        height: 18px;
        left: 0;
        top: 0;
        color: var(--active);
    }
    
    .checkbox input + svg .tick {
        stroke-dasharray: 20;
        stroke-dashoffset: var(--stroke-dashoffset, 20);
        transition: stroke-dashoffset 0.2s;
    }
    
    .checkbox input + svg .tick.mask {
        stroke: var(--active-tick);
    }
    
    .checkbox input + svg + svg {
        width: 11px;
        height: 11px;
        fill: none;
        stroke: var(--active);
        stroke-width: 1.25;
        stroke-linecap: round;
        top: -6px;
        right: -10px;
        stroke-dasharray: 4.5px;
        stroke-dashoffset: 13.5px;
        pointer-events: none;
        animation: var(--animation, none) 0.2s ease 0.175s;
    }
    
    .checkbox input:checked {
        --background: var(--active);
        --border: var(--active);
    }
    
    .checkbox input:checked + svg {
        --stroke-dashoffset: 0;
    }
    
    .checkbox input:checked + svg + svg {
        --animation: check;
    }
    
    .checkbox:hover input:not(:checked) {
        --border: var(--border-hover);
    }
    
    @keyframes check {
        100% {
            stroke-dashoffset: 4.5px;
        }
    }       
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode} jsxCode={jsxCode}>
			<Checkbox5 />
		</LayoutElement>
	);
}
