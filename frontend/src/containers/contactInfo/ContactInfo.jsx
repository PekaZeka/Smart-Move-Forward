import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Map } from '../../components';
import { location, phone, mail } from './imports';
import './contactInfo.css';

function ContactInfo() {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.25
	});

	return (
		<div className="smf__ContactInfo">
			<div
				ref={ref}
				className={
					inView
						? 'smf__ContactInfo-content fade-in'
						: 'smf__ContactInfo-content fade-out-fast'
				}>
				<h3>{t('contactInfo__header')}</h3>
				<div className="smf__ContactInfo-content_location">
					<img src={location} alt="location" />
					<p>
						Smart Move Forward
						<br />
						Doža Đerđa 128
						<br />
						21235 Temerin
						<br />
						Serbia
					</p>
				</div>
				<div className="smf__ContactInfo-content_phone">
					<img src={phone} alt="phone" />
					<div>
						<a href="tel:+381 21 840 247">+381 21 840 247</a>
					</div>
				</div>
				<div className="smf__ContactInfo-content_mail">
					<img src={mail} alt="mail" />
					<div>
						<a href="mailto:smf@info.rs">smf@info.rs</a>
					</div>
				</div>
			</div>
			<Map />
		</div>
	);
}

export default ContactInfo;
