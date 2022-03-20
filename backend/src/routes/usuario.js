import express from 'express';
const router = express.Router();
import anuncioTable from '../models/anuncio';

// Get all publications
router.get('/anuncio/', async (req, res) => {
    const records = await anuncioTable.findAll()
        .catch(err => console.log(err));
    res.status(200).json({msg: 'success'});
})

// Get a single publication
router.get('/anuncio/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await anuncioTable.find({ id })
        .catch(err => console.log(err));
    
    res.status(200).json({record: record});
})

// Create 
router.post('/anuncio/', async (req, res) => {
    const info = req.body;
    
    const record = await anuncioTable.create(info)
        .catch(err => console.log(err));
})

// Update
router.put('/anuncion/:id/', async (req, res) => {
    const info = req.body;
    
    const record = await anuncioTable.update(info)
        .catch(err => console.log(err));
})

// Delete
router.delete('/anuncio/:id/', (req, res) => {
    const record = req.body;
    
    anuncioTable.delete(record)
        .catch(err => console.log(err));
})

module.exports = router;