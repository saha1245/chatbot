// src/App.tsx
import React from 'react';
import Chat from './Chat';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
         {/* align center */}
        <h1 style={{ textAlign: 'center' }}>Health Care Chatbot</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
};

export default App;