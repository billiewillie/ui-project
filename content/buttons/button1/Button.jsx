import styles from "./Button.module.css";
import Card from "../../../components/card/Card.jsx";

const Button = () => {
	return (
		<Card type='buttons' id='button1'>
			<button className={styles.button}>hover me</button>
		</Card>
	);
};

export default Button;
