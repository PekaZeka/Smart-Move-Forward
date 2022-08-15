import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Feature } from '../../components';
import { idea, cable, cpu, machine } from './imports';
import './whatWeDo.css';

function WhatWeDo() {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.8
	});

	return (
		<div className="smf__WhatWeDo-container" id="WhatWeDo">
			<div
				ref={ref}
				className={
					inView
						? 'smf__WhatWeDo-container_title slide-in-left'
						: 'smf__WhatWeDo-container_title slide-out-right'
				}>
				<p>{t('whatWeDo__p')}</p>
				<h1>{t('whatWeDo__header')}</h1>
			</div>
			<div className="smf__WhatWeDo-container_features">
				<Feature
					iconURL={cable}
					title={t('whatWeDo__title1')}
					text={t('whatWeDo__text1')}
				/>
				<Feature
					iconURL={machine}
					title={t('whatWeDo__title2')}
					text={t('whatWeDo__text2')}
				/>
				<Feature
					iconURL={idea}
					title={t('whatWeDo__title3')}
					text={t('whatWeDo__text3')}
				/>
				<Feature
					iconURL={cpu}
					title={t('whatWeDo__title4')}
					text={t('whatWeDo__text4')}
				/>
			</div>
		</div>
	);
}

export default WhatWeDo;
