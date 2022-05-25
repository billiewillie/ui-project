import { Input2 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage2() {
	const htmlCode = `
  <div class="group">
    <input required='' placeholder="Name" class="input" type='input' />
    <label class="label" for='name'>Name</label>
  </div>
	`;

	const cssCode = ` 
  .group {
    width: 100%;
    padding: 16px 0 0;
    max-width: 180px;
    position: relative;
  }
  
  .input {
    outline: 0;
    width: 100%;
    border: none;
    color: #000;
    padding: 8px 0;
    font-size: 16px;
    font-family: inherit;
    background: transparent;
    transition: border-color 0.2s;
    border-bottom: 2px solid #9b9b9b;
  }
  
  .input::placeholder {
    color: transparent;
  }
  
  .input:placeholder-shown ~ .label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }
  
  .label {
    top: 0;
    display: block;
    font-size: 16px;
    transition: 0.3s;
    color: #9b9b9b;
    position: absolute;
    pointer-events: none;
  }
  
  .input:focus {
    font-weight: 700;
    border-width: 3px;
    padding-bottom: 6px;
    border-image: linear-gradient(to right, #125a89, #2dcef6);
    border-image-slice: 1;
  }
  
  .input:focus ~ .label {
    top: 0;
    display: block;
    font-size: 17px;
    color: #2dcef6;
    font-weight: 700;
    transition: 0.3s;
    position: absolute;
  }
  
  .input:required,
  .input:invalid {
    box-shadow: none;
  }  
	`;

	return (
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Input2 />
		</LayoutElement>
	);
}
