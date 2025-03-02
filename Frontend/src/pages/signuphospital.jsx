import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper, Container, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';

const LoginDoctor = () => {
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
    const [open, setOpen] = useState(false); // State for modal

    const navigate = useNavigate(); // Initialize the navigate function

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

        // Open the success modal
        setOpen(true);
    };

    // Handle modal close
    const handleClose = () => {
        setOpen(false);
        navigate('/hospitalhomepage'); // Redirect to hospital homepage
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(120deg, #134e6f 0%, #1e88e5 100%)",
                padding: 0,
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper
                    elevation={10}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                    }}
                >
                    {/* Left sidebar with decorative elements */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '40%' },
                            background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                            color: 'white',
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                                zIndex: 1,
                            }
                        }}
                    >
                        <LocalHospitalIcon sx={{ fontSize: 80, mb: 3, color: '#82b1ff' }} />
                        <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center" sx={{ position: 'relative', zIndex: 2 }}>
                            HOSPITAL REGISTRATION
                        </Typography>
                        <Typography variant="body1" mb={4} textAlign="center" sx={{ opacity: 0.8, position: 'relative', zIndex: 2 }}>
                            Join our healthcare network and help provide better medical services to patients in need.
                        </Typography>
                        <Box sx={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(25,118,210,0.4) 0%, rgba(13,71,161,0) 70%)',
                            bottom: '-150px',
                            left: '-100px',
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(25,118,210,0.4) 0%, rgba(13,71,161,0) 70%)',
                            top: '-100px',
                            right: '-50px',
                        }} />
                    </Box>

                    {/* Form section */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '60%' },
                            bgcolor: "#ffffff",
                            padding: { xs: 3, md: 5 },
                            position: 'relative',
                        }}
                    >
                        <Typography
                            variant="h5"
                            mb={4}
                            sx={{
                                color: '#0d47a1',
                                fontWeight: 600,
                                borderBottom: '2px solid #1976d2',
                                paddingBottom: 1,
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -2,
                                    left: 0,
                                    width: '80px',
                                    height: '4px',
                                    borderRadius: '4px',
                                    backgroundColor: '#1976d2',
                                }
                            }}
                        >
                            Enter Your Hospital Details
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Hospital Name"
                                        fullWidth
                                        variant="filled"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Beds Available"
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        value={bedsAvailable}
                                        onChange={(e) => setBedsAvailable(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Date of Establishment"
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={doe}
                                        onChange={(e) => setDoe(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Helpline Number"
                                        fullWidth
                                        variant="filled"
                                        value={helpline}
                                        onChange={(e) => setHelpline(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider sx={{ my: 2 }}>
                                        <Typography variant="body2" color="textSecondary">
                                            REGISTRATION DETAILS
                                        </Typography>
                                    </Divider>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Registry Number"
                                        fullWidth
                                        variant="filled"
                                        value={registryNo}
                                        onChange={(e) => setRegistryNo(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="State"
                                        fullWidth
                                        variant="filled"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Full Address"
                                        fullWidth
                                        variant="filled"
                                        multiline
                                        rows={2}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="City"
                                        fullWidth
                                        variant="filled"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider sx={{ my: 2 }}>
                                        <Typography variant="body2" color="textSecondary">
                                            SECURITY
                                        </Typography>
                                    </Divider>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="password"
                                        label="Password"
                                        fullWidth
                                        variant="filled"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="password"
                                        label="Confirm Password"
                                        fullWidth
                                        variant="filled"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
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
                                            background: 'linear-gradient(90deg, #1565c0 0%, #0d47a1 100%)',
                                            color: "white",
                                            mt: 3,
                                            py: 1.5,
                                            borderRadius: 4,
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            boxShadow: '0 10px 20px rgba(21, 101, 192, 0.3)',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                boxShadow: '0 14px 28px rgba(21, 101, 192, 0.4)',
                                                transform: 'translateY(-3px)',
                                            },
                                            '&:active': {
                                                transform: 'translateY(-1px)',
                                            }
                                        }}
                                    >
                                        Complete Registration
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Container>

            {/* Success Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Registration Successful"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your hospital has been successfully registered. Welcome to our network!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LoginDoctor;
