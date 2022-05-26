import Head from "next/head";
import { Link1, Link2, Link3, Link4 } from "../../content/links";

export default function LinkPage() {
	return (
		<div className='container'>
			<Head>
				<title>Pretty UI link hovers</title>
			</Head>
			<Link1 />
			<Link2 />
			<Link3 />
			<Link4 />
		</div>
	);
}
