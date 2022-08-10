// import { Title } from '@mui/icons-material'
import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import Title from '../components/Title/Title'

type Props = {}

const ViewBookingPage = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                <Title titleText='Your Bookings' />
                {/* <ParkingMap /> */}
            </div>
            <Footer />
        </div>

    )
}

export default ViewBookingPage