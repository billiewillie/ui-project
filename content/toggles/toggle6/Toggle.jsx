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
			<input type='checkbox' className={styles.switch} checked={checked} onChange={handler} />
		</Card>
	);
};

export default Toggle;
