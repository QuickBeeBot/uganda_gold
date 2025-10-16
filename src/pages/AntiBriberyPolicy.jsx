// src/pages/AntiBriberyPolicy.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AntiBriberyPolicy = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const principles = [
    t('antiBriberyPrinciple1'),
    t('antiBriberyPrinciple2'),
    t('antiBriberyPrinciple3'),
    t('antiBriberyPrinciple4'),
  ];

  const enforcement = [
    t('antiBriberyEnforcement1'),
    t('antiBriberyEnforcement2'),
    t('antiBriberyEnforcement3'),
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
            {t('antiBriberyTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('antiBriberyDescription')}
          </p>

          {/* Section 1: Policy Statement */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('antiBriberySection1Title')}
            </h2>
            <p className="text-dimWhite">
              {t('antiBriberySection1Content')}
            </p>
          </div>

          {/* Section 2: Key Principles */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('antiBriberySection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {principles.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: Compliance & Enforcement */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('antiBriberySection3Title')}
            </h2>
            <ul className="space-y-2 text-dimWhite">
              {enforcement.map((e, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/anti-bribery-policy-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('antiBriberyDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('antiBriberyFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AntiBriberyPolicy;