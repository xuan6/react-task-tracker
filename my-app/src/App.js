import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




const App = () => {
  // const [showAddTask, setShowAddTask] = 
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
    const id = Math.floor(Math.random()*100+1) //if use tasks.length + 1, then it will cause duplicated id when we delete tasks from the list. Say delete #2 task and add a new task, the later two tasks would both have id as #3
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

    //refresh ID
    // const taskCount = tasks.length
    // for (let i = 0; i<taskCount; i++){
    //   setTasks(
    //     tasks.map((task)=>
    //       task.id = i
    //     )
    //   )
    // }

  }

  //set add task form visibility
  const [formDisplay, setFormDisplay] = useState(true)
  const toggleTaskForm = (visibility) =>{ 
      if (visibility==='true'){
        setFormDisplay(true)
      }else
      {
        setFormDisplay(false)
      }
  }

  return (
    <div className="container">
      <Header toggleTaskForm={toggleTaskForm}/>
      {formDisplay?
      <AddTask onAdd={addTask}/>: <p>Click button to expand</p> }
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Task to Show' //show empty state
      }
    </div>
  );
}

export default App;
