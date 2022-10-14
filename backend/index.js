/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import userModel from './models/users.js';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')
import mongoose from 'mongoose';

//const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://zoya:1234@cluster0.xjd6so3.mongodb.net/firstDB?retryWrites=true&w=majority")
//app.use(express.json());

const app = express()
const port = 3001
//This is being tested

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.get("/getUsers", (req, res) => {
    userModel.find({}, (err,result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    //Send back the user data
    res.json(user);

});



app.listen(port, () => {
    console.log(`Server is running on the ${port} nya~`)
})
