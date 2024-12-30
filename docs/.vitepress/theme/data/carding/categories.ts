
export interface Category {
  id: string
  icon: string
  label: string
}

export const categories: Category[] = [
  { id: 'all', icon: '🔍', label: 'All Methods' },
  { id: 'shipping', icon: '⚙️', label: 'Same Day Shipping (1)' },
  { id: 'direct', icon: '⏩', label: 'Direct Access (1)' },
  { id: 'food', icon: '🍟', label: 'Food & Groceries (5)' },
  { id: 'giftcards', icon: '🎁', label: 'E-Giftcards (3)' },
  { id: 'gambling', icon: '🎰', label: 'Gambling (3)' },
  { id: 'avs', icon: '🔒', label: 'AVS Enforced Sites (4)' },
  { id: 'anrn', icon: '🏦', label: 'AN/RN Accepted (5)' },
  { id: 'bankguides', icon: '📚', label: 'Bank Specific Guides (8)' },
  { id: 'net30', icon: '⏳', label: 'Net-30 Sites (6)' },
  { id: 'builds', icon: '👻', label: 'Profile Builds (4)' },
  { id: 'bruteforce', icon: '🔓', label: 'Bruteforce (4)' },
  { id: 'email', icon: '📧', label: 'Email Access (3)' },
  { id: 'cookies', icon: '🍪', label: 'Cookies (5)' }
]
