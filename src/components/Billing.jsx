import React from 'react'
import { apple, bill, google, mining } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={mining}
          alt='billing'
          className='w-[80%] h-[80%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Mining <br className='sm:block hidden'/> Concessions.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Secure exclusive rights to explore and develop gold reserves across Uganda's most promising regions.
        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div> */}
      </div>  
    </section>
  )
}

export default Billing
