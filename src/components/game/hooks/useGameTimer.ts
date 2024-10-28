import { AppContext } from 'components/App'
import { useContext, useEffect, useState } from 'react'
import { get15LetterString } from 'utils/get15LetterString'

type GamesStatusT = 'getReady' | 'inPlay' | 'gameOver'

const useGameTimer = () => {
  const { currentGameString, setCurrentGameString, incorrectAnswerCount } =
    useContext(AppContext)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1)
  const [gameStatus, setGameStatus] = useState<GamesStatusT>('getReady')

  useEffect(() => {
    // change the letter every 2 seconds
    const interval = setInterval(() => {
      // initialize string to start the game
      if (currentGameString === '') {
        setCurrentGameString(get15LetterString())
        return
      }

      // end game if 2 incorrect answers are given
      if (incorrectAnswerCount > 1) {
        setGameStatus('gameOver')
        return
      }

      // end game when all letters have been displayed
      if (currentLetterIndex > currentGameString.length - 1) {
        setGameStatus('gameOver')
        return
      }

      if (gameStatus === 'getReady') setGameStatus('inPlay')
      setCurrentLetterIndex((prevLetter) => prevLetter + 1)
    }, 2200)

    // Cleanup the interval
    return () => {
      clearInterval(interval)
    }
  }, [
    currentGameString,
    currentLetterIndex,
    gameStatus,
    incorrectAnswerCount,
    setCurrentGameString
  ])

  return {
    currentLetterIndex,
    gameStatus
  }
}

export default useGameTimer
