import { useState } from 'react'
import Statistics from './components/Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setGood(good + 1)}>Good</button>
      
      <Statistics good={good} bad={bad} neutral={neutral} />


    </>
  )
}

export default App
