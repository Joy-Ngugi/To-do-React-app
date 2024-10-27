import React from 'react';
import { useTodos } from './TodoContext';
import TodoForm from './TodoForm';
import  { useState } from 'react';

function TodoItem({ task }) {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const handleSaveEdit = (updatedTask) => {
    dispatch({ type: 'EDIT_TASK', payload: { ...updatedTask, id: task.id } });
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className={`p-4 border rounded ${task.completed ? 'bg-green-100' : ''}`}>
        {!isEditing ?(
            <>
      <div>
        <h3 className= {`${task.completed ? 'line-through' : 'font-bold text-lg font-serif'  }`} >{task.title}</h3>
        <p className = 'py-2' >{task.description}</p>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
       
      </div>
      </>
       ) : (
        <TodoForm 
          editTask={task}
          onSave={handleSaveEdit} // Pass save function to form
          onCancel={() => setIsEditing(false)} // Cancel edit mode
        />
      )}
    </div>
  );
}

export default TodoItem;
