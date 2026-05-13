import React, { use, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData=useContext(AuthContext)
    console.log(authData)
  return (
    
    <div className='bg-[#1c1c1c]  p-5 mt-5 mb-5 rounded  '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
                    <h2 className='text-lg font-medium w-1/5 '>Employee</h2>
                    <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5 '>Complete</h5>
                    <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
                </div>
        
        <div className=''>
            {
            authData?.employees.map((ele,idx)=>{
            return  <div key={idx} className='border border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded '>
                        <h2 className='text-lg font-medium w-1/5 '>{ele.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-500 '>{ele.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-500 '>{ele.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-500 '>{ele.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-500 '>{ele.taskCounts.failed}</h5>
                    </div>
            }
            )}
        </div>
       
    </div>
  )
}

export default AllTask
