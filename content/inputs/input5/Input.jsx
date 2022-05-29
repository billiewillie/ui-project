import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	return (
		<Card id='input5' type='inputs'>
			<div className={styles.form}>
				<input className={styles.input} placeholder='Type your text' required='' type='text' />
				<span className={styles.inputBorder}></span>
			</div>
		</Card>
	);
};

export default Input;
