import { useContext, useState } from 'react'
import two_back_logo from '../../assets/two_back_logo.svg'
import Button from 'components/ui/button/Button'
import { AppContext } from 'components/App'

export const Home = () => {
  const [displayInstructions, setDisplayInstructions] = useState(false)
  const { setCurrentScreen } = useContext(AppContext)

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start md:pt-12">
      {!displayInstructions && (
        <>
          <div className="m-4 rounded-3xl bg-white p-2 opacity-100 shadow-lg flexCol sm:w-11/12 md:max-w-[700px] md:px-20 md:py-8">
            <img src={two_back_logo} alt="two back logo" className="w-full" />
          </div>

          <div className="flexCol sm:mt-2 md:mt-12">
            <Button
              classNames="my-2 max-w-full rounded-xl bg-neutral-500 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
              text="Instructions"
              onClick={() => setDisplayInstructions(true)}
            />

            <Button
              classNames="my-2 max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
              text="Start Game"
              onClick={() => setCurrentScreen('enterName')}
            />
          </div>
        </>
      )}

      {displayInstructions && (
        <div className="m-4 mb-12 max-w-[800px] gap-4 rounded-3xl bg-white p-6 shadow-lg flexCol sm:w-11/12 sm:text-sm md:px-12 md:py-8 md:text-base">
          <p className="w-full text-center text-3xl font-bold tracking-wide text-blue-800">
            Instructions
          </p>

          <p className="w-full text-center text-black">
            Welcome to the N-back working memory task! Here’s how to play:
          </p>

          <p className="w-full text-center text-black">
            <strong>Letter Display</strong>
            <br />
            You will see letters appear on the screen, one at a time.
          </p>

          <p className="w-full text-center text-black">
            <strong>Your Task</strong>
            <br />
            Decide if the current letter is the same as the one shown two
            letters ago.
          </p>

          <p className="w-full text-center text-black">
            <strong>Correct Response</strong>
            <br />
            If it is the same, press the &ldquo;space-bar&rdquo; key or
            click/touch the &ldquo;Repeated Letter&rdquo; button. The letter
            will turn green if you are correct.
          </p>

          <p className="w-full text-center text-black">
            <strong>Incorrect Response</strong>
            <br />
            If it’s not the same, do not press anything. The letter will turn
            red if you are incorrect.
          </p>

          <p className="w-full text-center text-black">
            <strong>Game End</strong>
            <br />
            The game will end if you make 2 incorrect repsonses or after 15
            letters are shown.
          </p>

          <Button
            classNames="mt-8 max-w-full rounded-xl bg-neutral-500 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
            text="Go back"
            onClick={() => setDisplayInstructions(false)}
          />
        </div>
      )}
    </section>
  )
}
