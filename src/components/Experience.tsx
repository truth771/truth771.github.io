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
    title: 'SDE Intern @ Amazon Eero',
    date: 'Summer 2026',
    description:
      'Deployed a DNS health checker in Go to orchestrate DNS queries from the cloud across all eero nodes in the network, helping troubleshoot user connectivity issues. My code got shipped with the v7.18.0 firmware update.',
    logo: './eero.png'
  },
  {
    title: 'Undergraduate Research Assistant @ Order Lab',
    date: 'Winter 2026',
    description:
      'Worked on CIRDAN, an autonomous debugging LLM agent that employs phased, tree-structured multi-hypothesis triage to isolate failures in large-scale distributed systems. I created a Docker-based execution harness to enable validation subtasks via test-driven debugging, achieving 69.3% file-level and 42.8% line-level coverage and outperforming Codex, Mini SWE-agent, and OpenCode.',
    logo: './orderlab.png'
  },
  {
    title: 'SWE Intern @ The Trade Desk',
    date: 'Summer 2025',
    description:
      'Implemented a data pipeline in Scala that takes in ad inventory data and exports key metrics on external user IDs to S3 for monitoring and analysis. Scheduled the Spark job using Apache Airflow, which runs the pipeline weekly on an AWS EMR cluster. Built a Databricks dashboard with SQL queries to visualize the metrics and trends of the external user IDs.',
    logo: './ttd.jpg'
  },
  {
    title: 'SWE Intern @ Sorcea Labs',
    date: 'Winter 2025',
    description:
      'Built an AWS Lambda function to clean and format over 7000 skincare products scraped from Amazon, Ulta, and Sephora using RegEx and exported to DynamoDB for efficient querying. Designed a content-based semantic search system using Amazon Bedrock Embeddings and Anthropic’s Claude within a RAG framework to return accurate results to user queries.',
    logo: './sorcealabs.jpeg'
  },
  {
    title: 'Undergraduate Research Assistant @ Ersal Research Group',
    date: 'Summer + Fall 2025',
    description:
      'Developed an algorithm to artificially generate terrains. Used box-counting and epsilon-oscillation algorithms to estimate the fractal dimensions of different kinds of terrains and simulated fractal Brownian surfaces to create realistic landscapes in Julia.',
    logo: './umMechE.png'
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
