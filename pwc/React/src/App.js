// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">React Weather Widget</h1>
      <weather-widget city="Pune"></weather-widget>
      <weather-widget city="Hyderabad"></weather-widget>
    </div>
  );
}

export default App;
