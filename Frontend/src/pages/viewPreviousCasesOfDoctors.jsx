//linked with doctors homepage

import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container,
  Avatar,
  IconButton,
  Badge
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

// Sample previous cases data
const previousCases = [
  { id: 1, name: 'Rahul Sharma', age: 45, gender: 'Male', condition: 'Hypertension', date: '2023-01-15' },
  { id: 2, name: 'Priya Patel', age: 32, gender: 'Female', condition: 'Diabetes', date: '2023-02-20' },
  { id: 3, name: 'Amit Kumar', age: 28, gender: 'Male', condition: 'Asthma', date: '2023-03-10' },
  { id: 4, name: 'Sneha Gupta', age: 56, gender: 'Female', condition: 'Arthritis', date: '2023-04-05' },
  { id: 5, name: 'Vikram Singh', age: 39, gender: 'Male', condition: 'Migraine', date: '2023-05-18' },
  { id: 6, name: 'Neha Reddy', age: 42, gender: 'Female', condition: 'Thyroid', date: '2023-06-22' },
  { id: 7, name: 'Rajesh Verma', age: 51, gender: 'Male', condition: 'Heart Disease', date: '2023-07-30' },
  { id: 8, name: 'Ananya Desai', age: 24, gender: 'Female', condition: 'Anemia', date: '2023-08-14' },
  { id: 9, name: 'Suresh Joshi', age: 63, gender: 'Male', condition: 'Diabetes', date: '2023-09-09' },
  { id: 10, name: 'Meera Kapoor', age: 37, gender: 'Female', condition: 'Allergies', date: '2023-10-01' },
];

const ViewPreviousCasesOfDoctors = () => {
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
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Navbar */}
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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 2
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
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, zIndex: 2 }}>
        <Typography variant="h4" fontWeight="bold" color="#0D47A1" sx={{ mb: 4, textAlign: 'center' }}>
          Previous Cases
        </Typography>
        <Grid container spacing={4}>
          {previousCases.map((caseItem) => (
            <Grid item xs={12} sm={6} md={4} key={caseItem.id}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                <Avatar sx={{ width: 60, height: 60, mb: 2 }}>
                  {caseItem.name.charAt(0)}
                </Avatar>
                <Typography variant="h6" fontWeight="bold" color="#0D47A1">
                  {caseItem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {caseItem.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {caseItem.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Condition: {caseItem.condition}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {caseItem.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ViewPreviousCasesOfDoctors;