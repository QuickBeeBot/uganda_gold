import React from 'react'
import { ug_districts2, ug2, ug3, uganda, Ankole, joint } from '../assets'
import Button from './Button'
import './MiningAreasSection.css';
import styles, { layout } from '../style'

const Areas = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        {/* <h2 className={styles.heading2}>Key Mining Areas <br className='sm:block hidden'/>in Uganda.</h2> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          
        </p>
        <div className="text-content">
            <h2 className="section-title">Key Mining Areas in Uganda</h2>
            <p className="section-description">
              Uganda possesses significant mineral resources across its diverse regions. 
              The country's mining sector is strategically positioned for growth with rich 
              deposits of gold, cobalt, copper, and other valuable minerals. Key exploration 
              and mining activities are concentrated in the following regions:
            </p>
            <ul className="mining-areas-list" style={{ color: 'white' }}>
              <li><span className="gold-dot"></span> Karamoja Region - Gold and copper deposits</li>
              <li><span className="gold-dot"></span> Mubende District - Major gold mining hub</li>
              <li><span className="gold-dot"></span> Busia Corridor - Gold-rich geological belt</li>
              <li><span className="gold-dot"></span> Buhweju District - Emerging mineral exploration</li>
              <li><span className="gold-dot"></span> Kassanda Belt - Significant gold discoveries</li>
              <li><span className="gold-dot"></span> Western Uganda - Diverse mineral resources</li>
            </ul>
          </div>
        {/* <Button styles='mt-10'/> */}
      </div>
      <div className={layout.sectionImg}>
        <img
          src={ug_districts2}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default Areas
