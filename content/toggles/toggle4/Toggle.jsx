import Card from "../../../components/card/Card.jsx";
import styles from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='toggle4' type='toggles'>
			<div className={styles.checkbox}>
				<input type='checkbox' checked={checked} onChange={handler} />
				<div className={styles.left}></div>
				<div className={styles.right}></div>
				<div className={styles.switcher}></div>
			</div>
		</Card>
	);
};

export default Toggle;
