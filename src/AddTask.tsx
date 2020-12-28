import { FC } from "react";

  interface AddTaskProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (description: string) => Promise<void>;   
  }
  
  export const AddTask: FC<AddTaskProps> = ({value, onChange, onSubmit}) => (
    <div style={{marginTop: '25px', padding: '20px 10px'}}>
      Add task: &nbsp;
      <input 
        type="text" 
        value={value}
        onChange={onChange}
      />
      <button 
        type='submit'
        onClick={() => onSubmit(value)}
      >
        Add
      </button>
    </div>
  );