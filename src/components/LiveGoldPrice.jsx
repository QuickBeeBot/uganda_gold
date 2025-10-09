// src/components/LiveGoldPrice.jsx
import React, { useState, useEffect } from 'react';
import './LiveGoldPrice.css';

const LiveGoldPrice = () => {
  const [price, setPrice] = useState(null);
  const [changePercent, setChangePercent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGoldPrice = async () => {
    try {
      // ✅ FREE PUBLIC API — No key needed
      const response = await fetch('https://api.nomics.com/v1/currencies/ticker?key=298563b7e152d59c942713998a766464&ids=XAU&interval=1d');
      
      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();

      if (data && data.length > 0) {
        const gold = data[0];
        setPrice(parseFloat(gold.price));
        setChangePercent(parseFloat(gold['1d'].price_change_pct) * 100); // Convert to percentage
      }

      setLoading(false);
    } catch (err) {
      console.error('Gold price error:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice(); // Initial fetch
    const interval = setInterval(fetchGoldPrice, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const formattedPrice = price ? `$${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}/oz` : '...';
  const changeColor = changePercent > 0 ? 'green' : 'red';

  return (
    <div className="live-gold-price">
      {loading ? (
        <span className="price-text">LIVE GOLD PRICE: ...</span>
      ) : (
        <span className="price-text">
          LIVE GOLD PRICE: <strong>{formattedPrice}</strong> 
          <span className={`change ${changeColor}`}>
            {changePercent !== null ? `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(1)}%` : ''}
          </span>
        </span>
      )}
    </div>
  );
};

export default LiveGoldPrice;