import styles from'./Form.module.css'
export function Form() {
    return (
        <div className={styles.form}>
            <form action="">
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" />
                <button type="submit">
                    Criar
                </button>
            </form>
        </div>
    )
}