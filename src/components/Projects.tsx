import * as React from 'react';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Carousel from './PicSlideshow.tsx';
import HoverPaper from './HoverPaper.tsx';

import GithubIcon from '@mui/icons-material/GitHub';

const logoStyle = {
  width: '24px',
  height: 'auto',
  cursor: 'pointer',
};

const tiers = [
  {
    title: 'Noteworthy.ai',
    github: 'https://github.com/AksheetDUTTA123/noteworthy',
    devpost: 'https://devpost.com/software/noteworthy-ai',
    blurb: 'Many college classes require you to make a cheat sheet for your exams, so this web app takes your notes and makes a 2-page cheat sheet that can be downloaded as a PDF or a LaTeX file. Made at the Google x MHacks hackathon.',
    images: [
              {
                label: 'Homepage',
                imgPath:
                  '/note1.png',
              },
              {
                label: 'Generate cheat sheet',
                imgPath:
                  '/note2.png',
              },
            ],
    captions: [
              'Homepage',
              'Generate cheat sheet',
            ]
  },
  {
    title: 'Pedagora',
    github: 'https://github.com/truth771/Mhacks16-Project',
    devpost: 'https://devpost.com/software/pedagora',
    blurb: 'Pedagora is a web app that takes in a video of you answering an interview question to give personalized feedback about your response\'s quality, eye contact, and emotional state. This won the Most Innovative Use of Data award at MHacks 16.',
    images: [
              {
                label: 'Homepage where you upload a video',
                imgPath:
                  '/pedagora1.png',
              },
              {
                label: 'Feedback on the quality of response',
                imgPath:
                  '/pedagora2.png',
              },
              {
                label: 'Feedback on your emotional state as well',
                imgPath:
                  '/pedagora3.png',
              },
            ],
    captions: [
              'Homepage where you upload a video',
              'Feedback on the quality of response',
              'Feedback on your emotional state as well',
            ]
  },
];

export default function Projects() {
  return (
    <Box // for the gradient
      sx={(theme) => ({
      backgroundImage: '#02294F',
      backgroundSize: '100% 35%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      // bgcolor: '#232428',
    })}>

    <Container
      id="projects"
      sx={(theme) => ({
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      })}
    >

      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Projects
        </Typography>
      </Box>

      <Grid container spacing={7} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={12}
            md={6}
          >
            <HoverPaper props={
              <CardContent>
                <Typography variant="h6">
                  {tier.title}
                </Typography>

                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />

                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Carousel images={tier.images} width={450} captions={tier.captions} scaleOnHover={1.02} tiltOnHover={false} glowOnHover={false} speed={4000} />
                </Box>

                  <Box
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    
                <Typography
                  component="text"
                  variant="subtitle2"
                  sx={{
                    color: 'grey.200',
                  }}
                >
                  {tier.blurb}
                </Typography>

                    
                  </Box>
                  <Stack
                      direction="row"
                      justifyContent="center"
                      spacing={1}
                      useFlexGap
                      sx={{
                        color: 'text.secondary',
                      }}>

                      <Tooltip title="GitHub" slotProps={{ popper: { modifiers: [ { name: 'offset', options: { offset: [0, -10], }, }, ], }, }} >
                        <a 
                          href={tier.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <IconButton
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center', color: "#B8BABC" }}
                          >
                            <GithubIcon />
                          </IconButton>
                        </a>
                      </Tooltip>

                      <Tooltip title="Devpost" slotProps={{ popper: { modifiers: [ { name: 'offset', options: { offset: [0, -10], }, }, ], }, }} >
                        <a 
                          href={tier.devpost}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <IconButton aria-label="Devpost"
                                      sx={{ alignSelf: 'center'
                                      }}>
                          <img
                            draggable='false'
                            style={logoStyle}
                            src={ './devpost.png' }
                            alt="devpost logo"
                          /> </IconButton>
                        </a>
                      </Tooltip>
                    </Stack>
              </CardContent>}>
            </HoverPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
