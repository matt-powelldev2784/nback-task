import { get15LetterString } from 'utils/get15LetterString'

function App() {
  const random15Letters = get15LetterString()
  console.log('random15Letters', random15Letters)

  return (
    <div className="relative overflow-hidden bg-white">
      <p>test</p>
    </div>
  )
}

export default App
