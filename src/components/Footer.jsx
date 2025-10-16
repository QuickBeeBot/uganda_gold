// src/components/Footer.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';
import { logo } from '../assets';
import './Footer.css';

// Import socialMedia if it's in constants
import { socialMedia } from '../constants';

const Footer = () => {
  const { t } = useContext(LanguageContext);

  // Define links with paths
  const footerLinkGroups = [
    {
      title: t('footerInvestorResources'),
      links: [
        { name: t('footerMiningAct'), path: '/mining-act' },
        { name: t('footerInvestmentProspectus'), path: '/investment-prospectus' },
        { name: t('footerGeologicalSurvey'), path: '/geological-survey' },
        { name: t('footerTaxIncentives'), path: '/tax-incentive-guide'  },
        { name: t('footerFAQ'), path: '/faq-support' },
      ],
    },
    {
      title: t('footerQuickNavigation'),
      links: [
        { name: t('footerDiscovery'), path: '/discovery-scale' },
        { name: t('footerInvestmentPathways'), path: '#' },
        { name: t('footerMiningRegions'), path: '#' },
        { name: t('footerTestimonials'), path: '#' },
        { name: t('footerContactAuthority'), path: '#' },
      ],
    },
    {
      title: t('footerLegalCompliance'),
      links: [
        { name: t('footerTerms'), path: '#' },
        { name: t('footerPrivacy'), path: '#' },
        { name: t('footerAntiBribery'), path: '#' },
        { name: t('footerESG'), path: '#' },
        { name: t('footerDisclosures'), path: '#' },
      ],
    },
  ];

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
                    className={`font-poppins font-normal text-[16px] leading-[24px] ${linkIndex !== group.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    <a
                      href={link.path}
                      className="text-dimWhite hover:text-secondary cursor-pointer"
                      // Open external links in new tab if needed (not for /mining-act)
                    >
                      {link.name}
                    </a>
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

// const Footer = () => {
//   const { t } = useContext(LanguageContext);

//   // Localized footer links structure
//   const footerLinks = [
//     {
//       title: t('footerInvestorResources'),
//       links: [
//         { name: t('footerMiningAct') },
//         { name: t('footerInvestmentProspectus') },
//         { name: t('footerGeologicalSurvey') },
//         { name: t('footerTaxIncentives') },
//         { name: t('footerFAQ') },
//       ],
//     },
//     {
//       title: t('footerQuickNavigation'),
//       links: [
//         { name: t('footerDiscovery') },
//         { name: t('footerInvestmentPathways') },
//         { name: t('footerMiningRegions') },
//         { name: t('footerTestimonials') },
//         { name: t('footerContactAuthority') },
//       ],
//     },
//     {
//       title: t('footerLegalCompliance'),
//       links: [
//         { name: t('footerTerms') },
//         { name: t('footerPrivacy') },
//         { name: t('footerAntiBribery') },
//         { name: t('footerESG') },
//         { name: t('footerDisclosures') },
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
//           {footerLinks.map((link, index) => (
//             <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
//               <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' style={{ color: '#72a2b1' }}>
//                 {link.title}
//               </h4>
//               <ul className='list-none mt-4'>
//                 {link.links.map((item, idx) => (
//                   <li 
//                     key={idx}
//                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${idx !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
//                   >
//                     {item.name}
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
//             {/* Social icons remain unchanged — they're visual */}
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

// // Keep socialMedia import if used
// const socialMedia = [
//   // Your existing social media array — no translation needed
// ];





















// src/components/Footer.jsx
// import React from 'react';
// import styles from '../style';
// import { logo } from '../assets';
// import { footerLinks, socialMedia } from '../constants';
// import './Footer.css';
// import { languages } from '../constants/translations'

// const Footer = () => {
//   return (
//     <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>

//       {/* 🇺🇬 Uganda Flag Stripe — Top of Footer */}
//       <div className="bottom-uganda-flag-stripe">
//         <div className="flag-band black"></div>
//         <div className="flag-band yellow"></div>
//         <div className="flag-band red"></div>
//       </div>

//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-6 sm:px-12 lg:px-20`}>
//         {/* Logo + Description — TIGHTENED SPACING HERE */}
//         <div className='flex-1 flex flex-col justify-start mr-10'>
//           <img
//             src={logo}
//             alt='Uganda Gold Development Authority'
//             className='w-[266px] h-[60px] '
//           />
//           <p className={`${styles.paragraph} max-w-[310px] mt-2`}> {/* 👈 Reduced from mt-4 to mt-2 */}
//             Official investment portal for Uganda's historic gold discovery, facilitating ethical and sustainable development of 31 million metric tonnes of gold reserves.       
//           </p>
//         </div>

//         {/* Footer Links */}
//         <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
//           {footerLinks.map((link) => (
//             <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
//               <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' style={{ color: '#72a2b1' }} >
//                 {link.title}
//               </h4>
//               <ul className='list-none mt-4'>
//                 {link.links.map((item, index) => (
//                   <li 
//                     key={item.name} 
//                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
//                   >
//                     {item.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Border + Copyright */}
//       <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45] px-6 sm:px-12 lg:px-20'>

//         {/* Mobile: centered stack */}
//         <div className='md:hidden flex flex-col items-center gap-4'>
//           <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//             © 2025 Uganda Gold Development Authority. All Rights Reserved.
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

//         {/* Desktop: text centered, icons on right */}
//         <div className='hidden md:flex justify-center relative w-full'>
//           <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//             © 2025 Uganda Gold Development Authority. All Rights Reserved.
//           </p>
          
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Footer;





// export const footerLinks = [
//   {
//     title: "Investor Resources",
//     links: [
//       {
//         name: "Mining Act 2024",
//         link: "/mining-act",
//       },
//       {
//         name: "Investment Prospectus",
//         link: "#",
//       },
//       {
//         name: "Geological Survey Data",
//         link: "#",
//       },
//       {
//         name: "Tax Incentive Guide",
//         link: "#",
//       },
//       {
//         name: "FAQ & Support",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Quick Navigation",
//     links: [
//       {
//         name: "Discovery & Scale",
//         link: "#",
//       },
//       {
//         name: "Investment Pathways",
//         link: "#",
//       },
//       {
//         name: "Mining Regions",
//         link: "#",
//       },
//       {
//         name: "Investor Testimonials",
//         link: "#",
//       },
//       {
//         name: "Contact Authority",
//         link: "#",
//       },
//     ],
//   },
//   {
//     title: "Legal & Compliance",
//     links: [
//       {
//         name: "Terms of Engagement",
//         link: "#",
//       },
//       {
//         name: "Privacy Policy",
//         link: "#",
//       },
//       {
//         name: "Anti-Bribery Policy",
//         link: "#",
//       },
//       {
//         name: "ESG Framework",
//         link: "#",
//       },
//       {
//         name: "Regulatory Disclosures",
//         link: "#",
//       },
//     ],
//   },
// ];