import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Button, IconButton, Paper } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

type Props = {
    TimeScreenSwapper: Function
}

export default function RangePicker({ TimeScreenSwapper }: Props) {
    // const { TimeScreenSwapper } = props

    const [value1, setValue1] = React.useState<Date | null>(null);
    const [value2, setValue2] = React.useState<Date | null>(null);

    return (
        <Box component={'main'} style={{ width: '100%', height: '50%', margin: '10px' }}>
            <Box style={{
                width: '100%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: "100%",

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <IconButton style={{ color: '#000' }} onClick={() => TimeScreenSwapper()} >
                        <ArrowCircleLeftIcon style={{ fontSize: '2.25rem' }} />
                    </IconButton>
                    <Box component={'h2'} > Select Date And Time:</Box>
                </div>
                <Box style={{
                    flexGrow: '1',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    minWidth: '70%'
                }}>
                    <div style={{ margin: '10px', width: '100%' }}>

                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ width: '100%' }}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} style={{ width: '100%' }} />}
                                label="From"
                                value={value1}
                                onChange={(newValue) => {
                                    setValue1(newValue);
                                }}
                            />
                        </LocalizationProvider>

                    </div>

                    <div style={{ margin: '10px', width: '100%' }}>

                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ width: '100%' }}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} style={{ width: '100%' }} />}
                                label="To"
                                value={value2}
                                onChange={(newValue) => {
                                    setValue2(newValue);
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                </Box>
                < Button
                    variant='contained'

                    // fullWidth
                    style={{
                        background: '#000',
                        color: '#fff',
                        width: '70%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px'
                    }}
                >
                    Next
                </Button>
            </Box>

        </Box >
    );
}
