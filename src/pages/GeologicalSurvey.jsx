// src/pages/GeologicalSurvey.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GeologicalSurvey = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const dataCoverage = [
    t('surveyData1'),
    t('surveyData2'),
    t('surveyData3'),
    t('surveyData4'),
  ];

  const resources = [
    t('surveyResource1'),
    t('surveyResource2'),
    t('surveyResource3'),
    t('surveyResource4'),
  ];

  const accessSteps = [
    t('surveyAccess1'),
    t('surveyAccess2'),
    t('surveyAccess3'),
    t('surveyAccess4'),
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
            {t('surveyTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('surveyDescription')}
          </p>

          {/* Section 1: Data Coverage */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('surveySection1Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {dataCoverage.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 2: Available Resources */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('surveySection2Title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-dimWhite">
              {resources.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: How to Access */}
          <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-10">
            <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
              {t('surveySection3Title')}
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-dimWhite">
              {accessSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:data@golduganda.ug?subject=Request for Geological Survey Data Access"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('surveyDownloadBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('surveyFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GeologicalSurvey;