import { get15LetterString } from './get15LetterString'

test('returns a string of 15 characters in uppercase', () => {
  const string = get15LetterString()
  expect(string).toHaveLength(15)

  string.split('').forEach((char) => {
    expect(char).toBe(char.toUpperCase())
  })
})
