import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/noteRoutes.js';
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use('/api/notes' , router)

app.get('/'  , (req , res)=>{
    res.send({message : "This api is working totally fine"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})
