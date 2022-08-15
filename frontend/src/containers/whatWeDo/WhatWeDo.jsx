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
					title="Industrial Automation"
					text="In designing and manufacturing of high-tech electronics we specialize also in miniaturization and low-power-consumption GPS devices such as tracking devices for fleets of vehicles with applications for vehicle telematics and fleet management delivering real-time two-way M2M connectivity. Please feel free to check our solutions here."
				/>
				<Feature
					iconURL={idea}
					title="Machine Building"
					text="In designing and manufacturing of high-tech electronics we specialize also in miniaturization and low-power-consumption GPS devices such as tracking devices for fleets of vehicles with applications for vehicle telematics and fleet management delivering real-time two-way M2M connectivity. Please feel free to check our solutions here."
				/>
				<Feature
					iconURL={cpu}
					title="Custom Electronics"
					text="AI algorithms are implemented more and more in the field of industrial automation. For instance, the quality control of your production line requires machine vision control systems for the inspection of goods and thus implements machine learning algorithms. With our experiences in AI programming across various applications, we increase productivity and eradicate unnecessary waste, in order to guarantee the optimization of your production processes."
				/>
			</div>
		</div>
	);
}

export default WhatWeDo;
