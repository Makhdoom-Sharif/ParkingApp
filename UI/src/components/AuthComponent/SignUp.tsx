import { LoadingButton } from '@mui/lab'
import { Box, Button, CircularProgress, Container } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../../apiCalls'
import InputField from '../Inputfield/InputField'
import './style.css'
type Props = {}
type FormValues = {
    username: string;
    email: string;
    contactNo: string;
    password: string
};

type SelectorType = {
    user: {
        accessToken?: string;
        contactNo?: string;
        email?: string;
        errorMessage?: string;
        isAdmin?: boolean;
        loading?: boolean;
        loginStatus?: boolean;
        uid?: string;
        username?: string
    }
}






const SignUp = (props: Props) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state: SelectorType) => state?.user)
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: '',
            contactNo: '',
            username: ''

        },
        mode: "onChange"
    });
    const onSubmit = async (data: FormValues) => {
        await register(dispatch, data)
        // console.log("==>", data)

    };






    return (
        <Box >
            <Container maxWidth="xs" component='form' onSubmit={handleSubmit(onSubmit)}>

                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <InputField
                                label='Fullname'
                                focused={false}
                                name='username'
                                required={true}
                                type='text'
                                value={value}
                                onChange={onChange}
                            />)} />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <InputField
                                label='Email'
                                focused={false}
                                name='email'
                                required={true}
                                type='email'
                                value={value}
                                onChange={onChange}
                            />)} />
                    <Controller
                        control={control}
                        name="contactNo"
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <InputField
                                label='Contact No.'
                                focused={false}
                                name='contactNo'
                                required={true}
                                type='tel'
                                value={value}
                                onChange={onChange}
                            />)} />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <InputField
                                label='Password'
                                focused={false}
                                name='password'
                                id='password'
                                required={true}
                                type='password'
                                value={value}
                                onChange={onChange}
                            />)} />

                    <LoadingButton
                        variant="contained"
                        color='secondary'
                        className='Authbutton'
                        fullWidth
                        loadingIndicator={<CircularProgress style={{ color: '#fff' }} size={16} />}
                        type='submit'
                        disabled={loading}
                        loading={loading}

                    >
                        SignUp
                    </LoadingButton>
                </Box>
            </Container>
        </Box>
    )
}

export default SignUp