import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import { useResult } from '../customHooks/ResultProvider';
import { Link } from 'react-router-dom';

export default function ShowResults(){
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const {resultArray} = useResult()
    const filterArray = resultArray.filter((number)=> number!==0)
    const changeQuestion = ()=>{
        setCurrentQuestion(currentQuestion+1);
        
    }
    return (
        <div>
            <p className="heading-txt">Results</p>
            <div className="container">
                <div className="question">
                    <span id="question-number">{currentQuestion+1}. </span>
                    <span id="question-txt">{QuizData[currentQuestion].question}</span>
                </div>
                <div className="option-container">
                    {QuizData[currentQuestion].options.map((option,i)=>{
                        const {answer} = QuizData[currentQuestion]
                        const selected = filterArray[currentQuestion]
                        if(i===answer-1) 
                            return(<button className="option-btn correct" key={i}>{option}</button>)
                        if(i===selected)
                            return(<button className="option-btn wrong" key={i}>{option}</button>)
                        return <button className="option-btn" key={i}>{option}</button>
                    })}                
                </div>
                {currentQuestion+1 !== QuizData.length ? <input type="button" value="Next" id="next-button" onClick={changeQuestion}/> : <Link className="custom-btn" to="/">Exit</Link> }
            </div>
        </div>
    )
}