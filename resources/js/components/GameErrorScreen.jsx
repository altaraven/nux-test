import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GameErrorScreen = ({ errorMessage }) => {
    return <>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
                Server error
            </Typography>
            <Typography variant="subtitle1" gutterBottom>{errorMessage}</Typography>
        </Box>
    </>
}

export default GameErrorScreen
