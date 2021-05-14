import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MessagesList from './components/MessagesList';
import AddMessage from './components/AddMessage';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <section props='main'>
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
