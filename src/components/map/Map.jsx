import './map.css';
import { useInView } from 'react-intersection-observer';

function Map() {
	const { ref, inView } = useInView({
		threshold: 0.25
	});
	return (
		<div
			ref={ref}
			className={inView ? 'smf__Map fade-in' : 'smf__Map fade-out-fast'}>
			<iframe
				title="GoogleMap"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11202.19230918938!2d19.89372066977539!3d45.418452000000016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38fb47db734b72af!2sSMART%20MOVE%20FORWARD!5e0!3m2!1ssr!2srs!4v1656612864233!5m2!1ssr!2srs"
				frameBorder="0"
			/>
		</div>
	);
}

export default Map;
