import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";

const Signup = () => {
  // State for each input field
  const [name, setName] = useState("");
  const [bedsAvailable, setBedsAvailable] = useState("");
  const [doe, setDoe] = useState("");
  const [helpline, setHelpline] = useState("");
  const [registryNo, setRegistryNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create hospital data object
    const hospitalData = {
      name,
      bedsAvailable,
      doe,
      helpline,
      registryNo,
      address,
      password,
      city,
      state
    };
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log("Hospital signup data:", hospitalData);
    // Here you would typically send the data to your backend
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#B0E2FE",
        padding: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        SIGN UP AS A HOSPITAL
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
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Name" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Beds Available" 
                fullWidth 
                variant="outlined" 
                size="small"
                type="number"
                value={bedsAvailable}
                onChange={(e) => setBedsAvailable(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                label="DOE" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={doe}
                onChange={(e) => setDoe(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Helpline" 
                fullWidth 
                variant="outlined" 
                size="small"
                value={helpline}
                onChange={(e) => setHelpline(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                label="Registry No" 
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
              <TextField 
                label="Address" 
                fullWidth 
                variant="outlined" 
                size="small"
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

export default Signup;