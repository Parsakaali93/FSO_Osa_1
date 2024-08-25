import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function voteForAnecdote() {
    console.log(points)

    if(points[selected])
      setPoints({...points, [selected]: points[selected] + 1})

    else
      setPoints({...points, [selected]: 1})
  }

  const highestVotedAnecdoteIndex = Object.keys(points).length > 0 ? Object.entries(points).reduce((highest, current) => {
    return current[1] > highest[1] ? current : highest
  })[0] : 0

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{points[selected] ? points[selected] : 0} Votes</p>
      <button onClick={() => voteForAnecdote()}>Vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Random Anecdote</button>

      <h1>Anecdote With the Most Votes</h1>
      <p>{anecdotes[highestVotedAnecdoteIndex]}</p>
      <p>{points[highestVotedAnecdoteIndex] ? points[highestVotedAnecdoteIndex] : 0} Votes</p>
    </div>
  )
}

export default App