import Head from "next/head";
import { Toggle1, Toggle2 } from "../../content/toggles";

export default function TogglePage() {
	return (
		<div className='container'>
			<Head>
				<title>Amazing toggle switchers</title>
			</Head>
			<Toggle1 />
			<Toggle2 />
		</div>
	);
}
