import Head from "next/head";
import { Button1, Button2, Button3, Button5 } from "../../content/buttons";

export default function ButtonPage() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful buttons for site</title>
			</Head>
			<Button1 />
			<Button2 />
			<Button3 />
			<Button5 />
		</div>
	);
}
