import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  MenuItem, 
  FormControl,
  InputLabel,
  Select,
  Divider
} from "@mui/material";

const SignupDoctor = () => {
  // State for personal information
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [registryNo, setRegistryNo] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  
  // State for professional information
  const [medicalExpertise, setMedicalExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");
  
  // State for account information
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // State for location information
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create doctor data object
    const doctorData = {
      // Personal Information
      fullName,
      phoneNo,
      email,
      aadhar,
      profilePic,
      registryNo,
      gender,
      dob,
      
      // Professional Information
      medicalExpertise,
      experience,
      qualifications,
      
      // Account Information
      password,
      
      // Location Information
      city,
      state
    };
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log("Doctor signup data:", doctorData);
    // Here you would typically send the data to your backend
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#B0E2FE",
        padding: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        SIGN UP AS A DOCTOR
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: "80%",
          maxWidth: 700,
          bgcolor: "rgba(247, 241, 241, 0.49)",
          p: 4,
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Section Title - Personal Information */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" color="#0288D1">
                Personal Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            
            {/* Personal Information Fields */}
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Full Name" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Phone Number" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                label="Email" 
                type="email"
                fullWidth 
                variant="outlined" 
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Aadhar Number" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                label="Registry Number" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={registryNo}
                onChange={(e) => setRegistryNo(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl 
                fullWidth 
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              >
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                label="Date of Birth" 
                type="date"
                fullWidth 
                variant="outlined" 
                size="small"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                Profile Picture
              </Typography>
              <input
                accept="image/*"
                type="file"
                onChange={handleProfilePicChange}
                style={{ width: '100%' }}
              />
            </Grid>

            {/* Section Title - Professional Information */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" color="#0288D1" mt={2}>
                Professional Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            
            {/* Professional Information Fields */}
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Medical Expertise" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={medicalExpertise}
                onChange={(e) => setMedicalExpertise(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Experience (years)" 
                type="number"
                fullWidth 
                variant="outlined" 
                size="small"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                inputProps={{ min: 0 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Qualifications" 
                fullWidth 
                variant="outlined" 
                size="small"
                multiline
                rows={2}
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            {/* Section Title - Account Information */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" color="#0288D1" mt={2}>
                Account Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            
            {/* Account Information Fields */}
            <Grid item xs={12} sm={6}>
              <TextField 
                type="password" 
                label="Password" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                type="password" 
                label="Confirm Password" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            {/* Section Title - Location Information */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold" color="#0288D1" mt={2}>
                Location Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            
            {/* Location Information Fields */}
            <Grid item xs={12} sm={6}>
              <TextField 
                label="City" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="State" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={state}
                onChange={(e) => setState(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            {/* Sign Up Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ 
                  bgcolor: "#0288D1", 
                  color: "white", 
                  mt: 3,
                  borderRadius: 2,
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}
              >
                SIGN UP
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default SignupDoctor;