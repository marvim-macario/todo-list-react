import styles from './EmptyTask.module.css'
import clipBoard from '../assets/clipboard.svg'

export function EmptyTask(){
    return(
        <div className={styles.emptyTask}>
           <img src={clipBoard} alt="logotipo todo" width={56} />
           <p className={styles.message}>Você ainda não tem tarefas cadastradas </p>
           <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}