// src/components/Regions.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { mining, joint, equipment, licenses } from '../assets';
import './Regions.css';

const Discovery = () => {
  const { t } = useContext(LanguageContext);

  const regions = [
    {
      id: 1,
      image: mining,
      badge: "Primary Zone",
      badgeClass: "primary",
      title: t('region1Title'),
      desc: t('region1Desc'),
    },
    {
      id: 2,
      image: joint,
      badge: "Active Mining",
      badgeClass: "active",
      title: t('region2Title'),
      desc: t('region2Desc'),
    },
    {
      id: 3,
      image: equipment,
      badge: "High Purity",
      badgeClass: "purity",
      title: t('region3Title'),
      desc: t('region3Desc'),
    },
    {
      id: 4,
      image: licenses,
      badge: "High Purity",
      badgeClass: "purity",
      title: t('region4Title'),
      desc: t('region4Desc'),
    },
  ];

  return (
    <section id="regions" className="regions-section">
      <div className="container">
        <div className="regions-grid">
          {regions.map((region) => (
            <div key={region.id} className="region-card">
              <div className="region-image">
                <img
                  src={region.image}
                  alt={region.title}
                  className="w-[100%] h-[100%] relative z-[5]"
                />
                <span className={`region-badge ${region.badgeClass}`}>
                  {region.badge}
                </span>
              </div>
              <div className="region-content">
                <h3>{region.title}</h3>
                <p>{region.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discovery;










// src/components/Regions.jsx
// import React from 'react';
// import { reg1, reg2, reg3, mining, joint, equipment, licenses } from '../assets'
// import './Regions.css';

// const Discovery = () => {
//   return (
//     <section id="regions" className="regions-section">
//       <div className="container">

//         <div className="regions-grid">
//           {/* Row 1 */}
//           <div className="region-card">
//             <div
//               className="region-image"
//               style={{ backgroundImage: "url('images/a_k1.JPEG')" }}
//             >
//               <img
//                 src={mining}
//                 alt='billing'
//                 className='w-[100%] h-[100%] relative z-[5]'
//               />
//               <span className="region-badge primary">Primary Zone</span>
//             </div>
//             <div className="region-content">
//               <h3>Mining Concessions</h3>
//               <p>
//                 Secure exclusive rights to explore and develop gold reserves across Uganda's most promising regions.
//               </p>
//             </div>
//           </div>

//           <div className="region-card">
//             <div
//               className="region-image"
//               style={{ backgroundImage: "url('images/a_k2.JPEG')" }}
//             >
//               <img
//                 src={joint}
//                 alt='billing'
//                 className='w-[100%] h-[100%] relative z-[5]'
//               />
//               <span className="region-badge active">Active Mining</span>
//             </div>
//             <div className="region-content">
//               <h3>Joint Ventures</h3>
//               <p>
//                 Collaborate with established local operators through equity partnerships and profit-sharing models.
//               </p>
//             </div>
//           </div>

//           <div className="region-card">
            
//             <div
//               className="region-image"
//               style={{ backgroundImage: "url('images/a_k3.JPEG')" }}
//             >
//               <img
//                 src={equipment}
//                 alt='billing'
//                 className='w-[100%] h-[100%] relative z-[5]'
//               />
//               <span className="region-badge purity">High Purity</span>
//             </div>
//             <div className="region-content">
//               <h3>Equipment & Services</h3>
//               <p>
//                 Provide essential mining machinery, technology, and support services to active operations.
//               </p>
//             </div>
//           </div>

//           <div className="region-card">
//             <div className="region-image" style={{ backgroundImage: "url('images/a_k3.JPEG')" }}>
//               <img src={licenses} alt="Refinery operations" className="w-[100%] h-[100%] relative z-[5]" />
//               <span className="region-badge purity">High Purity</span>
//             </div>
//             <div className="region-content">
//               <h3>Mining Licenses & Refining</h3>
//               <p>
//                 Invest in Uganda’s full gold value chain — from licensed mining to high-purity refining.
//               </p>
//             </div>
//           </div>
            
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Discovery;

