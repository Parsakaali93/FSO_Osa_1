import Statistic from "./Statistic";

export default function Statistics({good, bad, neutral}) {
  return (
    <div>      
        <h1>Statistics</h1>
        {good + bad + neutral > 0 ?
         <>
         <table>
            <tbody>
                <Statistic text="Bad" value={bad}/>
                <Statistic text="Neutral" value={neutral}/>
                <Statistic text="Good" value={good}/>

                <Statistic text="All" value={good + bad + neutral}/>
                <Statistic text="Average" value={(good + bad + neutral) / 3}/>
                <Statistic text="Positive" value={(good / (bad + neutral)) + "%"}/>
            </tbody>
          </table>
          </>
          :
          <p>No feedback given</p>
        }
    </div>
  )
}
