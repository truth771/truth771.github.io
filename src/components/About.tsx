import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from './PicSlideshow.tsx';

const images = [
  {
    label: 'pic2',
    imgPath:
      '/pic2.jpg',
  },
  {
    label: 'pic1',
    imgPath:
      '/pic1.jpg',
  },
  {
    label: 'pic3',
    imgPath:
      '/pic3.jpg',
  },
]

export default function Features() {
  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        // bgcolor: '#232428',
      }}
    >
      <Container sx={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          About
        </Typography>

        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>Hello!</span> I'm <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>Ruthesh</span>. 
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            I'm studying <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>CSE</span> and pursuing a Bachelor's Degree at the <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>University of Michigan</span>, expecting to graduate in 2026. 
            Some of the areas I'm interested in are <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>Fintech</span> and <span style={{ color: '#e8bffb', fontWeight: 'bold' }}>ML/AI</span>.
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Feel free to connect with me to discuss opportunities, collaborations, or shared interests in technology and innovation.
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            In the meantime, check out the rest of my website<span style={{ color: '#e8bffb', fontWeight: 'bold' }}>!</span>
          </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right'}}>
              <Carousel images={images} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}