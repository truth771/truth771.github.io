import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
}

const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }
};

function GlowingTypography ({section, children}){
  const [glow, setGlow] = React.useState("");
  
  return (
  <Typography 
    onClick={() => scrollToSection(section)} 
    onMouseEnter={() => setGlow("drop-shadow(0 0 3px #FFF) drop-shadow(0 0 8px #00b7ff) drop-shadow(0 0 13px #00b7ff)")}
    onMouseLeave={() => setGlow("")}
    variant="body2" 
    color="text.primary"
    style={{
      filter: glow,
      transition: 'filter 0.2s ease',
      cursor: 'pointer',
    }}>
      {children}
    </Typography>
  );
}

function GlowingImg({imgPath, section, alt}){
  const [glow, setGlow] = React.useState("");

  return (
    <img
      onClick={() => scrollToSection(section)}
      onMouseEnter={() => setGlow("drop-shadow(0 0 2px #FFF) drop-shadow(0 0 7px #00b7ff) drop-shadow(0 0 12px #00b7ff)")}
      onMouseLeave={() => setGlow("")}
      src={ imgPath }
      style={{
        ...logoStyle,
        filter: glow,
        transition: 'filter 0.3s ease',
      }} 
      alt={alt}
    />
  );
}

function AppAppBar({ mode }: AppAppBarProps) {
  return (
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
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', 
              flexShrink: 0,
              borderRadius: '99px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <GlowingImg section="hero" alt="rtlogo" imgPath={'./rt.png'}/>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '200px'
              }}
            >
              <GlowingTypography section="about"> About </GlowingTypography>
              
              <GlowingTypography section="experience"> Experience </GlowingTypography>
              
              <GlowingTypography section="projects" > Projects </GlowingTypography>              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  )
}

export default AppAppBar;