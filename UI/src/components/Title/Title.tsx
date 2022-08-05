import { Box } from '@mui/material'
import React from 'react'

type Props = {
    titleText?: string
}

const Title = ({ titleText }: Props) => {

    return (
        <Box sx={{
            backgroundColor: "secondary.main", color: 'secondary.contrastText', height: "60px", display: 'flex',
            flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px'
        }}>
            {titleText}
        </Box>
    )
}

export default Title