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
      'Built a DNS health checker in Go, a service that probes nameservers from eero nodes to surface latency and error stats for network triage. Exposed it both as a support-facing diagnostic tool and directly within the eero app, shipping in the v7.18.0 firmware update.',
    logo: './eero.png'
  },
  {
    title: 'Research Assistant @ Order Lab',
    date: 'Winter 2026 - Fall 2026',
    description:
      'Worked on CIRDAN, an autonomous debugging agent using phased, tree-of-thought multi-hypothesis triage to isolate failures in distributed systems, plus a Docker-based test harness for validation subtasks. Achieved 69.3% file-level / 42.8% line-level coverage, outperforming Codex, Mini SWE-agent, and OpenCode.',
    logo: './orderlab.png'
  },
  {
    title: 'SWE Intern @ The Trade Desk',
    date: 'Summer 2025',
    description:
      'Built a distributed Scala/Spark ETL pipeline on AWS EMR processing ~6TB of weekly bidstream data, orchestrated via Airflow. An "edge agreement" validation algorithm revealed ~40% of high-frequency identifiers lacked ground-truth correlation, preventing bad data promotion.',
    logo: './ttd.jpg'
  },
  {
    title: 'SWE Intern @ Sorcea Labs',
    date: 'Winter 2025',
    description:
      'Architected a dual-stage RAG platform for skincare recommendations across a 7,000+ item catalog, using Claude to parse queries into scalar filters (price, ingredients) and a semantic-intent string embedded via Amazon Bedrock. Combined metadata pre-filtering with MongoDB Atlas Vector Search to keep hard constraints from getting diluted, resolving ~85% of open-ended queries.',
    logo: './sorcealabs.jpeg'
  },
  {
    title: 'Undergraduate Research Assistant @ Ersal Research Group',
    date: 'Summer - Fall 2024',
    description:
      'Designed an algorithm to generate realistic terrains by simulating fractal Brownian surfaces as random Gaussian fields, using box-counting and epsilon-oscillation methods to estimate fractal dimensions. Validated realism through vehicle simulations in Blender.',
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
