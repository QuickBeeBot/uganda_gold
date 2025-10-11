// src/pages/MiningAct.jsx
import React from 'react';
import styles from '../style';

const MiningAct = () => {
  return (
    <section className={`${styles.paddingX} py-16`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-white text-4xl mb-4">
            The Uganda Mining Act, 2024
          </h1>
          <p className={`${styles.paragraph} text-dimWhite`}>
            Official legislation governing mineral rights, licensing, environmental safeguards, and investor obligations in Uganda's gold sector.
          </p>
        </div>

        <div className="bg-[#00040f] border border-[#3F3E45] rounded-xl p-6 mb-8">
          <h2 className="font-poppins font-semibold text-white text-2xl mb-4">
            Key Provisions
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-dimWhite">
            <li>Streamlined licensing for gold exploration and extraction</li>
            <li>Mandatory environmental impact assessments (EIA)</li>
            <li>30% local equity participation requirement</li>
            <li>Tax holidays for capital-intensive projects</li>
            <li>Zero tolerance for illegal mining and smuggling</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="/documents/mining-act-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
          >
            Download Full PDF (12.4 MB)
          </a>
          <p className="mt-4 text-dimWhite text-sm">
            Last updated: October 2025 | Published by Ministry of Energy & Mineral Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiningAct;