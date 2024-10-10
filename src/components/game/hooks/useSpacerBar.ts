import { useEffect } from 'react'

interface UseSpaceBarProps {
  callback: () => void
}

const useSpacebar = ({ callback }: UseSpaceBarProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback])
}

export default useSpacebar
