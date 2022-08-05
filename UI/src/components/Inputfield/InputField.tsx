import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    label?: string,
    focused?: boolean,
    name?: string,
    id?: string,
    required?: boolean,
    type?: string
}



export default function InputField(props: Props) {
    const { label, focused, name, id, required, type } = props
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                marginBottom: 5
            }}
            color='primary'
        >
            <TextField
                fullWidth
                label={label}
                id={id}
                focused={focused}
                name={name}
                required={required}
                type={type}

            />
        </Box>
    );
}
