import React from 'react';
import './MenuBar.css';

const MenuBar: React.FC = () => {
  return (
    <nav className="menu-bar">
      <h2>Assignments Assistant</h2>
      <div className="menu-options">
        <button className="menu-option">Chat bot</button>
        <button className="menu-option">Question checker</button>
      </div>
    </nav>
  );
};

export default MenuBar;
