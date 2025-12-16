import express from 'express'
import router from './Routers/studentRouters.js'

const app=express()

app.use('/',router);

app.listen(7000,()=>{
    console.log(`server is running on port${7000}`)
})