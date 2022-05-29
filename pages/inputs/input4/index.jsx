import { Input4 } from "../../../content/inputs";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function InputPage4() {
	const htmlCode = `
    <form class="form">
        <button>
            <svg width='17' height='16' fill='none' xmlns='http://www.w3.org/2000/svg' role='img' aria-labelledby='search'>
                <path d='M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9' stroke='currentColor' stroke-width='1.333' stroke-linecap='round' stroke-linejoin='round'></path>
            </svg>
        </button>
        <input class="input" placeholder='Type your text' required='' type='text' />
        <button class="reset" type='reset'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
        </button>
    </form>
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
        padding: 8px 0 16px;
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
    
    .input:focus + .label span {
        color: darksalmon;
        transform: translateY(-30px);
    }
    
    .label {
        position: absolute;
        top: 16px;
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
		<LayoutElement htmlCode={htmlCode} cssCode={cssCode}>
			<Input4 />
		</LayoutElement>
	);
}
