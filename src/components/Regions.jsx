// src/components/Regions.jsx
import React from 'react';
import { reg1, reg2, reg3, reg4, reg5, reg6 } from '../assets'
import './Regions.css';

const Regions = () => {
  return (
    <section id="regions" className="regions-section">
      <div className="container">
        <div className="regions-header">
          <h2 className="section-title">Key Mining Regions</h2>
          <p className="section-subtitle">
            Uganda's gold deposits are concentrated in these high-potential regions, each
            offering unique geological advantages.
          </p>
        </div>

        <div className="regions-grid">
          {/* Row 1 */}
          <div className="region-card">
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k1.JPEG')" }}
            >
              <img
                src={reg1}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge primary">Primary Zone</span>
            </div>
            <div className="region-content">
              <h3>Karamoja Region</h3>
              <p>
                Northeastern frontier with extensive alluvial deposits and estimated 14M metric tonnes of reserves. Ideal for large-scale open-pit operations.
              </p>
            </div>
          </div>

          <div className="region-card">
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k2.JPEG')" }}
            >
              <img
                src={reg2}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge active">Active Mining</span>
            </div>
            <div className="region-content">
              <h3>Mubende District</h3>
              <p>
                Historic gold mining area with proven high-grade veins (avg. 18g/ton). Existing infrastructure supports immediate production.
              </p>
            </div>
          </div>

          <div className="region-card">
            
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k3.JPEG')" }}
            >
              <img
                src={reg3}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge purity">High Purity</span>
            </div>
            <div className="region-content">
              <h3>Busia Corridor</h3>
              <p>
                Border region with Kenya showing exceptional purity levels (22–24K). Artisanal heritage now transitioning to industrial operations.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="region-card">
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k4.JPEG')" }}
            >
              <img
                src={reg4}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge reef">Reef Deposits</span>
            </div>
            <div className="region-content">
              <h3>Buhweju District</h3>
              <p>
                Western Uganda's gold heartland with reef deposits at shallow depths (50–150m). 8 active licenses available for joint ventures.
              </p>
            </div>
          </div>

          <div className="region-card">
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k5.JPEG')" }}
            >
              <img
                src={reg5}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge green">Greenfield</span>
            </div>
            <div className="region-content">
              <h3>Kassanda Belt</h3>
              <p>
                Emerging greenfield site with multi-ounce pockets detected. New geophysical data reveals untapped potential.
              </p>
            </div>
          </div>

          <div className="region-card">
            <div
              className="region-image"
              style={{ backgroundImage: "url('images/a_k6.JPG')" }} // Fixed path
            >
              <img
                src={reg6}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
              />
              <span className="region-badge tech">High-Tech</span>
            </div>
            <div className="region-content">
              <h3>Western Uganda</h3>
              <p>
                Volcanic belt with complex mineralization. Requires advanced extraction tech but offers exceptional long-term yields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;