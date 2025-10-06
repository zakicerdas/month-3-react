 import React, { useState } from 'react';

function TodoList() {
 const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Hooks', completed: false },
    { id: 2, text: 'Membangun Aplikasi Todo', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]); // Tambahkan todo baru
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // Hapus todo
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambahkan tugas baru..."
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;