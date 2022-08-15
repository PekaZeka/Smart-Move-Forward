import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Counter } from '../../components';
import './projects.css';

function Projects() {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.4
	});
	return (
		<div className="smf__projects" id="Projects">
			<div
				className={
					inView
						? 'smf__projects-header fade-in'
						: 'smf__projects-header fade-out-fast'
				}>
				<h1>{t('projects__title')}</h1>
				<p ref={ref}>{t('projects__description')}</p>
			</div>
			<div className="smf__projects-content">
				<Counter number={20} text={t('projects__text1')} />
				<Counter number={40} text={t('projects__text2')} />
				<Counter number={90} text={t('projects__text3')} />
			</div>
		</div>
	);
}

export default Projects;
