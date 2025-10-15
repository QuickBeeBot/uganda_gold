// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { close, logo, menu, ugandaCoat } from '../assets';
import './Navbar.css';

const Navbar = () => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentLang = languages.find(l => l.code === lang);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='w-full flex py-6 items-center navbar relative z-50'>
      <div className='flex w-full px-6 sm:px-12 lg:px-20 justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <img 
            src={logo} 
            alt='Uganda Gold Authority' 
            className='w-[254px] h-[52px]'
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className='list-none hidden sm:flex justify-center items-center flex-1'>
          {['home', 'Numbers', 'InvestmentPaths', 'MiningAreas', 'contact'].map((key, i) => (
            <li
              key={key}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                i === 4 ? 'mr-0' : 'mr-10'
              } text-white`}
            >
              <a href={`#${key}`}>{t(key)}</a>
            </li>
          ))}
        </ul>

        {/* Right: Language Dropdown + Mobile Toggle + Coat */}
        <div className='flex items-center gap-4'>
          {/* Language Dropdown (Desktop) */}
          <div className='hidden sm:flex language-dropdown'>
            <button
              className='language-toggle'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              {currentLang?.name || 'Language'}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <ul className={`language-menu ${isDropdownOpen ? 'show' : ''}`}>
              {languages.map((lng) => (
                <li
                  key={lng.code}
                  onClick={() => {
                    setLang(lng.code);
                    setIsDropdownOpen(false);
                  }}
                  className={lang === lng.code ? 'active' : ''}
                >
                  {lng.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className='sm:hidden flex items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>

          {/* Uganda Coat of Arms */}
          <img
            src={ugandaCoat}
            alt='Uganda Coat of Arms'
            className='w-[48px] h-[48px] object-contain'
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50 sm:hidden`}
      >
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {['home', 'Numbers', 'InvestmentPaths', 'MiningAreas', 'contact'].map((key, i) => (
            <li
              key={key}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                i === 4 ? 'mb-0' : 'mb-4'
              } text-white`}
            >
              <a href={`#${key}`}>{t(key)}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Uganda Flag Stripe */}
      <div className="uganda-flag-stripe">
        <div className="flag-band black"></div>
        <div className="flag-band yellow"></div>
        <div className="flag-band red"></div>
      </div>
    </nav>
  );
};

export default Navbar;

// Add this at bottom to avoid "languages not defined" error
const languages = [
  { code: 'en', name: 'English 🇬🇧', dir: 'ltr' },
  { code: 'ar', name: 'العربية 🇸🇦', dir: 'rtl' },
  { code: 'zh', name: '中文 🇨🇳', dir: 'ltr' },
  { code: 'fr', name: 'Français 🇫🇷', dir: 'ltr' },
  { code: 'ru', name: 'Русский 🇷🇺', dir: 'ltr' },
];






// src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { close, logo, menu, ugandaCoat } from '../assets';
// import { navLinks } from '../constants';
// import './Navbar.css';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className='w-full flex py-6 items-center navbar relative'>
//       {/* 🔲 Add padding here to create space on left/right */}
//       <div className='flex w-full px-6 sm:px-12 lg:px-20 justify-between items-center'>
//         {/* Left: Logo with space on left (via container padding) */}
//         <div className='flex items-center'>
//           <img 
//             src={logo} 
//             alt='Uganda Gold Authority' 
//             className='w-[254px] h-[52px]'
//           />
//         </div>

//         {/* Center: Desktop Nav Links */}
//         <ul className='list-none hidden sm:flex justify-center items-center flex-1'>
//           {navLinks.map((nav, i) => (
//             <li
//               key={nav.id}
//               className={`font-poppins font-normal cursor-pointer text-[16px] ${
//                 i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
//               } text-white`}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Right: Mobile toggle + Uganda Coat of Arms */}
//         <div className='flex items-center'>
//           {/* Mobile menu button */}
//           <div className='sm:hidden flex items-center mr-4'>
//             <img
//               src={toggle ? close : menu}
//               alt='menu'
//               className='w-[28px] h-[28px] object-contain'
//               onClick={() => setToggle((prev) => !prev)}
//             />
//           </div>

//           {/* Uganda Coat of Arms — will sit inside padded container */}
//           <img
//             src={ugandaCoat}
//             alt='Uganda Coat of Arms'
//             className='w-[48px] h-[48px] object-contain'
//           />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`${
//           toggle ? 'flex' : 'hidden'
//         } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10 sm:hidden`}
//       >
//         <ul className='list-none flex flex-col justify-end items-center flex-1'>
//           {navLinks.map((nav, i) => (
//             <li
//               key={nav.id}
//               className={`font-poppins font-normal cursor-pointer text-[16px] ${
//                 i === navLinks.length - 1 ? 'mb-0' : 'mb-4'
//               } text-white`}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* 🇺🇬 UGANDA FLAG STRIPE — BELOW NAVBAR */}
//       <div className="uganda-flag-stripe">
//         <div className="flag-band black"></div>
//         <div className="flag-band yellow"></div>
//         <div className="flag-band red"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

