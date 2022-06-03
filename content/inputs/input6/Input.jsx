import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	return (
		<Card id='input6' type='inputs'>
			<div className={styles.form}>
				<input type='text' className={styles.input} placeholder=' ' />
				<span className={styles.highlight}></span>
				<span className={styles.bar}></span>
				<label className={styles.label}>Your name</label>
			</div>
		</Card>
	);
};

export default Input;
