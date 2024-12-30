# Access Tiers

<div class="hero-container">
  <div class="matrix-bg"></div>
  <div class="hero-content">
    <div class="glitch-text" data-text="ACCESS TIERS">ACCESS TIERS</div>
    <div class="cyber-subtitle">Choose Your Power Level</div>
    <div class="pulse-line"></div>
  </div>
</div>

## Available Tiers

<div class="tiers-grid">
  <div class="tier-card">
    <div class="tier-header">
      <span class="tier-icon">🔵</span>
      <h3>Basic Access</h3>
      <Badge type="info" text="Entry Level" />
    </div>
    <div class="tier-features">
      <div class="feature">
        <span class="icon">✅</span>
        <span>Basic tool access</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Community support</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Standard configs</span>
      </div>
      <div class="feature">
        <span class="icon">❌</span>
        <span>Advanced features</span>
      </div>
      <div class="feature">
        <span class="icon">❌</span>
        <span>Priority support</span>
      </div>
    </div>
    <button class="tier-button" onclick="window.$vueApp.showPricingPopup('Basic')">
      <span class="button-icon">💰</span>
      View Pricing
    </button>
  </div>

  <div class="tier-card">
    <div class="tier-header">
      <span class="tier-icon">⭐</span>
      <h3>Premium Access</h3>
      <Badge type="tip" text="Most Popular" />
    </div>
    <div class="tier-features">
      <div class="feature">
        <span class="icon">✅</span>
        <span>All basic features</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Advanced tools</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Priority support</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Premium configs</span>
      </div>
      <div class="feature">
        <span class="icon">❌</span>
        <span>Custom solutions</span>
      </div>
    </div>
    <button class="tier-button" onclick="window.$vueApp.showPricingPopup('Premium')">
      <span class="button-icon">💰</span>
      View Pricing
    </button>
  </div>

  <div class="tier-card">
    <div class="tier-header">
      <span class="tier-icon">👑</span>
      <h3>VIP Access</h3>
      <Badge type="warning" text="Elite" />
    </div>
    <div class="tier-features">
      <div class="feature">
        <span class="icon">✅</span>
        <span>All premium features</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Custom solutions</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>24/7 support</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Private training</span>
      </div>
      <div class="feature">
        <span class="icon">✅</span>
        <span>Exclusive tools</span>
      </div>
    </div>
    <button class="tier-button" onclick="window.$vueApp.showPricingPopup('VIP')">
      <span class="button-icon">💰</span>
      View Pricing
    </button>
  </div>
<br>
  <div class="tier-card">
    <div class="tier-header">
      <span class="tier-icon">💎</span>
      <h3>Diamond Access</h3>
      <Badge type="danger" text="Ultimate" />
    </div>
    <div class="tier-features terminal">
      <div class="terminal-header">
        <span class="terminal-title">root@doomsday:~# cat diamond_features.txt</span>
        <div class="terminal-controls">
          <span class="control"></span>
          <span class="control"></span>
          <span class="control"></span>
        </div>
      </div>
      <div class="terminal-content">
        <div class="feature">
          <span class="prompt">$</span>
          <span class="command">check_feature</span>
          <span class="icon">✅</span>
          <span class="output">All VIP features enabled</span>
        </div>
        <div class="feature">
          <span class="prompt">$</span>
          <span class="command">check_feature</span>
          <span class="icon">✅</span>
          <span class="output">Priority development access granted</span>
        </div>
        <div class="feature">
          <span class="prompt">$</span>
          <span class="command">check_feature</span>
          <span class="icon">✅</span>
          <span class="output">Direct developer access confirmed</span>
        </div>
        <div class="feature">
          <span class="prompt">$</span>
          <span class="command">check_feature</span>
          <span class="icon">✅</span>
          <span class="output">Custom tool development enabled</span>
        </div>
        <div class="feature">
          <span class="prompt">$</span>
          <span class="command">check_feature</span>
          <span class="icon">✅</span>
          <span class="output">Unlimited access verified</span>
        </div>
        <br>
        <div class="cursor"></div>
      </div>
    </div>
    <button class="tier-button" onclick="window.$vueApp.showPricingPopup('Diamond')">
      <span class="button-icon">💰</span>
      View Pricing
    </button>
  </div>
</div>

<SecurityNotice type="security" />
<SecurityNotice type="legal" />

<style>
.hero-container {
  background: linear-gradient(45deg, #000, #1a1a1a);
  padding: 4rem 2rem;
  margin: 2rem 0;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(90deg, 
      transparent, 
      transparent 50px, 
      rgba(0, 255, 0, 0.1) 50px, 
      rgba(0, 255, 0, 0.1) 51px
    );
  animation: scanline 8s linear infinite;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.glitch-text {
  font-size: 3rem;
  font-weight: bold;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  animation: glitch 1s infinite;
}

.cyber-subtitle {
  font-size: 1.5rem;
  color: #00e5ff;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.pulse-line {
  height: 2px;
  background: #00ff00;
  margin: 2rem auto;
  width: 200px;
  position: relative;
  animation: pulse 2s infinite;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tier-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.terminal {
  background: #000;
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  overflow: hidden;
  font-family: monospace;
}

.terminal-header {
  background: #1a1a1a;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00ff00;
}

.terminal-title {
  color: #00ff00;
  font-size: 0.9rem;
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f56;
}

.control:nth-child(2) {
  background: #ffbd2e;
}

.control:nth-child(3) {
  background: #27c93f;
}

.terminal-content {
  padding: 1rem;
  position: relative;
}

.terminal .feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #00ff00;
  border: none;
}

.terminal .prompt {
  color: #00ff00;
}

.terminal .command {
  color: #00e5ff;
}

.terminal .output {
  color: #fff;
}

.cursor {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 8px;
  height: 16px;
  background: #00ff00;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.tier-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 48%, rgba(0, 229, 255, 0.1) 49%, rgba(0, 229, 255, 0.1) 51%, transparent 52%);
  background-size: 4px 4px;
  opacity: 0.5;
  pointer-events: none;
}

.tier-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.tier-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tier-icon {
  font-size: 2rem;
}

.tier-header h3 {
  margin: 0;
  color: #00ff00;
  flex: 1;
}

.tier-features {
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.feature:last-child {
  border-bottom: none;
}

.feature .icon {
  font-size: 1.2rem;
}

.tier-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #00ff00, #00e5ff);
  border: none;
  border-radius: 0.5rem;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.tier-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: buttonShine 3s infinite;
}

.tier-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 229, 255, 0.3);
}

.button-icon {
  font-size: 1.2rem;
}

@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes pulse {
  0% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(1.5); opacity: 0.5; }
  100% { transform: scaleX(1); opacity: 1; }
}

@keyframes buttonShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>