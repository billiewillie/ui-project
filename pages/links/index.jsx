import Head from "next/head";
import { Link1 } from "../../content/links";

export default function LinkPage() {
	return (
		<div className='container'>
			<Head>
				<title>Pretty UI link hovers</title>
			</Head>
			<Link1 />
		</div>
	);
}
