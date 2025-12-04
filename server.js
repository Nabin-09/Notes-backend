import express from 'express';

const app = express();


app.use(express.json())//configuring middleware to accept data as json
app.use(express.urlencoded({extended : true})) //extended: true allows for nested objects
app.get('/' , (req , res)=>{
    res.send('<h1> Hello from Nabin</h1?')
})

const port = process.env.PORT || 3000;


app.listen(port , ()=>{
    console.log(`Serverr is running on port ${port}`)
})