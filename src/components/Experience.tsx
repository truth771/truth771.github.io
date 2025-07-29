import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HoverPaper from './HoverPaper.tsx';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const items = [
  {
    title: 'SWE Intern @ The Trade Desk',
    date: 'Summer 2025',
    description:
      'Implemented a data pipeline in Scala using Apache Spark on an AWS EMR cluster to compute and export key metrics on external user IDs to S3 for monitoring and analysis. Scheduled the pipeline using Apache Airflow to ensure timely and reliable metric updates. Built a Databricks dashboard with SQL queries to visualize metrics and trends, enabling traders to determine the significance of a given external user ID.',
    logo: './ttd.jpg'
  },
  {
    title: 'SWE Intern @ Sorcea Labs',
    date: 'Winter 2025',
    description:
      'Developed a web scraping pipeline to extract over 7,000 skincare products from Amazon, Ulta, and Sephora. Built an AWS Lambda function to clean and format product information using regular expressions and exported to DynamoDB for efficient querying. Designed a content-based semantic search system using Amazon Bedrock Embeddings and Anthropic’s Claude within a RAG framework to return contextually accurate results to user queries',
    logo: './sorcealabs.jpeg'
  },
  {
    title: 'Undergraduate Research Assistant @ Ersal Research Group',
    date: 'Summer + Fall 2025',
    description:
      'Developed a method of artificially generating terrains by simulating fractal Brownian surfaces, modeled as random Gaussian fields characterized by a fractal dimension, to create realistic landscapes in Julia. Implemented a function utilizing box-counting and epsilon-oscillation algorithms to estimate fractal dimensions. Assessed the realism of generated terrains by conducting vehicle simulations in Blender, verifying that the results closely resembled those obtained from real-world terrain.',
    logo: './umMechE.png'
  },
  {
    title: 'PM @ Quantitative Consulting and Finance Group',
    date: 'Winter 2024 - Present',
    description:
    'Implemented a momentum-based trading strategy with an RNN that predicts optimal asset positions. Backtested with a diversified portfolio spanning 30 years, resulting in a 33% improvement in the Sharpe Ratio compared to traditional strategies',
    logo: './qcf_square.png'
  },
  {
    title: 'MLE @ Michigan Data Science Team',
    date: 'Fall 2023',
    description:
      'Collaborated with a team to develop a Real vs. Photoshopped Face Detector. Designed a Convolutional Neural Network on Jupyter using transfer learning with ResNet50 to train a model that can differentiate between a real and a photoshopped face with 72.3% accuracy. Augmented data images to diversify training data and visualized results using Grad-CAM.',
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
        <Typography component="h2" variant="h4">
          Experience
        </Typography>
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
                  <Typography fontWeight="medium" variant="h5" gutterBottom >
                    {item.title}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1, mt: -2}}>
                    <CalendarTodayIcon sx={{ fontSize: 18, color: '#b0b3b8' }} />
                    <Typography variant="subtitle1">
                      {item.date}
                    </Typography>
                  </Stack>
                  
                  <Typography variant="body1" color="text.secondary">
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
