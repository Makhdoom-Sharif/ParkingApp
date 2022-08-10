import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import Title from '../components/Title/Title'

type Props = {}

const HowItWorks = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                <Title titleText='User Guide' />
                {/* <ParkingMap /> */}
            </div>
            <Footer />
        </div>
    )
}

export default HowItWorks