import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Link,  Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <p><Link to="/todos">See my todos</Link></p>
        <p><Link to="/todos/new">Add a new Todo</Link></p>
        <Route path="/todos"
          component={() => <TodoList />} />
        <Route path="/"
        render={() => <Redirect to="/todos" />} />
        
      

      
    </div>
  );
}

export default App;
