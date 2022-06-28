import React from 'react'
import './whatWeDo.css'
import { Feature } from '../../components'
import {  battery, cable, cpu_tower, gear, screw, pliers} from './imports'

const WhatWeDo = () => {
  return (
    <div className='drlj__WhatWeDo-container'>
      <div className='drlj__WhatWeDo-container_title'>
        <p>EXCELENCE IN MACHINE BUILDING</p>
        <h1>What We Do</h1>
      </div>
      <div className="drlj__WhatWeDo-container_features">
      <Feature iconURL={battery} title="Title1" text="Lored magnam inventore natus? Temporibus, vel voluptate!"/>
      <Feature iconURL={cable} title="Title2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti, odit corrupti consequuntur possimus in a voluptatem quia modi voluptatum porro maiores dolore illo vitae excepturi sint eum harum vero amet? Molestiae giat repudiandae quam porro blanndi inventore, iusto molestias velit recusandae architecto hic quos nisi incidunt saepe obcaecati. Voluptatibus, eaque fugit facere, nemo sint excepturi molestias illum odit dolorum voluptate fugiat, vitae quod magnam inventore natus?"/>
      <Feature iconURL={cpu_tower} title="Title3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti, odit corrupti consequuntur possimus in a voluptatem quia modi voluptatum porro maiores dolore illo vitae excepturi sint eum harum vero amet? Molestiae quod ratione rerum tenetur quas libero itaque illo deleniti fugiat repudiandae quam porro blanditiis, eligendi inventore, iusto molestias velit recusandae architecto hic quos nisi incidunt saepe obcaecati. Voluptatibus, eaque fugit facere, nemo sint excepturi molestias illum odit dolorum voluptate fugiat, vitae quod magnam inventore natus? Temporibus, vel voluptate!"/>
      <Feature iconURL={gear} title="Title4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti, odit corrupti consequuntur possimus in a voluptatem quia modi voluptatum porro maiores dolore illo vitae excepturi sint eum harum vero amet? Molestiae quod ratione rerum tenetur quas libero itaque illo deleniti fugiat repudiandae quam porro blanditiis, eligendi inventore, iusto molestias velit recusandae architecto hic quos nisi incidunt saepe obcaecati. Voluptatibus, eaque fugit facere, nemo sint excepturi molestias illum odit dolorum voluptate fugiat, vitae quod magnam inventore natus? Temporibus, vel voluptate!"/>
      </div>
    </div>
  )
}

export default WhatWeDo

