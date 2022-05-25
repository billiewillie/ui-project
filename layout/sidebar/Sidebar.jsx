import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";

const links = [
	{
		href: "/",
		text: "Popular",
	},
	{
		href: "/inputs",
		text: "Inputs",
	},
	{
		href: "/buttons",
		text: "Buttons",
	},
	{
		href: "/links",
		text: "Link hovers",
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
