import styles from './Header.module.css'
import logo from '../assets/rocket.svg'
import { PlusCircle } from 'phosphor-react'

interface HeaderProps {
    onNewTaskSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onNewTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newTaskText: string;
  }

export function Header({ onNewTaskSubmit, onNewTaskChange, newTaskText}: HeaderProps ) {   
    return(
        <header className={styles.header}>

            <div className={styles.logo}>
                    <img src={logo} alt="Logo ToDo" />
                    <div className={styles.text}>
                        <p>to<span>do</span></p>
                    </div>
                </div>
                
                <form onSubmit={onNewTaskSubmit} className={styles.inputAndButton}>
                    <input 
                        type="text"
                        placeholder='Adicione uma nova tarefa'
                        value={newTaskText}
                        onChange={onNewTaskChange} 
                    />

                    <button 
                        type='submit'>
                        <p>
                        Criar
                        <PlusCircle size={16} />
                        </p>
                    </button>
                </form>

           </header>
    )
}