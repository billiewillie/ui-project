import Card from "../../../components/card/Card.jsx";
import styles from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='toggle6' type='toggles'>
			<div className={styles.checkbox}>
				<input type='checkbox' className={styles.switch} checked={checked} onChange={handler} />
			</div>
		</Card>
	);
};

export default Toggle;
