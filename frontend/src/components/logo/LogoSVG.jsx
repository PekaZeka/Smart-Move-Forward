import './logo.css';

// eslint-disable-next-line react/prop-types
function LogoSVG({ gear1, gear2 }) {
	return (
		<svg x={0} y={0} viewBox="52.3 -4.5 94 120">
			<path
				className={gear1}
				id="big-gear"
				d="M135.1 51.4c.4-1.5 2-2.4 3.5-2l1.6.4c.3-1.7.5-3.4.7-5.2h-1.7c-1.6 0-2.9-1.2-2.9-2.8s1.3-2.8 2.9-2.8h1.6c-.1-1.8-.4-3.5-.7-5.2l-1.6.4c-1.5.4-3.1-.5-3.5-2s.5-3.1 2-3.5l1.6-.4c-.6-1.7-1.3-3.3-2-4.8l-1.4.8c-1.4.8-3.1.3-3.9-1.1-.8-1.4-.3-3.1 1.1-3.9l1.4-.8c-1-1.4-2-2.8-3.2-4.1l-1.1 1.1c-1.1 1.1-2.9 1.1-4.1 0-1.1-1.1-1.1-2.9 0-4.1l1.1-1.1C125.2 9 123.8 8 122.4 7l-.8 1.4c-.8 1.4-2.5 1.8-3.9 1s-1.8-2.5-1.1-3.9l.8-1.4c-1.6-.8-3.2-1.4-4.8-2l-.4 1.5c-.4 1.5-2 2.4-3.5 2s-2.4-2-2-3.5l.5-1.5c-1.7-.3-3.3-.6-5.1-.7v1.5c0 1.6-1.4 2.9-3 2.9s-3-1.3-3-2.9V0c-1.8.1-3.5.3-5.1.7l.4 1.5c.4 1.5-.5 3.1-2 3.5-1.5.4-3.1-.5-3.5-2l-.4-1.5c-1.7.6-3.3 1.2-4.8 2l.8 1.4c.8 1.4.3 3.1-1.1 3.9-1.4.8-3.1.3-3.9-1L75.6 7c-1.5 1-2.8 2-4.2 3.2l1.1 1.1c1.1 1.1 1.1 2.9 0 4.1-1.1 1.1-2.9 1.1-4.1 0l-1.1-1.1c-1.1 1.3-2.2 2.7-3.2 4.1l1.4.8c1.4.8 1.8 2.5 1.1 3.9-.8 1.4-2.5 1.8-3.9 1l-1.4-.8c-.8 1.6-1.4 3.2-2 4.8l1.6.4c1.5.4 2.4 2 2 3.5-.4 1.5-2 2.4-3.5 2l-1.6-.4c-.3 1.7-.6 3.5-.7 5.2h1.7c1.6 0 2.9 1.2 2.9 2.8s-1.3 2.8-2.9 2.8H57c.1 1.8.3 3.5.7 5.2l1.7-.4c1.5-.4 3.1.5 3.5 2s-.5 3.1-2 3.5l-1.7.5c.6 1.7 1.2 3.3 2 4.9l1.5-.9c1.4-.8 3.1-.3 3.9 1.1.8 1.4.3 3.1-1.1 3.9l-1.5.9c1 1.5 2.1 2.9 3.2 4.2l1.3-1.3c1.1-1.1 2.9-1.1 4.1 0 1.1 1.1 1.1 2.9 0 4.1l-1.3 1.3c1.3 1.2 2.7 2.2 4.2 3.2l.9-1.6c.8-1.4 2.5-1.8 3.9-1.1 1.4.8 1.8 2.5 1.1 3.9l-.9 1.6c1.6.8 3.2 1.5 4.9 2l.5-1.7c.4-1.5 2-2.4 3.5-2s2.4 2 2 3.5l-.5 1.7c1.7.3 3.4.6 5.2.7V82c0-1.6 1.4-2.9 3-2.9s3 1.3 3 2.9v1.8c1.8-.1 3.5-.4 5.2-.7l-.5-1.7c-.4-1.5.5-3.1 2-3.5 1.5-.4 3.1.5 3.5 2l.5 1.7c1.7-.6 3.3-1.3 4.9-2l-.9-1.5c-.8-1.4-.3-3.1 1.1-3.9 1.4-.8 3.1-.3 3.9 1.1l.9 1.5c1.5-1 2.9-2.1 4.2-3.2l-1.2-1.2c-1.1-1.1-1.1-2.9 0-4.1 1.1-1.1 2.9-1.1 4.1 0l1.2 1.2c1.2-1.3 2.2-2.7 3.2-4.2l-1.5-.9c-1.4-.8-1.8-2.5-1.1-3.9.8-1.4 2.5-1.8 3.9-1l1.5.9c.8-1.6 1.4-3.2 2-4.9l-1.6-.4c-1.8-.6-2.7-2.2-2.3-3.7zm-68.5-7.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm53.9-26.4c.8-.8 2.1-.8 2.9 0s.8 2.1 0 2.8c-.8.8-2.1.8-2.9 0-.8-.7-.8-2 0-2.8zM99 7.2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM74.6 17.3c.8-.8 2.1-.8 2.9 0s.8 2.1 0 2.8c-.8.8-2.1.8-2.9 0-.8-.7-.8-2 0-2.8zM77.5 66c-.8.8-2.1.8-2.9 0s-.8-2.1 0-2.8c.8-.8 2.1-.8 2.9 0s.8 2 0 2.8zM99 76.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM123.4 66c-.8.8-2.1.8-2.9 0s-.8-2.1 0-2.8c.8-.8 2.1-.8 2.9 0 .8.7.8 2 0 2.8zM99 70c-15.5 0-28.1-12.6-28.1-28.1S83.5 13.8 99 13.8s28.1 12.6 28.1 28.1S114.5 70 99 70zm32.4-26.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c.1 1.1-.8 2-2 2z"
			/>
			<path
				id="small-gear"
				className={gear2}
				d="M119.7 47.4c.2-.9 1.1-1.4 2-1.2l.9.2c.2-1 .3-1.8.4-3h-1c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h.9c-.1-.9-.2-2-.4-3l-.9.2c-.9.2-1.8-.3-2-1.2s.3-1.8 1.2-2l.9-.2c-.3-1-.7-1.9-1.2-2.8l-.8.5c-.8.5-1.8.2-2.3-.6-.5-.8-.2-1.8.6-2.2l.8-.5L117 26l-.6.6c-.6.6-1.7.6-2.3 0-.6-.6-.6-1.7 0-2.3l.6-.6c-.8-.7-1.6-1.3-2.4-1.8l-.4.8c-.5.8-1.5 1.1-2.3.6-.8-.5-1.1-1.5-.6-2.2l.4-.8c-.9-.4-1.8-.8-2.8-1.1l-.2.9c-.2.9-1.1 1.4-2 1.2-.9-.2-1.4-1.1-1.2-2l.2-.9c-1-.2-1.9-.3-3-.4v.9c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6V18c-.9.1-2 .2-2.9.4l.3.9c.2.9-.3 1.8-1.2 2-.9.2-1.8-.3-2-1.2l-.2-.9c-1 .3-1.9.7-2.8 1.1l.5.8c.5.8.2 1.8-.6 2.2-.8.5-1.8.2-2.3-.6l-.5-.8-2.4 1.8.6.6c.6.6.6 1.7 0 2.3-.6.6-1.7.6-2.3 0l-.6-.6c-.7.8-1.3 1.5-1.8 2.4l.8.5c.8.5 1.1 1.5.6 2.2-.5.8-1.5 1.1-2.3.6l-.8-.5c-.4.9-.8 1.8-1.2 2.8l.9.2c.9.2 1.4 1.1 1.2 2-.2.9-1.1 1.4-2 1.2l-.9-.3c-.2 1-.3 2.1-.4 3h1c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6h-1c.1 1.2.2 2 .4 3l1-.2c.9-.2 1.8.3 2 1.2s-.3 1.8-1.2 2l-1 .3c.3 1 .7 1.9 1.2 2.8l.9-.5c.8-.5 1.8-.2 2.3.6s.2 1.8-.6 2.2l-.9.5 1.8 2.4.7-.7c.6-.6 1.7-.6 2.3 0 .6.6.6 1.7 0 2.3l-.7.8c.8.7 1.6 1.3 2.4 1.8l.5-.8c.5-.8 1.5-1.1 2.3-.6.8.5 1.1 1.5.6 2.2l-.5.9c.9.4 1.8.8 2.8 1.2l.3-1c.2-.9 1.1-1.4 2-1.2s1.4 1.1 1.2 2l-.3 1c1 .2 2.1.3 2.9.4v-1c0-.9.9-1.6 1.8-1.6s1.8.7 1.8 1.6v1c.9-.1 2-.2 2.9-.4l-.3-1c-.2-.9.3-1.8 1.1-2 .9-.2 1.8.3 2 1.2l.3 1c1-.3 1.9-.7 2.8-1.2l-.5-.9c-.5-.8-.2-1.8.6-2.2.8-.5 1.8-.2 2.3.6l.5.9c.8-.6 1.6-1.2 2.4-1.9l-.7-.7c-.6-.6-.6-1.7 0-2.3.6-.6 1.7-.6 2.3 0l.7.7c.7-.8 1.3-1.6 1.8-2.4l-.9-.5c-.8-.5-1.1-1.5-.6-2.2.5-.8 1.5-1.1 2.3-.6l.9.5c.4-.9.8-1.8 1.1-2.8l-.9-.3c-1-.3-1.5-1.2-1.3-2zm-39.3-4.5c-.6 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2s1.2.5 1.2 1.2c-.1.7-.6 1.2-1.2 1.2zm30.9-15.1c.5-.5 1.2-.5 1.6 0 .5.5.5 1.2 0 1.6-.5.5-1.2.5-1.6 0-.4-.4-.4-1.2 0-1.6zM99 22c.6 0 1.2.5 1.2 1.2 0 .6-.5 1.2-1.2 1.2-.6 0-1.2-.5-1.2-1.2S98.3 22 99 22zm-14 5.8c.5-.5 1.2-.5 1.6 0 .5.5.5 1.2 0 1.6-.5.5-1.2.5-1.6 0-.5-.4-.5-1.2 0-1.6zm1.7 27.9c-.5.5-1.2.5-1.6 0-.5-.5-.5-1.2 0-1.6.5-.5 1.2-.5 1.6 0 .4.5.4 1.2 0 1.6zM99 61.5c-.6 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2zm14-5.8c-.5.5-1.2.5-1.6 0-.5-.5-.5-1.2 0-1.6.5-.5 1.2-.5 1.6 0 .4.4.4 1.2 0 1.6zM99 58c-8.9 0-16.1-7.2-16.1-16.1S90.1 25.8 99 25.8s16.1 7.2 16.1 16.1S107.9 58 99 58zm18.6-15.1c-.6 0-1.2-.5-1.2-1.2 0-.6.5-1.2 1.2-1.2.6 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2z"
			/>
			<svg x={45} y={20} viewBox="95 25 125 60">
				<g>
					<g>
						<path
							className="txt"
							d="m130.8 101.3-2.6-2.6v-5.2h5.2v2.6h13v-5.2h-15.7l-2.6-1.9V77.8l2.6-2.7H149l2.6 2.7V83h-5.2v-2.6h-13v5.2h15.7l2.6 2.6v10.5l-2.6 2.6h-18.3z"
							stroke="#b80000"
							stroke-width="1.4"
						/>
						<path
							className="txt"
							d="M155.4 101.3V75.1h5.2l9.1 12.7 9.3-12.7h5v26.1h-5.2V83.7l-6.8 10h-4.4l-7-10v17.6h-5.2z"
							stroke="#b80000"
							stroke-width="1.4"
						/>
						<path
							className="txt"
							d="M187.8 101.3V75.1H210v5.2h-17v5.3h15.7v5.2H193v10.4h-5.2z"
							stroke="#b80000"
							stroke-width="1.4"
						/>
					</g>
				</g>
			</svg>
		</svg>
	);
}

export default LogoSVG;
