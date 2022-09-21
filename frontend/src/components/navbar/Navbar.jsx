/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import lngIcon from '../../assets/language.png';
import './navbar.css';

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [currentLng, setCurrentLng] = useState('en');
	const toggleLng = () => {
		if (currentLng === 'srb') {
			handleChangeLng('en');
			setCurrentLng('en');
		} else {
			handleChangeLng('srb');
			setCurrentLng('srb');
		}
	};
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	return (
		<div className="smf__Navbar">
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
				<div className="smf__Navbar-containers_languages">
					<img src={lngIcon} alt="lngIcon" />
					<div className="smf__Navbar-containers_lng" onClick={toggleLng}>
						<p className="scale-up-center">{t('navBar__language')}</p>
					</div>
				</div>
			</div>
			<div className="smf__Navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={64}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenuLine
						color="#fff"
						size={64}
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
							<div className="smf__Navbar-containers_lng" onClick={toggleLng}>
								<p className="scale-up-center">{t('navBar__language')}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
