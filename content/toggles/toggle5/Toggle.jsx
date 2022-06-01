import Card from "../../../components/card/Card.jsx";
import styles from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='toggle5' type='toggles'>
			<label className={styles.checkbox}>
				<input type='checkbox' checked={checked} onChange={handler} />
				<span className={styles.slider}>
					<span className={styles.circle}></span>
				</span>
			</label>
		</Card>
	);
};

export default Toggle;
