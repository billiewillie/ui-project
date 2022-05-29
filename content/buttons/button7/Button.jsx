import Card from "../../../components/card/Card.jsx";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<Card id='button7' type='buttons'>
			<div className={styles.buttonContainer}>
				<span className={styles.mas}>MASK2</span>
				<button type='button' name='Hover' className={styles.button}>
					MASK2
				</button>
			</div>
		</Card>
	);
};

export default Button;
