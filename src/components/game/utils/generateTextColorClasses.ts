interface GenerateLetterClassesProps {
  userHadRepsonded: boolean
  isCorrectResponse: boolean
}

// this function generates tailwind classes
// it generate the color of the text based on the user's response
export const generateTextColorClasses = ({
  userHadRepsonded,
  isCorrectResponse
}: GenerateLetterClassesProps) => {
  const baseClass = 'p-2 text-center text-10xl font-bold mb-5'

  // grren text for correct response
  if (userHadRepsonded && isCorrectResponse) {
    return `${baseClass} text-green-500`
  }

  // red text for incorrect response
  if (userHadRepsonded && !isCorrectResponse) {
    return `${baseClass} text-red-500`
  }

  // default white text - no response yet
  return `${baseClass} text-white`
}
