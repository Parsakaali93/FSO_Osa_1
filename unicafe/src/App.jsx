import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'
import "./App.css"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setBad(bad + 1)} buttonText="Bad"/>
      <Button onClick={() => setNeutral(bad + 1)} buttonText="Neutral"/>
      <Button onClick={() => setGood(bad + 1)} buttonText="Good"/>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App
