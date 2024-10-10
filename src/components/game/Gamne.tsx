import useGameTimer from './hooks/useGamerTimer'
import useCheckLetterMatch from './hooks/useCheckLetterMatch'

export const Game = () => {
  const { currentIndex, currentLetter, string } = useGameTimer()

  const { userHadRepsonded, isCorrectResponse } = useCheckLetterMatch({
    currentLetter,
    currentString: string,
    currentIndex
  })

  return (
    <div className="size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4 md:mt-16">
      {currentIndex === 0 && (
        <p className="text-5xl text-white">GET READY...</p>
      )}

      {!userHadRepsonded ? (
        <p className={`p-2 text-center text-10xl font-bold text-white`}>
          {currentLetter}
        </p>
      ) : null}

      {userHadRepsonded && isCorrectResponse && (
        <p className={`p-2 text-center text-10xl font-bold text-green-500`}>
          {currentLetter}
        </p>
      )}

      {userHadRepsonded && !isCorrectResponse && (
        <p className={`p-2 text-center text-10xl font-bold text-red-500`}>
          {currentLetter}
        </p>
      )}

      {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
    </div>
  )
}
