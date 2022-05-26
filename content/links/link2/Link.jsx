import Card from "../../../components/card/Card.jsx";
import styles from "./Link.module.css";

const Link = () => {
	return (
		<Card id='link2' type='links'>
			<p>
				Hover this <a className={styles.link}>cool link</a>
			</p>
		</Card>
	);
};

export default Link;
