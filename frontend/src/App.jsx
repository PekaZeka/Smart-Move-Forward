/* eslint-disable react/jsx-filename-extension */
import { ScrollToTop } from './components';
import { useState, useEffect } from 'react';
import { Logo } from './components';
import {
	ContactInfo,
	Projects,
	Footer,
	GetInTouch,
	Header,
	WhatWeDo
} from './containers';
import './app.css';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div>
			{loading ? (
				<div className="loading ">
					<div className="smf__Logo-container slide-in-left">
						<Logo gear1="gear1 rotate-center" gear2="gear2 rotate-center" />
					</div>
				</div>
			) : (
				<div className="App">
					<Header />
					<div className="gradient__bg">
						<WhatWeDo />
						<Projects />
					</div>
					<div className="solid__bg">
						<GetInTouch />
						<ContactInfo />
						<Footer />
						<ScrollToTop />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
