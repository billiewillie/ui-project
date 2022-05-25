import { Input1 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage1() {
	const htmlCode = `
  <div class="group">
    <input required type="text" name="text" autocomplete="off" class="input">
    <label class="label">Your Name</label>
  </div>
	`;

	const cssCode = ` 
  .group {
    position: relative;
  }
  
  .input {
    border: solid 1px #898989;
    border-radius: 10px;
    padding: 8px;
    font-size: 16px;
    color: #000;
    transition: border 0.3s;
  }
  
  .label {
    position: absolute;
    left: 16px;
    color: #898989;
    pointer-events: none;
    transform: translateY(8px);
    transition: transform 0.3s, color 0.3s;
  }
  
  .input:focus,
  .input:valid {
    outline: none;
    border: 1px solid #2196f3;
  }
  
  .input:focus ~ .label,
  .input:valid ~ .label {
    transform: translateY(-50%) scale(0.7);
    background-color: #fff;
    color: #2196f3;
  }
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Input1 />
		</LayoutElement>
	);
}
