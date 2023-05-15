import { Task } from './Task'
import styles from './TaskBoard.module.css'
export function TaskBoard() {
    return (
        <div className={styles.TaskBoard}>
                <div className={styles.taskList}>
                    <Task />
                </div>
        </div>
    )
}

