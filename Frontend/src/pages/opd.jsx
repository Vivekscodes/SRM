import React, { useState } from "react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const OPDList = () => {
  const [opds, setOpds] = useState([
    { id: 1, name: "Department of Orthology", doctors: [] },
    { id: 2, name: "Department of Neurology", doctors: [] },
  ]);

  // Function to add a new doctor to an OPD
  const addDoctor = (id) => {
    const newDoctor = prompt("Enter new doctor name:");
    if (newDoctor) {
      setOpds(opds.map(opd => opd.id === id 
        ? { ...opd, doctors: [...opd.doctors, newDoctor] } 
        : opd
      ));
    }
  };

  // Function to add a new OPD
  const addOPD = () => {
    const opdName = prompt("Enter OPD Name:");
    if (opdName) {
      setOpds([...opds, { id: opds.length + 1, name: opdName, doctors: [] }]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-300 p-6">
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#2196f3",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            ml: 1,
          }}
        >
          <LocalHospitalIcon sx={{ mr: 1 }} /> MAHI
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "white", mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      <div className="w-full max-w-6xl p-6">
        {opds.map((opd) => (
          <div
            key={opd.id}
            className="bg-blue-200 p-6 rounded-lg shadow-lg mb-4 w-full"
          >
            <h2 className="font-bold text-lg text-black">
              Opd Name: {opd.name}
            </h2>
            <p className="text-gray-700 font-semibold">Doctor(s):</p>
            {opd.doctors.length > 0 ? (
              <ul className="list-disc list-inside text-gray-800">
                {opd.doctors.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No doctors added yet.</p>
            )}

            <button
              onClick={() => addDoctor(opd.id)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Doctor
            </button>
          </div>
        ))}
      </div>

    
      <button
        onClick={addOPD}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
      >
        ADD OPD
      </button>
    </div>
  );
};

export default OPDList;
