import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ChatBot from '../pages/ChatBot';
import MenuBar from '../pages/MenuBar';
import QuestionChecker from '../pages/QuestionChecker';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes >
          <Route path="/chat-app" element={<ChatBot />} />
          <Route path="/question-checker" element={<QuestionChecker />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
