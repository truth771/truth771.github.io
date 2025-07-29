import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppBar.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import getLPTheme from './getLPTheme.tsx';

export default function App() {
  const [mode] = React.useState<PaletteMode>('dark'); // can use light mode
  const [showCustomTheme] = React.useState(false); // can do true for other weirder theme
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} />
       <section id="home"><Hero /></section>
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
        <section id="about"><About /></section>
        <Divider />
        <section id="experience"><Experience /></section>
        <Divider />
        <section id="projects"><Projects /></section>
      </Box>
    </ThemeProvider>
  );
}
