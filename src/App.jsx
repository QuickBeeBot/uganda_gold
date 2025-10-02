import React from 'react'
import { 
  Billing, 
  Business, 
  Areas,
  CardDeal, 
  Clients, 
  MiningAreasSection,
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats,  
  Regions, 
  Equipment,
  InvestmentForm,
  Contact,
  Testimonials 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Areas/>
          {/* <MiningAreasSection/> */}
          <Business/>
          <Billing/>
          <CardDeal/>
          <Equipment/>
          <Regions/>
          <InvestmentForm/>
          <Contact/>
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          {/* <CTA/> */}
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App