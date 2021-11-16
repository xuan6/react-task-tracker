import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onCheck}) => {

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
                    <p>{task.day}</p>
                </div>
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
