type LogType = 'startGame' | 'name' | 'repeatedLetter' | 'endGame'

interface Log {
  type: LogType
  date: string
  name: string
  correctAnswer?: boolean
}

interface addLogToLocalStorageProps {
  type: LogType
  correctAnswer?: boolean
}

export const clearLocalStorage = () => {
  localStorage.removeItem('logs')
  localStorage.removeItem('name')
  localStorage.removeItem('correctAnswerCount')
  localStorage.removeItem('incorrectAnswerCount')
}

export const initialiseLocalStorage = (name: string) => {
  localStorage.setItem('name', name)
  localStorage.setItem('correctAnswerCount', '0')
  localStorage.setItem('incorrectAnswerCount', '0')
}

export const addLogToLocalStorage = ({
  type,
  correctAnswer
}: addLogToLocalStorageProps) => {
  const storedName = localStorage.getItem('name')

  const log: Log = {
    type,
    date: new Date().toISOString(),
    name: storedName || '',
    correctAnswer
  }

  const existingLogs = JSON.parse(localStorage.getItem('logs') || '[]')
  const updatedLogs = [...existingLogs, log]

  localStorage.setItem('logs', JSON.stringify(updatedLogs))
}

export const addAnswerCountToStorage = (isResponseCorrect: boolean) => {
  if (isResponseCorrect) {
    const correctAnswersCount =
      localStorage.getItem('correctAnswerCount') || '0'
    const updatedCorrectAnswerCount = parseInt(correctAnswersCount) + 1

    localStorage.setItem(
      'correctAnswerCount',
      updatedCorrectAnswerCount.toString()
    )
  }

  if (!isResponseCorrect) {
    const incorrectAnswerCount =
      localStorage.getItem('incorrectAnswerCount') || '0'
    const updatedIncorrectAnswerCount = parseInt(incorrectAnswerCount) + 1

    localStorage.setItem(
      'incorrectAnswerCount',
      updatedIncorrectAnswerCount.toString()
    )
  }
}
