import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container,
  Avatar,
  Divider,
  IconButton,
  Badge
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const DoctorsFullDetails = () => {
  const doctorDetails = {
    fullName: "Dr. John Doe",
    phoneNo: "123-456-7890",
    email: "johndoe@example.com",
    aadhar: "1234-5678-9012",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    registryNo: "REG123456",
    gender: "Male",
    dob: "1980-01-01",
    medicalExpertise: "Cardiology",
    experience: "15 years",
    qualifications: "MBBS, MD (Cardiology)",
    password: "********",
    city: "New York",
    state: "NY"
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
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }}
      />

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
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar 
              src={doctorDetails.profilePic} 
              alt={doctorDetails.fullName}
              sx={{ width: 100, height: 100, mr: 3 }}
            />
            <Box>
              <Typography variant="h4" fontWeight="bold" color="#0D47A1">
                {doctorDetails.fullName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {doctorDetails.medicalExpertise}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" color="#0D47A1">
                Personal Information
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Phone No:</strong> {doctorDetails.phoneNo}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Email:</strong> {doctorDetails.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Aadhar:</strong> {doctorDetails.aadhar}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Registry No:</strong> {doctorDetails.registryNo}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Gender:</strong> {doctorDetails.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Date of Birth:</strong> {doctorDetails.dob}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" color="#0D47A1">
                Professional Information
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Medical Expertise:</strong> {doctorDetails.medicalExpertise}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Experience:</strong> {doctorDetails.experience}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Qualifications:</strong> {doctorDetails.qualifications}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" color="#0D47A1">
                Account Information
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Password:</strong> {doctorDetails.password}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" color="#0D47A1">
                Location Information
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>City:</strong> {doctorDetails.city}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>State:</strong> {doctorDetails.state}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default DoctorsFullDetails;