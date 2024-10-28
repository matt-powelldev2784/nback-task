import { AppContext } from 'components/App'
import { useContext, useEffect, useState } from 'react'

interface UseCheckLetterMatchProps {
  currentLetterIndex: number
}

const useCheckLetterMatch = ({
  currentLetterIndex
}: UseCheckLetterMatchProps) => {
  const [userHasResponded, setUserHasResponded] = useState(false)
  const [isCorrectResponse, setIsCorrectResponse] = useState<boolean>(false)
  const { currentGameString, setCorrectAnswerCount, setIncorrectAnswerCount } =
    useContext(AppContext)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // only respond to space bar key presses
      if (event.code !== 'Space') return

      // Prevent user from making a response if the game is not in progress
      if (currentLetterIndex === -1) return
      if (currentLetterIndex > currentGameString.length - 1) return

      // Prevent multiple presses on the same letter
      if (userHasResponded) return

      // handle correct user response
      if (
        currentGameString[currentLetterIndex] ===
        currentGameString[currentLetterIndex - 2]
      ) {
        setUserHasResponded(true)
        setIsCorrectResponse(true)
        setCorrectAnswerCount((prevCount) => prevCount + 1)
      }

      // handle incorrect user response
      if (
        currentGameString[currentLetterIndex] !==
        currentGameString[currentLetterIndex - 2]
      ) {
        setUserHasResponded(true)
        setIsCorrectResponse(false)
        setIncorrectAnswerCount((prevCount) => prevCount + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    currentGameString,
    currentLetterIndex,
    setIncorrectAnswerCount,
    setCorrectAnswerCount,
    userHasResponded
  ])

  // Reset isCorrectResponse and userHasResponded when currentLetter changes
  useEffect(() => {
    setIsCorrectResponse(false)
    setUserHasResponded(false)
  }, [currentLetterIndex])

  return { userHasResponded, isCorrectResponse }
}

export default useCheckLetterMatch
