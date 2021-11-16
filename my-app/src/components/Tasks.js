import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle, onCheck}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onCheck={onCheck}/>
            )
            )}
        </div>
    )
}

export default Tasks
