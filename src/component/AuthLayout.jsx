import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state?.auth?.status)


    useEffect(() => {
        // TODO :- make it eaasy
        if (authentication && authStatus !== authentication) {
            navigate('/logins')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(true)
    }, [authStatus, navigate, authentication])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}