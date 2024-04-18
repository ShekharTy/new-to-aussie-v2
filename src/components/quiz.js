import React, { useState } from 'react';
import speed1Image from '../data/speed_limit_area.png';
import uniq1Image from '../data/hook_turn.png';
import '../styles/quiz.css';

function Quiz() {
    const questions = [
        {
            questionText: "Is it fine to use your phone while driving if it's in a cradle?",
            answerOptions: [
                { answerText: 'Yes, it is completely fine', isCorrect: false },
                { answerText: 'No, it distracts the driver', isCorrect: true },
                { answerText: 'Only if you are not texting', isCorrect: false },
                { answerText: 'Yes, but only on speakerphone', isCorrect: false },
            ],
        },
        {
            questionText: "When approaching a roundabout, you must always give way to:",
            answerOptions: [
                { answerText: 'Vehicles to your left', isCorrect: false },
                { answerText: 'Vehicles to your right', isCorrect: false },
                { answerText: 'All vehicles already in the roundabout', isCorrect: true },
                { answerText: 'No need to give way', isCorrect: false },
            ],
        },
        {
            questionText: "To avoid fines, how much over the speed limit is it safe to drive?",
            answerOptions: [
                { answerText: 'Up to 10% over the limit', isCorrect: false },
                { answerText: '5% over the limit', isCorrect: false },
                { answerText: 'Not over the limit at all', isCorrect: true },
                { answerText: '15% over if the road is clear', isCorrect: false },
            ],
        },
        {
            questionText: "Is driving in bare feet illegal?",
            answerOptions: [
                { answerText: 'Yes, always', isCorrect: false },
                { answerText: 'No, but not recommended', isCorrect: true },
                { answerText: 'Only illegal in winter', isCorrect: false },
                { answerText: 'Legal only for short distances', isCorrect: false },
            ],
        },
        {
            questionText: "Is flashing your lights to warn others of speed cameras ahead legal?",
            answerOptions: [
                { answerText: 'Yes, it helps others slow down', isCorrect: false },
                { answerText: 'No, it is technically illegal', isCorrect: true },
                { answerText: 'Legal only during the day', isCorrect: false },
                { answerText: 'Legal if no police are present', isCorrect: false },
            ],
            
        },
        {
            questionText: "What does the following traffic sign indicate?",
            imageUrl: speed1Image,
            answerOptions: [
                { answerText: 'Stop', isCorrect: false },
                { answerText: 'No Speed Limit', isCorrect: false },
                { answerText: 'No entry', isCorrect: false },
                { answerText: 'Speed limit 40', isCorrect: true },
            ],
        },
        {
            questionText: "What does the following traffic sign indicate?",
            imageUrl: uniq1Image,
            answerOptions: [
                { answerText: 'Right Turn from right lane', isCorrect: false },
                { answerText: 'No Right Turn', isCorrect: false },
                { answerText: 'Right Turn Only', isCorrect: false },
                { answerText: 'Right Turn from left lane', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);


    // Function to handle answer button click
    const handleAnswerButtonClick = (isCorrect, answerText) => {
        // Record the user's answer
        const newUserAnswers = [...userAnswers, { 
            question: questions[currentQuestion].questionText, 
            answer: answerText,
            isCorrect: isCorrect,
            correctAnswer: questions[currentQuestion].answerOptions.find(option => option.isCorrect).answerText
        }];
        setUserAnswers(newUserAnswers);
    
        if (isCorrect) {
            setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    

    // Function to restart the quiz
    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setUserAnswers([]);
    };

    // Calculate progress bar width
    const progressWidth = ((currentQuestion + 1) / questions.length) * 100 + '%';
    
    return (
        <div>
            <h1>Quiz</h1>
        <div className='quiz-rs'>
            {showScore ? (
                <div className='score-section-rs'>
                <div>You scored {score} out of {questions.length}</div>
                <ul className='answers-list-rs'>
                    {userAnswers.map((userAnswer, index) => (
                        <li key={index} className={`user-answer-rs ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`}>
                            <p><strong>Q:</strong> {userAnswer.question}</p>
                            <p>Your answer: {userAnswer.answer}</p>
                            {!userAnswer.isCorrect && <p>Correct answer: {userAnswer.correctAnswer}</p>}
                        </li>
                    ))}
                </ul>
                <button onClick={restartQuiz} className="restart-button-rs">Restart Quiz</button>
            </div>
            ) : (
                <>
                    <div className='progress-bar-rs' style={{ width: progressWidth }}></div>
                    <div className='question-section-rs'>
                        <div className='question-count-rs'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        {questions[currentQuestion].imageUrl && (
                            <img src={questions[currentQuestion].imageUrl} alt="Traffic Sign" className="question-image-rs" />
                        )}
                        <div className='question-text-rs'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section-rs'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText)} className="answer-option-rs">
                            {answerOption.answerText}
                        </button>
                        
                        ))}
                    </div>
                </>
            )}
        </div>
        </div>
    );
}

export default Quiz;
