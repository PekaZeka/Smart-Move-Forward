import { Counter } from "../../components";
import './projects.css'

const Projects = () => {
  return (
    <div className='smf__projects' id='Projects'>
      <div className='smf__projects-header slide-in-left'>
        <h1>
          Projects
        </h1>
        <p>
          Being more than a decade in business we gained trust from numerous companies - satisfied clients that choose to collaborate long-term with us on R & D projects in industrial automation & optimization and software & hardware system integration:
        </p>
      </div>
      <div className='smf__projects-content slide-in-bottom'>
        <Counter number={20} text='YEARS IN BUSSINES' />
        <Counter number={40} text='PROJECTS DONE' />
        <Counter number={90} text='HAPPY CLIENTS' />
      </div>
    </div>
  )
}

export default Projects