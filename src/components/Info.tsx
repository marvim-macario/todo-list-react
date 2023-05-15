import styles from './Info.module.css'

interface InfoProps{
    completed?: number
    tasks:number
}

export function Info({tasks, completed}:InfoProps) {
    return(
        <header className={styles.info}>
        <div>
            <p>Tarefas criadas</p>
            <span>{tasks}</span>
        </div>
        <div>
            <p>Concluídas</p>
            <span>{completed}</span>
        </div>
    </header>
    )
}