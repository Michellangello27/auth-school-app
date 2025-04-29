import React, { createContext, useEffect, useState } from 'react'
import { profile } from '../../axios/auth/login'
import Appbar from '../Appbar'
import { Link, Outlet } from 'react-router'

export const ProfileContext = createContext()

export default function AuthLayout() {
    const [ data, setData ] = useState({})
    useEffect(() => {
        profile()
            .then((rs) => setData(rs))
            .catch((error) => console.log(error))
    }, [])
    return (
        <ProfileContext value={{data}}>
            <div className='w-full bg-blue-400 flex flex-wrap'>
                <Appbar />
                <aside className='h-[calc(100vh-64px)] w-80 bg-slate-950 flex-col p-4 text-white text-lg gap-2 hidden md:flex'>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/users">Users</Link>
                </aside>
                <main className='grow p-5 h-[calc(100vh-64px)] overflow-y-auto'>
                    <Outlet />
                </main>
            </div>
        </ProfileContext>
    )
}
