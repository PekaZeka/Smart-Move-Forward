/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import './scrollToTop.css';
import arrowUp from '../../assets/arrowUp.png';

function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	if (showTopBtn) {
		return (
			<div className="icon-position puff-in-center" onClick={goToTop}>
				<img src={arrowUp} alt="arrow up" />
			</div>
		);
	}
}
export default ScrollToTop;
