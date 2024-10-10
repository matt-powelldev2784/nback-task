import { useEffect, useState } from 'react'

interface UseSpaceBarProps {
  callback: () => void
  currentLetter: string
}

const useSpacebar = ({ callback, currentLetter }: UseSpaceBarProps) => {
  // used to prevent multiple presses on the same letter
  const [lastLetterPressed, setLastLetterPressed] = useState('')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return

      if (currentLetter !== lastLetterPressed) {
        callback()
        setLastLetterPressed(currentLetter)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, currentLetter, lastLetterPressed])
}

export default useSpacebar
