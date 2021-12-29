import React from 'react'
import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import './PickerCalendar.css'
import './PickerClock.css'
import './PickerDate.css'
import './PickerDateTime.css'
import './PickerTime.css'
import Button from './Button'

const EditTask = ({currentTask, onEdit, visibility}) => {

    const [text, setText] = useState(currentTask.text)
    const [day, setDay] = useState(currentTask.text.day)
    const [reminder, setReminder] = useState(currentTask.reminder)
    const id = currentTask.id

    const onClick =()=> {//click dismiss button
        visibility()
    }


    const onSubmit = (e) => {
        e.preventDefault() //prevent refreshing and submiting to this page

        if(!text){
            alert('Please add task name.')
            return
        }
        if(text){
            alert('Task was successfully updated!')
        }

        onEdit({id, text, day, reminder})
    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Task Name'
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <DateTimePicker 
                    onChange={setDay}
                    value={day}
                    isClockOpen={false}
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
                value='Update Task'
                className='btn btn-block'
            />
            <Button buttonColor='#efefef' text='Cancel' textColor='#000000' onClick={onClick} />
        </form>
    )
}

export default EditTask
