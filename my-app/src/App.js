import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




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

  const addTask = (task) => { //task is an object with 3 parameters - text, day, reminder
    const id = Math.floor(Math.random()*100+1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Task to Show' //show empty state
      }
    </div>
  );
}

export default App;
