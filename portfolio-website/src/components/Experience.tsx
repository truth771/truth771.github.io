import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const items = [
  {
    title: 'Undergraduate Research Assistant',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
  {
    title: 'Quantitative Consulting and Finance Group',
    description:
      'Working on a team to develop an algorithm to find statistical arbitrage using a SABR model. Currently implementing the Nelder-Mead algorithm in C++ as a minimization function',
  },
  {
    title: 'Michigan Data Science Team',
    description:
      'Real vs. Photoshopped Face Detector: Collaborated with a team to develop a Convolutional Neural Network on Jupyter using transfer learning with ResNet50 to train a model that can differentiate between a real and a photoshopped face with 72.3% accuracy Augmented data images to diversify training data and visualized results using GradCam.',
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
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <div>
                  <Typography fontWeight="medium" variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box> 
  );
}
