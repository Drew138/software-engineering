const express = require('express');
const router = express.Router();
const db = require('../config/database');
const claseTable = require('../models/clase');


// Get all classes
router.get('/', (req, res) => {
    claseTable.findAll()
        .then(records => {
            console.log(records);
            res.status(200).json({msg: 'success'});
        })
        .catch(err => console.log(err));
        
})

// Get a single class
router.get('/', (req, res) => {
    const record = req.body;
    
    claseTable.find
        .catch(err => console.log(err));
})

// Create a class
router.post('/', (req, res) => {
    const record = req.body;
    
    claseTable.create(record)
        .catch(err => console.log(err));
})

// Edit a class
router.put('/', (req, res) => {
    const record = req.body;
    
    claseTable.update(record)
        .catch(err => console.log(err));
})

// Delete a class
router.delete('/', (req, res) => {
    const record = req.body;
    
    claseTable.delete(record)
        .catch(err => console.log(err));
})

module.exports = router;