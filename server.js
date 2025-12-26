import express from 'express'
import cors from 'cors'
import router from './Routers/studentRouters.js'
import mongoose,{mongo} from 'mongoose'

const app=express()
app.use(express.json())
app.use(cors())
app.use('/',router);

mongoose.connect("mongodb://localhost:27017").then(()=>console.log("mongoose Conneted"))
.catch((err)=>console.log(err));

app.listen(7000,()=>{
    console.log(`server is running on port${7000}`)
})