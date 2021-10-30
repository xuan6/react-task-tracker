import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'



const App = () => {

  const [tasks, setTasks] = useState ([
        {
            id:1,
            text:'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Grocery Shopping',
            day:'Feb 5th at 6:30pm',
            reminder:false,
        }
    ])

  //const a function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // const a function to set reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder:
        !task.reminder} : task)
        )
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Task to Show' //show empty state
      }
    </div>
  );
}

export default App;
