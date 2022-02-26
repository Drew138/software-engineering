import express from 'express';
const router = express.Router();
import db from '../config/database';
import anuncioTable from '../models/anuncio';

// Get all publications
router.get('/', (req, res) => {
    anuncioTable.findAll()
        .then(records => {
            console.log(records);
            res.status(200).json({msg: 'success'});
        })
        .catch(err => console.log(err));
    
})

// Get a single publication
router.get('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.find(record)
        .catch(err => console.log(err));
})

// Create a publication
router.post('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.create(record)
        .catch(err => console.log(err));
})

// Delete a publication
router.put('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.update(record)
        .catch(err => console.log(err));
})

// Delete a publication
router.delete('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.delete(record)
        .catch(err => console.log(err));
})

module.exports = router;