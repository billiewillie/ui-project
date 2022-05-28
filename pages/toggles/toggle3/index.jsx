import { Toggle3 } from "../../../content/toggles";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function TogglePage3() {
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
  .checkbox input {
    display: none;
  }
  
  .checkbox {
    width: 60px;
    height: 30px;
    position: relative;
  }
  
  .slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    box-shadow: 0 0 0 2px #777, 0 0 4px #777;
    cursor: pointer;
    border: 4px solid transparent;
    overflow: hidden;
    transition: 0.2s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #777;
    border-radius: 30px;
    transform: translateX(-30px);
    transition: 0.2s;
  }
  
  input:checked + .slider:before {
    transform: translateX(30px);
    background-color: limeGreen;
  }
  
  input:checked + .slider {
    box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode} jsxCode={jsxCode}>
			<Toggle3 />
		</LayoutElement>
	);
}
