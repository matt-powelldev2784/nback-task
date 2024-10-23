interface AddResultsToDBProps {
  playerName: string
  correctAnswerCount: number
  incorrectAnswerCount: number
  possibleRepeatedCharacters: number
  gameString: string
}

export const addResultsToDb = ({
  playerName,
  correctAnswerCount,
  incorrectAnswerCount,
  possibleRepeatedCharacters,
  gameString
}: AddResultsToDBProps) => {
  const results = {
    date: new Date().toISOString(),
    playerName,
    correctAnswerCount,
    incorrectAnswerCount,
    possibleRepeatedCharacters,
    gameString
  }

  const previousResults = localStorage.getItem('results')
  if (previousResults) {
    const resultsArray = JSON.parse(previousResults)
    resultsArray.push(results)
    localStorage.setItem('results', JSON.stringify(resultsArray))
  } else {
    localStorage.setItem('results', JSON.stringify([results]))
  }
}
