import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import ParkPage from '../pages/ParkPage'
import ParkingSlotsMainPage from '../pages/ParkingSlotsMainPage'

type Props = {}

const Routing = (props: Props) => {
    return (
        <div>
            <Routes>
                {/* <Route path='/' element={<Home />}></Route> */}
                <Route path='/Login' element={<LoginPage />}></Route>
                <Route path='/Register' element={<RegisterPage />}></Route>
                <Route path='/Park' element={<ParkPage />}></Route>
                <Route path='/parkingslots' element={<ParkingSlotsMainPage />}></Route>
                <Route path="*" element={<Navigate replace to="/Login" />} />
            </Routes>
        </div>
    )
}

export default Routing