import React from 'react'
import { Box } from '@mui/material';
import img from '../assest/img.png'

const BannerProduct = () => {
    return (
        <Box my={5}>
            <Box sx={{ backgroundImage: `url(${img})`,backgroundRepeat:"no-repeat" }}>
                <Box>aswdad</Box>
            </Box>
        </Box>
    )
}

export default BannerProduct