import { useTranslation } from 'react-i18next';
import { Time } from '../../components';
import './footer.css';

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="smf__Footer gradient__bg">
			<h4>
				{' '}
				© <Time /> Smart Move Forward d.o.o.
				<br />
				{t('footer')}
			</h4>
		</footer>
	);
}

export default Footer;
