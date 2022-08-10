import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
    label?: string,
    focused?: boolean,
    name?: string,
    id?: string,
    required?: boolean,
    type?: string,
    value?: string | number,
    onChange?: any
}



export default function InputField(props: Props) {
    const { label, focused, name, id, required, type, value, onChange } = props
    // console.log(onChange)
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
                value={value}
                onChange={onChange}

            />
        </Box>
    );
}
