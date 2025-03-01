import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  AppBar,
  Toolbar,
  InputBase,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

// Sample doctor data
const sampleDoctors = [
  { id: 1, name: 'Dr. Rahul Sharma', age: 45, gender: 'Male', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Priya Patel', age: 32, gender: 'Female', specialty: 'Neurology' },
  { id: 3, name: 'Dr. Amit Kumar', age: 28, gender: 'Male', specialty: 'Orthopedics' },
  { id: 4, name: 'Dr. Sneha Gupta', age: 56, gender: 'Female', specialty: 'Pediatrics' },
  { id: 5, name: 'Dr. Vikram Singh', age: 39, gender: 'Male', specialty: 'Dermatology' },
  { id: 6, name: 'Dr. Neha Reddy', age: 42, gender: 'Female', specialty: 'Gynecology' },
  { id: 7, name: 'Dr. Rajesh Verma', age: 51, gender: 'Male', specialty: 'Cardiology' },
  { id: 8, name: 'Dr. Ananya Desai', age: 24, gender: 'Female', specialty: 'Endocrinology' },
  { id: 9, name: 'Dr. Suresh Joshi', age: 63, gender: 'Male', specialty: 'Gastroenterology' },
  { id: 10, name: 'Dr. Meera Kapoor', age: 37, gender: 'Female', specialty: 'Ophthalmology' },
  { id: 11, name: 'Dr. Deepak Malhotra', age: 48, gender: 'Male', specialty: 'Psychiatry' },
  { id: 12, name: 'Dr. Kavita Sharma', age: 29, gender: 'Female', specialty: 'Radiology' },
];

const DoctorsListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle view doctor details
  const handleViewDoctor = (doctorId) => {
    navigate(`/doctorfulldetails/${doctorId}`);
  };

  // Filter doctors based on search term
  const filteredDoctors = sampleDoctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page doctors
  const currentDoctors = filteredDoctors.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: '#2196f3', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: 'white',
              ml: 1
            }}
          >
            MAHI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 3, bgcolor: '#B0E2FE', minHeight: 'calc(100vh - 64px)' }}>
        <Paper 
          elevation={0}
          sx={{ 
            bgcolor: 'rgba(247, 241, 241, 0.49)', 
            borderRadius: 2,
            p: 3,
            mb: 3
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Doctor List
          </Typography>
          
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{ 
              p: '2px 4px', 
              display: 'flex', 
              alignItems: 'center', 
              width: 400, 
              mb: 3,
              borderRadius: 2
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search doctors by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Doctor Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: '#e3f2fd' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Doctor Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Specialty</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentDoctors.map((doctor) => (
                  <TableRow key={doctor.id} hover>
                    <TableCell>{doctor.name}</TableCell>
                    <TableCell>{doctor.age}</TableCell>
                    <TableCell>{doctor.gender}</TableCell>
                    <TableCell>{doctor.specialty}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<VisibilityIcon />}
                        onClick={() => handleViewDoctor(doctor.id)}
                        sx={{ 
                          bgcolor: '#0288D1',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: '#01579b'
                          }
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredDoctors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default DoctorsListPage;