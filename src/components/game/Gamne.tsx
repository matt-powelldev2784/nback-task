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

  // This is used to simulate the user pressing the space bar
  // on touch devices
  const dispatchSpaceBarEvent = () => {
    const event = new KeyboardEvent('keydown', { code: 'Space', key: ' ' })
    window.dispatchEvent(event)
  }

  return (
    <div className="size-full flexCol">
      <div className="size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4 md:mt-16">
        {currentIndex === 0 && (
          <p className="text-5xl text-white">GET READY...</p>
        )}

        <p className={letterColorClasses}>{currentLetter}</p>

        {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
      </div>

      <button
        onClick={dispatchSpaceBarEvent}
        className="my-2 mt-12 max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white sm:w-11/12 sm:p-2 md:w-96 md:p-4"
      >
        Repeated Letter
      </button>
    </div>
  )
}
