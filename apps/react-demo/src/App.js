import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Counter Component
      <fx-counter values={[1,2,3, 4]}></fx-counter>
    </div>
  );
}

export default App;
