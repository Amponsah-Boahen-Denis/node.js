const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((req,res)=>{
const stream=fs.createReadStream()
stream.pipe(res)
})

