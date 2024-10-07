const getRandomNumberBetween1And26 = () => Math.floor(Math.random() * 26) + 1

// this function will return a string of 15 letters
// the letters are randomly selected from the alphabet
// the repeatProbability of 0.25 means that in 15 charcters, on average 3.25 characters will be repeated
// this will make the game more interesting than a completely random string
// as mentioned in point (e) of the task requirements "try to make this as user friendly and engaging as possible"
export const get15LetterString = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const random15Letters: string[] = []
  const repeatProbability = 0.25

  for (let index = 0; index < 15; index++) {
    if (index >= 2 && Math.random() < repeatProbability) {
      random15Letters.push(random15Letters[index - 2])
    } else {
      const numberToRepresentLetter = getRandomNumberBetween1And26()
      random15Letters.push(alphabet[numberToRepresentLetter - 1])
    }
  }

  return random15Letters.join('')
}
