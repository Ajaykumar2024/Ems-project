import React from 'react'
import Header from '../otherComponent/Header'
import StatusCard from '../otherComponent/StatusCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  console.log(props.user);
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
       <Header user={props.user} changeUser={props.changeUser} />
       <StatusCard data={props.user.data} />
       <TaskList data={props.user.data} />
    </div>
  )
}

export default EmployeeDashboard
 