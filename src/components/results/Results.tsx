import Button from 'components/ui/button/Button'
import { countRepeatingLetters } from './utils/countRepeatedLetters'
import { useContext } from 'react'
import { AppContext } from 'components/App'

export const Results = () => {
  const { setCurrentScreen } = useContext(AppContext)

  const incorrectAnswerCount =
    localStorage.getItem('incorrectAnswerCount') || '0'
  const correctAnswerCount = localStorage.getItem('correctAnswerCount') || '0'
  const letterString = localStorage.getItem('string') || ''

  const repeatedCharacters = countRepeatingLetters(letterString)

  return (
    <section className="rounded-3xl bg-white p-2 py-14 shadow-lg flexCol sm:mt-4 sm:w-11/12 md:mt-16 md:max-w-[700px] md:px-12">
      <p className="mb-2 w-11/12 text-center text-2xl text-black sm:text-lg">
        You had <strong>{incorrectAnswerCount}</strong> incorrect answers
      </p>
      <p className="mb-2 w-11/12 text-center text-2xl text-black sm:text-lg">
        You had <strong>{correctAnswerCount}</strong> correct answers
      </p>
      <p className="mb-2 w-11/12 text-center text-2xl text-black sm:text-lg">
        There were <strong>{repeatedCharacters}</strong> repeated characters in
        the string
      </p>

      <Button
        classNames="mt-4 max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
        text="Start Again"
        onClick={() => setCurrentScreen('home')}
      />
    </section>
  )
}
