import useGameTimer from './hooks/useGamerTimer'
import useCheckLetterMatch from './hooks/useCheckLetterMatch'
import { generateTextColorClasses } from './utils/generateTextColorClasses'

export const Game = () => {
  const { currentIndex, currentLetter, string } = useGameTimer()

  const { userHadRepsonded, isCorrectResponse } = useCheckLetterMatch({
    currentLetter,
    currentString: string,
    currentIndex
  })

  // generate the color of the text based on the user's response
  // white text for no response yet
  // green text for correct response
  // red text for incorrect response
  const letterColorClasses = generateTextColorClasses({
    userHadRepsonded,
    isCorrectResponse
  })

  return (
    <div className="size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4 md:mt-16">
      {currentIndex === 0 && (
        <p className="text-5xl text-white">GET READY...</p>
      )}

      <p className={letterColorClasses}>{currentLetter}</p>

      {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
    </div>
  ) /* ------------------------------------------------------------------------- */
}
