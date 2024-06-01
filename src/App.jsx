import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import authService from './Appwrite/auth'
import { logIn, logOut } from './store/authSlice'
import { Footer, Header } from './component'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }))
        } else {
          dispatch(logOut())
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
          TODO
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
