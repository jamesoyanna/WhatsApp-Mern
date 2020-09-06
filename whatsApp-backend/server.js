// importing libraries
//import express from 'express';
const express = require('express')

//App  config
const app = express();
const port  = process.env.PORT || 9000

//middleware

//DG config

//Api Routes 

app.get('/', (req, res)=>res.status(200).send("Hello world"))



// Listen
app.listen(port, ()=>console.log(`Listening on port ${port}`))
