import { Input5 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage5() {
	const htmlCode = `
    <div class="form">
        <input class="input" placeholder='Type your text' required='' type='text' />
        <span class="inputBorder"></span>
    </div>
	`;

	const cssCode = ` 
    .form {
        --width-of-input: 200px;
        --border-height: 1px;
        --border-before-color: rgba(221, 221, 221, 0.39);
        --border-after-color: #5891ff;
        --input-hovered-color: #4985e01f;
        position: relative;
        width: var(--width-of-input);
    }
    
    .input {
        color: #000;
        background-color: transparent;
        width: 100%;
        box-sizing: border-box;
        padding-inline: 0.5em;
        padding-block: 0.7em;
        border: none;
        border-bottom: var(--border-height) solid var(--border-before-color);
    }
    
    .inputBorder {
        position: absolute;
        background: var(--border-after-color);
        width: 0%;
        height: 2px;
        bottom: 0;
        left: 0;
        transition: 0.3s;
    }
    
    .input:hover {
        background: var(--input-hovered-color);
    }
    
    .input:focus {
        outline: none;
    }
    
    .input:focus ~ .inputBorder {
        width: 100%;
    }     
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Input with animated field'
			metaDescription='Copy html and css code of input with animated field on hover'
			title='Input with animated field on hover'>
			<Input5 />
		</LayoutElement>
	);
}
