import {FaTimes} from 'react-icons/fa'
import { useState } from 'react/cjs/react.development'

const Task = ({task, onDelete, onToggle}) => {

    const[complete,setComplete]=useState(false)

    return (
        <div
            className={`task ${task.reminder ?  'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <div className='list-start'>
                <div className='form-control-check'>
                    <input
                        type='checkbox'
                        value={complete}
                        checked={complete}
                        onChange={(e)=>setComplete(e.currentTarget.checked)}
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
