import { Box, Button, Container } from '@mui/material'
import React from 'react'
import InputField from '../Inputfield/InputField'
import './style.css'
type Props = {}

const SignUp = (props: Props) => {
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
                        label='Contact No.'
                        focused={false}
                        name='contactNo'
                        required={true}
                        type='no.'
                    />
                    <InputField
                        label='Password'
                        focused={false}
                        name='password'
                        id='password'
                        required={true}
                        type='password' />
                    <InputField
                        label='Confirm Password'
                        focused={false}
                        name='Comfirmpassword'
                        id='Comfirmpassword'
                        required={true}
                        type='password' />

                    <Button variant="contained" color='secondary' className='Authbutton' fullWidth >SignUp</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default SignUp