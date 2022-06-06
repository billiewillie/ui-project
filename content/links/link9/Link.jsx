import Card from "../../../components/card/Card.jsx";
import styles from "./Link.module.css";

const Link = () => {
	return (
		<Card id='link9' type='links'>
			<a className={styles.link}>
				<span>Hover</span>
			</a>
		</Card>
	);
};

export default Link;
