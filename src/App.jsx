import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  function Speak(e) {
    e.preventDefault()
      let utterance = new SpeechSynthesisUtterance(text)
      speechSynthesis.speak(utterance)
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={(e)=> Speak(e)}>Speak</button>
    </>
  )
}

export default App
