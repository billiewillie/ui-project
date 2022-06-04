import Card from "../../../components/card/Card.jsx";
import styles from "./Toggle.module.css";

const Toggle = () => {
	return (
		<Card id='toggle7' type='toggles'>
			<div className={styles.toggler}>
				<input id='toggler3srjft' type='checkbox' value='1' />
				<label htmlFor='toggler3srjft'>
					<svg className={styles.togglerOn} version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'>
						<polyline className={styles.path} points='100.2,40.2 51.5,88.8 29.8,67.5'></polyline>
					</svg>
					<svg className={styles.togglerOff} version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'>
						<line className={styles.path} x1='34.4' y1='34.4' x2='95.8' y2='95.8'></line>
						<line className={styles.path} x1='95.8' y1='34.4' x2='34.4' y2='95.8'></line>
					</svg>
				</label>
			</div>
		</Card>
	);
};

export default Toggle;
