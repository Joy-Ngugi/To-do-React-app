import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { tasks } = useTodos();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  }).filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-4"
      />
      <div className="space-x-2 mb-4">
        <button onClick={() => setFilter('all')} className="bg-blue-500 text-white px-2 py-1 rounded">
          All
        </button>
        <button onClick={() => setFilter('completed')} className="bg-green-500 text-white px-2 py-1 rounded">
          Completed
        </button>
        <button onClick={() => setFilter('uncompleted')} className="bg-yellow-500 text-white px-2 py-1 rounded">
          Uncompleted
        </button>
      </div>
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
