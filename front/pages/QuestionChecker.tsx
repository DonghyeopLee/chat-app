import React, { useState } from 'react';
import './QuestionChecker.css';
import dictionary from './data/Dictionary.json'; // Assuming you have a JSON file with questions

const QuestionChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const checkQuestion = () => {
    const filteredQuestions = dictionary.questions.filter(question =>
      question.toLowerCase().includes(input.toLowerCase())
    );
    setResults(filteredQuestions);
  };

  return (
    <div className="question-checker-container">
      <h2>Question Checker</h2>
      <textarea
        className="question-input"
        placeholder="Type your question here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={checkQuestion} className="check-button">Check Question</button>

      <div className="results">
        <h3>Matching Questions:</h3>
        <ul>
          {results.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionChecker;
