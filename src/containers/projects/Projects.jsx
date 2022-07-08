import { useInView } from 'react-intersection-observer';
import { Counter } from "../../components";
import './projects.css'

const Projects = () => {
  const [ ref, inView] = useInView({
    threshold: 0.4,
  });
  const [ reftwo, inViewtwo] = useInView({
    threshold: 0.6,
  });
  return (
    <div className='smf__projects' id='Projects'>
      <div className={inView ? 'smf__projects-header slide-in-left':'smf__projects-header'} >
        <h1>
          Projects
        </h1>
        <p ref={ref}>
          Being more than a decade in business we gained trust from numerous companies - satisfied clients that choose to collaborate long-term with us on R & D projects in industrial automation & optimization and software & hardware system integration:
        </p>
      </div>
      <div ref={reftwo} className={inViewtwo ? 'smf__projects-content slide-in-bottom':'smf__projects-content'}>
        <Counter number={20} text='YEARS IN BUSSINES' isCounting={inViewtwo} />
        <Counter number={40} text='PROJECTS DONE' isCounting={inViewtwo} />
        <Counter number={90} text='HAPPY CLIENTS' isCounting={inViewtwo} />
      </div>
    </div>
  )
}

export default Projects