import React, { useState } from 'react'

const Login = ({handleLogIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogIn(email,password)
        setEmail('')
        setPassword('') 
    }
        
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-3xl border border-emerald-500/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-emerald-900/40 px-10 py-12">
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-xl font-medium text-slate-200">Email</span>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                
            }}
              type="email"
              required
              placeholder="employee1@gmail.com"
              className="w-full rounded-full border text-xl border-emerald-500/60 bg-slate-950/80 px-4 py-3 text-white outline-none "
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xl font-medium text-slate-200">Password</span>
            <input
            onChange={(e)=>{
                setPassword(e.target.value)
                
            }}
            value={password}
              type="password"
              required
              placeholder="Enter password:123"
              className="w-full rounded-full border border-emerald-500/60 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </label>

           

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 px-4 py-3 text-lg font-semibold text-white shadow-lg     hover:bg-emerald-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login