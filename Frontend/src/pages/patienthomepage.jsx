import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  Badge,
  Divider,
  Chip,
  Button
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const PatientHomepage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const patientData = {
    name: "Ananya Desai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    notifications: 3,
    upcomingAppointment: {
      doctor: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      date: "Tomorrow, 10:30 AM"
    }
  };
  
  const menuItems = [
    { 
      id: 'viewHospitals', 
      title: 'VIEW',
      subtitle: 'HOSPITALS',
      icon: LocalHospitalIcon,
      description: "Find hospitals near you and book appointments",
      count: "25+ hospitals"
    },
    { 
      id: 'viewDoctors', 
      title: 'VIEW',
      subtitle: 'DOCTORS',
      icon: PersonIcon,
      color: '#0288d1',
      description: "Connect with specialists for your health needs",
      count: "100+ doctors"
    },
    { 
      id: 'uploadHistory', 
      title: 'UPLOAD',
      subtitle: 'MEDICAL HISTORY',
      icon: UploadFileIcon,
      description: "Share your medical records securely",
      count: "Easy sharing"
    }
  ];

  const handleItemClick = (itemId) => {
    console.log(`Selected item: ${itemId}`);
    // Add navigation logic based on the selected item
    switch(itemId) {
      case 'viewHospitals':
        // navigate('/patient/hospitals');
        break;
      case 'viewDoctors':
        // navigate('/patient/doctors');
        break;
      case 'uploadHistory':
        // navigate('/patient/upload-history');
        break;
      default:
        break;
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulate an API call to an AI service
      const response = await fetch('/api/ai-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: searchQuery })
      });
      const data = await response.json();
      setAiResponse(data.response);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiResponse('Sorry, there was an error processing your request.');
    } finally {
      setLoading(false);
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
            <Badge badgeContent={patientData.notifications} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
              src={patientData.avatar} 
              alt={patientData.name}
              sx={{ width: 40, height: 40, border: '2px solid white' }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'white', 
                ml: 1, 
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'medium'
              }}
            >
              {patientData.name}
            </Typography>
          </Box>
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
              Welcome back, {patientData.name.split(' ')[0]}!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              How are you feeling today?
            </Typography>
          </Box>
          
          {/* AI Chat Section */}
          <Box sx={{ mb: 4, width: '100%', maxWidth: 600, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Explain your problem..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: 'white',
                  },
                  '&.Mui-focused': {
                    bgcolor: 'white',
                  }
                }
              }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSearch} 
              sx={{ mt: 2, width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit'}
            </Button>
            {aiResponse && (
              <Paper 
                elevation={0} 
                sx={{ mt: 2, p: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}
              >
                <Typography variant="body1" color="text.primary">
                  {aiResponse}
                </Typography>
              </Paper>
            )}
          </Box>

          {/* Section Title */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold" color="#0D47A1">
              Services
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

export default PatientHomepage;