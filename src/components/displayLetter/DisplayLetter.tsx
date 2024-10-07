import { useEffect, useMemo, useState } from 'react'
import { get15LetterString } from 'utils/get15LetterString'

export const DisplayLetter = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [letter, setLetter] = useState('')
  const string = useMemo(() => get15LetterString(), [])

  // display a letter every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex > 15) {
        clearInterval(interval)
        return
      }
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setLetter(string[currentIndex])
    }, 2000)

    // cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, string])

  return (
    <p className="border-2 border-red-500 text-center text-10xl font-bold text-red-600">
      {letter}
    </p>
  )
}
