import * as React from 'react';
import { useState } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import Typed from 'typed.js';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EmailIcon from '@mui/icons-material/Email';

function TypingName() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Ruthesh Thavamani'],
      typeSpeed: 65,
      startDelay: 1100,
      backSpeed: 65,
      backDelay: 4000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Typography
      variant="h1"
      sx={{
        display: 'flex',
        flexDirection: 'row' ,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        userSelect: 'none',
        fontSize: '3.5rem',
      }}
    >
      <span ref={el} />
    </Typography>
  );
}


export default function Hero() {
  const [tooltipTitle, setTooltipTitle] = useState('Email');

  const [borderColor, setBorderColor] = useState(alpha('#FFF', 0.2));

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('truthesh@gmail.com');
      setTooltipTitle('Copied!');
      setTimeout(() => setTooltipTitle('Email'), 2000); // Add this line
    } catch (err) {
      setTooltipTitle('Failed to copy!');
      setTimeout(() => setTooltipTitle('Email'), 2000); // Add this line
    }
  };

  const [emailIconColor, setEmailIconColor] = useState('#B8BABC');
  const [githubIconColor, setGithubIconColor] = useState('#B8BABC');
  const [linkedinIconColor, setLinkedinIconColor] = useState('#B8BABC');
  const [resumeIconColor, setResumeIconColor] = useState('#B8BABC');

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        height: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 70%',
        bgcolor: '#1E1F22',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' }}}>
          <motion.div 
            className="md:w-96"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <img
                onMouseEnter={() => setBorderColor('#90CAF9')}
                onMouseLeave={() => setBorderColor(alpha('#FFF', 0))}
                style={{
                  filter: borderColor === '#90CAF9' ? 'drop-shadow(0 0 10px #90CAF9)' : 'none',
                  transition: 'filter 0.5s ease',
                }}
                src={
                  './emoji.png'
                }
                width='300'
                alt='me'
              />
            </Box>
          </motion.div>
          
          <motion.div 
            className="md:w-96"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.9,
                },
              },
            }}
          >
          <TypingName />
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              useFlexGap
              sx={{
                color: 'text.secondary',
              }}
            >
              <Tooltip title={tooltipTitle}>
                <IconButton
                  onClick={copyToClipboard}
                  aria-label="Email"
                  sx={{ alignSelf: 'center', color: emailIconColor, transition: "color 0.4s ease" }}
                  onMouseEnter={() => setEmailIconColor("#90CAF9")}
                  onMouseLeave={() => setEmailIconColor("#B8BABC")}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="GitHub">
                <a 
                  href="https://github.com/truth771" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label="GitHub"
                    sx={{ alignSelf: 'center', color: githubIconColor, transition: "color 0.4s ease" }}
                    onMouseEnter={() => setGithubIconColor("#90CAF9")}
                    onMouseLeave={() => setGithubIconColor("#B8BABC")}
                  >
                    <FacebookIcon />
                  </IconButton>
                </a>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <a 
                  href="https://www.linkedin.com/in/ruthesh-thavamani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label="LinkedIn"
                    sx={{ alignSelf: 'center', color: linkedinIconColor, transition: "color 0.4s ease" }}
                    onMouseEnter={() => setLinkedinIconColor("#90CAF9")}
                    onMouseLeave={() => setLinkedinIconColor("#B8BABC")}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </Tooltip>

              <Tooltip title="Resume">
                <a 
                  href="https://drive.google.com/file/d/13CW2kPCE0r12ee0VgTHwN1eRuK1ovcFM/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label="Resume"
                    sx={{ alignSelf: 'center', color: resumeIconColor, transition: "color 0.4s ease"}}
                    onMouseEnter={() => setResumeIconColor("#90CAF9")}
                    onMouseLeave={() => setResumeIconColor("#B8BABC")}
                  >
                    <TextSnippetIcon />
                  </IconButton>
                </a>
              </Tooltip>
            </Stack>
          </motion.div>
        </Stack>
    </Box>
  );
}
