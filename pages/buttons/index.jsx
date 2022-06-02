import Head from "next/head";
import { Button1, Button2, Button3, Button4, Button5, Button6, Button7 } from "../../content/buttons";

export default function ButtonPage() {
	return (
		<div className='container'>
			<Head>
				<title>Buttons with code</title>
				<meta name='description' content='Copy the css and html code of buttons with hover effect' />
			</Head>
			<h1>Collection of buttons</h1>
			<Button1 />
			<Button2 />
			<Button3 />
			<Button4 />
			<Button5 />
			<Button6 />
			<Button7 />
		</div>
	);
}
