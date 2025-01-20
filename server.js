const express = require('express');

const app = express()

app.get("/",(req,res)=>{
    res.send('This is from backend')
})

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log("server started"))