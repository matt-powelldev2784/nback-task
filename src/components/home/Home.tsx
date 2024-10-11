import { Dispatch, SetStateAction, useState } from 'react'
import two_back_logo from '../../assets/two_back_logo.svg'
import { screenT } from 'types/screenT'
import Button from 'components/ui/button/Button'

interface HomeProps {
  setCurrentScreen: Dispatch<SetStateAction<screenT>>
}

export const Home = ({ setCurrentScreen }: HomeProps) => {
  const [displayInstructions, setDisplayInstructions] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start md:pt-12">
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
        <div className="m-4 mb-12 max-w-[800px] gap-4 rounded-3xl bg-neutral-600 p-6 text-white shadow-lg flexCol sm:w-11/12 sm:text-sm md:px-12 md:py-8 md:text-base">
          <p className="w-full text-center text-3xl font-bold tracking-wide text-white">
            Instructions
          </p>

          <p className="w-full text-center text-white">
            Welcome to the N-back working memory task! Here’s how to play:
          </p>

          <p className="w-full text-center text-white">
            <strong>Letter Display:</strong>
            <br />
            You will see letters appear on the screen, one at a time.
          </p>

          <p className="w-full text-center text-white">
            <strong>Your Task:</strong>
            <br />
            Decide if the current letter is the same as the one shown two
            letters ago.
          </p>

          <p className="w-full text-center text-white">
            <strong>Correct Response:</strong>
            <br />
            If it is the same, press the &ldquo;space-bar&rdquo; key or
            click/touch the &ldquo;Repeated Letter&rdquo; button. You&rsquo;ll
            see green colors around the letter if you are correct.
          </p>

          <p className="w-full text-center text-white">
            <strong>Incorrect Response:</strong>
            <br />
            If it’s not the same, do not press anything. Incorrect responses
            will be shown with red colors around the letter.
          </p>

          <Button
            classNames="mt-8 max-w-full rounded-xl bg-neutral-500 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
            text="Go back"
            onClick={() => setDisplayInstructions(false)}
          />
        </div>
      )}
    </div>
  )
}
