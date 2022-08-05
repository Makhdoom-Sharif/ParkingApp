import { Box } from '@mui/material'
import React from 'react'

type Props = {}

const ParkingSlotsMain = (props: Props) => {
    return (
        <Box >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7242.393296429171!2d67.05387632732193!3d24.82294778628643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c4f87a465b5%3A0x3838a29aeef46119!2sPhase%204%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1659602261031!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading={"lazy"}>
            </iframe>

        </Box>
    )
}

export default ParkingSlotsMain