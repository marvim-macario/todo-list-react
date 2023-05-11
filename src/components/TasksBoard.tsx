import styles from './TaskBoard.module.css'
export function TaskBoard() {
    return (
        <div className={styles.TaskBoard}>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span className="number-tasks">0</span>
                </div>

                <div>
                    <p>Concluídas</p>
                    <span className="number-tasks">0</span>
                </div>
            </header>
            <body>


            </body>
        </div>
    )
}