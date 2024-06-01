import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Features() {
  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#232428',
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

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            <span style={{ color: '#72D2FE', fontWeight: 'bold' }}>Hello!</span> I'm <span style={{ color: '#72D2FE', fontWeight: 'bold' }}>Ruthesh</span>. 
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            I'm studying <span style={{ color: '#72D2FE', fontWeight: 'bold' }}>CSE</span> and pursuing a Bachelor's Degree at the University of Michigan, expecting to graduate in 2026. 
            Some of the areas I'm interested in are <span style={{ color: '#72D2FE', fontWeight: 'bold' }}>Fintech</span> and <span style={{ color: '#72D2FE', fontWeight: 'bold' }}>ML/AI</span>.
          </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
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
            In the meantime, check out the rest of my website<span style={{ color: '#72D2FE', fontWeight: 'bold' }}>!</span>
          </Typography>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}