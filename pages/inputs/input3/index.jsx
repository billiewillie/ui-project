import { Input3 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage3() {
	const htmlCode = `
    <div class="group">
        <input type="text" class="input" id='myInput' required />
        <label for='myInput' class="label">Email</label>
    </div>
	`;

	const jsCode = `
    const labels = document.querySelectorAll('.group .label');
    
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => \`<span style="transition-delay: \${idx * 50}ms">\${letter}</span>\`)
            .join('')
    });
    `;

	const cssCode = ` 
    .group {
        width: 100%;
        max-width: 180px;
        position: relative;
    }
    
    .input {
        border: 0;
        border-bottom: 2px solid #333;
        padding: 0px 0 8px;
        display: block;
        font-size: 16px;
        width: 100%;
        transition: 0.3s ease-in;
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
        border-bottom-color: darksalmon;
        outline: none;
    }
    
    .input:focus + .label span,
    .input:not(:placeholder-shown) + .label span {
        color: darksalmon;
        transform: translateY(-24px);
    }
    
    .label {
        position: absolute;
        top: 0px;
        left: 0;
        cursor: text;
    }
    
    .label span {
        display: inline-block;
        font-size: 16px;
        min-width: 5px;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }       
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsCode={jsCode}
			metaTitle='Input with funky label'
			metaDescription='Copy html, css and js code of input with crazy animation of label. Letters rise up consistently after focus event'
			title='Input with consistent animation of label'>
			<Input3 />
		</LayoutElement>
	);
}
