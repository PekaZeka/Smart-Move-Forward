import { useState } from 'react';
import LogoSVG from './LogoSVG';
import './logo.css';

function Logo({ gear1 = 'gear1', gear2 = 'gear2' }) {
	const [FirstGear, setFirstGear] = useState(gear1);
	const [SecondGear, setSecondGear] = useState(gear2);
	const changeClassRotate = () => {
		setFirstGear('gear1 rotate-center');
		setSecondGear('gear2 rotate-center');
	};
	const removeChanges = () => {
		setFirstGear('gear1');
		setSecondGear('gear2');
	};
	return (
		<div
			onMouseEnter={() => changeClassRotate()}
			onMouseLeave={() => removeChanges()}>
			<LogoSVG class_gear1={FirstGear} class_gear2={SecondGear} />
		</div>
	);
}

export default Logo;
