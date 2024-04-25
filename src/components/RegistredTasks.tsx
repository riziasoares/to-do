import { useState } from 'react';
import styles from './RegistredTasks.module.css'
import { Trash } from 'phosphor-react'

export interface TaskType {
    id: number;
    content: string;
    done: boolean;
}

interface TaskProps {
    task: TaskType;
    onDeleteTask: (task: TaskType) => void;
    onTaskDone: (task: TaskType) => void;
}

export function RegistredTasks({ task, onDeleteTask, onTaskDone }: TaskProps) {

    const [isChecked, setIsChecked] = useState(task.done);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onTaskDone(task);
    }

    function handleDeleteTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        onDeleteTask(task);
    }

    return(
        <div>
            <form className={styles.cards}>
                <div className={styles.cardsTasks}>
                    <label className={styles.checkboxAndText}>
                        <input 
                        className={styles.checkboxInput}
                        type="checkbox" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        />
                        <p>{task.content}</p>
                    </label>
                    
                    {/* quando clicar no botão, vou chamar a função handleDeleteTask - com isso, precisa criar essa função*/}
                    <button onClick={handleDeleteTask} title='Deletar comentário'> 
                        <Trash size={24} />
                    </button>
                </div>
          
            </form>
        </div>
        
    )
}