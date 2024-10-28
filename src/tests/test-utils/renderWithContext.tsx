// src/test-utils.tsx
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { AppContext, AppContextT } from '../../components/App'

const renderWithContext = (
  children: ReactNode,
  contextValues: Partial<AppContextT> = {}
) => {
  const defaultContextValues: AppContextT = {
    currentScreen: 'home',
    setCurrentScreen: vi.fn(),
    playerName: '',
    setPlayerName: vi.fn(),
    currentGameString: '',
    setCurrentGameString: vi.fn(),
    correctAnswerCount: 0,
    setCorrectAnswerCount: vi.fn(),
    incorrectAnswerCount: 0,
    setIncorrectAnswerCount: vi.fn(),
    resetGame: vi.fn()
  }

  const value = { ...defaultContextValues, ...contextValues }

  return render(
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export { renderWithContext as render }
