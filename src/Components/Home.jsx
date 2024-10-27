import React from 'react';
// import TodoForm from './Components/TodoForm';
// import TodoList from './Components/TodoList';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Home() {
  return (
    // <div className="bg-purple-950" >
    <div className="p-8 max-w-6xl mx-auto space-y-8 bg-purple-400 " >
      <h1 className="text-5xl font-bold p-3 text-center  text-white ">To-Do App</h1>
      <TodoForm />
      <TodoList />
    </div>
    // </div>
  );
}

export default Home;
