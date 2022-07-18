/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';
import './feature.css';

function Feature({ iconURL, title, text }) {
	const { ref, inView } = useInView({
		threshold: 0.35
	});
	return (
		<div
			className={
				inView
					? 'smf__Feature-container slide-in-left'
					: 'smf__Feature-container slide-out-right'
			}>
			<div ref={ref} className="smf__Feature">
				<div className="smf__Feature-header">
					<div className="smf__Feature-icon">
						<img src={iconURL} alt="features_icon" />
					</div>
					<h1>{title}</h1>
				</div>
				<div className="smf__Feature-content">
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
}

export default Feature;
