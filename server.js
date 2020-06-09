//setup
const express = require('express');
const server = express();
const db = require('./data/connection')
//middleware
server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({api:"up"})
})

server.get('/cars', (req,res) => {
    db('CarInventoryData')
    .then(AllCars => {
        res.status(200).json(AllCars)
    })
})

server.get('/cars/:id', (req, res) => {
    const id=req.params.id;
        db('CarInventoryData').where({id:id})
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message:"error internal 500"})
        })
})

server.post('/cars', (req,res) => {
    const newData=req.body;
    db('CarInventoryData').insert(newData)
    .then(newCar => {
        res.status(201).json({newCar})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"error sorry 500"})
    })
})

server.delete("/cars/:id", (req, res) => {
    const id=req.params.id;
    db('CarInventoryData').where({id:id}).del()
    .then(deletedUser => {
        if (!deletedUser) {
            res.status(400).json({Message: "Please Provide An Id"})
        } else {
            res.status(204).json({"accountsDeleted": deletedUser})
        }
    })
    .catch(error => {
        console.log(".delete error", error);
        res.status(500).json({message: error})
    })
})

module.exports = server;
