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
  correctAnswerCount: number
  incorrectAnswerCount: number
  name: string
  currentString: string
}

const AppContextVallues: AppContextT = {
  currentScreen: 'home',
  setCurrentScreen: () => {},
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  name: '',
  currentString: ''
}

export const AppContext = createContext(AppContextVallues)

function App() {
  const [currentScreen, setCurrentScreen] = useState<screenT>('home')

  return (
    <AppContext.Provider
      value={{ ...AppContextVallues, currentScreen, setCurrentScreen }}
    >
      <main className="relative flex min-h-lvh w-screen flex-col items-center overflow-hidden">
        <img
          src={puzzle_bg}
          alt="hero"
          className="absolute z-[-1] size-full object-cover opacity-50"
        />

        {currentScreen === 'home' && (
          <Home setCurrentScreen={setCurrentScreen} />
        )}

        {currentScreen === 'enterName' && (
          <EnterName setCurrentScreen={setCurrentScreen} />
        )}

        {currentScreen === 'game' && (
          <Game setCurrentScreen={setCurrentScreen} />
        )}

        {currentScreen === 'results' && (
          <Results setCurrentScreen={setCurrentScreen} />
        )}
      </main>
    </AppContext.Provider>
  )
}

export default App
