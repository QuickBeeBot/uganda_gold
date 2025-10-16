// src/components/Footer.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom'; // ✅ For programmatic navigation
import styles from '../style';
import { logo } from '../assets';
import { socialMedia } from '../constants'; // Make sure this is exported
import './Footer.css';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  // Handle scroll-to-section links
  const handleScrollLink = (sectionId) => {
    navigate('/'); // Go to homepage
    // Scroll after a short delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  // Define footer links with special handling for anchor links
  const footerLinkGroups = [
    {
      title: t('footerInvestorResources'),
      links: [
        { name: t('footerMiningAct'), path: '/mining-act', type: 'route' },
        { name: t('footerInvestmentProspectus'), path: '/investment-prospectus', type: 'route' },
        { name: t('footerGeologicalSurvey'), path: '/geological-survey', type: 'route' },
        { name: t('footerTaxIncentives'), path: '/tax-incentive-guide', type: 'route' },
        { name: t('footerFAQ'), path: '/faq-support', type: 'route' },
      ],
    },
    {
      title: t('footerQuickNavigation'),
      links: [
        { name: t('footerDiscovery'), path: '/discovery-scale', type: 'route' },
        { name: t('footerInvestmentPathways'), path: '/investment-pathways', type: 'route' },
        { name: t('footerMiningRegions'), path: 'MiningAreas', type: 'anchor' }, // ✅ Special
        // { name: t('footerTestimonials'), path: '#', type: 'disabled' },
        { name: t('footerContactAuthority'), path: 'contact', type: 'anchor' }, // ✅ Special
      ],
    },
    {
      title: t('footerLegalCompliance'),
      links: [
        { name: t('footerTerms'), path: '/terms-of-engagement', type: 'route' },
        { name: t('footerPrivacy'), path: '/privacy-policy', type: 'route' },
        { name: t('footerAntiBribery'), path: '/anti-bribery-policy', type: 'route' },
        { name: t('footerESG'), path: '/esg-framework', type: 'route' },
        { name: t('footerDisclosures'), path: '/regulatory-disclosures', type: 'route' },
      ],
    },
  ];

  // Render link based on type
  const renderLink = (link) => {
    if (link.type === 'anchor') {
      return (
        <span
          onClick={() => handleScrollLink(link.path)}
          className="text-dimWhite hover:text-secondary cursor-pointer"
        >
          {link.name}
        </span>
      );
    } else if (link.type === 'route') {
      return (
        <a
          href={link.path}
          className="text-dimWhite hover:text-secondary cursor-pointer"
        >
          {link.name}
        </a>
      );
    } else {
      // Disabled links
      return (
        <span className="text-dimWhite opacity-60 cursor-not-allowed">
          {link.name}
        </span>
      );
    }
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      {/* 🇺🇬 Uganda Flag Stripe */}
      <div className="bottom-uganda-flag-stripe">
        <div className="flag-band black"></div>
        <div className="flag-band yellow"></div>
        <div className="flag-band red"></div>
      </div>

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-6 sm:px-12 lg:px-20`}>
        {/* Logo + Description */}
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='Uganda Gold Development Authority'
            className='w-[266px] h-[60px]'
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-2`}>
            {t('footerDescription')}
          </p>
        </div>

        {/* Footer Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinkGroups.map((group, groupIndex) => (
            <div key={groupIndex} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' style={{ color: '#72a2b1' }}>
                {group.title}
              </h4>
              <ul className='list-none mt-4'>
                {group.links.map((link, linkIndex) => (
                  <li 
                    key={linkIndex}
                    className={`${linkIndex !== group.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border + Copyright */}
      <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45] px-6 sm:px-12 lg:px-20'>
        <div className='md:hidden flex flex-col items-center gap-4'>
          <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
            {t('footerCopyright')}
          </p>
          <div className='flex flex-row'>
            {socialMedia.map((social, index) => (
              <a key={social.id} href={social.url || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                />
              </a>
            ))}
          </div>
        </div>

        <div className='hidden md:flex justify-center relative w-full'>
          <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;












// src/components/Footer.jsx
// import React, { useContext } from 'react';
// import { LanguageContext } from '../context/LanguageContext';
// import styles from '../style';
// import { logo } from '../assets';
// import './Footer.css';

// // Import socialMedia if it's in constants
// import { socialMedia } from '../constants';

// const Footer = () => {
//   const { t } = useContext(LanguageContext);

//   // Define links with paths
//   const footerLinkGroups = [
//     {
//       title: t('footerInvestorResources'),
//       links: [
//         { name: t('footerMiningAct'), path: '/mining-act' },
//         { name: t('footerInvestmentProspectus'), path: '/investment-prospectus' },
//         { name: t('footerGeologicalSurvey'), path: '/geological-survey' },
//         { name: t('footerTaxIncentives'), path: '/tax-incentive-guide'  },
//         { name: t('footerFAQ'), path: '/faq-support' },
//       ],
//     },
//     {
//       title: t('footerQuickNavigation'),
//       links: [
//         { name: t('footerDiscovery'), path: '/discovery-scale' },
//         { name: t('footerInvestmentPathways'), path: '/investment-pathways' },
//         { name: t('footerMiningRegions'), path: '#MiningAreas' },
//         // { name: t('footerTestimonials'), path: '#' },
//         { name: t('footerContactAuthority'), path: '#contact' },
//       ],
//     },
//     {
//       title: t('footerLegalCompliance'),
//       links: [
//         { name: t('footerTerms'), path: '#' },
//         { name: t('footerPrivacy'), path: '#' },
//         { name: t('footerAntiBribery'), path: '#' },
//         { name: t('footerESG'), path: '#' },
//         { name: t('footerDisclosures'), path: '#' },
//       ],
//     },
//   ];

//   return (
//     <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
//       {/* 🇺🇬 Uganda Flag Stripe */}
//       <div className="bottom-uganda-flag-stripe">
//         <div className="flag-band black"></div>
//         <div className="flag-band yellow"></div>
//         <div className="flag-band red"></div>
//       </div>

//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-6 sm:px-12 lg:px-20`}>
//         {/* Logo + Description */}
//         <div className='flex-1 flex flex-col justify-start mr-10'>
//           <img
//             src={logo}
//             alt='Uganda Gold Development Authority'
//             className='w-[266px] h-[60px]'
//           />
//           <p className={`${styles.paragraph} max-w-[310px] mt-2`}>
//             {t('footerDescription')}
//           </p>
//         </div>

//         {/* Footer Links */}
//         <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
//           {footerLinkGroups.map((group, groupIndex) => (
//             <div key={groupIndex} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
//               <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' style={{ color: '#72a2b1' }}>
//                 {group.title}
//               </h4>
//               <ul className='list-none mt-4'>
//                 {group.links.map((link, linkIndex) => (
//                   <li 
//                     key={linkIndex}
//                     className={`font-poppins font-normal text-[16px] leading-[24px] ${linkIndex !== group.links.length - 1 ? 'mb-4' : 'mb-0'}`}
//                   >
//                     <a
//                       href={link.path}
//                       className="text-dimWhite hover:text-secondary cursor-pointer"
//                       // Open external links in new tab if needed (not for /mining-act)
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Border + Copyright */}
//       <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45] px-6 sm:px-12 lg:px-20'>
//         <div className='md:hidden flex flex-col items-center gap-4'>
//           <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//             {t('footerCopyright')}
//           </p>
//           <div className='flex flex-row'>
//             {socialMedia.map((social, index) => (
//               <a key={social.id} href={social.url || '#'} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={social.icon}
//                   alt={social.id}
//                   className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className='hidden md:flex justify-center relative w-full'>
//           <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//             {t('footerCopyright')}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;