import http from 'http';
const server =http.createServer((req,res)=>{
    console.log(req.method)
})