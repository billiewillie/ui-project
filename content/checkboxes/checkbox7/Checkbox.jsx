import Card from "../../../components/card/Card.jsx";
import styles from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='checkbox7' type='checkboxes'>
			<label className={styles.checkbox}>
				<input type='checkbox' checked={checked} onChange={handler} />
				<span></span>
			</label>
		</Card>
	);
};

export default Checkbox;
