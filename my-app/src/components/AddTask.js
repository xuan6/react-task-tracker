import React from 'react'
import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'

const AddTask = ({onAdd, formVisibility}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() //prevent refreshing and submiting to this page

        if(!text){
            alert('Please add task name.')
            return
        }

        onAdd({text, day, reminder}) //adding a task by taking 3 parameter as a object as a whole

        //clear form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className={`add-form ${formVisibility}`} onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            </div>
            
            <div className='form-control'>
                <label>Day & Time</label>
                <DateTimePicker 
                    onChange={setDay}
                    value={day}
                />
            </div>
            <div className='form-control form-control-check reminder-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    value={reminder}
                    checked={reminder}
                    onChange={(e)=>setReminder(e.currentTarget.checked)} //return a boolean value
                />
            </div>
            <input
                type='submit'
                value='Save Task'
                className='btn btn-block'
            />
        </form>
    )
}

export default AddTask
