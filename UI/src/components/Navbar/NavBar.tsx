import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@mui/system';
import Drawer from './Drawer/Drawer';
import { useLocation, Link } from 'react-router-dom';
type Props = {

}
type locationProps = {
    pathname?: string
}

export default function NavBar({ }: Props) {

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
                {['Park', 'Login', 'Register'].map((item, index) => {
                    return (
                        <Link to={item === 'Login' ? '/Login' : item === 'Register' ? '/Register' : '/Park'} style={{ textDecoration: "none", color: "inherit" }}>
                            <Box
                                component={'p'}
                                // sx={{ fontSize: "20px", cursor: 'pointer' }}
                                sx={path == `/${item}` ? itemSelectedStyle : itemStyle}
                                key={index}
                            >
                                {item}
                            </Box>
                        </Link>
                    )
                })
                }


                <Drawer />
            </Box>
        </ Box >
    )
}