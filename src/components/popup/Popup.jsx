/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './popup.css';
import ReactDom from 'react-dom';
import close from '../../assets/close.png';

function Popup({ open, onClose }) {
	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onClose();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [onClose]);
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
				<button type="button" className="smf__popup-closeBtn" onClick={onClose}>
					<img src={close} className="smf__popup-closeImg" alt="close icon" />
				</button>
				<div>
					<h2>Contact us</h2>
					<form
						action="https://formsubmit.co/dadodorich@yahoo.com"
						method="POST"
						className="smf__popup-content_inputs"
						onSubmit="alert(Thanks for your submission)">
						<input type="hidden" name="_captcha" value="false" />
						<input type="name" name="name" placeholder="Name" required="true" />
						<input
							type="email"
							name="email"
							placeholder="Email"
							required="true"
						/>
						<textarea placeholder="Message" name="textarea" />
						<input type="hidden" name="_next" value="false" />
						<button type="submit" className="smf__popup-sendBtn smf-button">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
export default Popup;
