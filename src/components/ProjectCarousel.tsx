import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

export default function SwipeableTextMobileStepper( {images} ) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeStep, maxSteps]);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1)%maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1+maxSteps)%maxSteps);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{  flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          height: 50,
          pl: 2,
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          // border: '1px solid rgba(255,255,255,0.3)',
          // boxShadow: `
          //   0 8px 32px rgba(0,0,0,0.1),
          //   inset 0 1px 0 rgba(255,255,255,0.5),
          //   inset 0 -1px 0 rgba(255,255,255,0.1),
          //   inset 0 0 2px 1px rgba(255,255,255,0.1)
          // `,
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          borderBottomLeftRadius: 8, 
          borderBottomRightRadius: 8,
          '.MuiMobileStepper-dotActive': {
            backgroundColor: '#e8bffb',
          },
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          // border: '1px solid rgba(255,255,255,0.3)',
          // boxShadow: `
          //   0 8px 32px rgba(0,0,0,0.1),
          //   inset 0 1px 0 rgba(255,255,255,0.5),
          //   inset 0 -1px 0 rgba(255,255,255,0.1),
          //   inset 0 0 2px 1px rgba(255,255,255,0.1)
          // `,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              color: '#e8bffb'
            }}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            onClick={handleBack} 
            sx={{
              color: '#e8bffb'
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />
    </Box>
  );
}