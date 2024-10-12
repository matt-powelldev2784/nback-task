import useGameTimer from './hooks/useGamerTimer'
import useCheckLetterMatch from './hooks/useCheckLetterMatch'
import { generateTextColorClasses } from './utils/generateTextColorClasses'
import Button from 'components/ui/button/Button'
import useGameOver from './hooks/useGameOver'
import { Dispatch, SetStateAction } from 'react'
import { screenT } from 'types/screenT'

interface GameProps {
  setCurrentScreen: Dispatch<SetStateAction<screenT>>
}

export const Game = ({ setCurrentScreen }: GameProps) => {
  const { currentIndex, currentLetter, string, setCurrentIndex } =
    useGameTimer()
  const { userHadRepsonded, isCorrectResponse } = useCheckLetterMatch({
    currentLetter,
    currentString: string,
    currentIndex
  })
  const { isGameOver } = useGameOver({ currentIndex, setCurrentIndex })

  // generate the color of the text based on the user's response
  // white text for no response yet
  // green text for correct response
  // red text for incorrect response
  const letterColorClasses = generateTextColorClasses({
    userHadRepsonded,
    isCorrectResponse
  })

  // This is used to simulate the user pressing the space bar if the repeated letter button is used
  // useCheckLetterMatch is listening for a space bar keydown event
  const dispatchSpaceBarEvent = () => {
    const event = new KeyboardEvent('keydown', { code: 'Space', key: ' ' })
    window.dispatchEvent(event)
  }

  return (
    <section className="flexCol">
      <div className="size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4 md:mt-16">
        {currentIndex === 0 && (
          <p className="text-5xl text-white">GET READY...</p>
        )}

        {currentIndex > 0 && currentIndex <= 15 && (
          <p className={letterColorClasses}>{currentLetter}</p>
        )}

        {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
      </div>

      {!isGameOver ? (
        <Button
          classNames="my-2 max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white active:opacity-90 sm:mt-6 sm:w-11/12 sm:p-2 md:mt-12 md:w-96 md:p-4"
          text="Repeated Letter"
          onClick={dispatchSpaceBarEvent}
        />
      ) : (
        <Button
          classNames="my-2 max-w-full rounded-xl bg-green-600 text-xl tracking-wide text-white active:opacity-90 sm:mt-6 sm:w-11/12 sm:p-2 md:mt-12 md:w-96 md:p-4"
          text="View Results"
          onClick={() => setCurrentScreen('results')}
        />
      )}

      {!isGameOver && (
        <div className="m-4 mb-12 max-w-[800px] gap-4 rounded-3xl bg-neutral-600 text-white shadow-lg flexCol sm:w-11/12 sm:p-4 sm:text-sm md:px-12 md:py-8 md:text-base">
          <p className="text-center text-white sm:text-sm md:text-lg">
            Press the space-bar key, or click/touch the &ldquo;Repeated
            Letter&rdquo; button when a letter is repeated.
          </p>
        </div>
      )}
    </section>
  )
}
