import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import ParkPage from '../pages/ParkPage'
import ParkingSlotsMainPage from '../pages/ParkingSlotsMainPage'
import { useSelector } from 'react-redux'
import ViewBookingPage from '../pages/ViewBookingPage'
import HowItWorks from '../pages/HowItWorks'

type Props = {}
type SelectorType = {
    user: {
        accessToken: string;
        contactNo: string;
        email: string;
        errorMessage: string;
        isAdmin: boolean;
        loading: boolean;
        loginStatus: boolean;
        uid: string;
        username: string
    }
}



const Routing = (props: Props) => {
    const { loginStatus } = useSelector((state: SelectorType) => state?.user)
    return (
        <div>
            {loginStatus ?

                <Routes>
                    <Route path='/Park' element={<ParkPage />}></Route>
                    <Route path='/parkingslots' element={<ParkingSlotsMainPage />}></Route>
                    <Route path='/ViewBooking' element={<ViewBookingPage />}></Route>
                    <Route path='/HowItWorks' element={<HowItWorks />}></Route>
                    <Route path="*" element={<Navigate replace to="/Park" />} />
                </Routes>
                :
                <Routes>
                    <Route path='/Login' element={<LoginPage />}></Route>
                    <Route path='/Register' element={<RegisterPage />}></Route>
                    <Route path="*" element={<Navigate replace to="/Login" />} />
                </Routes>

            }

        </div>
    )
}

export default Routing