import './index.css'
import { DisplayLetter } from './displayLetter/DisplayLetter'
import puzzle_bg from '../assets/puzzle_simple_plus1.svg'

function App() {
  return (
    <div className="relative flex h-lvh w-screen flex-col items-center overflow-hidden">
      <img
        src={puzzle_bg}
        alt="hero"
        className="absolute z-[-1] size-full object-cover"
      />
      <div className="mt-12 size-full h-[300px] max-w-[800px] bg-gray-900 flexCol">
        <DisplayLetter />
      </div>
    </div>
  )
}

export default App
