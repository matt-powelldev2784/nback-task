import './index.css'
import { Game } from './game/Gamne'
import puzzle_bg from '../assets/puzzle_simple_plus1.svg'
import { Home } from './home/Home'
import { useState } from 'react'
import { screenT } from 'types/screenT'
import { EnterName } from './enterName/EnterName'
import { Results } from './results/Results'

function App() {
  const [currentScreen, setCurrentScreen] = useState<screenT>('home')

  return (
    <main className="relative flex min-h-lvh w-screen flex-col items-center overflow-hidden">
      <img
        src={puzzle_bg}
        alt="hero"
        className="absolute z-[-1] size-full object-cover opacity-50"
      />

      {currentScreen === 'home' && <Home setCurrentScreen={setCurrentScreen} />}

      {currentScreen === 'enterName' && (
        <EnterName setCurrentScreen={setCurrentScreen} />
      )}

      {currentScreen === 'game' && <Game setCurrentScreen={setCurrentScreen} />}

      {currentScreen === 'results' && (
        <Results setCurrentScreen={setCurrentScreen} />
      )}
    </main>
  )
}

export default App
