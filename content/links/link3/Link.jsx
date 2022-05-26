import Card from "../../../components/card/Card.jsx";
import styles from "./Link.module.css";

const Link = () => {
	return (
		<Card id='link3' type='links'>
			<a className={styles.link}>Hover this link</a>
		</Card>
	);
};

export default Link;
