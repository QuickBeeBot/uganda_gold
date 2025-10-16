// src/pages/FAQSupport.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQSupport = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  // FAQ Data Structure
  const faqSections = [
    {
      title: t('faqSection1Title'),
      questions: [
        { q: t('faqQ1'), a: t('faqA1') },
        { q: t('faqQ2'), a: t('faqA2') },
        { q: t('faqQ3'), a: t('faqA3') },
      ],
    },
    {
      title: t('faqSection2Title'),
      questions: [
        { q: t('faqQ4'), a: t('faqA4') },
        { q: t('faqQ5'), a: t('faqA5') },
        { q: t('faqQ6'), a: t('faqA6') },
      ],
    },
    {
      title: t('faqSection3Title'),
      questions: [
        { q: t('faqQ7'), a: t('faqA7') },
        { q: t('faqQ8'), a: t('faqA8') },
      ],
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
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-gold font-poppins hover:text-white transition"
          >
            ← {t('backToHome')}
          </button>

          <h1 className="font-poppins font-bold text-white text-4xl mb-4">
            {t('faqTitle')}
          </h1>
          <p className={`${styles.paragraph} text-dimWhite mb-10`}>
            {t('faqDescription')}
          </p>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6">
                <h2 className="font-poppins font-semibold text-white text-2xl mb-6">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((item, qIndex) => (
                    <div key={qIndex}>
                      <h3 className="font-poppins font-medium text-gold text-lg mb-2">
                        {item.q}
                      </h3>
                      <p className="text-dimWhite leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <a
              href="mailto:support@golduganda.ug?subject=Investor Support Request"
              className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              {t('faqContactBtn')}
            </a>
            <p className="mt-4 text-dimWhite text-sm">
              {t('faqFooterNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQSupport;