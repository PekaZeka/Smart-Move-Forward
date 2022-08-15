import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Time } from '../../components';
import './footer.css';

function Footer() {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.7
	});

	return (
		<footer className="smf__Footer gradient__bg">
			<h4 ref={ref} className={inView ? 'fade-in' : 'fade-out-fast'}>
				{' '}
				© <Time /> Smart Move Forward d.o.o.
				<br />
				{t('footer')}
			</h4>
		</footer>
	);
}

export default Footer;
