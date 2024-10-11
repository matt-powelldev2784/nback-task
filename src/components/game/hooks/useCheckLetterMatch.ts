import { useEffect, useState } from 'react'
import {
  addLogToLocalStorage,
  storeAnswerCount
} from 'utils/addLogToLocalStorage'

interface UseSpaceBarProps {
  currentLetter: string
  currentString: string
  currentIndex: number
}

const useCheckLetterMatch = ({
  currentLetter,
  currentString,
  currentIndex
}: UseSpaceBarProps) => {
  const [lastLetterPressed, setLastLetterPressed] = useState('') // used to prevent multiple presses on the same letter
  const [userHadRepsonded, setUserHadRepsonded] = useState(false)
  const [isCorrectResponse, setIsCorrectResponse] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // only respond to space bar key presses
      if (event.code !== 'Space') return

      // Prevent user from making a response if the game is not is progress
      if (currentIndex === 0) return
      if (currentIndex > 15) return

      // Prevent multiple presses on the same letter by storing the last letter pressed
      if (userHadRepsonded) return
      if (currentLetter !== lastLetterPressed) {
        setLastLetterPressed(currentLetter)
      }

      // handle correct user response
      if (currentLetter === currentString[currentIndex - 3]) {
        setUserHadRepsonded(true)
        setIsCorrectResponse(true)
        addLogToLocalStorage({ type: 'repeatedLetter', correctAnswer: true })
        storeAnswerCount(true)
      }

      // handle incorrect user response
      if (currentLetter !== currentString[currentIndex - 3]) {
        setUserHadRepsonded(true)
        setIsCorrectResponse(false)
        addLogToLocalStorage({ type: 'repeatedLetter', correctAnswer: false })
        storeAnswerCount(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    currentLetter,
    lastLetterPressed,
    currentIndex,
    currentString,
    userHadRepsonded
  ])

  // Reset isCorrectResponse and userHadRepsonded when currentLetter changes
  useEffect(() => {
    setIsCorrectResponse(false)
    setUserHadRepsonded(false)
  }, [currentLetter])

  return { userHadRepsonded, isCorrectResponse }
}

export default useCheckLetterMatch
