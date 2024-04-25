import styles from './InfoTasks.module.css'
import { TaskType } from './RegistredTasks'

interface InfoTasksProps{
    tasks: TaskType[];
}

export function InfoTasks({ tasks }: InfoTasksProps) {

    const completedTasksCount = tasks.filter(task => task.done).length;
    //Aqui o contador de tarefas concluídas deve ser atualizado conforme as tarefas que forem marcadas como concluídas na lista de tarefas em 'RegistredTasks'.

    return(
        <div className={styles.tasks}>
            <div className={styles.headerTitleTasks}>
                <header className={styles.createdAndCompletedTitleTasks}>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p> 
                        <span>{tasks.length}</span>
                    </div>
                    
                    <div className={styles.completedTasks}>
                        <p>Concluídas</p>
                        <span>{completedTasksCount}</span>
                    </div>
                </header> 
                            
            </div>

            
        </div>
        
    )
}

