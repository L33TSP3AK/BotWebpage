// Component registration utility
import Badge from '../components/Badge.vue'
import Card from '../components/Card.vue'
import TokenScanner from '../components/TokenScanner.vue'
import TokenDecoder from '../components/TokenDecoder.vue'
// Import carding components
import MethodCard from '../components/carding/MethodCard.vue'
import StatusIndicator from '../components/carding/StatusIndicator.vue'
import SuccessMeter from '../components/carding/SuccessMeter.vue'
import RequirementsSection from '../components/carding/RequirementsSection.vue'
import SecurityWarning from '../components/carding/SecurityWarning.vue'

import type { App } from 'vue'

export function registerComponents(app: App) {
  app.component('Badge', Badge)
  app.component('Card', Card)
  app.component('TokenScanner', TokenScanner)
  app.component('TokenDecoder', TokenDecoder)
  // Register carding components
  app.component('MethodCard', MethodCard)
  app.component('StatusIndicator', StatusIndicator)
  app.component('SuccessMeter', SuccessMeter)
  app.component('RequirementsSection', RequirementsSection)
  app.component('SecurityWarning', SecurityWarning)
}