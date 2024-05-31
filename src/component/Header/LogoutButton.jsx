import React from 'react'
import authService from '../../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'

function LogoutButton() {
    const dispatch = useDispatch()
    function logoutHandler() {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }
    return (
        <button
            className=' inline-block px-6 py-2 duration-300 hover:bg-blue-200 rounded-full'
            onClick={logoutHandler}
        >
            logOut
        </button>
    )
}

export default LogoutButton
