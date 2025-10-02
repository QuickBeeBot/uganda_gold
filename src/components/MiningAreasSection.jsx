// MiningAreasSection.jsx
import React from 'react';
import './MiningAreasSection.css';

const MiningAreasSection = () => {
  return (
    <section className="mining-areas-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">Key Mining Areas in Uganda</h2>
            <p className="section-description">
              Uganda possesses significant mineral resources across its diverse regions. 
              The country's mining sector is strategically positioned for growth with rich 
              deposits of gold, cobalt, copper, and other valuable minerals. Key exploration 
              and mining activities are concentrated in the following regions:
            </p>
            <ul className="mining-areas-list">
              <li><span className="gold-dot"></span> Karamoja Region - Gold and copper deposits</li>
              <li><span className="gold-dot"></span> Mubende District - Major gold mining hub</li>
              <li><span className="gold-dot"></span> Busia Corridor - Gold-rich geological belt</li>
              <li><span className="gold-dot"></span> Buhweju District - Emerging mineral exploration</li>
              <li><span className="gold-dot"></span> Kassanda Belt - Significant gold discoveries</li>
              <li><span className="gold-dot"></span> Western Uganda - Diverse mineral resources</li>
            </ul>
          </div>
          <div className="map-container">
            <div className="map-wrapper">
              <div className="map-placeholder">
                <div className="map-title">Uganda Mining Regions</div>
                <div className="map-markers">
                  {/* Karamoja Region */}
                  <div className="marker" style={{top: '25%', left: '75%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Karamoja</div>
                  </div>
                  
                  {/* Mubende District */}
                  <div className="marker" style={{top: '55%', left: '40%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Mubende</div>
                  </div>
                  
                  {/* Busia Corridor */}
                  <div className="marker" style={{top: '70%', left: '15%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Busia</div>
                  </div>
                  
                  {/* Buhweju District */}
                  <div className="marker" style={{top: '65%', left: '35%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Buhweju</div>
                  </div>
                  
                  {/* Kassanda Belt */}
                  <div className="marker" style={{top: '58%', left: '38%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Kassanda</div>
                  </div>
                  
                  {/* Western Uganda */}
                  <div className="marker" style={{top: '50%', left: '25%'}}>
                    <div className="marker-pin"></div>
                    <div className="marker-label">Western</div>
                  </div>
                </div>
                <div className="map-legend">
                  <div className="legend-item">
                    <div className="legend-color"></div>
                    <span>Gold Deposits</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color copper"></div>
                    <span>Copper Deposits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiningAreasSection;