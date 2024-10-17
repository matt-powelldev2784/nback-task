export const countRepeatingLetters = (string: string) => {
  const lettersArray = string.split('')

  const repeatedLetterCount = lettersArray.reduce((acc, letter, index) => {
    if (letter === lettersArray[index - 2]) {
      acc++
    }
    return acc
  }, 0)

  return repeatedLetterCount
}
