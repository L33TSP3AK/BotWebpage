<template>
  <div class="requirements-section">
    <h2 class="section-title">Requirements</h2>
    <div class="requirements-grid">
      <div class="requirement-card" v-for="req in requirements" :key="req.title">
        <span class="req-icon">{{ req.icon }}</span>
        <h3>{{ req.title }}</h3>
        <ul>
          <li v-for="item in req.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const requirements = [
  {
    icon: '💻',
    title: 'System',
    items: [
      'Windows 10/11',
      'Clean VM',
      '8GB RAM minimum',
      'SSD Storage'
    ]
  },
  {
    icon: '🌐',
    title: 'Network',
    items: [
      'Residential Proxies',
      'SOCKS5 Support',
      'Anti-detect Browser',
      'VPN Required'
    ]
  },
  {
    icon: '🛠️',
    title: 'Tools',
    items: [
      'Cookie Manager',
      'Profile Creator',
      'Proxy Manager',
      'Anti-detect System'
    ]
  }
]
</script>

<style scoped>
.requirements-section {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
}

.section-title {
  color: var(--card-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.requirement-card {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--card-border);
  border-radius: 0.5rem;
}

.req-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.requirement-card h3 {
  color: var(--card-primary);
  margin-bottom: 1rem;
}

.requirement-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirement-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--card-text);
}

.requirement-card li:last-child {
  border-bottom: none;
}
</style>