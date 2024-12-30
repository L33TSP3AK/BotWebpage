
export interface Method {
  id: string
  icon: string
  title: string
  status: string
  successRate: number
  features: string[]
  updated: string
  verified: boolean
  type: string
  category: string
}

export const methods: Method[] = [
  {
    id: 'method1',
    icon: '🚚',
    title: 'Same Day Shipping',
    status: 'ACTIVE',
    successRate: 98,
    features: [
      'Real-time tracking',
      'Address verification bypass',
      'Major carriers supported'
    ],
    updated: '2024-01-15',
    verified: true,
    type: 'premium',
    category: 'shipping'
  },
  // Add more methods...
]
