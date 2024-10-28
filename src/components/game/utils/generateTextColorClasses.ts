interface GenerateLetterClassesProps {
  userHasResponded: boolean
  isCorrectResponse: boolean
}

// this function generates tailwind classes
// it generate the color of the text based on the user's response
export const generateTextColorClasses = ({
  userHasResponded,
  isCorrectResponse
}: GenerateLetterClassesProps) => {
  // white text for no user response
  if (!userHasResponded)
    return 'p-2 text-center text-10xl font-bold mb-5 text-white'

  // green text for correct response
  if (isCorrectResponse) {
    return `p-2 text-center text-10xl font-bold mb-5 text-green-500`
  }

  // red text for incorrect response
  if (!isCorrectResponse) {
    return `p-2 text-center text-10xl font-bold mb-5 text-red-500`
  }
}
