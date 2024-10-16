import { useEffect, useMemo, useState } from 'react'
import {
  addLogToLocalStorage,
  addStringToLocalStorage
} from 'utils/addLogToLocalStorage'
import { get15LetterString } from 'utils/get15LetterString'

const useGameTimer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLetter, setCurrentLetter] = useState('')
  const [isGetReady, setIsGetReady] = useState(true)
  const string = useMemo(() => get15LetterString(), [])
  console.log('string', string)

  // chnage the letter every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      //end the game after 15 letters
      if (currentIndex > 15) {
        clearInterval(interval)
        addLogToLocalStorage({ type: 'endGame' })
        addStringToLocalStorage(string)
        return
      }

      if (isGetReady) setIsGetReady(false)
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setCurrentLetter(string[currentIndex])
    }, 2200)

    // Cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, string, isGetReady])

  return {
    isGetReady,
    currentIndex,
    currentLetter,
    string,
    setCurrentIndex
  }
}

export default useGameTimer
