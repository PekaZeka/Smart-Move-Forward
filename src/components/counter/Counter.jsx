/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import './counter.css';

function Counter({ number, text }) {
	const { ref, inView } = useInView({
		threshold: 0.4
	});

	const [count, setCount] = useState(1);
	const [plus, setPlus] = useState('');
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true);
		}, 650);

		return () => clearTimeout(timeout);
	}, [show]);

	useEffect(() => {
		if (show && inView) {
			const timer = () => {
				setCount(count + 1);
			};
			if (count >= number) {
				const plus = setPlus('+');
				return plus;
			}
			const interval = setInterval(timer, 800 / number);
			return () => clearInterval(interval);
		}
		setCount(1);
		setPlus('');
		setShow(false);
	}, [count, inView, number, plus, show]);

	return (
		<div ref={ref} className={inView ? 'fade-in' : 'fade-out-fast'}>
			<div className="smf__counter">
				<p>
					{count}
					{plus}
				</p>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default Counter;
