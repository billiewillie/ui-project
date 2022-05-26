import { Checkbox1 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage1() {
	const htmlCode = `
  <div class="wrapper">
      <input id="cbx1" checked="" type='checkbox' class="hidden" />
      <label for="cbx1" class="cbx"></label>
  </div>
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
      <Card id='checkbox1' type='checkboxes'>
        <div className={styles.wrapper}>
          <input 
            type='checkbox' 
            checked={checked} 
            onChange={handler} 
            id={styles["cbx1"]} 
            className={styles.hidden} />
          <label 
            htmlFor={styles["cbx1"]} 
            className={styles.cbx}></label>
        </div>
      </Card>
    );
  };
  `;

	const cssCode = ` 
  .cbx {
    position: relative;
    top: 1px;
    width: 32px;
    height: 32px;
    border: 1px solid #c8ccd4;
    border-radius: 4px;
    display: flex;
    vertical-align: middle;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  
  .cbx:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 11px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
  }
  
  #cbx1:checked ~ .cbx {
    border-color: transparent;
    background-color: #5a62d6;
    animation: animate 0.5s ease;
  }
  
  #cbx1:checked ~ .cbx:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
  
  .wrapper {
    position: relative;
  }
  
  .hidden {
    display: none !important;
  }
  
  @keyframes animate {
    from {
      transform: scale(1, 1);
    }
  
    30% {
      transform: scale(1.25, 0.75);
    }
  
    40% {
      transform: scale(0.75, 1.25);
    }
  
    50% {
      transform: scale(1.15, 0.85);
    }
  
    65% {
      transform: scale(0.95, 1.05);
    }
  
    75% {
      transform: scale(1.05, 0.95);
    }
  
    to {
      transform: scale(1, 1);
    }
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode} jsxCode={jsxCode}>
			<Checkbox1 />
		</LayoutElement>
	);
}
