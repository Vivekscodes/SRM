import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure the upload directory exists
const uploadDir = "uploads/doctor";
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage for uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir); // Destination folder
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

// File filter for only images
const fileFilter = (req, file, cb) => {
	const allowedTypes = /jpeg|jpg|png/;
	const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = allowedTypes.test(file.mimetype);

	if (extname && mimetype) {
		cb(null, true);
	} else {
		cb(new Error("Only images (JPEG, JPG, PNG) are allowed"), false);
	}
};

// Initialize Multer middleware
const upload = multer({
	storage,
	limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max file size
	fileFilter,
});

export default upload;
