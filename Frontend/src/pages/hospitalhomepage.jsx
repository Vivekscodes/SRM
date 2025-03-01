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
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const HospitalHomepage = () => {
  const menuItems = [
    { 
      id: 'patient', 
      title: 'PATIENT',
      subtitle: 'DETAILS',
      icon: PersonAddIcon,
      description: "Manage patient records and appointments",
      count: "150+ patients"
    },
    { 
      id: 'opd', 
      title: 'OPD',
      subtitle: '',
      icon: LocalHospitalIcon,
      color: '#0288d1',
      description: "Oversee outpatient department activities",
      count: "50+ daily visits"
    },
    { 
      id: 'doctors', 
      title: 'DOCTORS',
      subtitle: 'DETAILS',
      icon: PeopleIcon,
      description: "Coordinate with medical staff and specialists",
      count: "30+ doctors"
    }
  ];

  const handleItemClick = (itemId) => {
    console.log(`Selected item: ${itemId}`);
    // Add navigation or other logic here
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
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            ml: 1,
            display: 'flex',
            alignItems: 'center'
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
                  elevation={0}
                  onClick={() => handleItemClick(item.id)}
                  sx={{
                    bgcolor: 'rgba(247, 241, 241, 0.7)',
                    borderRadius: 2,
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    margin: '0 auto',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(247, 241, 241, 0.9)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      p: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '50%',
                      width: 100,
                      height: 100
                    }}
                  >
                    <item.icon 
                      sx={{ 
                        fontSize: 60,
                        color: item.color || '#0288d1'
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
                        lineHeight: 1.2,
                        mb: 2
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