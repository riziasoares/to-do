import './App.module.css'
import { Header } from './components/Header'
import { InfoTasks } from './components/InfoTasks'
import { UnregistredTasks } from './components/UnregristredTasks'
import { RegistredTasks, TaskType } from './components/RegistredTasks'
import { useState } from 'react'


export function App() {

  const initialTasks: TaskType[] = [
    {
      id: 1,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      done: true
    },
  
    {
      id: 2,
      content: 'teste teste',
      done: false
    },
  
    {
      id: 3,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste dolore laborum non libero consequuntur pariatur ex labore sequi quo, odit nobis cupiditate atque hic, quaerat modi veritatis deleniti qui!',
      done: true
    },
  
  ]
  //lista de comentários
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  const [newTaskText, setNewTaskText] = useState('');

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        content: newTaskText,
        done: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  //Essa função irá receber quais tasks eu quero deletar - Para remover um comentário da lista, precisa criar uma nova lista de TASK sem o comentário que eu não quero
  //cria uma nova lista - cria uma variavél para armazenar a lista de tarefas sem a tarefa que eu excluí e o filter ele percorre cada comentário e verificar quais elementos ainda estão na lista para ser retornados na tela.
  function onDeleteTask(taskToDelete: TaskType) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  //A função copia todas as propriedades da tarefa atual, e substitui o valor da propriedade 'done' por true ou false, assim se a tarefa está marcada como concluída(true), ela setá trocada por não concluída ou ao contrário. Ou se ela não houve alteração, retornamos a tarefa sem alterações.
  //Depois de mapear todas as tarefas do array e elas serem atualizadas, essa informações são armazenadas dentro do updateTasks e a função setTasks é usada para atualizar o estado 'tasks' criando um novo array com todas as informações atualizadas
  function onTaskDone(taskToUpdate: TaskType) {
    const updateTasks = tasks.map(task => {
      if (task.id === taskToUpdate.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updateTasks);
  }

  return (
    <div>
      <Header 
        onNewTaskSubmit={handleNewTaskSubmit}
        onNewTaskChange={handleNewTaskChange}
        newTaskText={newTaskText}
      />

      <InfoTasks
        tasks={tasks}
      />

      <main>
        <div>
          {tasks.length > 0 
          ? tasks.map(task => {
            return(
              <RegistredTasks
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onTaskDone={onTaskDone} //passa a função para dentro do RegistredTask para verificar as marcações de uma tarefa concluída ou não
              />
            )
          })
            : <UnregistredTasks />
          } 
        </div>
        
      </main>

    </div>
  )
}
