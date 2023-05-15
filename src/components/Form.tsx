import styles from'./Form.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { PlusCircle } from 'phosphor-react' 

interface FormProps{
    onHandleDataForm: (dados:string) => void
}


export function Form({onHandleDataForm}:FormProps) {

    const [newTaskText, setNewTaskText] = useState('');
    
    function handleNewTasksText(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleCreateNewTask(event:FormEvent){
        event.preventDefault();
        onHandleDataForm(newTaskText)
        setNewTaskText('')
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleCreateNewTask} >
                <input 
                    name="taskText"
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    value={newTaskText}
                    onChange={handleNewTasksText}
                    />
                <button type="submit">
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </form>
        </div>
    )
}