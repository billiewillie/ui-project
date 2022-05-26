import Card from "../../../components/card/Card.jsx";
import styles from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
	const [checked, setChecked] = useState(true);
	const handler = () => {
		setChecked(!checked);
	};
	return (
		<Card id='toggle1' type='toggles'>
			<div className={styles.toggleWrapper}>
				<input checked={checked} onChange={handler} type='checkbox' id='toggleInput1' />
				<label htmlFor='toggleInput1' className={styles.toggle}>
					<span className={styles.toggleHandler}>
						<span className={`${styles.crater} ${styles.crater1}`}></span>
						<span className={`${styles.crater} ${styles.crater2}`}></span>
						<span className={`${styles.crater} ${styles.crater3}`}></span>
					</span>
					<span className={`${styles.star} ${styles.star1}`}></span>
					<span className={`${styles.star} ${styles.star2}`}></span>
					<span className={`${styles.star} ${styles.star3}`}></span>
					<span className={`${styles.star} ${styles.star4}`}></span>
					<span className={`${styles.star} ${styles.star5}`}></span>
					<span className={`${styles.star} ${styles.star6}`}></span>
				</label>
			</div>
		</Card>
	);
};

export default Toggle;
