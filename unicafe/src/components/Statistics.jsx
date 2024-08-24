export default function Statistics({good, bad, neutral}) {
  return (
    <div>      
        <h1>Statistics</h1>
        {good + bad + neutral > 0 ?
         <>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Good: {good}</p>

            <p>All: {good + bad + neutral}</p>
            <p>Average: {(good + bad + neutral) / 3}</p>
            <p>Positive: {(good / (bad + neutral))}%</p>
          </>
          :
          <p>No feedback given</p>
        }
    </div>
  )
}
