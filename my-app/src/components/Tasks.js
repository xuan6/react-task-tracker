import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle, onCheck, onEdit}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onCheck={onCheck} onEdit={onEdit}/>
            )
            )}
        </div>
    )
}

export default Tasks
