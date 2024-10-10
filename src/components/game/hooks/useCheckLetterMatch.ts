import { useEffect, useState } from 'react'

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
  // used to prevent multiple presses on the same letter
  const [lastLetterPressed, setLastLetterPressed] = useState('')
  const [userHadRepsonded, setUserHadRepsonded] = useState(false)
  const [isCorrectResponse, setIsCorrectResponse] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return
      if (userHadRepsonded) return

      // Prevent multiple presses on the same letter by storing the last letter pressed
      if (currentLetter !== lastLetterPressed) {
        setLastLetterPressed(currentLetter)
      }

      // If the user has already responded, don't respond again
      if (currentLetter === currentString[currentIndex - 3]) {
        setUserHadRepsonded(true)
        setIsCorrectResponse(true)
      }

      if (currentLetter !== currentString[currentIndex - 3]) {
        setUserHadRepsonded(true)
        setIsCorrectResponse(false)
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
