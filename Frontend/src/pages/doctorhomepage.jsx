import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container, 
  Avatar,
  Card,
  CardContent,
  Divider,
  Badge,
  Chip
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarIcon from '@mui/icons-material/Star';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DoctorHomepage = () => {
  // Doctor profile data
  const doctorProfile = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '12 years',
    rating: 4.8,
    patients: 2500,
    appointmentsToday: 8,
    nextAppointment: '10:30 AM',
    education: 'MD - Cardiology, AIIMS',
    image: 'https://api.placeholder.com/150'
  };

  const menuItems = [
    { 
      id: 'patientQueue', 
      title: 'PATIENT',
      subtitle: 'QUEUE',
      icon: PeopleAltIcon,
      color: '#1976d2',
      gradient: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
      count: 12
    },
    { 
      id: 'viewHistory', 
      title: 'VIEW',
      subtitle: 'HISTORY',
      icon: HistoryIcon,
      color: '#0288d1',
      gradient: 'linear-gradient(45deg, #0288d1 30%, #26C6DA 90%)',
      count: 45
    },
    { 
      id: 'addCases', 
      title: 'ADD',
      subtitle: 'CASES',
      icon: AddCircleIcon,
      color: '#00838f',
      gradient: 'linear-gradient(45deg, #00838f 30%, #00BCD4 90%)',
      count: null
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
        background: 'linear-gradient(to bottom, #B0E2FE 0%, #d6eeff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(to right, #1976d2, #2196f3)',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
            alignItems: 'center',
          }}
        >
          <LocalHospitalIcon sx={{ mr: 1 }} /> MAHI HEALTHCARE
        </Typography>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <DashboardIcon sx={{ color: '#2196f3' }} />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Doctor Profile Card */}
        <Card 
          elevation={2}
          sx={{ 
            mb: 4, 
            borderRadius: 2,
            background: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 100, 
                    height: 100,
                    border: '4px solid #2196f3'
                  }} 
                  alt={doctorProfile.name}
                >
                  {doctorProfile.name.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  {doctorProfile.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#333', mb: 1 }}>
                  {doctorProfile.specialty} • {doctorProfile.experience} Experience
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StarIcon sx={{ color: '#FFC107', mr: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    {doctorProfile.rating}/5.0 Rating
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {doctorProfile.education}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTimeIcon sx={{ color: '#1976d2', mr: 1 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Next Appointment
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {doctorProfile.nextAppointment}
                    </Typography>
                  </Box>
                </Box>
                <Chip 
                  label={`${doctorProfile.appointmentsToday} Appointments Today`} 
                  size="small" 
                  sx={{ 
                    bgcolor: '#e3f2fd', 
                    color: '#1976d2',
                    fontWeight: 'medium'
                  }} 
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ 
                  p: 1.5, 
                  bgcolor: '#e3f2fd', 
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    {doctorProfile.patients.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Total Patients Treated
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#1976d2' }}>
          Dashboard
        </Typography>

        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
          alignItems="stretch"
        >
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper
                elevation={3}
                onClick={() => handleItemClick(item.id)}
                sx={{
                  borderRadius: 3,
                  height: 240,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: item.gradient,
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                {item.count !== null && (
                  <Badge
                    badgeContent={item.count}
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      '& .MuiBadge-badge': {
                        fontSize: '0.9rem',
                        height: 24,
                        minWidth: 24,
                        borderRadius: 12
                      }
                    }}
                  />
                )}
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
                      fontSize: 80,
                      color: 'white'
                    }} 
                  />
                </Box>
                <Typography 
                  variant="h5"
                  component="p" 
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
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
                      color: 'white',
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorHomepage;