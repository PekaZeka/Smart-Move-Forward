import './whatWeDo.css'
import { Feature } from '../../components'
import {  idea, cable, cpu, machine} from './imports'
import { useInView } from 'react-intersection-observer';

const WhatWeDo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div  className='smf__WhatWeDo-container' id='WhatWeDo'>
      <div ref={ref} className={inView?'smf__WhatWeDo-container_title slide-in-left':'smf__WhatWeDo-container_title'}>
        <p>EXCELENCE IN MACHINE MANUFACTURING</p>
        <h1>What We Do</h1>
      </div>
      <div className="smf__WhatWeDo-container_features">
      <Feature iconURL={cable} title="Control Systems" text="We offer engineering and manufacturing of cost-effective advanced control systems for demanding processes, ranging from chemical industries to particle physics, with on-site installation and final commissioning. A wide variety of PLCs and SCADA packages are available to match your specific needs." />
      <Feature iconURL={machine} title="Industrial Automation" text="In designing and manufacturing of high-tech electronics we specialize also in miniaturization and low-power-consumption GPS devices such as tracking devices for fleets of vehicles with applications for vehicle telematics and fleet management delivering real-time two-way M2M connectivity. Please feel free to check our solutions here."/>
      <Feature iconURL={idea} title="Machine Building" text="In designing and manufacturing of high-tech electronics we specialize also in miniaturization and low-power-consumption GPS devices such as tracking devices for fleets of vehicles with applications for vehicle telematics and fleet management delivering real-time two-way M2M connectivity. Please feel free to check our solutions here."/>
      <Feature iconURL={cpu} title="Custom Electronics" text="AI algorithms are implemented more and more in the field of industrial automation. For instance, the quality control of your production line requires machine vision control systems for the inspection of goods and thus implements machine learning algorithms. With our experiences in AI programming across various applications, we increase productivity and eradicate unnecessary waste, in order to guarantee the optimization of your production processes."/>
      </div>
    </div>
  )
}

export default WhatWeDo

