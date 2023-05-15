import styles from './Task.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { useState } from 'react'

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
    onHandleInfos: (completed: boolean) => void;
}

export function Task({ content, onDeleteTask, onHandleInfos }: TaskProps) {
    const [ButtonCheck, setButtonCheck] = useState(false)
    const [lineThrough, setLineThrough] = useState(styles.taskContent)

    function handleCheckTask() {
        if (ButtonCheck) {
            setButtonCheck(false)
            setLineThrough(styles.taskContent)

            onHandleInfos(false)
        } else {
            setButtonCheck(true)
            setLineThrough(styles.taskContentLineThrough)
            onHandleInfos(true)
        }
    }


    function handleDeleteTask() {
        onDeleteTask(content)
    }
    return (
        <div className={styles.task}>
            {
                ButtonCheck ?
                    <CheckCircle size={24}
                        onClick={handleCheckTask}
                        weight='fill'
                        className={styles.checkCircle} />
                    :
                    <Circle
                        onClick={handleCheckTask}
                        className={styles.circle}
                        size={24}
                    />
            }
            
            <p className={lineThrough}>{content}</p>
            <button onClick={handleDeleteTask}>
                <Trash size={14} />
            </button>
        </div>
    )
}

