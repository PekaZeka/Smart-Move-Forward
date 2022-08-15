import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import lngIcon from '../../assets/language.png';
import './navbar.css';

function Navbar() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	const { ref, inView } = useInView({
		threshold: 0.3
	});
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div
			ref={ref}
			className={inView ? 'smf__Navbar fade-in-fast' : 'smf__Navbar'}>
			<div className="smf__Navbar-containers">
				<p className="scale-up-center">
					<a href="#WhatWeDo">{t('navBar__services')}</a>
				</p>
				<p className="scale-up-center">
					<a href="#Projects">{t('navBar__projects')}</a>
				</p>
				<p className="scale-up-center">
					<a href="#Contact">{t('navBar__contact')}</a>
				</p>
				<div className="smf__Navbar-language">
					<a href="#Home" onClick={() => handleChangeLng('en')}>
						<img src={lngIcon} alt="lngIcon" />
						<p className="scale-up-center">EN</p>
					</a>
				</div>
				<a href="#Home" onClick={() => handleChangeLng('srb')}>
					<p className="scale-up-center">SRB</p>
				</a>
			</div>
			<div className="smf__Navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenuLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="smf__Navbar-menu-container fade-in-fast">
						<div className="smf__Navbar-menu_container-links">
							<p className="scale-up-center">
								<a href="#WhatWeDo">{t('navBar__services')}</a>
							</p>
							<p className="scale-up-center">
								<a href="#Projects">{t('navBar__projects')}</a>
							</p>
							<p className="scale-up-center">
								<a href="#Contact">{t('navBar__contact')}</a>
							</p>
							<p className="scale-up-center">
								<a href="#Home" onClick={() => handleChangeLng('en')}>
									EN
								</a>
							</p>
							<p className="scale-up-center">
								<a href="#Home" onClick={() => handleChangeLng('srb')}>
									SRB
								</a>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
