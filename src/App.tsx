
type Task = {
  ID: string;
  Description: string;
  DueOn: Date;
}

type Tasks = Array<Task>;

const tasks = new Tasks[
  new Task({
    ID: "1",
    Description: "Task 1"
  }),
  new Task({
    ID: "2",
    Description: "Task 2"
  }),
];

const App = () => {
  return (
    <div>
      <h1>To-do</h1>
      <div>
        <form>
          Add task: &nbsp;
          <input type="text" />
        </form>
      </div>
      <div>
        <h2>My tasks</h2>
      </div>
      
    </div>
  );
}

const TaskList = (list: Tasks) => {
  {list.map(item => (
    <TaskListItem {...item} />
  ))};
};

const TaskListItem = (task: Task) => {
  return (
    <div>
      <span>{task.Description}</span>
    </div>
  );
};

export default App;
