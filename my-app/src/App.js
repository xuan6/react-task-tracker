import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import EditTask from './components/EditTask'
// import EditTask from './components/EditTask'




const App = () => {
  // const [showAddTask, setShowAddTask] = 
  const [tasks, setTasks] = useState ([ ])

  useEffect(()=>{
    const getTasks = async ()=> {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //fetch tasks array from server
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:3004/tasks')
    const data = await res.json()
    return data
  }

  //fetch specific task by id from server
  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:3004/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //const a function to delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3004/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //date picket config
  const dayOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'numeric' };
  const dayFormatted = (day) =>{
    return day.toLocaleString("en-US", dayOptions)
  }

  //const a function to add task
  const addTask = async(task) => { //task is an object with 3 parameters - text, day, reminder
    //convert Date() to string format
    // const dayFormatted = task.day.toLocaleString("en-US", dayOptions)

    const res = await fetch('http://localhost:3004/tasks', {
      method: 'POST', //add new task to server
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify({...task, day:dayFormatted(task.day)}),
    })
    
    const data = await res.json()
    setTasks([...tasks, data]) //update the UI to show new task
    
    //without setting server, pure UI redenring see below
    // const id = Math.floor(Math.random()*100+1) //if use tasks.length + 1, then it will cause duplicated id when we delete tasks from the list. Say delete #2 task and add a new task, the later two tasks would both have id as #3
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  // const a function to set reminder
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}//other properties under the task will not change, only the reminder property change to the opposite value, and then save this changed task as a object, waiting to be pass to server side
    const res = await fetch(`http://localhost:3004/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(updatedTask) //connect with server to modify that specific task by swapping it with the updated task object
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder:
        data.reminder} : task) //since data represents the latest updated task after we toggle ir, we can use data.reminder to show the change, aka change server side data first, and then pass down the change to the UI level
        )
    
    //if not using json-sever, see below for how to make pure UI change
    // setTasks(
    //   tasks.map((task) => 
    //     task.id === id ? {...task, reminder:
    //     !task.reminder} : task)
    //     )
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



  //task completion check and uncheck
  const checkCompletion = async(id) =>{
    const taskToChange = await fetchTask(id)
    const updatedTask = {...taskToChange, complete :!taskToChange.complete}
    const res = await fetch(`http://localhost:3004/tasks/${id}`,
      {
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(updatedTask)
      }
    )
    const data = await res.json()
    console.log(data)

    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task, complete:data.complete}: task)
    )
  }

  //set edit task form visibility
  const [editViewVisibility, setEditViewVisibility] = useState(false)
  //create a slot to store the value of the 'to-edit' task
  const [tasktoEdit, setTaskToEdit] = useState('')
  
  //function to show current values before making edits
  const locateTasktoEdit = async(id) => {
    const data = await fetchTask(id)
    setTaskToEdit(data) //feed the value of selected task to 'to-edit' task
    setFormDisplay(false) //toggle off add view
    setEditViewVisibility(true) //toggle on edit view
  }
  
  const toggleEditView =()=> {
    setEditViewVisibility(!editViewVisibility)
  }

  //const a function to edit task
  const editTask = async({id, text, day, reminder}) => {
    const input = {text:text, day:day, reminder:reminder, complete:tasktoEdit.complete}
    const editedTask = {text:'', day:'', reminder:'', complete:tasktoEdit.complete}

    if (input.text === tasktoEdit.text ){
      editedTask.text = tasktoEdit.text
    }else{
      editedTask.text = input.text
    }

    if (input.day){
      editedTask.day = dayFormatted(input.day) //if user enter a new date, then format the date value and add it as an update
    }else{
      editedTask.day = tasktoEdit.day //no change on date then keep the original value
    }

    if (input.reminder === tasktoEdit.reminder ){
      editedTask.reminder = tasktoEdit.reminder
    }else{
      editedTask.reminder = input.reminder
    }
    
    // console.log(editedTask)

    const res = await fetch(`http://localhost:3004/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(editedTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map((task)=>task.id === id ? {...data, day:dayFormatted(data.day)} : task)
    )
  }

  const TasksSection = (props)=> {
    return(
      <div>
        {formDisplay?<AddTask onAdd={addTask}/>: " " }
        {editViewVisibility? <EditTask currentTask={tasktoEdit} onEdit={editTask} visibility={toggleEditView}/>:''}
        {tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onCheck={checkCompletion} toEdit={locateTasktoEdit}/> 
          : <p>No Task to Show</p> //show empty state
        }
      </div>
    )
  }



  return (
  <Router>
    <div className="container">
    <Header onToggle={toggleTaskForm}/>
      <Routes>
        <Route path='/*' element={<TasksSection/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;
