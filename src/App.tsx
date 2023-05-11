import { Form } from './components/Form';
import { Header } from './components/Header'
import { TaskBoard } from './components/TasksBoard';
import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div >
        <Form />
      </div>
      <div className={styles.wrapper}>
        <TaskBoard />
      </div>
    </div>

  )

}

export default App
