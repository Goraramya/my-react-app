import React from 'react';
import TodoList from './components/TodoList/index';
import TodoItem from './components/TodoItem/index';

const App = () => {
  return (
    <div>
      <header>
        <h1>To-Do List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
