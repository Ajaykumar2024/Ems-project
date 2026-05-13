import React, { useState } from 'react'

const CreateTask = () => {


    const [taskTitle, setTaskTitle]=useState('')
    const [taskDescription, setTaskDescription]=useState('')
    const [taskDate, setTaskDate]=useState('')
    const [category, setCategory]=useState('')
    const [assignTo, setAssignTo]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }


        const data = JSON.parse(localStorage.getItem('employees'))       
        data.forEach((ele)=>{
            if(ele.firstName === assignTo){
                ele.tasks.push(newTask)
                console.log(data);
                ele.taskCounts.newTask +=1
                localStorage.setItem('employees',JSON.stringify(data))

            }
        })
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setCategory('')
        setAssignTo('')
        
    }
  return (
    <div className='bg-[#1c1c1c] p-7 rounded mt-7'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        action="" className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Tittle</h3>
                <input type="text" value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4' placeholder='Make a Ui'/>
                </div>
            
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input type="date"
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5    rounded outline-none bg-transparent border  border-gray-400 mb-4' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input type="text" 
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4' placeholder='Employee Name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input type="text" 
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4' placeholder='Design,Dev ,etc.'/>
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start '>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm px-4 py-2 rounded outline-none bg-transparent border  border-gray-400 mb-4' placeholder='Enter task description'></textarea>
                <button className='bg-emerald-500 py-3  hover:bg-emerald-600 w-full  text-sm rounded px-5'>Create Task</button>

            </div>
            
        </form>
      </div>
  )
}

export default CreateTask
