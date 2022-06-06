import Head from "next/head";
import { Link1, Link2, Link3, Link4, Link5, Link6, Link7, Link8, Link9 } from "../../content/links";

export default function LinkPage() {
	return (
		<div className='container'>
			<Head>
				<title>Link hovers with code</title>
				<meta name='description' content='Copy the css and html code of links with pretty animation on hover event' />
			</Head>
			<h1>Collection of Link hover animations</h1>
			<Link1 />
			<Link2 />
			<Link3 />
			<Link4 />
			<Link5 />
			<Link6 />
			<Link7 />
			<Link8 />
			<Link9 />
		</div>
	);
}
