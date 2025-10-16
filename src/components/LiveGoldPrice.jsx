// src/components/LiveGoldPrice.jsx
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './LiveGoldPrice.css';

const LiveGoldPrice = () => {
  const { t } = useContext(LanguageContext);
  const [price, setPrice] = useState(null);
  const [changePercent, setChangePercent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGoldPrice = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-8pgk2tsmgtrf95z-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // GoldAPI returns: { price, ch, chp, timestamp, ... }
      if (data && typeof data.price === 'number') {
        setPrice(data.price);
        setChangePercent(data.chp); // chp = change percent
        setError(false);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (err) {
      console.error('GoldAPI fetch error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice(); // Initial load
    const interval = setInterval(fetchGoldPrice, 60000); // Update every 60s (GoldAPI free tier limit)
    return () => clearInterval(interval);
  }, []);

  // Format price: $2,345.67/oz
  const formattedPrice = price
    ? `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/oz`
    : '...';

  const changeColor = changePercent > 0 ? 'green' : 'red';
  const changeText = changePercent !== null
    ? `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(2)}%`
    : '';

  return (
    <div className="live-gold-price-container">
      <div className="live-gold-price">
        {loading ? (
          <span className="price-text">
            {t('liveGoldPriceLabel')}: ...
          </span>
        ) : error ? (
          <span className="price-text" style={{ color: '#ff6b6b' }}>
            {t('liveGoldPriceLabel')}: Failed to load
          </span>
        ) : (
          <span className="price-text">
            {t('liveGoldPriceLabel')}: <strong>{formattedPrice}</strong>
            {changeText && (
              <span className={`change ${changeColor}`}>
                &nbsp;({changeText})
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default LiveGoldPrice;
















// // src/components/LiveGoldPrice.jsx
// import React, { useState, useEffect } from 'react';
// import './LiveGoldPrice.css';

// const LiveGoldPrice = () => {
//   const [price, setPrice] = useState(null);
//   const [changePercent, setChangePercent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchGoldPrice = async () => {
//     try {
//       // ✅ FREE PUBLIC API — No key needed
//       const response = await fetch('https://api.nomics.com/v1/currencies/ticker?key=298563b7e152d59c942713998a766464&ids=XAU&interval=1d');
      
//       if (!response.ok) throw new Error('Failed to fetch');

//       const data = await response.json();

//       if (data && data.length > 0) {
//         const gold = data[0];
//         setPrice(parseFloat(gold.price));
//         setChangePercent(parseFloat(gold['1d'].price_change_pct) * 100); // Convert to percentage
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error('Gold price error:', err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGoldPrice(); // Initial fetch
//     const interval = setInterval(fetchGoldPrice, 30000); // Update every 30s
//     return () => clearInterval(interval);
//   }, []);

//   const formattedPrice = price ? `$${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}/oz` : '...';
//   const changeColor = changePercent > 0 ? 'green' : 'red';

//   return (
//     <div className="live-gold-price">
//       {loading ? (
//         <span className="price-text">LIVE GOLD PRICE: ...</span>
//       ) : (
//         <span className="price-text">
//           LIVE GOLD PRICE: <strong>{formattedPrice}</strong> 
//           <span className={`change ${changeColor}`}>
//             {changePercent !== null ? `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(1)}%` : ''}
//           </span>
//         </span>
//       )}
//     </div>
//   );
// };

// export default LiveGoldPrice;