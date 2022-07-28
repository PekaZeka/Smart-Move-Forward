/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import ReactDom from 'react-dom';
import close from '../../assets/close.png';
import paperPlane from '../../assets/paperPlane.png';
import './popup.css';

function Popup({ open, onClose }) {
	useEffect(() => {
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
				<div className="smf__popup-content_form">
					<h2>SEND US A MESSAGE</h2>
					<form
						method="POST"
						className="smf__popup-content_inputs"
						autoComplete="off"
						spellCheck="false">
						<input type="name" name="name" placeholder="Name" required="true" />
						<input
							type="email"
							name="email"
							placeholder="E-mail"
							required="true"
						/>
						<input
							type="tel"
							name="phone"
							placeholder="Phone"
							required="true"
						/>
						<textarea placeholder="Message" name="textarea" />
						<button type="submit" className="smf__popup-sendBtn">
							<img
								src={paperPlane}
								className="smf__popup-paperPlane"
								alt="paperPlane"
							/>
							SEND
						</button>
					</form>
				</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}
export default Popup;
