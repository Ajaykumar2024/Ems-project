import React from 'react'

const StatusCard = ({data}) => {
  return (
    <div className='flex items-center justify-between gap-10 mt-10  '>
      <div className=' w-1/2 bg-amber-600 rounded-xl  py-6 px-9'>
        <h1 className='text-3xl font-semibold '>{data.taskCounts.newTask}</h1>
        <h3 className=' text-xl  text-nowrap font-medium mt-0.5'>New Task</h3>
      </div>
       <div className=' w-1/2 bg-pink-600 rounded-xl  py-6 px-9'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
        <h3 className=' text-xl mt-0.5  text-nowrap font-medium'>Completed Task</h3>
      </div>
       <div className=' w-1/2 bg-orange-700 rounded-xl  py-6 px-9'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
        <h3 className=' text-xl  text-nowrap font-medium'>Accepted Task</h3>
      </div>
       <div className=' w-1/2 bg-green-600 rounded-xl  py-6 px-9'>
        <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
        <h3 className=' text-xl  text-nowrap font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default StatusCard
