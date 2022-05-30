import Head from "next/head";
import { Input1, Input2, Input3, Input4, Input5 } from "../../content/inputs";

export default function InputPage() {
	return (
		<div className='container'>
			<Head>
				<title>Inputs with code</title>
				<meta name='description' content='Copy the css and html code of inputs with pretty animation on hover and click event' />
			</Head>
			<h1>Collection of inputs</h1>
			<Input1 />
			<Input2 />
			<Input3 />
			<Input4 />
			<Input5 />
		</div>
	);
}
