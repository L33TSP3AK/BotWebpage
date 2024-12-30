# Elite Access Plans

<div class="hero-section">
  <div class="cyber-grid"></div>
  <div class="hero-content">
    <div class="glitch-text" data-text="ACCESS TIERS">ACCESS TIERS</div>
    <div class="cyber-subtitle">Choose Your Power Level</div>
    <div class="pulse-line"></div>
  </div>
</div>

## Available Plans

<div class="pricing-grid">
  <div class="price-card">
    <div class="card-header">
      <span class="tier-icon">🔵</span>
      <h3>Basic Access</h3>
      <Badge type="info" text="Entry Level" />
    </div>
    <div class="price">$29.99<span>/month</span></div>
    <ul class="features">
      <li>✅ Basic Features</li>
      <li>✅ Community Support</li>
      <li>❌ Advanced Tools</li>
      <li>❌ Priority Support</li>
    </ul>
    <div class="card-scanner"></div>
  </div>

  <div class="price-card featured">
    <div class="card-header">
      <span class="tier-icon">⭐</span>
      <h3>Premium Access</h3>
      <Badge type="tip" text="Most Popular" />
    </div>
    <div class="price">$49.99<span>/month</span></div>
    <ul class="features">
      <li>✅ All Basic Features</li>
      <li>✅ Advanced Tools</li>
      <li>✅ Priority Support</li>
      <li>❌ Custom Solutions</li>
    </ul>
    <div class="card-scanner"></div>
  </div>

  <div class="price-card">
    <div class="card-header">
      <span class="tier-icon">👑</span>
      <h3>VIP Access</h3>
      <Badge type="warning" text="Elite" />
    </div>
    <div class="price">$99.99<span>/month</span></div>
    <ul class="features">
      <li>✅ All Premium Features</li>
      <li>✅ Custom Solutions</li>
      <li>✅ 24/7 Support</li>
      <li>✅ Dedicated Manager</li>
    </ul>
    <div class="card-scanner"></div>
  </div>
</div>

## Payment Methods

<div class="payment-section">
  <div class="crypto-grid">
    <div class="crypto-item">
      <span class="crypto-icon">₿</span>
      <span class="crypto-name">Bitcoin</span>
    </div>
    <div class="crypto-item">
      <span class="crypto-icon">Ξ</span>
      <span class="crypto-name">Ethereum</span>
    </div>
    <div class="crypto-item">
      <span class="crypto-icon">Ł</span>
      <span class="crypto-name">Litecoin</span>
    </div>
    <div class="crypto-item">
      <span class="crypto-icon">ɱ</span>
      <span class="crypto-name">Monero</span>
    </div>
  </div>
</div>

<style>
.hero-section {
  background: linear-gradient(45deg, #000, #1a1a1a);
  padding: 4rem 2rem;
  margin: 2rem 0;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.price-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.price-card.featured {
  border-color: #00e5ff;
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tier-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  color: #00ff00;
  text-align: center;
  margin: 1.5rem 0;
  font-weight: bold;
}

.price span {
  font-size: 1rem;
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.features li:last-child {
  border-bottom: none;
}

.card-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  animation: scan 2s linear infinite;
}

.payment-section {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.crypto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  text-align: center;
}

.crypto-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.crypto-icon {
  font-size: 2rem;
  color: #00ff00;
}

.crypto-name {
  color: #666;
  font-size: 0.9rem;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
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

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(1000%); }
}
</style>