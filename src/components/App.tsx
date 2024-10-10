import './index.css'
import { Game } from './game/Gamne'
import puzzle_bg from '../assets/puzzle_simple_plus1.svg'
import { Home } from './home/Home'
import { useState } from 'react'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <div className="relative flex min-h-lvh w-screen flex-col items-center">
      <img
        src={puzzle_bg}
        alt="hero"
        className="absolute z-[-1] size-full object-cover opacity-50"
      />

      {!isGameStarted && <Home setIsGameStarted={setIsGameStarted} />}

      {isGameStarted && <Game />}
    </div>
  )
}

export default App
