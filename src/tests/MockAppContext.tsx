import React, { ReactNode } from 'react'
import { AppContext, AppContextT } from '../components/App'

type TestAppContextProviderProps = {
  children: ReactNode
  value: Partial<AppContextT>
}

export const TestAppContextProvider = ({
  children,
  value
}: TestAppContextProviderProps) => {
  const defaultValue: AppContextT = {
    currentScreen: 'home',
    setCurrentScreen: () => {},
    playerName: '',
    setPlayerName: () => {},
    currentGameString: '',
    setCurrentGameString: () => {},
    correctAnswerCount: 0,
    setCorrectAnswerCount: () => {},
    incorrectAnswerCount: 0,
    setIncorrectAnswerCount: () => {},
    resetGame: () => {}
  }

  const contextValue = { ...defaultValue, ...value }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
