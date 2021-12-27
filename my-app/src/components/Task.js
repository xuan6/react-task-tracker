import {FaTimes, FaEdit} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onCheck, onEdit}) => {

    const date = task.day
    const dateDisplay = date.toString()

    return (
        <div
            className={`task ${task.reminder ?  'reminder' : ''} ${task.complete ?  'complete' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <div className='list-start'>
                <div className='form-control-check'>
                    <input
                        type='checkbox'
                        value={task.complete}
                        checked={task.complete}
                        onChange={()=>onCheck(task.id)}
                    />
                </div>
                <div className='list-text'>
                    <h3>{task.text}</h3>
                    <p>{dateDisplay}</p>
                </div>
            </div>
            <div className='action-icons'>
                <div className='icon-button'>
                    <FaEdit
                    className='action-icon'
                    onClick={() => onEdit(task.id)} //state pass down, action pass up.
                    />
                </div>
                <div className='icon-button'>
                    <FaTimes
                    className='action-icon'
                    onClick={() => onDelete(task.id)} //state pass down, action pass up.
                    />
                </div>
            </div>
            
            
        </div>
    )
}

export default Task
