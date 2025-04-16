import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import Header from './components/Header';
import CatSwipe from './components/CatSwipe';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4f8b',
    },
    secondary: {
      main: '#7c4dff',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Typography variant="h1" sx={{ p: 4, textAlign: 'center' }}>
          Pawfect Match
        </Typography>
        <Header />
        <CatSwipe />
      </Box>
    </ThemeProvider>
  );
}

export default App;
