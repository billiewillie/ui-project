import { Input7 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage7() {
	const htmlCode = `
    <input placeholder='name' type='text' class="input" />
	`;

	const cssCode = ` 
    .input {
        border: 2px solid transparent;
        border-bottom-color: rgb(131, 131, 131);
        padding: 8px 0;
        outline: none;
        background-color: transparent;
        transition: 0.33s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    
    .input:focus,
    .input:hover {
        outline: none;
        padding: 8px 16px;
        border-radius: 30px;
        border-color: #7aa0cf;
    }
    
    .input::placeholder {
        color: rgb(131, 131, 131);
    }
    
    .input:focus::placeholder {
        opacity: 0;
        transition: opacity 0.33s;
    }           
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Input with rounded border'
			metaDescription='Copy html and css code of input with animated border which turns to rounded and colored on hover'
			title='Input with rounded animated border'>
			<Input7 />
		</LayoutElement>
	);
}
