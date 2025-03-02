import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CircularProgress,
  Button,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  PersonAdd as PersonAddIcon,
  LocalHospital as LocalHospitalIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  Settings as SettingsIcon,
  CalendarToday as CalendarIcon,
  KeyboardArrowRight as ArrowRightIcon,
  Medication as MedicationIcon,
  MedicalServices as MedicalServicesIcon,
  BiotechOutlined as LabIcon,
  AirlineSeatFlat as BedsIcon,
  TrendingUp as StatsIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HospitalDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hospitalData, setHospitalData] = useState({
    name: 'City General Hospital',
    patientsToday: 42,
    pendingAppointments: 12,
    availableBeds: 18,
    totalBeds: 120,
    doctorsOnDuty: 8,
    totalDoctors: 24
  });
  const [notifications] = useState(5);

  // Main menu items with improved organization and new options
  const menuItems = [
    {
      id: 'patients',
      title: 'Patient Management',
      description: 'Registration, records & appointments',
      icon: PersonAddIcon,
      color: '#2E7D32', // Green
      badge: hospitalData.patientsToday
    },
    {
      id: 'opd',
      title: 'OPD Services',
      description: 'Outpatient care & scheduling',
      icon: LocalHospitalIcon,
      color: '#1565C0', // Blue
      badge: hospitalData.pendingAppointments
    },
    {
      id: 'doctors',
      title: 'Staff Directory',
      description: 'Doctors, nurses & support staff',
      icon: PeopleIcon,
      color: '#6A1B9A', // Purple
      badge: null
    },
    {
      id: 'beds',
      title: 'Bed Management',
      description: 'Availability & patient assignment',
      icon: BedsIcon,
      color: '#C62828', // Red
      badge: hospitalData.availableBeds
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Inventory & prescription management',
      icon: MedicationIcon,
      color: '#EF6C00', // Orange
      badge: null
    },
    {
      id: 'laboratory',
      title: 'Laboratory',
      description: 'Test requisitions & results',
      icon: LabIcon,
      color: '#00695C', // Teal
      badge: null
    },
  ];

  // Simulate loading hospital data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (itemId) => {
    console.log(`Navigating to: ${itemId}`);
    // Add navigation logic here
    navigate(`/${itemId}`);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    try {
      // Clear auth token
      localStorage.removeItem('authToken');
      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, bgcolor: '#1976D2', color: 'white' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          MAHI Healthcare
        </Typography>
        <Typography variant="body2">Administration Portal</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={() => handleItemClick('dashboard')}>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('patients')}>
          <ListItemIcon>
            <PersonAddIcon sx={{ color: '#2E7D32' }} />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('opd')}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: '#1565C0' }} />
          </ListItemIcon>
          <ListItemText primary="OPD" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('doctors')}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#6A1B9A' }} />
          </ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('beds')}>
          <ListItemIcon>
            <BedsIcon sx={{ color: '#C62828' }} />
          </ListItemIcon>
          <ListItemText primary="Beds" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('pharmacy')}>
          <ListItemIcon>
            <MedicationIcon sx={{ color: '#EF6C00' }} />
          </ListItemIcon>
          <ListItemText primary="Pharmacy" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('laboratory')}>
          <ListItemIcon>
            <LabIcon sx={{ color: '#00695C' }} />
          </ListItemIcon>
          <ListItemText primary="Laboratory" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => handleItemClick('settings')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Updated AppBar */}
      <AppBar position="static" sx={{ bgcolor: '#1976D2' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            MAHI Healthcare
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={notifications} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            sx={{ ml: 2, bgcolor: '#0D47A1', cursor: 'pointer' }}
            onClick={() => handleItemClick('profile')}
          >
            A
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content with Background */}
      <Box
        sx={{
          flexGrow: 1,
          background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
          p: 3
        }}
      >
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Container maxWidth="xl">
            {/* Welcome Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#0D47A1', mb: 1 }}>
                Welcome to {hospitalData.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </Typography>
            </Box>

            {/* Stats Overview */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Today's Patients
                    </Typography>
                    <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                      {hospitalData.patientsToday}
                    </Typography>
                    <Chip
                      size="small"
                      label="View Details"
                      color="primary"
                      variant="outlined"
                      onClick={() => handleItemClick('patients')}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Available Beds
                    </Typography>
                    <Typography variant="h3" color="error" sx={{ fontWeight: 'bold' }}>
                      {hospitalData.availableBeds}/{hospitalData.totalBeds}
                    </Typography>
                    <Chip
                      size="small"
                      label="Manage Beds"
                      color="error"
                      variant="outlined"
                      onClick={() => handleItemClick('beds')}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Appointments
                    </Typography>
                    <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                      {hospitalData.pendingAppointments}
                    </Typography>
                    <Chip
                      size="small"
                      label="Schedule"
                      color="primary"
                      variant="outlined"
                      onClick={() => handleItemClick('appointments')}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Doctors On Duty
                    </Typography>
                    <Typography variant="h3" color="success" sx={{ fontWeight: 'bold' }}>
                      {hospitalData.doctorsOnDuty}/{hospitalData.totalDoctors}
                    </Typography>
                    <Chip
                      size="small"
                      label="View Staff"
                      color="success"
                      variant="outlined"
                      onClick={() => handleItemClick('doctors')}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Quick Access Cards */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#0D47A1' }}>
              Quick Access
            </Typography>
            <Grid container spacing={3}>
              {menuItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Paper
                    elevation={3}
                    onClick={() => handleItemClick(item.id)}
                    sx={{
                      borderRadius: 2,
                      p: 3,
                      height: isMobile ? 'auto' : 180,
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '5px',
                        height: '100%',
                        backgroundColor: item.color,
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Avatar sx={{ bgcolor: `${item.color}15`, color: item.color, width: 50, height: 50 }}>
                        <item.icon />
                      </Avatar>
                      {item.badge !== null && (
                        <Chip
                          size="small"
                          label={item.badge}
                          color="default"
                          sx={{
                            bgcolor: `${item.color}15`,
                            color: item.color,
                            fontWeight: 'bold'
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 1
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Typography variant="body2" color={item.color} sx={{ fontWeight: 'medium' }}>
                        Access
                      </Typography>
                      <ArrowRightIcon sx={{ color: item.color, fontSize: 16, ml: 0.5 }} />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: '#1565C0',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} MAHI Healthcare System. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HospitalDashboard;
