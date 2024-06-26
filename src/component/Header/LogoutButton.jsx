import React from 'react'
import authService from '../../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutButton() {
    const dispatch = useDispatch()
    function logoutHandler() {
        authService.logOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
            className=' uppercase inline-block px-6 py-2 duration-300  rounded-full'
            onClick={logoutHandler}
        >
            logOut
        </button>
    )
}

export default LogoutButton
