import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

type Task = {
  ID: string,
  Description: string,
}

type Tasks = Array<Task>;

interface TaskListProps {
  data: Tasks
}

interface TaskListItemProps {
  data: Task
}

interface AddTaskProps {
  value: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;   
}

const tasks: Task[] = [];
//   {
//     ID: "1",
//     Description: 'Task 1',
//   },
//   {
//     ID: "2",
//     Description: 'Task 2',
//   }
// ];

const App = () => {
  const [list, setTaskList] = React.useState(tasks);
  const [newTask, setNewTask] = React.useState('');

  function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    const updatedList = list.concat({ ID: uuidv4(), Description: newTask });
    setTaskList(updatedList);
    setNewTask('');
  }

  return (
    <div>
      <h1 style={{fontSize:'50px'}}>To-do</h1>
      <h2>My tasks</h2>
      <TaskList data={list} />

      <AddTask 
        value={newTask}
        onChange={handleChange}
        onSubmit={handleAddTask}
      />
    </div>
  );
}

const AddTask: FC<AddTaskProps> = ({value, onChange, onSubmit}) => (
  <div style={{marginTop: '30px', padding: '20px 10px', boxShadow: '0 3px 7px 0 rgba(110, 112, 114, 0.21)'}}>
    Add task: &nbsp;
    <input 
      type="text" 
      value={value}
      onChange={onChange}
    />
    <button 
      type='submit'
      onClick={onSubmit}
    >
      Add
    </button>
  </div>
);

const TaskList: FC<TaskListProps> = ({ data }) => (
  <div style={{maxWidth: '400px', padding: '0px 10px'}}>
    {data.length > 0 &&
        data.map((task) => (
          <TaskListItem key={task.ID} data={task} />
        ))
    } 
    {data.length === 0 &&
      <span>You don't have any tasks yet.</span>
    }
  </div>
);

const TaskListItem: FC<TaskListItemProps> = ({ data }) => (
  <div style={{padding: '5px 0px', clear: 'both'}}>
    <span>{data.Description} <button style={{float: 'right'}}>Complete</button></span>
  </div>
)
export default App;