import React, { use, useEffect } from 'react'
import { profile } from '../../axios/auth/login'
import Appbar from '../Appbar'
import { Link, Outlet } from 'react-router'

export default function AuthLayout( ) {
    useEffect(() => {
        profile()
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }, [])
    return (
        <div className='w-full bg-blue-400 flex flex-wrap'>
            <Appbar />
            <aside className='h-[calc(100vh-64px)] w-80 bg-slate-950 flex flex-col p-4 text-white text-lg gap-2'>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Users</Link>
            </aside>
            <main className='grow p-5 h-[calc(100vh-64px)] overflow-y-auto'> 
                <Outlet/>
            </main>    
        </div>
    )
}
