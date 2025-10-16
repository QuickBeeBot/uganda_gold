// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Components (for homepage)
import {
  Business,
  Areas,
  Footer,
  Hero,
  Navbar,
  Stats,
  InvestmentForm,
  Contacts,
  Discovery,
  LiveGoldPrice,
} from './components';

// Pages (standalone routes)
import MiningAct from './pages/MiningAct';
import InvestmentProspectus from './pages/InvestmentProspectus';
import GeologicalSurvey from './pages/GeologicalSurvey';
import TaxIncentiveGuide from './pages/TaxIncentiveGuide';
import FAQSupport from './pages/FAQSupport';
import DiscoveryScale from './pages/DiscoveryScale';
import InvestmentPathways from './pages/InvestmentPathways';
import TermsOfEngagement from './pages/TermsOfEngagement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AntiBriberyPolicy from './pages/AntiBriberyPolicy';
import ESGFramework from './pages/ESGFramework';
import RegulatoryDisclosures from './pages/RegulatoryDisclosures';

// Styles
import styles from './style';

// Homepage Layout Component
const HomePage = () => (
  <>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <LiveGoldPrice />
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Areas />
        <Business />
        <Discovery />
        <InvestmentForm />
        <Contacts />
        <Footer />
      </div>
    </div>
  </>
);

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className='bg-primary w-full overflow-hidden'>
          <Routes>
            {/* Main scrollable homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Standalone pages */}
            <Route path="/mining-act" element={<MiningAct />} />
            <Route path="/investment-prospectus" element={<InvestmentProspectus />} />
            <Route path="/geological-survey" element={<GeologicalSurvey />} />
            <Route path="/tax-incentive-guide" element={<TaxIncentiveGuide />} />
            <Route path="/faq-support" element={<FAQSupport />} />
            <Route path="/discovery-scale" element={<DiscoveryScale />} />
            <Route path="/investment-pathways" element={<InvestmentPathways />} />
            <Route path="/terms-of-engagement" element={<TermsOfEngagement />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/anti-bribery-policy" element={<AntiBriberyPolicy />} />
            <Route path="/esg-framework" element={<ESGFramework />} />
            <Route path="/regulatory-disclosures" element={<RegulatoryDisclosures />} />

            {/* Add more pages here as needed */}
            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;


