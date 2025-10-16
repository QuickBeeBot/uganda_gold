// src/pages/RegulatoryDisclosures.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegulatoryDisclosures = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const licensing = [
    t('regulatoryLic1'),
    t('regulatoryLic2'),
    t('regulatoryLic3'),
    t('regulatoryLic4'),
  ];

  const financial = [
    t('regulatoryFin1'),
    t('regulatoryFin2'),
    t('regulatoryFin3'),
    t('regulatoryFin4'),
  ];

  const risks = [
    t('regulatoryRisk1'),
    t('regulatoryRisk2'),
    t('regulatoryRisk3'),
    t('regulatoryRisk4'),
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
            {t('regulatoryTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('regulatoryDescription')}
          </p>

          {/* Licensing & Compliance */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('regulatorySection1Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {licensing.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Financial Transparency */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('regulatorySection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {financial.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Risk Factors */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('regulatorySection3Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {risks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/regulatory-disclosures-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('regulatoryDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('regulatoryFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegulatoryDisclosures;