import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
  const offset = 80;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }
};

function UnderlinedText ({section, currSection, children}){
  return (
  <div 
    className={`underline-text ${currSection === section ? 'active' : ''}`}
    onClick={() => scrollToSection(section)}
    style={{
      cursor: 'pointer',
    }}>
      {children}
    </div>
  );
}

function GlowingImg({imgPath, section, currSection, alt}){
  const [glow, setGlow] = React.useState("");

  React.useEffect(() => {
    if (currSection === "home") {
      setGlow("drop-shadow(0 0 2px #FFF) drop-shadow(0 0 7px #9169c1) drop-shadow(0 0 12px #9169c1)");
    } else {
      setGlow("");
    }
  }, [currSection]);

  return (
    <img
      onClick={() => scrollToSection(section)}
      src={imgPath}
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
  const [activeSection, setActiveSection] = React.useState<string>('home');

  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
          width: '95vw',   // 90vw width
          mx: 'auto',      // Center horizontally
          left: 0,
          right: 0,
        }}
      >
          <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '20px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.33)'
                : 'rgba(0, 0, 0, 0.33)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.1),
              inset 0 1px 0 rgba(255,255,255,0.5),
              inset 0 -1px 0 rgba(255,255,255,0.1),
              inset 0 0 2px 1px rgba(255,255,255,0.1)
            `,
            position: 'relative',
            overflow: 'hidden',
          })}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <GlowingImg section="hero" currSection={activeSection} alt="rtlogo" imgPath={'./rt.png'}/>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '200px'
              }}
            >
              <UnderlinedText section="about" currSection={activeSection}> About </UnderlinedText>
              
              <UnderlinedText section="experience" currSection={activeSection}> Experience </UnderlinedText>
              
              <UnderlinedText section="projects" currSection={activeSection}> Projects </UnderlinedText>              
            </Box>
          </Toolbar>
      </AppBar>
    </motion.div>
  )
}

export default AppAppBar;