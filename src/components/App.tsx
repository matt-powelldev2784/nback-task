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
  currentGameString: string
  setCurrentGameString: Dispatch<SetStateAction<string>>
  correctAnswerCount: number
  setCorrectAnswerCount: Dispatch<SetStateAction<number>>
  incorrectAnswerCount: number
  setIncorrectAnswerCount: Dispatch<SetStateAction<number>>
  resetGame: () => void
}

const AppContextVallues: AppContextT = {
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

export const AppContext = createContext(AppContextVallues)

function App() {
  const [currentScreen, setCurrentScreen] = useState<screenT>('home')
  const [playerName, setPlayerName] = useState<string>('')
  const [currentGameString, setCurrentGameString] = useState<string>('')
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0)
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState<number>(0)

  const resetGame = () => {
    setCurrentScreen('home')
    setPlayerName('')
    setCurrentGameString('')
    setCorrectAnswerCount(0)
    setIncorrectAnswerCount(0)
  }

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        playerName,
        setPlayerName,
        currentGameString,
        setCurrentGameString,
        correctAnswerCount,
        setCorrectAnswerCount,
        incorrectAnswerCount,
        setIncorrectAnswerCount,
        resetGame
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
