import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HoverPaper from './HoverPaper.tsx';

const items = [
  {
    title: 'Undergraduate Research Assistant in the Ersal Research Group',
    description:
      'Developing a method of artificially generating terrain data for autonomous vehicle simulations by taking FFTs of real-world terrain data and using a probabilistic model to generate new terrain data. Currently working on implementing the probabilistic model in Julia.',
    logo: './umMechE.png'
  },
  {
    title: 'Quantitative Consulting and Finance Group',
    description:
      'Developing a trading algorithm that finds statistical arbitrage opportunities using a SABR model. Finished implementing the Nelder-Mead algorithm in C++ as a minimization function, and now working on writing the functions for the SABR model parameters.',
    logo: './qcf_square.png'
  },
  {
    title: 'Michigan Data Science Team',
    description:
      'Collaborated with a team to develop a Real vs. Photoshopped Face Detector. Designed a Convolutional Neural Network on Jupyter using transfer learning with ResNet50 to train a model that can differentiate between a real and a photoshopped face with 72.3% accuracy. Augmented data images to diversify training data and visualized results using GradCam.',
    logo: './mdst.jpeg'
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#1E1F22',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Experience
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={12} key={index}>
              <HoverPaper props={
                <Stack
                direction="row"
                color="inherit"
                spacing={1}
                alignItems="center"
                useFlexGap
                sx={{
                }}> 
                  <img src={item.logo} alt={item.title} style={{width: 'auto', height: '110px', objectFit: 'contain', borderRadius: '8px'}} />
                  <Stack
                  direction="column"
                  color="inherit"
                  spacing={1}
                  useFlexGap
                  sx={{
                    p: 3,
                    height: '100%',
                  }}
                >
                  <Typography fontWeight="medium" variant="h6" gutterBottom sx={{ fontSize: '1.5rem' }} >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
              }>
              </HoverPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box> 
  );
}
