import Link from "next/link";
import styles from "./Sidebar.module.css";

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

const listItems = links.map(({ href, text }) => (
	<li key={text} className={styles.listItem}>
		<Link href={href}>{text}</Link>
	</li>
));

const Sidebar = () => {
	return (
		<aside className={styles.aside}>
			<ul className={styles.list}>{listItems}</ul>
		</aside>
	);
};

export default Sidebar;
