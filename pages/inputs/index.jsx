import Head from "next/head";
import { Input1, Input2, Input3 } from "../../content/inputs";

export default function InputPage() {
	return (
		<div className='container'>
			<Head>
				<title>Creative form inputs</title>
			</Head>
			<Input1 />
			<Input2 />
			<Input3 />
		</div>
	);
}
