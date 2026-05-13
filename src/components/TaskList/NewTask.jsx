import React from 'react'

const NewTask = ({data}) => {
  // console.log(data);
  
  return (
    <div className='h-full shrink-0  w-80 p-5 rounded-xl bg-orange-400'>
            <div className='flex justify-between items-center'> 
                <h3 className='text-sm px-3 py-1 rounded bg-red-600'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-4'>
                <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-sm py-1 px-2 rounded'>Accept Task</button>
            </div>
    </div>
  )
}

export default NewTask
