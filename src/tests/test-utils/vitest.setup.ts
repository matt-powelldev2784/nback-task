import { vi } from 'vitest'

// Mock SVG imports
vi.mock('*.svg', () => ({
  ReactComponent: 'svg',
  default: 'svg'
}))
