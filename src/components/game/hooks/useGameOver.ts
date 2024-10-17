import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface UseGameOverProps {
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

const useGameOver = ({ currentIndex, setCurrentIndex }: UseGameOverProps) => {
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    const incorrectAnswerCount =
      localStorage.getItem('incorrectAnswerCount') || '0'
    const parsedIncorrectAnswerCount = parseInt(incorrectAnswerCount)

    // set the game over state if the user has gotten 2 incorrect answers
    if (parsedIncorrectAnswerCount > 1) {
      setIsGameOver(true)
      setCurrentIndex(16)
    }

    // set the game over state if the user has reached the end of the game
    if (currentIndex > 15) {
      setIsGameOver(true)
    }
  }, [isGameOver, currentIndex, setCurrentIndex])

  return { isGameOver }
}

export default useGameOver
