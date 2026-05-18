import { LuShieldCheck } from 'react-icons/lu'
import { companyValues } from '../data/siteContent.js'

function About() {
  return (
    <div className="container">
      {/* About Hero Section */}
      <section className="page-hero page-hero--rich" aria-label="About Us Header">
        <span className="eyebrow">Corporate Profile</span>
        <h1 className="page-title">
          Guiding Your <span className="page-title__gradient">Financial Security</span>
        </h1>
        <p className="page-intro">
          NAH44 provides trusted compliance, credit support, and licensing assistance. 
          We eliminate the friction from complex documentation loops.
        </p>
      </section>

      {/* Main Corporate Mission & Description Block */}
      <section className="section-frame" aria-labelledby="mission-title">
        <div className="home-hero-grid" style={{ padding: 0, gap: '40px' }}>
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title" id="mission-title">Transparent Guidance & Advisory Support</h2>
            <p className="section-intro" style={{ marginBottom: '12px' }}>
              NAH44 provides trusted financial and documentation services with customer-focused support. 
              Our mission is to simplify insurance, loan processing, MSME registrations, and business-related 
              services through transparent guidance and reliable assistance.
            </p>
            <p className="section-intro">
              We understand how complex and tiring licensing filings and credit approvals can be. 
              By serving as a dedicated support partner, we manage the heavy lifting so business owners 
              and families can focus on growth and building a secure tomorrow.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="service-card discount-card panel-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="panel-card__image-container" style={{ margin: '10px 0 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <svg className="verified-stamp" viewBox="0 0 200 200" width="130" height="130" style={{ filter: 'drop-shadow(0 8px 24px rgba(255, 142, 0, 0.2))' }}>
                  {/* Outer Dashed Ring */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="url(#stamp-grad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
                  
                  {/* Inner Solid Ring */}
                  <circle cx="100" cy="100" r="75" fill="rgba(15, 23, 42, 0.6)" stroke="url(#stamp-grad)" strokeWidth="3" />
                  
                  {/* Outer Concentric Ring */}
                  <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  
                  {/* Trust Shield Shape */}
                  <path d="M100 50 L135 62 V95 C135 120 120 140 100 148 C80 140 65 120 65 95 V62 L100 50 Z" fill="rgba(0, 163, 255, 0.15)" stroke="url(#stamp-grad)" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Checkmark inside Shield */}
                  <path d="M85 95 L95 105 L118 80" fill="none" stroke="#FF9E00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Decorative Stars */}
                  <g fill="#FF9E00">
                    <circle cx="100" cy="38" r="2" />
                    <circle cx="100" cy="162" r="2" />
                    <circle cx="38" cy="100" r="2" />
                    <circle cx="162" cy="100" r="2" />
                  </g>
                  
                  <defs>
                    <linearGradient id="stamp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF9E00" />
                      <stop offset="100%" stopColor="#00A3FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="panel-card__title" style={{ marginTop: '0' }}>100% Verified Partners</h3>
              <p style={{ fontSize: '0.95rem', margin: '0' }}>
                Directly associated with verified government licensing channels and licensed banking credit desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Value Pillars */}
      <section className="section-frame" aria-labelledby="values-title">
        <div className="section-header-row">
          <span className="eyebrow">Operational Standards</span>
          <h2 className="section-title" id="values-title">Values That Secure Today</h2>
          <p className="section-intro">
            Our advisory process is anchored on complete clarity, fast timelines, and security compliance.
          </p>
        </div>

        <div className="premium-grid">
          {companyValues.map((value) => {
            const Icon = value.icon

            return (
              <article className="service-card" key={value.title}>
                <div className="icon-wrap">
                  <LuShieldCheck size={22} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default About
