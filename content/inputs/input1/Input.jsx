import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	return (
		<Card id='input1' type='inputs'>
			<div className={styles.group}>
				<input required type='text' name='text' autoComplete='off' className={styles.input} />
				<label className={styles.label}>Your Name</label>
			</div>
		</Card>
	);
};

export default Input;
