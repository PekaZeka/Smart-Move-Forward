import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Slider, Popup, Logo } from '../../components';
import './header.css';

function Header() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [ref, inView] = useInView({
		threshold: 0.7
	});
	return (
		<header className="smf__header" id="Home">
			<Slider />
			<div
				className={
					inView
						? 'smf__header-title fade-in'
						: 'smf__header-title fade-out-fast'
				}>
				<h1 ref={ref}>SMART MOVE FORWARD</h1>
				<div className="smf__header-logo">
					<Logo />
				</div>

				<button
					type="button"
					className="smf-button scale-up-center"
					onClick={() => setIsOpen(true)}>
					{t('contact__btn')}
				</button>

				<Popup
					open={isOpen}
					onClose={() => setIsOpen(false)}
					keepOpen={() => setIsOpen(true)}
				/>
			</div>
		</header>
	);
}

export default Header;
