// src/pages/TaxIncentiveGuide.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TaxIncentiveGuide = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const taxIncentives = [
    t('taxIncentive1'),
    t('taxIncentive2'),
    t('taxIncentive3'),
    t('taxIncentive4'),
  ];

  const eligibilityCriteria = [
    t('taxCriteria1'),
    t('taxCriteria2'),
    t('taxCriteria3'),
    t('taxCriteria4'),
  ];

  const complianceRequirements = [
    t('taxCompliance1'),
    t('taxCompliance2'),
    t('taxCompliance3'),
    t('taxCompliance4'),
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <section className={`${styles.paddingX} py-16 bg-primary`}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-gold font-poppins hover:text-white transition"
          >
            ← {t('backToHome')}
          </button>

          <h1 className="font-poppins font-bold text-white text-4xl mb-4">
            {t('taxGuideTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('taxGuideDescription')}
          </p>

          {/* Section 1: Key Tax Incentives */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('taxSection1Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {taxIncentives.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 2: Eligibility Criteria */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('taxSection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {eligibilityCriteria.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: Compliance Requirements */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('taxSection3Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {complianceRequirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/tax-incentive-guide-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('taxDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('taxFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TaxIncentiveGuide;