// src/components/Footer.jsx
import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import './Footer.css';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>

      {/* 🇺🇬 Uganda Flag Stripe — Top of Footer */}
      <div className="bottom-uganda-flag-stripe">
        <div className="flag-band black"></div>
        <div className="flag-band yellow"></div>
        <div className="flag-band red"></div>
      </div>

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full px-6 sm:px-12 lg:px-20`}>
        {/* Logo + Description — TIGHTENED SPACING HERE */}
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='Uganda Gold Development Authority'
            className='w-[266px] h-[60px] '
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-2`}> {/* 👈 Reduced from mt-4 to mt-2 */}
            Official investment portal for Uganda's historic gold discovery, facilitating ethical and sustainable development of 31 million metric tonnes of gold reserves.       
          </p>
        </div>

        {/* Footer Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' style={{ color: '#72a2b1' }} >
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border + Copyright */}
      <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45] px-6 sm:px-12 lg:px-20'>

        {/* Mobile: centered stack */}
        <div className='md:hidden flex flex-col items-center gap-4'>
          <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
            © 2025 Uganda Gold Development Authority. All Rights Reserved.
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

        {/* Desktop: text centered, icons on right */}
        <div className='hidden md:flex justify-center relative w-full'>
          <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
            © 2025 Uganda Gold Development Authority. All Rights Reserved.
          </p>
          {/* <div className='absolute right-0 flex flex-row'>
            {socialMedia.map((social, index) => (
              <a key={social.id} href={social.url || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
                />
              </a>
            ))}
          </div> */}
        </div>
      </div>

    </section>
  );
};

export default Footer;




// src/components/Footer.jsx
// import React from 'react';
// import styles from '../style';
// import { logo } from '../assets';
// import { footerLinks, socialMedia } from '../constants';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>


//       {/* 🇺🇬 Uganda Flag Stripe — Top of Footer */}
//       <div className="bottom-uganda-flag-stripe">
//         <div className="flag-band black"></div>
//         <div className="flag-band yellow"></div>
//         <div className="flag-band red"></div>
//       </div>

//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//         <div className='flex-1 flex flex-col justify-start mr-10'>
//           <img
//             src={logo}
//             alt='Uganda Gold Development Authority'
//             className='w-[266px] h-[172px] object-contain'
//           />
//           <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
//             Official investment portal for Uganda's historic gold discovery, facilitating ethical and sustainable development of 31 million metric tonnes of gold reserves.       
//           </p>
//         </div>
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

//       <div className='w-full pt-6 border-t-[1px] border-t-[#3F3E45]'>
//   {/* Mobile: centered stack */}
//   <div className='md:hidden flex flex-col items-center gap-4'>
//     <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//       © 2025 Uganda Gold Development Authority. All Rights Reserved.
//     </p>
//     <div className='flex flex-row'>
//       {socialMedia.map((social, index) => (
//         <a key={social.id} href={social.url || '#'} target="_blank" rel="noopener noreferrer">
//           <img
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
//           />
//         </a>
//       ))}
//     </div>
//   </div>

//   {/* Desktop: text centered, icons on right — using absolute or flex trick */}
//   <div className='hidden md:flex justify-center relative w-full'>
//     <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center'>
//       © 2025 Uganda Gold Development Authority. All Rights Reserved.
//     </p>
//     <div className='absolute right-0 flex flex-row'>
//       {socialMedia.map((social, index) => (
//         <a key={social.id} href={social.url || '#'} target="_blank" rel="noopener noreferrer">
//           <img
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
//           />
//         </a>
//       ))}
//     </div>
//   </div>
// </div>


//     </section>
//   );
// };

// export default Footer;



