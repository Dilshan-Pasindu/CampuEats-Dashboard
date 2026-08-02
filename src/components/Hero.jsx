import './Hero.css';

function Hero() {
  return (
    <section className="premium-hero">

      {/* CSS background decorations */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-ring hero-ring-1" aria-hidden="true" />
      <div className="hero-ring hero-ring-2" aria-hidden="true" />
      <div className="hero-ring hero-ring-3" aria-hidden="true" />

      {/* Floating food emoji orbs */}
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-1">🍔</div>
        <div className="orb orb-2">🍕</div>
        <div className="orb orb-3">🍜</div>
        <div className="orb orb-4">🥗</div>
        <div className="orb orb-5">🍣</div>
        <div className="orb orb-6">🧁</div>
        <div className="orb orb-7">🥪</div>
        <div className="orb orb-8">☕</div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Campus Food Made Easy
        </div>

        <h1 className="hero-title">YOUR FAVORITE<br/>CAMPUS CRAVINGS!</h1>

        <p className="hero-subtitle">
          Fresh, delicious meals served hot — right on campus.<br/>
          Order in minutes, enjoy in seconds.
        </p>

        <a href="#products" className="hero-btn">
          See our delicious menu
          <span className="arrow">→</span>
        </a>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">50+</span>
            <span className="hero-stat-label">Menu Items</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">15 min</span>
            <span className="hero-stat-label">Avg. Ready Time</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">4.9★</span>
            <span className="hero-stat-label">Campus Rating</span>
          </div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="wave-container" aria-hidden="true">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#141417" fillOpacity="1" d="M0,60L60,53C120,47,240,33,360,37C480,40,600,60,720,65C840,70,960,60,1080,53C1200,47,1320,47,1380,47L1440,47L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"/>
        </svg>
      </div>

    </section>
  );
}

export default Hero;
