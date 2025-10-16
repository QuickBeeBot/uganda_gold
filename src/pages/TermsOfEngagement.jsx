// src/pages/TermsOfEngagement.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfEngagement = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const section1 = [
    t('terms1_1'),
    t('terms1_2'),
    t('terms1_3'),
    t('terms1_4'),
  ];

  const section2 = [
    t('terms2_1'),
    t('terms2_2'),
    t('terms2_3'),
    t('terms2_4'),
  ];

  const section3 = [
    t('terms3_1'),
    t('terms3_2'),
    t('terms3_3'),
    t('terms3_4'),
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
            {t('termsTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('termsDescription')}
          </p>

          {/* Section 1 */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('termsSection1Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-dimWhite">
              {section1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('termsSection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-dimWhite">
              {section2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('termsSection3Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-dimWhite">
              {section3.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/terms-of-engagement-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('termsDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('termsFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfEngagement;