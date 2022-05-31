import Head from "next/head";
import "../styles/globals.css";
import Layout from "../layout/Layout.jsx";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/google-analytics";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || []; 
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date()); 
					gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
				`}
			</Script>
			<Layout>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
