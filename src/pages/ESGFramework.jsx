// src/pages/ESGFramework.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ESGFramework = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const environmental = [
    t('esgEnv1'),
    t('esgEnv2'),
    t('esgEnv3'),
    t('esgEnv4'),
  ];

  const social = [
    t('esgSocial1'),
    t('esgSocial2'),
    t('esgSocial3'),
    t('esgSocial4'),
  ];

  const governance = [
    t('esgGov1'),
    t('esgGov2'),
    t('esgGov3'),
    t('esgGov4'),
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
            {t('esgTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('esgDescription')}
          </p>

          {/* Environmental */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('esgSection1Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {environmental.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('esgSection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {social.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Governance */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('esgSection3Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {governance.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="text-center">
            <a
              href="/documents/esg-framework-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('esgDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('esgFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ESGFramework;