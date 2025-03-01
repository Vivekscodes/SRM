import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container,
  Avatar,
  IconButton,
  Badge,
  Divider,
  Chip
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const HospitalHomepage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      id: 'patient', 
      title: 'PATIENT',
      subtitle: 'DETAILS',
      icon: PersonAddIcon,
      description: "Manage patient records and appointments",
      count: "150+ patients",
      path: '/patientdetails'
    },
    { 
      id: 'opd', 
      title: 'OPD',
      subtitle: '',
      icon: LocalHospitalIcon,
      color: '#0288d1',
      description: "Oversee outpatient department activities",
      count: "50+ daily visits",
      path: '/viewopd'
    },
    { 
      id: 'doctors', 
      title: 'DOCTORS',
      subtitle: 'DETAILS',
      icon: PeopleIcon,
      description: "Coordinate with medical staff and specialists",
      count: "30+ doctors",
      path: '/doctorsdetails'
    }
  ];

  const handleItemClick = (itemId, path) => {
    console.log(`Selected item: ${itemId}`);
    if (path) {
      navigate(path);
    }
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
        background: 'linear-gradient(135deg, #B0E2FE 30%, #2196f3 90%)',
        padding: '20px'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#2196f3',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            ml: 1
          }}
        >
          <LocalHospitalIcon sx={{ mr: 1 }} /> MAHI
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'white', mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          width: '100%',
          flexDirection: 'column',
          py: 4
        }}
      >
        <Container maxWidth="md">
          {/* Welcome Message */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="#0D47A1">
              Welcome to MAHI Hospital Management
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Efficiently manage your hospital operations
            </Typography>
          </Box>

          {/* Section Title */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold" color="#0D47A1">
              Dashboard
            </Typography>
            <Divider sx={{ flexGrow: 1, ml: 2 }} />
          </Box>

          {/* Menu Cards */}
          <Grid 
            container 
            spacing={4} 
            justifyContent="center"
            alignItems="stretch"
          >
            {menuItems.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <Paper
                  elevation={3}
                  onClick={() => handleItemClick(item.id, item.path)}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 2,
                    p: 4,
                    height: 240,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    margin: '0 auto',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
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
                    <item.icon 
                      sx={{ 
                        fontSize: 90,
                        color: item.color || '#2196f3'
                      }} 
                    />
                  </Box>
                  <Typography 
                    variant="h5"
                    component="p" 
                    align="center"
                    sx={{
                      color: '#0288d1',
                      fontWeight: 'bold',
                      lineHeight: 1.2
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography 
                      variant="h5"
                      component="p" 
                      align="center"
                      sx={{
                        color: '#0288d1',
                        fontWeight: 'bold',
                        lineHeight: 1.2
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                  <Typography 
                    variant="body2" 
                    align="center" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {item.description}
                  </Typography>
                  <Chip 
                    label={item.count} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'rgba(2, 136, 209, 0.1)', 
                      color: '#0288d1',
                      fontWeight: 'medium'
                    }} 
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HospitalHomepage;