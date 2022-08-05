import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (

        <Typography variant="body2" color="text.secondary" align="center" style={{ margin: '25px' }} >
            {'Copyright © '}
            <Link to={'/Login'} style={{ color: 'inherit' }} >
                <span>Park</span><span>ea</span>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Footer


