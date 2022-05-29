import Card from "../../../components/card/Card.jsx";
import styles from "./Input.module.css";

const Input = () => {
	const labelText = (text) => {
		return text.split("").map((el, index) => (
			<span style={{ transitionDelay: `${index * 50}ms` }} key={index}>
				{el}
			</span>
		));
	};
	return (
		<Card id='input3' type='inputs'>
			<div className={styles.group}>
				<input id='input3email' className={styles.input} type='text' placeholder=' ' />
				<label className={styles.label} htmlFor='input3email'>
					{labelText("Email")}
				</label>
			</div>
		</Card>
	);
};

export default Input;
