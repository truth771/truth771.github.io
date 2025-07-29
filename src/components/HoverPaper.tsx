import { useState } from 'react';
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material';
import React from 'react';

function HoverPaper({props}) {
    const [borderColor, setBorderColor] = useState(alpha('#FFF', 0.2));

    return (
        <Paper
        elevation={24}
        sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            borderColor: borderColor,
            background: `linear-gradient(135deg, ${alpha('#ffffff', 0.2)}, ${alpha('#ffffff', 0)})`,
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.1),
              inset 0 1px 0 rgba(255,255,255,0.5),
              inset 0 -1px 0 rgba(255,255,255,0.1),
              inset 0 0 2px 1px rgba(255,255,255,0.1)
            `,
            transition: 'border-color 0.23s ease, box-shadow 0.5s ease, transform 0.3s ease', 
            '&:hover': {
                transform: 'scale(1.015)',
            },
        }}
        onMouseEnter={() => setBorderColor('#90CAF9')}
        onMouseLeave={() => setBorderColor(alpha('#FFF', 0.2))}
        >
        {props}
        </Paper>
    );
}

export default HoverPaper;