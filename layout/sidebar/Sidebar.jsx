import Link from "next/link";
import styles from "./Sidebar.module.css";

const links = [
	{
		href: "/",
		text: "all",
	},
	{
		href: "/buttons",
		text: "buttons",
	},
	{
		href: "/inputs",
		text: "inputs",
	},
	{
		href: "/checkboxes",
		text: "checkboxes",
	},
];

const listItems = links.map(({ href, text }) => (
	<li key={text}>
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
