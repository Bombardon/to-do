import { FC } from "react";
import { Task } from "./Task";

interface TaskListItemProps {
    task: Task,
    onComplete: (task: Task) => void; 
}

export const TaskListItem: FC<TaskListItemProps> = ({ task, onComplete }) => (
    <div style={{padding: '5px 0px', clear: 'both'}}>
        <span>
        {task.description} {!task.isComplete && <button onClick={() => onComplete(task)} style={{float: 'right'}}>Complete</button>}
        </span>
    </div>
)