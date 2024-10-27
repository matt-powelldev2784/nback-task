import { useEffect } from 'react'

declare global {
  interface Window {
    setCurrentGameString: (value: string) => void
  }
}

const useExposeSetCurrentGameStringForTesting = (
  setCurrentGameString: (value: string) => void
) => {
  useEffect(() => {
    // Expose setCurrentGameString to the global window object for testing
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test'
    ) {
      window.setCurrentGameString = setCurrentGameString
    }
  }, [setCurrentGameString])
}

export default useExposeSetCurrentGameStringForTesting
