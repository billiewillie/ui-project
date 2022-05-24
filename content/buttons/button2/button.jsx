import Card from "../../../components/card/Card.jsx";
import styles from "./Button.module.css";
import { useState } from "react";

const Button = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const handeMouseOver = (e) => {
		setCoords({
			x: e.clientX - e.target.offsetLeft,
			y: e.clientY - e.target.offsetTop,
		});
	};

	return (
		<Card id='button2' type='buttons'>
			<button onMouseEnter={(e) => handeMouseOver(e)} className={styles.button} style={{ "--x": coords.x + "px", "--y": coords.y + "px" }}>
				<span>hover me</span>
			</button>
		</Card>
	);
};

export default Button;
