// src/pages/InvestmentProspectus.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InvestmentProspectus = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const investmentPaths = [
    t('prospectusPath1'),
    t('prospectusPath2'),
    t('prospectusPath3'),
    t('prospectusPath4'),
  ];

  const keyBenefits = [
    t('prospectusBenefit1'),
    t('prospectusBenefit2'),
    t('prospectusBenefit3'),
    t('prospectusBenefit4'),
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
            {t('prospectusTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('prospectusDescription')}
          </p>

          {/* Section 1: Why Invest */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('prospectusSection1Title')}
            </h2>
            <p className="text-dimWhite">
              {t('prospectusSection1Content')}
            </p>
          </div>

          {/* Section 2: Investment Pathways */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('prospectusSection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {investmentPaths.map((path, i) => (
                <li key={i}>{path}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: Key Benefits */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('prospectusSection3Title')}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-dimWhite">
              {keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/investment-prospectus-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('prospectusDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('prospectusFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InvestmentProspectus;