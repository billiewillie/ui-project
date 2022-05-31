import Head from "next/head";
import { Button1, Button2, Button3, Button4, Button5, Button6 } from "../content/buttons";
import { Link1, Link2, Link3, Link4, Link5, Link6, Link7 } from "../content/links";
import { Input1, Input2, Input3, Input4, Input5 } from "../content/inputs";
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5 } from "../content/checkboxes";
import { Toggle1, Toggle2, Toggle3, Toggle4 } from "../content/toggles";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
				<meta name='description' content='Copy the code of inputs, buttons, checkboxes, toggles and link hover effects and paste it in your editor' />
			</Head>
			<h1>UI elements with code</h1>
			<Toggle1 />
			<Input3 />
			<Checkbox2 />
			<Link7 />
			<Button4 />
			<Input4 />
			<Link2 />
			<Toggle3 />
			<Link6 />
			<Button1 />
			<Input5 />
			<Toggle4 />
			<Checkbox4 />
			<Toggle2 />
			<Button3 />
			<Link5 />
			<Button2 />
			<Checkbox5 />
			<Link1 />
			<Input2 />
			<Checkbox1 />
			<Input1 />
			<Button6 />
			<Link3 />
			<Button5 />
			<Link4 />
			<Checkbox3 />
		</div>
	);
}
