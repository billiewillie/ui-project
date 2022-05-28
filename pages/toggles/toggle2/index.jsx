import { Toggle2 } from "../../../content/toggles";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function TogglePage2() {
	const htmlCode = `
  <label class="checkbox">
    <input type='checkbox' />
    <span class="slider"></span>
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
          <span className={styles.slider}></span>
        </label>
      );
  };  
	`;

	const cssCode = ` 
  .checkbox {
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
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
    background-color: #f4f4f5;
    transition: 0.3s;
    border-radius: 50px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #303136;
  }
  
  input:checked + .slider:before {
    transform: translateX(1.5em);
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode} jsxCode={jsxCode}>
			<Toggle2 />
		</LayoutElement>
	);
}
