import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<div className={styles.logo}>
					<Image src={Logo} alt='logo' width={170} height={30} />
				</div>
			</Link>
		</header>
	);
};

export default Header;
