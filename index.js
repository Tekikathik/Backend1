import express from 'express';

const app=express();

const port=7000;

app.use(express.json())

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    const queryData = req.query;
    res.send(queryData)
})

app.post('/login',(req,res)=>{
    let data=req.body;
    res.send("kaiudhbfg");
})

app.put('/edit',(req,res)=>{
    const data=req.body;
    res.send("kaiudhbfg");
})