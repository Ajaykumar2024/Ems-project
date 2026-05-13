import React from 'react'

const Header = ({changeUser, user}) => {

   const logOutUser=()=>{
    localStorage.removeItem('loggedInUser')
    changeUser('')
    
   }
 console.log(user);
 
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{user?.name} 👏</span></h1>
      <button onClick={logOutUser}  className='bg-red-500 px-5 py-3  rounded text-white font-medium'>Log Out</button>
    </div>
  )
}

export default Header
