import './index.css'
import { Game } from './game/Gamne'
import puzzle_bg from '../assets/puzzle_simple_plus1.svg'
import { Home } from './home/Home'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { screenT } from 'types/screenT'
import { EnterName } from './enterName/EnterName'
import { Results } from './results/Results'

type AppContextT = {
  currentScreen: screenT
  setCurrentScreen: Dispatch<SetStateAction<screenT>>
  playerName: string
  setPlayerName: Dispatch<SetStateAction<string>>
  correctAnswerCount: number
  incorrectAnswerCount: number
  currentString: string
}

const AppContextVallues: AppContextT = {
  currentScreen: 'home',
  setCurrentScreen: () => {},
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  playerName: '',
  setPlayerName: () => {},
  currentString: ''
}

export const AppContext = createContext(AppContextVallues)

function App() {
  const [currentScreen, setCurrentScreen] = useState<screenT>('home')
  const [playerName, setPlayerName] = useState<string>('')

  return (
    <AppContext.Provider
      value={{
        ...AppContextVallues,
        currentScreen,
        setCurrentScreen,
        playerName,
        setPlayerName
      }}
    >
      <main className="relative flex min-h-lvh w-screen flex-col items-center overflow-hidden">
        <img
          src={puzzle_bg}
          alt="hero"
          className="absolute z-[-1] size-full object-cover opacity-50"
        />

        {currentScreen === 'home' && <Home />}

        {currentScreen === 'enterName' && <EnterName />}

        {currentScreen === 'game' && <Game />}

        {currentScreen === 'results' && <Results />}
      </main>
    </AppContext.Provider>
  )
}

export default App
