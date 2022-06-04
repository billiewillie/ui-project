import { Input6 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage6() {
	const htmlCode = `
    <div class="form">
        <input type='text' class="input" placeholder=' ' />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Your name</label>
    </div>
	`;

	const cssCode = ` 
    .form {
        position: relative;
    }
    
    .input {
        padding: 11px 11px 11px 4px;
        display: block;
        width: 180px;
        border: none;
        border-bottom: 1px solid #616060;
        background: transparent;
    }
    
    .input:focus {
        outline: none;
    }
    
    .label {
        color: rgb(167, 165, 165);
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.25s ease all;
        -moz-transition: 0.25s ease all;
        -webkit-transition: 0.25s ease all;
    }
    
    .input:focus ~ .label,
    .input:not(:placeholder-shown) ~ .label {
        top: -20px;
        font-size: 14px;
        color: #5264ae;
    }
    
    .bar {
        position: relative;
        display: block;
        width: 180px;
    }
    
    .bar:before,
    .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.25s ease all;
        -moz-transition: 0.25s ease all;
        -webkit-transition: 0.25s ease all;
    }
    
    .bar:before {
        left: 50%;
    }
    
    .bar:after {
        right: 50%;
    }
    
    .input:focus ~ .bar:before,
    .input:focus ~ .bar:after {
        width: 50%;
    }
    
    .highlight {
        position: absolute;
        height: 60%;
        width: 90px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }
    
    .input:focus ~ .highlight {
        animation: inputHighlighter 0.35s ease;
    }
    
    @keyframes inputHighlighter {
        from {
            background: #5264ae;
        }
    
        to {
            width: 0;
            background: transparent;
        }
    }         
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Input with expanding border'
			metaDescription='Copy html and css code of input with animated border that expands from center after clicking on element'
			title='Input with expanding border'>
			<Input6 />
		</LayoutElement>
	);
}
