import Link from "next/link";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

const Card = ({ children, id, type }) => {
	const pathLength = useRouter().pathname.split("/").length;
	const url = `/${type}/${id}`;
	const btnString = "<code />";
	const toShowLink =
		pathLength < 3 ? (
			<Link href={url}>
				<a className={styles.link}>{btnString}</a>
			</Link>
		) : null;
	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>{children}</div>
			{toShowLink}
		</div>
	);
};

export default Card;
