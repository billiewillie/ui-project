import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	return (
		<Card id='input7' type='inputs'>
			<input placeholder='name' type='text' className={styles.input} />
		</Card>
	);
};

export default Input;
