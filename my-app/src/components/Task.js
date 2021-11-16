import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div
            className={`task ${task.reminder ?  'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <div className='list-text'>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <div className='icon-button'>
                <FaTimes
                className='cancel-icon'
                onClick={() => onDelete(task.id)} //state pass down, action pass up.
                />
            </div>
            
        </div>
    )
}

export default Task
