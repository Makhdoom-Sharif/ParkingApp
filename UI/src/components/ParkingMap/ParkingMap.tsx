import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './style.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RangePicker from './RangePicker/RangePicker';



type Props = {}

const ParkingMap = (props: Props) => {
    const [IsScreenSwap, setIsScreenSwap] = useState(false)
    const TimeScreenSwapper = () => {
        // console.log("first")
        if (IsScreenSwap) {
            setIsScreenSwap(false)
        } else {
            setIsScreenSwap(true)
        }
    }
    const Data: Array<String> = ['Defence Phase VIII', 'Jinnah Internation Airpot', 'Empress Market Karachi', 'Millennium Mall', 'Tariq Road']
    return (
        <div className='container' style={{ flexGrow: '1', display: 'flex', width: "100%" }} >
            <Box component="main" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: 'center',
                alignItems: 'center',
                width: "50%"
            }} >
                {!IsScreenSwap ? Data.map((item, index) => {
                    return (
                        < Button
                            variant='contained'
                            className='button'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => TimeScreenSwapper()}
                        >
                            <p> {item}</p>
                            <ArrowForwardIosIcon
                                style={{ fontSize: "1rem" }}
                            />
                        </ Button>)
                })
                    :
                    <RangePicker TimeScreenSwapper={TimeScreenSwapper} />
                }



            </Box >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
                width: '50%'
            }}>
                <Box component={'img'} src='https://i.ibb.co/Tvyjm5B/carpark.png' ></Box>
            </div>
        </div>
    )
}

export default ParkingMap