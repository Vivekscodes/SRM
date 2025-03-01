import { agent } from "../../aiAgent/Agent.js";
import DoctorModel from "../../Models/doctor.model.js";

export const chat = async (req, res) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({ message: "Query is required" });
        }

        const doctors = await DoctorModel.find();

        if (!doctors) {
            return res.status(404).json({ message: "No doctors found" });
        }

        const doctorIds = doctors.map((doctor) => ({
            _id: doctor._id,
            medical_expertise: doctor.medical_expertise,
            experience: doctor.experience
        }));

        // console.log("Doctors:", doctorIds);

        const prompt = JSON.stringify({ message: query, doctorIds });

        const response = await agent(prompt);

        const resp = response.split("```json")[1].split("```")[0];

        // console.log("Response:", resp);

        return res.status(200).json(JSON.parse(resp));
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};