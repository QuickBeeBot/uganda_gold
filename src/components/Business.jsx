// src/components/Business.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { star, shield, send } from '../assets'; // ✅ Make sure these are imported
import styles, { layout } from '../style';
import './Business.css';

const GoldButton = ({ children = "Get Started", onClick }) => (
  <button className="btn-gold" onClick={onClick}>
    {children}
  </button>
);

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== 2 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='feature icon'
        className='w-[50%] h-[50%] object-contain feature-icon'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const { t } = useContext(LanguageContext);

  const features = [
    {
      id: "feature-1",
      icon: star,
      title: t('feature1Title'),
      content: t('feature1Content'),
    },
    {
      id: "feature-2",
      icon: shield,
      title: t('feature2Title'),
      content: t('feature2Content'),
    },
    {
      id: "feature-3",
      icon: send,
      title: t('feature3Title'),
      content: t('feature3Content'),
    },
  ];

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 
          className={styles.heading2}
          style={{ color: '#FFD700' }}
        >
          {t('businessTitle')}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('businessDescription')}
        </p>
        <div className='mt-10'>
          {/* <GoldButton /> */}
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;









// src/components/Business.jsx
// import React from 'react';
// import { features } from '../constants';
// import styles, { layout } from '../style';
// import './Business.css'; // Make sure this is imported

// const GoldButton = ({ children = "Get Started", onClick }) => (
//   <button className="btn-gold" onClick={onClick}>
//     {children}
//   </button>
// );

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
//     {/* Icon container with custom icon color */}
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img
//         src={icon}
//         alt='feature icon'
//         className='w-[50%] h-[50%] object-contain feature-icon' // 👈 Custom class
//       />
//     </div>
//     <div className='flex-1 flex flex-col ml-3'>
//       <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
//         {title}
//       </h4>
//       <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
//         {content}
//       </p>
//     </div>
//   </div>
// );

// const Business = () => {
//   return (
//     <section id='features' className={layout.section}>
//       <div className={layout.sectionInfo}>
//         {/* ✅ Gold heading color #FFD700 */}
//         <h2 
//           className={styles.heading2}
//           style={{ color: '#FFD700' }} // 👈 Inline style for gold
//         >
//           The Largest Gold <br className='sm:block hidden' /> Discovery of the Century
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Uganda's historic gold discovery represents one of the largest untapped mineral wealth opportunities in the 21st century, with government-backed investment frameworks and streamlined licensing processes.
//         </p>
//         <div className='mt-10'>
//           {/* <GoldButton /> */}
//         </div>
//       </div>
//       <div className={`${layout.sectionImg} flex-col`}>
//         {features.map((feature, index) => (
//           <FeatureCard key={feature.id} {...feature} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Business;
