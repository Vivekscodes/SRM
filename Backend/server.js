```typescript
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

// Database connection
import connectDB from './Database/connect.js';

// Routers
import authRouter from './Routers/auth.routes.js';
import profileRouter from './Routers/profile.routes.js';
import hospitalRouter from './Routers/hospital.routes.js';
import userRoute from './Routers/user.routes.js';
import doctorRoute from './Routers/doctor.routes.js';

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

// Define the port for the server, using the environment variable or a default value
const port: number | string = process.env.PORT || '8000'; // Specify type as number or string

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

// Define routes
app.use('/api/auth', authRouter); // Authentication routes
app.use('/api/profile', profileRouter); // User profile routes
app.use('/api/hospital', hospitalRouter); // Hospital routes
app.use('/api/user', userRoute); // User routes.  Removed trailing slash for consistency and best practice
app.use('/api/doctor', doctorRoute); // Doctor routes. Removed trailing slash for consistency and best practice

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${port}`);
});
```