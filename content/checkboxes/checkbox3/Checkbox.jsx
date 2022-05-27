import Card from "../../../components/card/Card.jsx";
import styles from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='checkbox3' type='checkboxes'>
			<label className={`${styles.checkbox} ${styles.bounce}`}>
				<input type='checkbox' checked={checked} onChange={handler} />
				<svg viewBox='0 0 21 21'>
					<polyline points='5 10.75 8.5 14.25 16 6'></polyline>
				</svg>
			</label>
		</Card>
	);
};

export default Checkbox;
