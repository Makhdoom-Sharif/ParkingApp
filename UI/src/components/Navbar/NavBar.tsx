import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@mui/system';
import Drawer from './Drawer/Drawer';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
type Props = {

}
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
        username: string;
    }
}


type locationProps = {
    pathname?: string
}

export default function NavBar({ }: Props) {
    const { loginStatus } = useSelector((state: SelectorType) => state?.user)


    const itemStyle: object = {
        fontSize: "20px",
        cursor: 'pointer',
    }

    const itemSelectedStyle: object = {
        color: "#000",
        fontSize: "20px",
        cursor: 'pointer',
        textDecoration: "underline",
        webkitTextDecorationColor: "#72BE44",
        textDecorationColor: "#72BE44",
        textDecorationThickness: "5px",
        textUnderlineOffset: "5px"
    }

    const location: locationProps = useLocation();
    const path = location?.pathname
    console.log(path);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box component={'h1'} sx={{ display: 'flex', flexGrow: '1', padding: "10px", alignContent: 'center', alignItems: 'center' }} >
                <SpaIcon sx={{ color: '#72BE44', fontSize: "2rem" }} />
                <Box component={'span'}>Park</Box>
                <Box component={'span'} sx={{ color: '#72BE44' }} >ea</Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
                width: '30%',
                padding: "10px",
                color: '#616161'
            }
            }>
                {loginStatus ? ['Park', 'View Booking', 'How It Works'].map((item, index) => {
                    return (<>
                        {/* {console.log(item.replaceAll(' ', ''))} */}
                        <Link to={item === 'Park' ? '/Park' : item === 'View Booking' ? "/ViewBooking" : '/HowItWorks'} style={{ textDecoration: "none", color: "inherit" }}>
                            <Box
                                component={'p'}

                                // sx={{ fontSize: "20px", cursor: 'pointer' }}
                                sx={path == `/${item.replaceAll(' ', '')}` ? itemSelectedStyle : itemStyle}
                                key={index}
                            >
                                {item}
                            </Box>
                        </Link>
                    </>
                    )
                })
                    : ['Login', 'Register'].map((item, index) => {
                        return (
                            <Link to={item === 'Login' ? '/Login' : '/Register'} style={{ textDecoration: "none", color: "inherit" }}>
                                <Box
                                    component={'p'}
                                    sx={path == `/${item}` ? itemSelectedStyle : itemStyle}
                                    key={index}
                                >
                                    {item}
                                </Box>
                            </Link>
                        )
                    })}


                <Drawer />
            </Box>
        </ Box >
    )
}