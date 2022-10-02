import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Slider, Popup, Logo, Navbar } from '../../components';
import './header.css';

function Header() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [ref, inView] = useInView({
		threshold: 1
	});
	return (
		<header className="smf__header" id="Home">
			<Navbar />
			<Slider />
			<div
				className={
					inView ? 'smf__header-title fadeIn' : 'smf__header-title fadeOut'
				}>
				<h1>SMART MOVE FORWARD</h1>
				<div className="smf__header-logo">
					<Logo />
				</div>
				<button
					ref={ref}
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
