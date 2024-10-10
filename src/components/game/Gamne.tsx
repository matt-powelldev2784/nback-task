import useGameTimer from './hooks/useGamerTimer'
import useSpacebar from './hooks/useSpacerBar'

export const Game = () => {
  const { currentIndex, currentLetter } = useGameTimer()

  useSpacebar({
    callback: () => {
      console.log('Space bar pressed, current letter:', currentLetter)
    }
  })

  return (
    <div className="size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4 md:mt-16">
      {currentIndex === 0 && (
        <p className="text-5xl text-white">GET READY...</p>
      )}

      <p className="p-2 text-center text-10xl font-bold text-white">
        {currentLetter}
      </p>

      {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
    </div>
  )
}
