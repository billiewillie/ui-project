import Head from "next/head";
import { Button1 } from "../content/buttons";
import { Link1 } from "../content/links";
import { Input1 } from "../content/inputs";
import { Checkbox1 } from "../content/checkboxes";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
			</Head>
			<Button1 />
			<Link1 />
			<Input1 />
			<Checkbox1 />
		</div>
	);
}
