import useGameTimer from './hooks/useGamerTimer'

export const Game = () => {
  const { currentIndex, letter } = useGameTimer()

  return (
    <div className="mt-16 size-full h-[300px] max-w-[800px] bg-gray-900 flexCol sm:mt-4">
      {currentIndex === 0 && (
        <p className="text-5xl text-white">GET READY...</p>
      )}

      <p className="p-2 text-center text-10xl font-bold text-white">{letter}</p>

      {currentIndex > 15 && <p className="text-5xl text-white">GAME OVER!</p>}
    </div>
  )
}
