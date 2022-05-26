import Head from "next/head";
import { Input1, Input2 } from "../../content/inputs";

export default function InputPage() {
	return (
		<div className='container'>
			<Head>
				<title>creative inputs for forms</title>
			</Head>
			<Input1 />
			<Input2 />
		</div>
	);
}
