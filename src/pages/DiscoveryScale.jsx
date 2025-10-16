// src/pages/DiscoveryScale.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DiscoveryScale = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const facts = [
    t('discoveryFact1'),
    t('discoveryFact2'),
    t('discoveryFact3'),
    t('discoveryFact4'),
  ];

  const impacts = [
    t('discoveryImpact1'),
    t('discoveryImpact2'),
    t('discoveryImpact3'),
    t('discoveryImpact4'),
  ];

  const science = [
    t('discoveryScience1'),
    t('discoveryScience2'),
    t('discoveryScience3'),
    t('discoveryScience4'),
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
            {t('discoveryTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('discoveryDescription')}
          </p>

          {/* Section 1: Unprecedented Scale */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('discoverySection1Title')}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-dimWhite">
              {facts.map((fact, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gold mr-3 mt-1">•</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Global Significance */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('discoverySection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {impacts.map((impact, i) => (
                <li key={i}>{impact}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: Scientific Validation */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('discoverySection3Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {science.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#InvestmentPaths"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('InvestmentPaths');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('discoveryCTA')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('discoveryFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DiscoveryScale;