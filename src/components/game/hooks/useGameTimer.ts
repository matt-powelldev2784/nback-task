import { AppContext } from 'components/App'
import { useContext, useEffect, useState } from 'react'
import { get15LetterString } from 'utils/get15LetterString'

type GamesStatusT = 'getReady' | 'inPlay' | 'gameOver'

const useGameTimer = () => {
  const { currentGameString, setCurrentGameString } = useContext(AppContext)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1)
  const [gameStatus, setGameStatus] = useState<GamesStatusT>('getReady')

  useEffect(() => {
    // initilise string to start the game
    if (currentGameString === '') {
      setCurrentGameString(get15LetterString())
      return
    }

    // end game when all letters have been displayed
    if (currentLetterIndex > currentGameString.length - 1) {
      setGameStatus('gameOver')
      return
    }

    // chnage the letter every 2 seconds
    const interval = setInterval(() => {
      if (gameStatus === 'getReady') setGameStatus('inPlay')
      setCurrentLetterIndex((prevLetter) => prevLetter + 1)
    }, 2200)

    // Cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [currentLetterIndex, currentGameString, setCurrentGameString, gameStatus])

  return {
    currentLetterIndex,
    gameStatus
  }
}

export default useGameTimer
