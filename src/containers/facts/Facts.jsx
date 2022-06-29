import React from 'react'
import { Counter } from "../../components";
import './facts.css'

const Facts = () => {
  return (
    <div className='drlj__facts'>
      <div className='drlj__facts-header slide-in-left'>
        <h1>
          Facts
        </h1>
        <p>
          Being more than a decade in business we gained trust from numerous companies - satisfied clients that choose to collaborate long-term with us on R & D projects in industrial automation & optimization and software & hardware system integration:
        </p>
      </div>
      <div className='drlj__facts-content slide-in-bottom'>
        <Counter number={20} text='YEARS IN BUSSINES' />
        <Counter number={40} text='PROJECTS DONE' />
        <Counter number={90} text='HAPPY CLIENTS' />
      </div>
    </div>
  )
}

export default Facts