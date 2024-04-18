import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/beach-quiz.css';


const questions = [
  { 
    imageSrc: require('../data/sign2.png'),
    questionText: 'What do red and yellow flags at the beach signify?',
    answerOptions: [
      { answerText: 'Water skiing area', isCorrect: false },
      { answerText: 'Safe swimming area', isCorrect: true },
      { answerText: 'Fishing zone', isCorrect: false },
      { answerText: 'Camping area', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/red_flag.png'),
    questionText: 'What does a red flag on the beach indicate?',
    answerOptions: [
      { answerText: 'Safe to swim', isCorrect: false },
      { answerText: 'Strong winds', isCorrect: false },
      { answerText: 'Dangerous conditions, no swimming', isCorrect: true },
      { answerText: 'Water skiing permitted', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/yellow_flag.png'),
    questionText: 'If you see a yellow flag at the beach, what does it mean?',
    answerOptions: [
      { answerText: 'Sharks have been spotted', isCorrect: false },
      { answerText: 'Safe for water skiing', isCorrect: false },
      { answerText: 'Caution - moderate surf and/or currents', isCorrect: true },
      { answerText: 'Perfect conditions for swimming', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/no_swimming.png'),
    questionText: 'What does this sign at the beach signify?',
    answerOptions: [
      { answerText: 'Swimming is advised', isCorrect: false },
      { answerText: 'The presence of dangerous marine life', isCorrect: false },
      { answerText: 'Water is too shallow for swimming', isCorrect: false },
      { answerText: 'Swimming is prohibited due to dangerous conditions', isCorrect: true },
    ],
  },
  {
    imageSrc: require('../data/no_camping.png'),
    questionText: 'You notice a sign like this." What does this mean?',
    answerOptions: [
      { answerText: 'Camping is allowed during the day', isCorrect: false },
      { answerText: 'Camping is permitted with a permit', isCorrect: false },
      { answerText: 'No camping is allowed on the beach', isCorrect: true },
      { answerText: 'Camping is allowed outside of swimming areas', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/rip.png'),
    questionText: 'Which sign indicates that there are dangerous currents that could carry swimmers away from the shore?',
    answerOptions: [
      { answerText: 'Long Beach', isCorrect: false },
      { answerText: 'Rip', isCorrect: true },
      { answerText: 'Shallow Water', isCorrect: false },
      { answerText: 'Large Waves', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/stingers.png'),
    questionText: 'What does a sign warning of "Marine Stingers" imply?',
    answerOptions: [
      { answerText: 'The water is safe for swimming', isCorrect: false },
      { answerText: 'There are dangerous jellyfish in the water', isCorrect: true },
      { answerText: 'The beach is closed for swimming', isCorrect: false },
      { answerText: 'Fishing is prohibited', isCorrect: false },
    ],
  },
  {
    imageSrc: require('../data/gutters.png'),
    questionText: 'Why should you be cautious of if there\'s a sign indicating "Sudden Drop Off"?',
    answerOptions: [
      { answerText: 'Sharks in the vicinity', isCorrect: false },
      { answerText: 'A rapid increase in water depth', isCorrect: true },
      { answerText: 'High winds affecting the beach', isCorrect: false },
      { answerText: 'Prohibition of water skiing', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showReviewPage, setShowReviewPage] = useState(false);

  // This function handles the logic when a user selects an answer
  const handleAnswerOptionClick = (answerOption) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answerOption;
    setUserAnswers(newUserAnswers);
  };

  // Function to advance to the next question
  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setShowReviewPage(true); // Show review page when all questions have been answered
    }
  };
  
  // Function to check if the question is answered
  const isQuestionAnswered = (index) => {
    return userAnswers[index] !== null;
  };

  // Function to go back to the previous question
  const handlePreviousQuestion = () => {
    const prevQuestionIndex = currentQuestion - 1;
    if (prevQuestionIndex >= 0) {
      setCurrentQuestion(prevQuestionIndex);
    }
  };

  // Reset the quiz to its initial state
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowReviewPage(false);
  };

  // Calculate score for the scoreboard
  const calculateScore = () => {
    return userAnswers.filter(answer => answer?.isCorrect).length;
  };

  // Component for reviewing answers at the end
  const ReviewPage = () => (
    <div className="review-page">
      <h1>Your Score: {calculateScore()} / {questions.length}</h1>
      {questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer?.isCorrect;
        return (
          <div key={index} className="review-item">
            <img src={question.imageSrc} alt={`Question ${index + 1}`} className="question-image"/>
            <div className="question-text">{question.questionText}</div>
            <div className={`answer ${isCorrect ? 'correct' : 'incorrect'}`}>
              Your answer: {userAnswer?.answerText} {isCorrect ? '✔' : '✖'}
            </div>
            {!isCorrect && (
              <div className="answer correct">
                Correct answer: {question.answerOptions.find(option => option.isCorrect).answerText} ✔
              </div>
            )}
          </div>
        );
      })}
      <button onClick={resetQuiz} className="reset-quiz-btn">Redo Quiz</button>
    </div>
  );

  return (
    <div className="quiz-container">
      <div className="back-link-container">
        <Link to="/beach-safety" className="back-to-beach-safety">&#8592; Back to Beach Safety</Link>
      </div>
      <div className="quiz-layout">
        <div className="quiz">
          {showReviewPage ? (
            <ReviewPage />
          ) : (
            <>
              <div className="progress-tracker">
                Question {currentQuestion + 1} / {questions.length}
              </div>
              <div className="quiz-content">
                <div className='question-section'>
                  <img src={questions[currentQuestion].imageSrc} alt="Question" className="question-image" />
                  <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(answerOption)}
                      className={`answer-button ${userAnswers[currentQuestion]?.answerText === answerOption.answerText ? 'selected' : ''}`}
                    >
                      {String.fromCharCode(65 + index)}. {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="quiz-navigation">
                {currentQuestion > 0 && <button onClick={handlePreviousQuestion}>Previous</button>}
                {currentQuestion < questions.length - 1 && (
                  <button onClick={handleNextQuestion}>Next</button>
                )}
                {currentQuestion === questions.length - 1 && <button onClick={() => setShowReviewPage(true)}>Submit</button>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;