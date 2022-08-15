/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactDom from 'react-dom';
import axios from 'axios';
import close from '../../assets/close.png';
import paperPlane from '../../assets/paperPlane.png';
import './popup.css';

function Popup({ open, onClose, keepOpen }) {
	const { t } = useTranslation();
	const [sent, setSent] = useState(false);
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleSend = async (event) => {
		event.preventDefault();
		setSent(true);
		try {
			await axios.post('http://localhost:3001/send_mail', {
				name,
				mail,
				phone,
				message
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const timeout = sent
			? setTimeout(() => {
					onClose();
					setSent(false);
			  }, 3000)
			: keepOpen;
		const keyDownHandler = (event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onClose();
			}
			if (event.key === 'Tab') {
				event.preventDefault();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
			clearTimeout(timeout);
		};
	}, [onClose, keepOpen, sent]);
	if (open) {
		document.body.classList.add('active-Popup');
	} else {
		document.body.classList.remove('active-Popup');
		return null;
	}
	return ReactDom.createPortal(
		<>
			<div onClick={onClose} className="smf__popup-overlay" />
			<div className="smf__popup-content">
				{!sent && (
					<button
						type="button"
						className="smf__popup-closeBtn scale-up-center"
						onClick={onClose}>
						<img src={close} className="smf__popup-closeImg" alt="close icon" />
					</button>
				)}
				<div className="smf__popup-content_form">
					{!sent ? (
						<>
							<h2>{t('popup__header')}</h2>
							<form
								onSubmit={handleSend}
								className="smf__popup-content_inputs"
								autoComplete="off"
								spellCheck="false">
								<input
									type="name"
									name="name"
									placeholder={t('popup__name')}
									value={name}
									required="true"
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type="email"
									name="email"
									placeholder={t('popup__email')}
									value={mail}
									required="true"
									onChange={(e) => setMail(e.target.value)}
								/>
								<input
									onKeyPress={(event) => {
										if (!/[0-9 +/-]/.test(event.key)) {
											event.preventDefault();
										}
									}}
									type="tel"
									name="phone"
									placeholder={t('popup__phone')}
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
								<textarea
									placeholder={t('popup__message')}
									name="textarea"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<button
									onSubmit={keepOpen}
									type="submit"
									className="smf__popup-sendBtn scale-up-center">
									<img
										src={paperPlane}
										className="smf__popup-paperPlane"
										alt="paperPlane"
									/>
									{t('popup__btn')}
								</button>
							</form>
						</>
					) : (
						<h1 className="smf_popup-content_form-sent">
							{t('popup__tyMsg')}
						</h1>
					)}
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
export default Popup;
