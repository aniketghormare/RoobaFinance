import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignupForm from '../pages/Signup'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignupForm />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
