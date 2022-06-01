import Head from "next/head";
import { Toggle1, Toggle2, Toggle3, Toggle4, Toggle5 } from "../../content/toggles";

export default function TogglePage() {
	return (
		<div className='container'>
			<Head>
				<title>Toggle switchers with code</title>
				<meta name='description' content='Copy the css and html code of toggle switchers with pretty animation on click event' />
			</Head>
			<h1>Collection of Toggle switchers</h1>
			<Toggle1 />
			<Toggle2 />
			<Toggle3 />
			<Toggle4 />
			<Toggle5 />
		</div>
	);
}
