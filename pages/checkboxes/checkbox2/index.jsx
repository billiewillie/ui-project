import { Checkbox2 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage2() {
	const htmlCode = `
  <label class="checkbox path">
      <input type='checkbox' checked />
      <svg viewBox='0 0 21 21'>
          <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
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
          <label className={\`\${styles.checkbox} \${styles.path}\`}>
              <input type='checkbox' checked={checked} onChange={handler} />
              <svg viewBox='0 0 21 21'>
                  <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
              </svg>
          </label>
      );
  };
  `;

	const cssCode = ` 
  .checkbox {
      --background: #fff;
      --border: #d1d6ee;
      --border-hover: #bbc1e1;
      --border-active: #1e2235;
      --tick: #fff;
      position: relative;
  }
  
  .checkbox input,
  .checkbox svg {
      width: 32px;
      height: 32px;
      display: block;
  }
  
  .checkbox input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
  }
  
  .checkbox input:hover {
      --s: 2px;
      --b: var(--border-hover);
  }
  
  .checkbox input:checked {
      --b: var(--border-active);
  }
  
  .checkbox svg {
      fill: none;
      stroke-width: 2px;
      position: absolute;
      pointer-events: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      transform: scale(var(--scale, 1)) translateZ(0);
  }
  
  .checkbox.path input:checked {
      --s: 2px;
      transition-delay: 0.4s;
  }
  
  .checkbox.path input:checked + svg {
      --a: 16.1 86.12;
      --o: 102.22;
  }
  
  .checkbox.path svg {
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode} jsxCode={jsxCode}>
			<Checkbox2 />
		</LayoutElement>
	);
}
