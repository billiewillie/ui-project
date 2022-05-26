import Head from "next/head";
import { Button1, Button2 } from "../content/buttons";
import { Link1 } from "../content/links";
import { Input1, Input2 } from "../content/inputs";
import { Checkbox1 } from "../content/checkboxes";
import { Toggle1 } from "../content/toggles";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
			</Head>
			<Button1 />
			<Input2 />
			<Link1 />
			<Input1 />
			<Checkbox1 />
			<Toggle1 />
			<Button2 />
		</div>
	);
}
