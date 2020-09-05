import React from 'react';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
//import './App.css';

function App() {
  return (
    <div className="app">
     <h1>Lets build a Mern WhatsApp</h1>
     <SideBar />
     <Chat />
    
    </div>
  );
}

export default App;
