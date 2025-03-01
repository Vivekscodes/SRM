
import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container,
  SvgIcon
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  const userTypes = [
    { 
      id: 'patient', 
      title: 'PATIENT',
      path: '/signuppatient',
      icon: (props) => (
        <SvgIcon {...props}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm9-10v1h2v2h1V8h2V7h-2V5h-1v2h-2z" />
        </SvgIcon>
      )
    },
    { 
      id: 'doctor', 
      title: 'DOCTOR',
      path: '/signupdoctor',
      icon: (props) => (
        <SvgIcon {...props}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8.39 15.56C19.34 19.8 15.31 19 12 19s-7.34.8-8.39 2.56c-.24.36-.39.8-.4 1.26V23h17.58v-.18c-.01-.46-.16-.9-.4-1.26zM4.54 21c.43-.86 3.22-2 7.46-2s7.03 1.14 7.46 2H4.54zM16.5 11.5c0 .32.07.63.18.91C15.83 13.02 14.2 13.9 12 13.9c-2.19 0-3.83-.88-4.68-1.49.11-.28.18-.59.18-.91 0-1.39-1.11-2.5-2.5-2.5S2.5 10.11 2.5 11.5c0 1.24.89 2.27 2.05 2.47.24 2.23 2.46 4.42 7.45 4.42s7.21-2.2 7.45-4.42c1.16-.2 2.05-1.23 2.05-2.47 0-1.39-1.11-2.5-2.5-2.5s-2.5 1.11-2.5 2.5z" />
        </SvgIcon>
      )
    },
    { 
      id: 'hospital', 
      title: 'HOSPITAL',  
      path: '/signuphospital',
      icon: (props) => (
        <SvgIcon {...props}>
          <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" />
          <path d="M10.5 14H14v3.5h-3.5zM10.5 10.5H7v3h3.5z" fill="none" />
          <path d="M10.5 7v3.5H14v-3.5z" fill="none" />
        </SvgIcon>
      )
    }
  ];

  const handleUserTypeClick = (userType) => {
    console.log(`Selected user type: ${userType.id}`);
    navigate(userType.path);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#B0E2FE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: 'black'
          }}
        >
          SIGN IN AS
        </Typography>

        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
          alignItems="stretch"
        >
          {userTypes.map((type) => (
            <Grid item xs={12} sm={4} key={type.id}>
              <Paper
                elevation={0}
                onClick={() => handleUserTypeClick(type)}
                sx={{
                  bgcolor: 'rgba(247, 241, 241, 0.49)',
                  borderRadius: 2,
                  p: 4,
                  height: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(247, 241, 241, 0.6)',
                    transform: 'scale(1.03)'
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3
                  }}
                >
                  {type.icon({ 
                    sx: { 
                      fontSize: 80,
                      color: 'black'
                    } 
                  })}
                </Box>
                <Typography 
                  variant="h6" 
                  component="p" 
                  align="center"
                  sx={{
                    color: '#0288d1',
                    fontWeight: 'bold'
                  }}
                >
                  {type.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FirstPage;
