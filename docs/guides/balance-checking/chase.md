# Chase Bank Infiltration Guide

<script setup>
import VaultInfo from '../../.vitepress/theme/components/bank/VaultInfo.vue'
import OperationSteps from '../../.vitepress/theme/components/bank/OperationSteps.vue'
import SecurityGrid from '../../.vitepress/theme/components/bank/SecurityGrid.vue'
import HeistTimer from '../../.vitepress/theme/components/bank/HeistTimer.vue'
import StatusIndicator from '../../.vitepress/theme/components/bank/StatusIndicator.vue'

const operationSteps = [
  {
    title: 'Preparation',
    items: [
      'Clean browser profile',
      'Residential proxy active',
      'Card data verified'
    ]
  },
  {
    title: 'Execution',
    items: [
      'Access target system',
      'Submit credentials',
      'Extract balance data'
    ]
  },
  {
    title: 'Extraction',
    items: [
      'Secure connection',
      'Data verification',
      'Clean exit protocol'
    ]
  }
]
</script>

<div class="guide-container chase-theme">
  <SecurityGrid />
  <HeistTimer />

  <div class="guide-header">
    <div class="terminal-text" data-text="CHASE BANK">CHASE BANK</div>
    <StatusIndicator status="INFILTRATION ACTIVE" type="success" />
  </div>

  <VaultInfo
    bankName="Chase"
    securityLevel="HIGH"
    accessWindow="24/7"
    :methods="['Debit', 'Credit']"
    :successRate="85"
  />

  <div class="vault-terminal">
    <AccordionItem type="neon" title="Operation Protocol" icon="📋" status="VERIFIED">
      <OperationSteps :steps="operationSteps" />
    </AccordionItem>
  </div>

  <SecurityNotice type="security" />
  <SecurityNotice type="legal" />
</div>

<style>
@import '../../.vitepress/theme/styles/bank-heist.css';
</style>
