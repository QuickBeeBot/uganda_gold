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
  Contacts,
  Contact,
  Discovery,
  LiveGoldPrice,
  Testimonials 
} from './components'
import styles from './style'
// New Pages
import MiningAct from './pages/MiningAct';
// import Prospectus from './pages/Prospectus'; 
// import FAQ from './pages/FAQ'; 

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <LiveGoldPrice/>
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
          {/* <LiveGoldPrice/> */}
          <Areas/>
          {/* <MiningAreasSection/> */}
          <Business/>
          <Discovery/>
          {/* <Billing/> */}
          {/* <CardDeal/> */}
          {/* <Equipment/> */}
          {/* <Regions/> */}
          <InvestmentForm/>
          <Contacts/>
          {/* <Contact/> */}
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