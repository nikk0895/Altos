import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';
import './src/db.js';

dotenv.config();

const app = express();

// ✅ Step 2: Enable CORS properly
app.use(cors({
  origin: 'http://localhost:4200', // Allow Angular frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);

// ✅ Default route
app.get('/', (req, res) => res.send('Backend Server Running ✅'));

// ✅ Start server
app.listen(process.env.PORT, () => 
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
