// src/pages/InvestmentPathways.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InvestmentPathways = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const pathways = [
    {
      title: t('pathway1Title'),
      desc: t('pathway1Desc'),
      minInvestment: t('pathway1MinInvestment'),
      timeline: t('pathway1Timeline'),
    },
    {
      title: t('pathway2Title'),
      desc: t('pathway2Desc'),
      minInvestment: t('pathway2MinInvestment'),
      timeline: t('pathway2Timeline'),
    },
    {
      title: t('pathway3Title'),
      desc: t('pathway3Desc'),
      minInvestment: t('pathway3MinInvestment'),
      timeline: t('pathway3Timeline'),
    },
    {
      title: t('pathway4Title'),
      desc: t('pathway4Desc'),
      minInvestment: t('pathway4MinInvestment'),
      timeline: t('pathway4Timeline'),
    },
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
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-gold font-poppins hover:text-white transition"
          >
            ← {t('backToHome')}
          </button>

          <h1 className="font-poppins font-bold text-white text-4xl mb-4 text-center">
            {t('pathwaysTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-12 text-center max-w-3xl mx-auto`}>
            {t('pathwaysDescription')}
          </p>

          {/* Pathways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 hover:border-gold transition"
              >
                <div className="mb-4">
                  <h3 className="font-poppins font-bold text-white text-xl mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-dimWhite text-sm mb-3">
                    {pathway.desc}
                  </p>
                </div>
                <div className="flex justify-between text-dimWhite text-sm">
                  <span>{pathway.minInvestment}</span>
                  <span>{pathway.timeline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
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
              {t('pathwaysCTA')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('pathwaysFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InvestmentPathways;