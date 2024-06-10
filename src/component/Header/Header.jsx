import React from 'react'
import { Container, Logo, LogoutButton } from '../index.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authStatus = useSelector((state) => state?.auth.status)

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: "All Post",
            slug: '/allposts',
            active: authStatus
        },
        {
            name: "Add Post",
            slug: '/add-post',
            active: authStatus
        }
    ]
    return (
        <header
            className=' py-3 shadow bg-gray-500'
        >
            <Container>
                <nav className=' flex'>
                    <div className=' mr-4 '>
                        <Link
                            to='/'
                        >
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className=' flex ml-auto  '>
                        {
                            navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            className=' text-green-300 hover:text-black inline-block px-6 ml-2 py-2 hover:bg-blue-100 transition-all ease-in-out duration-300 rounded-full font-semibold text-lg border'
                                            onClick={() => navigate(item.slug)}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                        {
                            authStatus && (
                                <li
                                    className='  inline-block ml-2 duration-300 hover:bg-blue-400 hover:text-red-500 hover:border-none rounded-full font-semibold text-lg border'
                                >
                                    <LogoutButton />
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
