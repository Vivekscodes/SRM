
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUpHospital from "./pages/signuphospital";
import FirstPage from "./pages/firstpage";
import SignUpPatient from "./pages/signuppatient";
import SignUpDoctor from "./pages/signupdoctor";
import HospitalHomepage from "./pages/hospitalhomepage";
import DoctorHomepage from "./pages/doctorhomepage";
import LoginUser from "./pages/loginuser";
import LoginDoctor from "./pages/logindoctor";
import LoginHospital from "./pages/loginhospital";
import Patientdetails from "./pages/patientdetails";
import PatientFullDetails from "./pages/patientfulldetails";
import PatientHomepage from "./pages/patienthomepage";
import DoctorListPage from "./pages/doctorsdetails";
import DoctorsFullDetails from "./pages/doctorsfulldetails";
import PatientQueue from "./pages/patientqueue";
import ViewPreviousCasesOfDoctors from "./pages/viewPreviousCasesOfDoctors";



const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        
        
        <Route path="/welcome" element={<FirstPage />} />
        
        
        <Route path="/signuphospital" element={<SignUpHospital />} />


        <Route path="/signuppatient" element={<SignUpPatient />} />


        <Route path="/signupdoctor" element={<SignUpDoctor />} />

		<Route path="/loginuser" element={<LoginUser />} />

		<Route path="/logindoctor" element={<LoginDoctor />} />

		<Route path="/loginhospital" element={<LoginHospital />} />


        <Route path="/hospitalhomepage" element={<HospitalHomepage />} />


        <Route path="/doctorhomepage" element={<DoctorHomepage />} />

		<Route path="/patienthomepage" element={<PatientHomepage />} />

		<Route path="/patientdetails" element={<Patientdetails />} />

		<Route path="/patientfulldetails" element={<PatientFullDetails />} />

		<Route path="/doctorsdetails" element={<DoctorListPage />} />

		<Route path="/doctorsfulldetails" element={<DoctorsFullDetails />} />

		<Route path="/patientqueue" element={<PatientQueue />} />

		<Route path="/viewPreviousCasesOfDoctors" element={<ViewPreviousCasesOfDoctors />} />
        
        
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
