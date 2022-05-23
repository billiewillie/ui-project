import Header from "./header/Header.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Footer from "./footer/Footer.jsx";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Sidebar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
