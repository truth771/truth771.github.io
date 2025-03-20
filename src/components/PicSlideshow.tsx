import * as React from 'react';
import { useState, useEffect } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

export default function PicSlideshow( {images} ) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [pause, setPause] = useState(false);
  const [borderColor, setBorderColor] = useState(alpha('#FFF', 0.2));
  const [degree, setDegree] = useState(0);
  const maxSteps = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if(!pause){
        setActiveStep(
          activeStep === maxSteps - 1 ? 0 : activeStep + 1
        );
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [activeStep, pause, maxSteps]);

  return (
    <Box sx={{width: 260, height:'100%', display: 'flex', justifyContent: 'center', overflow: 'visible', position: 'absolute'}}>
      {images.map((step, index) => (
        <Fade in={activeStep === index} timeout={1000}>
          <div key={step.label} style={{position: 'absolute'}}>
            <Box
              sx={{
                  height: '100%',
                  display: 'flex',
                  borderRadius: '10px',
                  width: 260,
                  flexDirection: 'column',
                  borderColor: borderColor,
                  boxShadow: borderColor === '#90CAF9' ? '0 0 13px #90CAF9' : 'none',
                  background: `linear-gradient(${alpha('#033363', 0.2)}, ${alpha('#021F3B', 0.2)})`,
                  transition: 'border-color 0.23s ease, box-shadow 0.5s ease, transform 0.3s ease', 
                  '&:hover': {
                      transform: 'scale(1.1) rotate(' + degree + 'deg)',
                  },
              }}
              onMouseEnter={() => {setBorderColor('#90CAF9'); setDegree(Math.random() * 7 - 3.5); setPause(true)}}
              onMouseLeave={() => {setBorderColor(alpha('#FFF', 0.2)); setDegree(0); setPause(false);}}
            >
              <img src={step.imgPath} alt={step.label} style={{width: 'auto', height: '100%', borderRadius: '10px'}} />
            </Box>
          </div>
        </Fade>
      ))}
    </Box>
  );
}