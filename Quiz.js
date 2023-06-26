import React, { useState } from 'react';
import quizData from './data';
import './Quiz-Css.css';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [count,setCount]= useState(0);
    // Add a state variable to track the user's selected answer
    const [selectedAnswer, setSelectedAnswer] = useState('');
  
    const handleOptionClick = (answer) => {
      setSelectedAnswer(answer);
      // Add logic to check if the selected answer is correct
      if (answer.isCorrect) {
        setScore(score + 1);
      }
      // Move to the next question
      moveToNextQuestion();
    };
  
    const moveToNextQuestion = () => {
      if (currentQuestion < quizData.length - 1) {
        setCount(count+1);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        // Quiz has ended, perform necessary actions
        window.location.reload();
      }
    };
  
    return (
      <div className="super">
       <div className="nxt">
        <p>Quiz</p>
        <p >time</p>
      </div>
        <div className="main">
         <div>
         <h1>Test your Knowledge on Types Of Body Movement ! <span style={{marginLeft: '34vh'}}>{count}</span></h1>
        <h2>{quizData[currentQuestion].question}</h2>
        <ul>
         <strong>Options:-</strong>
          {quizData[currentQuestion].options.map((option, index) => (
            <li style={{border: '2px solid black', borderRadius: '100px'}}
              key={index}
              onClick={() => handleOptionClick(option)}
              className={selectedAnswer === option ? 'selected' : ''}
            >
              {option.answer}
            </li>
          ))}
        </ul>
        {/* Render score and other components */}
        <h3 style={{marginLeft: '15vh'}}>Score: {score}</h3>
      </div>
      </div>
     
      </div>
      
     
    );
  }
  
  export default Quiz;