import { useState } from 'react';
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material';
import React from 'react';

function HoverPaper({props}) {
    const [borderColor, setBorderColor] = useState(alpha('#FFF', 0.2));
    const [degree, setDegree] = useState(0);

    return (
        <Paper
        elevation={24}
        sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            border: '1px solid',
            borderColor: borderColor,
            boxShadow: borderColor === '#90CAF9' ? '0 0 13px #90CAF9' : 'none',
            background: `linear-gradient(${alpha('#033363', 0.2)}, ${alpha('#021F3B', 0.2)})`,
            transition: 'border-color 0.23s ease, box-shadow 0.5s ease, transform 0.3s ease', 
            '&:hover': {
                transform: 'scale(1.02) rotate(' + degree + 'deg)',
            },
        }}
        onMouseEnter={() => {setBorderColor('#90CAF9'); setDegree(Math.random() * 4 - 2);}}
        onMouseLeave={() => {setBorderColor(alpha('#FFF', 0.2)); setDegree(0);}}
        >
        {props}
        </Paper>
    );
}

export default HoverPaper;