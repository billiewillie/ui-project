import Card from "../../../components/card/Card.jsx";
import styles from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = () => {
	const [checked, setChecked] = useState(false);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='checkbox4' type='checkboxes'>
			<div className={styles.checklist}>
				<input id='7e80319e' type='checkbox' checked={checked} onChange={handler} />
				<label htmlFor='7e80319e'>Click</label>
			</div>
		</Card>
	);
};

export default Checkbox;
