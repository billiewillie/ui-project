import Card from "../../../components/card/Card.jsx";
import styles from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='checkbox1' type='checkboxes'>
			<div className={styles.wrapper}>
				<input checked={checked} onChange={handler} type='checkbox' id={styles["cbx1"]} className={styles.hidden} />
				<label htmlFor={styles["cbx1"]} className={styles.cbx}></label>
			</div>
		</Card>
	);
};

export default Checkbox;
