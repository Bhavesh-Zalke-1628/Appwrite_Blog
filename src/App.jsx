import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import authService from './Appwrite/auth'
import { Footer, Header } from './component'
import { login, logout } from './store/authSlice'
// import Login from './Pages/Login'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      // .catch()
      .finally(() => { setLoading(false) })

  }, []);
  return !loading ? (
    <div className=' min-h-screen flex flex-wrap justify-between bg-gray-400'>
      <div className=' w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
