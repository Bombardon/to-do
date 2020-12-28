import { v4 as uuidv4 } from 'uuid';

export interface Task {
    ID: string,
    description: string,
    isComplete: boolean,
}

const tasks: Task[] = [
    {
      ID: "1",
      description: 'Task 1',
      isComplete: false
    },
    {
      ID: "2",
      description: 'Task 2',
      isComplete: true
    }
];

export const getTasks = async (

): Promise<Task[]> => {
    return tasks;
}

export const addTask = async (
    task: Task,
) : Promise<Task | undefined> => {
    const taskID = uuidv4();
    const newTask = {
        ...task,
        taskID
    };
    tasks.push(newTask);

    return newTask;
};

export const updateTask = async (
    updatedTask: Task,
) : Promise<Task | undefined> => {
    const task = tasks.filter(task => task.ID === updatedTask.ID)[0];
    task.isComplete = updatedTask.isComplete;

    return updatedTask;
};