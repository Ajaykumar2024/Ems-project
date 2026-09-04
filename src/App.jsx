 import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
 
 const App = () => {

   const [user, setUser] = useState(null)
   const [loggedInUserData, setLoggedInUserData] = useState(null)
    const authData = useContext(AuthContext)
     
  
    useEffect(()=>{
      const loggedInUser=localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(userData)
        
        setLoggedInUserData(userData.data)
        
        
      } 
    }, [])  

         
   const handleLogIn= (email,password)=>{
     if(email == 'admin@gmail.com' && password == '123'){

      setUser({role: 'admin',name: 'Admin'})
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', name: 'Admin'}))
      
      
    }else if( authData ){
      const employee = authData.employees.find(e => e.email === email && e.password === password)
      if(employee){
        setUser({role: 'employee', name: employee.firstName,data: employee})
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', name: employee.firstName, data: employee}))
      }else{
        alert('invalid credentials');
      }
    }else{
      alert('invalid credentials');
    }
  }

 
   return (
     <>
    {!user ?<Login handleLogIn={handleLogIn} />:''}
    {user?.role === 'admin' ? <AdminDashboard changeUser={setUser} user={user}   /> : null}
    {user?.role === 'employee' && <EmployeeDashboard changeUser={setUser} user={user}   /> }

     </>

   )
 }

 export default App