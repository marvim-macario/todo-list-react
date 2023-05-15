import { Form } from './components/Form';
import { Header } from './components/Header'
import { EmptyTask } from './components/EmptyTasks';
import { Info } from './components/Info';
import { Task } from './components/Task';
import styles from './App.module.css';
import { useState } from 'react';

import './global.css';


function App() {
  const [tasks, setNewTask] = useState<string[]>([])
  const [taskCompleted, setTaskCompleted] = useState(0)
  const [TaskNumber, setTaskNumber] = useState(0)

  function handleDataForm(data: string) {
    setNewTask([...tasks, data])
    setTaskNumber(TaskNumber + 1)
  }

  function deleteComment(task: string) {
    const tasksNaoDeletadas = tasks.filter(tasksToDelelete => {
      return task !== tasksToDelelete
    })
    setTaskCompleted(taskCompleted - 1)
    setTaskNumber(TaskNumber - 1)
    setNewTask(tasksNaoDeletadas)
  }

  function handleInfos(numberOfTasksCompleted: boolean) {
    if (taskCompleted > 0 && !numberOfTasksCompleted) {
      setTaskCompleted(taskCompleted - 1)
    } else if (numberOfTasksCompleted) {
      setTaskCompleted(taskCompleted + 1)
    }
    console.log(taskCompleted)
  }

  return (
    <div>
      <Header />
      <div >
        <Form
          onHandleDataForm={handleDataForm}
        />
      </div>
      <div className={styles.wrapper}>
        <Info
          completed={taskCompleted}
          tasks={TaskNumber}
        />
        <div className={styles.TaskBoard}>
          <div className={styles.taskList}>
            {
              !tasks.length ? <EmptyTask /> : tasks.map(task => {
                return (
                  <Task
                    key={task}
                    content={task}
                    onDeleteTask={deleteComment}
                    onHandleInfos={handleInfos}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
