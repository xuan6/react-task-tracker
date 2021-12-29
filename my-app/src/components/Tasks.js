import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle, onCheck, toEdit}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onCheck={onCheck} toEdit={toEdit}/>
            )
            )}
        </div>
    )
}

export default Tasks
