type LogType = 'startGame' | 'name' | 'repeatedLetter' | 'endGame'

interface Log {
  type: LogType
  date: string
  name: string
  correctAnswer?: boolean
}

export const addNameToStorage = (name: string) => {
  localStorage.setItem('name', name)
}

export const addLogToLocalStorage = ({ type, correctAnswer }: Log) => {
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

export const clearLogsFromStorage = () => {
  localStorage.removeItem('logs')
  localStorage.removeItem('name')
}
