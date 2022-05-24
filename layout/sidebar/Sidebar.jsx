import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";

const links = [
	{
		href: "/",
		text: "Popular",
	},
	{
		href: "/buttons",
		text: "Buttons",
	},
	{
		href: "/inputs",
		text: "Inputs",
	},
	{
		href: "/checkboxes",
		text: "Checkboxes",
	},
];

const Sidebar = () => {
	const router = useRouter();

	return (
		<aside className={styles.aside}>
			<ul className={styles.list}>
				{links.map(({ href, text }) => {
					console.log(router.pathname);
					const style = router.pathname === href ? `${styles.listItem} ${styles.listItemActive}` : `${styles.listItem}`;
					return (
						<li key={text} className={style}>
							<Link href={href}>{text}</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
