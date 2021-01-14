import React from 'react'
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import FormInput from './components/FormInput';

const App = () => {
  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>My Todo List</h2>
      <div className="todos">
        <Todos />
        <FormInput />
      </div>

    </div>
  );
}

export default App;
