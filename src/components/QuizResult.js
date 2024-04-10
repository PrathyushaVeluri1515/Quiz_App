import React from 'react'
import { Link } from 'react-router-dom'
function QuizResult(props) {
  return (
    <div className='result-container' >
      <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
      </div>
      <div>   
        <Link className="custom-btn" onClick={props.tryAgain}>Try Again</Link>
        <Link className="custom-btn" style={{marginLeft : "40px"}} to="/results">View Results</Link>
      </div>
    </div>
    
  )
}

export default QuizResult