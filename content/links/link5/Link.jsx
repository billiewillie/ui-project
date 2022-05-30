import Card from "../../../components/card/Card.jsx";
import styles from "./Link.module.css";

const Link = () => {
	return (
		<Card id='link5' type='links'>
			<a className={styles.link}>Hover this</a>
		</Card>
	);
};

export default Link;
