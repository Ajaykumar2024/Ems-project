import React from 'react'
import Header from '../otherComponent/Header'
import CreateTask from '../otherComponent/CreateTask'
import AllTask from '../otherComponent/AllTask'

const AdminDashboard = (props) => {
  
  return (
    <div className='p-10 bg-black  h-full w-full text-white'>
      <Header changeUser={props.changeUser} user={props.user} />
      <CreateTask />
      <AllTask />
    </div>
    
  )
}

export default AdminDashboard
