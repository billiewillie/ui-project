import Card from "../../../components/card/Card.jsx";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<Card id='button4' type='buttons'>
			<button className={styles.button}>
				<span>Hover me</span>
			</button>
		</Card>
	);
};

export default Button;
