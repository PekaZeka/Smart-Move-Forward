import { useInView } from 'react-intersection-observer';
import { Counter } from '../../components';
import './projects.css';

function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.4
	});
	return (
		<div className="smf__projects" id="Projects">
			<div
				className={
					inView
						? 'smf__projects-header fade-in'
						: 'smf__projects-header fade-out-fast'
				}>
				<h1>Projects</h1>
				<p ref={ref}>
					Being more than a decade in business we gained trust from numerous
					companies - satisfied clients that choose to collaborate long-term
					with us on R & D projects in industrial automation & optimization and
					software & hardware system integration:
				</p>
			</div>
			<div className="smf__projects-content">
				<Counter number={20} text="YEARS IN BUSSINES" />
				<Counter number={40} text="PROJECTS DONE" />
				<Counter number={90} text="HAPPY CLIENTS" />
			</div>
		</div>
	);
}

export default Projects;
