import React, { FC } from "react";
import { Task } from "./Task";
import { TaskListItem } from "./TaskListItem";

interface TaskListProps {
    tasks: Task[] | null,
    onComplete: (task: Task) => void;
}

export const TaskList: FC<TaskListProps> = ({ tasks, onComplete }) => (
    <div style={{maxWidth: '600px', padding: '0px 10px'}}>
        {tasks !== null && tasks.length > 0 &&
            tasks.map((task) => (
            <TaskListItem key={task.ID} task={task} onComplete={onComplete} />
            ))
        } 
        {(tasks === null || tasks.length) === 0 &&
            <span>You don't have any tasks yet.</span>
        }
    </div>
);
