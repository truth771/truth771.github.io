import * as React from 'react';
import { useState, useEffect } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';

export default function PicSlideshow({ images, width, captions, scaleOnHover, tiltOnHover, glowOnHover, speed }) {
  const [activeStep, setActiveStep] = useState(0);
  const [pause, setPause] = useState(false);
  const [borderColor, setBorderColor] = useState(alpha('#FFF', 0.2));
  const [degree, setDegree] = useState(0);
  const maxSteps = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pause) {
        setActiveStep(prev => (prev === maxSteps - 1 ? 0 : prev + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [activeStep, pause, maxSteps, speed]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        borderRadius: '10px',
        width: width,
        flexDirection: 'column',
        borderColor: borderColor,
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: borderColor === '#90CAF9' ? '0 0 13px #9169c1' : 'none',
        background: `linear-gradient(${alpha('#033363', 0.2)}, ${alpha('#021F3B', 0.2)})`,
        transition: 'border-color 0.23s ease, box-shadow 0.5s ease, transform 0.3s ease',
        overflow: 'hidden',
        '&:hover': {
          transform: `scale(${scaleOnHover}) rotate(${degree}deg)`,
        },
      }}
      onMouseEnter={() => {
        if (glowOnHover) setBorderColor('#90CAF9');
        if (tiltOnHover) setDegree(Math.random() * 7 - 3.5);
        setPause(true);
      }}
      onMouseLeave={() => {
        setBorderColor(alpha('#FFF', 0.2));
        setDegree(0);
        setPause(false);
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: `${images.length * 100}%`,
          transform: `translateX(-${activeStep * (100 / images.length)}%)`,
          transition: 'transform 0.25s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image.imgPath}
            alt={image.label}
            sx={{
              width: `${100 / images.length}%`,
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        ))}
      </Box>

      {/* Captions */}
      {captions[activeStep] && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            padding: '8px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            fontSize: '0.7rem',
            opacity: pause ? 1 : 0,
            transition: 'opacity 0.25s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {captions[activeStep]}
        </Box>
      )}
    </Box>
  );
}