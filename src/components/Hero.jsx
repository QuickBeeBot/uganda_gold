// src/components/Hero.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import { discount, m7, ugandaCoat } from '../assets';
import './Hero.css';

const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Tag Line */}
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>{t('heroTag').split(' ')[0]}</span>{" "}
            {t('heroTag').split(' ').slice(1).join(' ')}
          </p>
        </div>

        {/* Main Title */}
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            {t('heroTitle1')} <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>{t('heroValue')}</span> {" "}
          </h1>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          {t('heroTitle2')}
        </h1>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('heroDescription')}
        </p>

        {/* Stats Row */}
        {/* <div className="flex flex-wrap justify-between mt-10 gap-6">
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-bold text-[#4fc3f7]">31M+</span>
            <span className="text-white text-[16px]">{t('statsMetricTonnes')}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-bold text-[#ffca28]">$12T</span>
            <span className="text-white text-[16px]">{t('statsEstimatedValue')}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-bold text-[#81c784]">100K+</span>
            <span className="text-white text-[16px]">{t('statsFutureJobs')}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-bold text-[#ff7043]">21+</span>
            <span className="text-white text-[16px]">{t('statsMiningLicenses')}</span>
          </div>
        </div> */}
      </div>

      {/* Image Section */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={m7}
          alt='gold mining'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      {/* Mobile Coat of Arms */}
      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <img
          src={ugandaCoat}
          alt='Uganda Coat of Arms'
          className='w-[50px] h-[50px] object-contain'
        />
      </div>
    </section>
  );
};

export default Hero;





// import styles from '../style'
// import { discount, m7, ugandaCoat } from '../assets' // ✅ Add coat of arms here
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
//           <img
//             src={discount}
//             alt='discount'
//             className='w-[32px] h-[32px]'
//           />
//           <p className={`${styles.paragraph} ml-2`}>
//             <span className='text-white'>EXCLUSIVE</span> OPPORTUNITY {" "}
//             <span className='text-white'>In Uganda</span> Gold
//           </p>
//         </div>
//         <div className='flex flex-row justify-between items-center w-full'>
//           <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
//             Uganda’s <br className='sm:block hidden'/> {" "}
//             <span className='text-gradient'>$12 Trillion</span> {" "}
//           </h1>
//           {/* ✅ Replace GetStarted with Coat of Arms */}
//           {/* <div className='ss:flex hidden md:mr-4 mr-0'>
//             <div className="coat-of-arms-wrapper">
//               <img
//                 src={ugandaCoat}
//                 alt='Uganda Coat of Arms'
//                 className='coat-of-arms-image'
//               />
//             </div>
//           </div> */}
//         </div>
//         <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
//           Gold Frontier
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Unlock access to 31 million metric tonnes of high-grade gold reserves through government-backed licenses and strategic partnerships. 
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img
//           src={m7}
//           alt='gold mining'
//           className='w-[100%] h-[100%] relative z-[5]'
//         />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
//       </div>

//       {/* Optional: Show coat of arms on small screens too (instead of GetStarted) */}
      
//       <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
//         <img
//           src={ugandaCoat}
//           alt='Uganda Coat of Arms'
//           className='w-[50px] h-[50px] object-contain'
//         />
//       </div>
     
//     </section>
//   )
// }

// export default Hero