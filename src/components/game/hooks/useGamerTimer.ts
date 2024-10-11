import { useEffect, useMemo, useState } from 'react'
import { get15LetterString } from 'utils/get15LetterString'

const useGameTimer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLetter, setCurrentLetter] = useState('')
  const string = useMemo(() => get15LetterString(), [])

  useEffect(() => {
    // chnage the letter every 3 seconds
    const interval = setInterval(() => {
      if (currentIndex > 15) {
        clearInterval(interval)
        return
      }
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setCurrentLetter(string[currentIndex])
    }, 2200)

    // Cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, string])

  return { currentIndex, currentLetter, string }
}

export default useGameTimer
