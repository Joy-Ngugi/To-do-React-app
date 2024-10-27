import React, { useState } from 'react';
import { useTodos } from './TodoContext';

function TodoForm({ editTask, onSave, onCancel }) {
  const { dispatch } = useTodos();
  const [title, setTitle] = useState(editTask ? editTask.title : '');
  const [description, setDescription] = useState(editTask ? editTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
        onSave({ title, description});
    //   dispatch({ type: 'EDIT_TASK', payload: { id: editTask.id, title, description } });
    } else {
      dispatch({ type: 'ADD_TASK', payload: { title, description } });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-2 py-1 w-full"
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded px-2 py-1 w-full"
        required
      />
      <div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editTask ? 'Edit Task' : 'Add Task'} 
      </button>
      
        {editTask && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
        </div>
    </form>
  );
}

export default TodoForm;
