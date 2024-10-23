export const countRepeatingLetters = (string: string) => {
  const lettersArray = string.split('')

  const repeatedLetterCount = lettersArray.reduce((acc, letter, index) => {
    if (letter === lettersArray[index - 2]) {
      return acc + 1
    }
    return acc
  }, 0)

  return repeatedLetterCount
}
