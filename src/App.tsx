import React, { useEffect } from 'react';

import './App.css';
import { addTask, getTasks, Task, updateTask } from './Task';
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';

const getIncompleteTasks = (tasks: Task[] | null) => {
  return tasks === null ? null : tasks.filter(task => task.isComplete === false);
};

const getCompletedTasks = (tasks: Task[] | null) => {
  return tasks === null ? null : tasks.filter(task => task.isComplete === true);
};

const App = () => {
  const [incompleteTasks, setTaskList] = React.useState<Task[] | null>(getIncompleteTasks(null));
  const [completeTasks, setCompletedTaskList] = React.useState(getCompletedTasks(null));
  const [newTask, setNewTask] = React.useState('');

  useEffect(() => {
    const getAllTasks = async() => {
      const tasks = await getTasks();
      updateTaskLists(tasks);
    };
    getAllTasks();    
  }, []);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCompleteTask = async (task: Task) => {
    Object.assign(task, {isComplete: true});
    await updateTask(task);
    updateTaskLists(await getTasks());
  }

  const updateTaskLists = (tasks: Task[]) => {
    setTaskList(getIncompleteTasks(tasks));
    setCompletedTaskList(getCompletedTasks(tasks));
  };

  const handleAddTask = async (newTask: string) => {
    await addTask({ ID: '0', description: newTask, isComplete: false });
    setNewTask('');
    updateTaskLists(await getTasks());
  }

  return (
    <div style={{padding: '10px', backgroundColor: 'white', boxShadow: '0 3px 7px 0 rgba(110, 112, 114, 0.21)'}}>
      <h1 style={{fontSize:'50px'}}>To-do</h1>
      <h2>My tasks</h2>
      <TaskList 
        tasks={incompleteTasks} 
        onComplete={handleCompleteTask}
      />

      <h2>Completed</h2>
      <TaskList 
        tasks={completeTasks}
        onComplete={handleCompleteTask}
      />
      <hr />
      <AddTask 
        value={newTask}
        onChange={handleChange}
        onSubmit={handleAddTask}
      />
    </div>
  );
}

export default App;