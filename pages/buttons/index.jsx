import Head from "next/head";
import { Button1, Button2, Button3, Button4, Button5, Button6 } from "../../content/buttons";

export default function ButtonPage() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful buttons for site</title>
			</Head>
			<Button1 />
			<Button2 />
			<Button3 />
			<Button4 />
			<Button5 />
			<Button6 />
		</div>
	);
}
