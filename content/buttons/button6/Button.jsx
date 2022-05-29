import Card from "../../../components/card/Card.jsx";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<Card id='button6' type='buttons'>
			<button className={styles.button}>
				<span>
					<span>Hover me</span>
				</span>
			</button>
		</Card>
	);
};

export default Button;
