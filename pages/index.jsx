import Head from "next/head";
import { Button1, Button2, Button3, Button4, Button5, Button6, Button7 } from "../content/buttons";
import { Link1, Link2, Link3, Link4 } from "../content/links";
import { Input1, Input2, Input3 } from "../content/inputs";
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5 } from "../content/checkboxes";
import { Toggle1, Toggle2, Toggle3 } from "../content/toggles";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
			</Head>
			<Button7 />
			<Button4 />
			<Checkbox4 />
			<Button3 />
			<Toggle3 />
			<Button1 />
			<Toggle2 />
			<Input3 />
			<Button2 />
			<Checkbox5 />
			<Link1 />
			<Input2 />
			<Checkbox1 />
			<Toggle1 />
			<Input1 />
			<Link2 />
			<Button6 />
			<Link3 />
			<Button5 />
			<Checkbox2 />
			<Link4 />
			<Checkbox3 />
		</div>
	);
}
