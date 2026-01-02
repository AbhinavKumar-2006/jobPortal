import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { clerkWebHooks } from './controller/webHooks.js';


const app = express();

//connection to database
await connectDB(); 

//middleware
app.use(cors());
app.use(express.json());


//routes
app.get('/' , (req , res) => {
    res.send("API working");
})
app.post('/webhooks' , clerkWebHooks);

//port
const PORT = process.env.port || 5000;

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
})