import express from 'express';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import 'dotenv/config'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';

const app = express()
await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Server is LIVE...'))

app.use(requireAuth())

app.use('/api/ai', aiRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})