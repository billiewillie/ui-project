import Card from "../../../components/card/Card.jsx";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<Card id='button7' type='buttons'>
			<button className={styles.button}>
				<span>Hover me</span>
				<svg viewBox='0 0 13 10' height='10px' width='15px'>
					<path d='M1,5 L11,5'></path>
					<polyline points='8 1 12 5 8 9'></polyline>
				</svg>
			</button>
		</Card>
	);
};

export default Button;
