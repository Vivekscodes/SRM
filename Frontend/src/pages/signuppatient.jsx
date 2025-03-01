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
  InputAdornment
} from "@mui/material";

const SignupPatient = () => {
  // State for each input field
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  // Handle weight change with validation
  const handleWeightChange = (e) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === "" || (Number(value) >= 0)) {
      setWeight(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create patient data object
    const patientData = {
      fullName,
      phoneNo,
      email,
      aadhar,
      profilePic,
      dob,
      gender,
      fathersName,
      password,
      weight,
      address,
      city,
      state
    };
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log("Patient signup data:", patientData);
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
        SIGN UP AS A PATIENT
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
                label="Father's Name" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={fathersName}
                onChange={(e) => setFathersName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Weight" 
                type="number"
                fullWidth 
                variant="outlined" 
                size="small"
                value={weight}
                onChange={handleWeightChange}
                inputProps={{ 
                  min: 0,
                  step: 0.1
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
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

            <Grid item xs={12}>
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

            <Grid item xs={12}>
              <TextField 
                label="Address" 
                fullWidth 
                variant="outlined" 
                size="small"
                multiline
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

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
                  mt: 2,
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

export default SignupPatient;