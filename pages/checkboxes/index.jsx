import Head from "next/head";
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5 } from "../../content/checkboxes";

export default function CheckboxPage() {
	return (
		<div className='container'>
			<Head>
				<title>Checkboxes with code</title>
				<meta name='description' content='Copy the css and html code of checkboxes with pretty animation on click event' />
			</Head>
			<h1>Collection of checkboxes</h1>
			<Checkbox1 />
			<Checkbox2 />
			<Checkbox3 />
			<Checkbox4 />
			<Checkbox5 />
		</div>
	);
}
