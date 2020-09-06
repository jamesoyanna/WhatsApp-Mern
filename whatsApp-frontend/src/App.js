import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Chat from './components/chat/Chat';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
