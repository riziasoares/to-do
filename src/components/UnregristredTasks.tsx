import styles from './UnregistredTasks.module.css'

import Clipboard from '../assets/Clipboard.svg' 

export function UnregistredTasks() {
    return (
        <main className={styles.registeredTasks}>
                <div className={styles.unregistredTasks}>
                    <img src={Clipboard} alt="Bloco de anotações" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
        </main> 
    )
    
}
