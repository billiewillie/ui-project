import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	return (
		<Card id='input2' type='inputs'>
			<div className={styles.group}>
				<input required='' placeholder='Name' className={styles.input} type='input' />
				<label className={styles.label} htmlFor='name'>
					Name
				</label>
			</div>
		</Card>
	);
};

export default Input;
