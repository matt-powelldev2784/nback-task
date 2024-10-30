import { generateTextColorClasses } from './generateTextColorClasses'

test('function returns white color class if user has not responded', () => {
  const noResponse = generateTextColorClasses({
    userHasResponded: false,
    isCorrectResponse: false
  })

  expect(noResponse).toBe('p-2 text-center text-10xl font-bold mb-5 text-white')
})

test('function returns green color class if the user has responded correctly', () => {
  const correctResponse = generateTextColorClasses({
    userHasResponded: true,
    isCorrectResponse: true
  })

  expect(correctResponse).toBe(
    'p-2 text-center text-10xl font-bold mb-5 text-green-500'
  )
})

test('function returns red color class if the user has responded incorrectly', () => {
  const incorrectResponse = generateTextColorClasses({
    userHasResponded: true,
    isCorrectResponse: false
  })

  expect(incorrectResponse).toBe(
    'p-2 text-center text-10xl font-bold mb-5 text-red-500'
  )
})
