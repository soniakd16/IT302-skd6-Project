import express from 'express';
import cors from 'cors';
import memes from './api/memes.route.js';
//const express = require('express');
const app= express();

app.use(cors())
app.use(express.json())

app.use("/api/v1/memes", memes)

app.use('*',(req,res) => {

    res.status(404).json({error: "not found"})

})

export default app