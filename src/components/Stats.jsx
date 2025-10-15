// src/components/Stats.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style';

const Stats = () => {
  const { t } = useContext(LanguageContext);

  // Map stat IDs to translation keys
  const statItems = [
    { id: 'stats-1', value: '31M+', key: 'statsMetricTonnes' },
    { id: 'stats-2', value: '$12T', key: 'statsEstimatedValue' },
    { id: 'stats-3', value: '100K+', key: 'statsFutureJobs' },
    { id: 'stats-4', value: '21+', key: 'statsMiningLicenses' },
  ];

  return (
    <section id="Numbers" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statItems.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h4
            className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]"
            style={{ color: '#72a2b1' }}
          >
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {t(stat.key)}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;









// import React from 'react'
// import { stats } from '../constants'
// import styles from '../style'

// const Stats = () => {
//   return (
//     <section id="Numbers" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
//       {stats.map((stat) => (
//         <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
//           <h4 
//             className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'
//             style={{ color: '#72a2b1' }}
//           >
//             {stat.value}
//           </h4>
//           {/* <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4> */}
//           <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Stats


