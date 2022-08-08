import { useState } from 'react';
import LogoSVG from './LogoSVG';
import './logo.css';

function Logo() {
	const [FirstGear, setFirstGear] = useState('gear1');
	const [SecondGear, setSecondGear] = useState('gear2');
	const changeClassRotate = () => {
		setFirstGear('gear1 rotate-center');
		setSecondGear('gear2 rotate-center-reverse');
	};
	const removeChanges = () => {
		setFirstGear('gear1');
		setSecondGear('gear2');
	};
	return (
		<div
			onMouseEnter={() => changeClassRotate()}
			onMouseLeave={() => removeChanges()}>
			<a href="#Home">
				<LogoSVG gear1={FirstGear} gear2={SecondGear} />
			</a>
		</div>
	);
}

export default Logo;
