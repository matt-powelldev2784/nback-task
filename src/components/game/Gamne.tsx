import { useEffect, useMemo, useState } from 'react'
import { get15LetterString } from 'utils/get15LetterString'

export const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [letter, setLetter] = useState('')
  const string = useMemo(() => get15LetterString(), [])

  // display a letter every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex > 15) {
        clearInterval(interval)
        return
      }
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setLetter(string[currentIndex])
    }, 3000)

    // cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, string])

  return (
    <div className="mt-16 size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4">
      {currentIndex === 0 && (
        <p className="text-5xl text-white">GET READY...</p>
      )}

      <p className="p-2 text-center text-10xl font-bold text-white">{letter}</p>

      {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
    </div>
  )
}