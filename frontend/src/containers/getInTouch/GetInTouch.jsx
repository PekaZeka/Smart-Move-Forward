import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Popup, Logo } from '../../components';
import './getInTouch.css';

function GetInTouch() {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.5
	});
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="smf__GetInTouch-Background">
			<div
				ref={ref}
				id="Contact"
				className={
					inView ? 'smf__GetInTouch fade-in' : 'smf__GetInTouch fade-out-fast'
				}>
				<p className="smf__GetInTouch-logoParagraph_top fade-in">
					{t('getInTouch__header')}
				</p>
				<div className="smf__GetInTouch-logo">
					<Logo isClickable />
				</div>
				<p className="smf__GetInTouch-logoParagraph_bot fade-in">
					{t('getInTouch__description')}
				</p>
				<div className="fade-in">
					<button
						type="button"
						className="smf-button scale-up-center"
						onClick={() => setIsOpen(true)}>
						{t('contact__btn')}
					</button>

					<Popup
						open={isOpen}
						onClose={() => setIsOpen(false)}
						keepOpen={() => setIsOpen(true)}
					/>
				</div>
			</div>
		</div>
	);
}

export default GetInTouch;
