import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState('');


  const handleAddTask = () => {

    if (taskInput.trim()) {

      setTasks([...tasks, taskInput]);

      setTaskInput(''); 

    }
  };


  const handleRemoveTask = (index) => {

    const updatedTasks = tasks.filter((task, i) => i !== index);

    setTasks(updatedTasks);

  };

  return (

    <div className="App">

      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} placeholder="Add a new task"/>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
