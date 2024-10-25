import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar: React.FC = () => {
  return (
    <div className="menu-bar">
      <h1>My Application</h1>
      <div className="menu-options">
        <Link to="/chat-app/" className="menu-option">Chat Bot</Link>
        <Link to="/question-checker" className="menu-option">Question Checker</Link>
      </div>
    </div>
  );
}

export default MenuBar;
