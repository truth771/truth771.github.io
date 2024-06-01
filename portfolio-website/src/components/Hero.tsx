import * as React from 'react';
import { useState } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EmailIcon from '@mui/icons-material/Email';

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
                  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe4906ac-0a6a-4272-ae47-bb9c72eeb4e1/dd4t89c-405cd6d5-6075-4fb8-8ef2-88f13c8daf9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDkwNmFjLTBhNmEtNDI3Mi1hZTQ3LWJiOWM3MmVlYjRlMVwvZGQ0dDg5Yy00MDVjZDZkNS02MDc1LTRmYjgtOGVmMi04OGYxM2M4ZGFmOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BjkuPs5vff9gex-I6Qx7NBTd5AECF8CnCtU2EuvtaEc'
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
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              userSelect: 'none',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Ruthesh Thavamani
          </Typography>
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
                  sx={{ alignSelf: 'center', color: emailIconColor, transition: "color 0.3s ease" }}
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
                    sx={{ alignSelf: 'center', color: githubIconColor, transition: "color 0.3s ease" }}
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
                    sx={{ alignSelf: 'center', color: linkedinIconColor, transition: "color 0.3s ease" }}
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
                    sx={{ alignSelf: 'center', color: resumeIconColor, transition: "color 0.3s ease"}}
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
