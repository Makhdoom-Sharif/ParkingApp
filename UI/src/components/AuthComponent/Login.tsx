import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import InputField from '../Inputfield/InputField'
import './style.css'
type Props = {}

function Login({ }: Props) {
    return (

        <Box >
            <Container component="main" maxWidth="xs">

                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>

                    <InputField
                        label='Email'
                        focused={false}
                        name='email'
                        required={true}
                        type='email'
                    />
                    <InputField
                        label='Password'
                        focused={false}
                        name='password'
                        id='password'
                        required={true}
                        type='password' />

                    <Button variant="contained" color='secondary' fullWidth className='Authbutton' >Login</Button>
                </Box>
            </Container>
        </Box>

    )
}

export default Login