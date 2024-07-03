import React from 'react'
// import Header from './Header'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function LayOut() {
    return (
        <>
            <NavBar />

            <div className='margin-top-fix'>
                <Outlet />
            </div>
        </>
    )
}

export default LayOut
