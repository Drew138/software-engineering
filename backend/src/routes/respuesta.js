import express from 'express';
const router = express.Router();
import respuestaTable from '../models/respuesta';

// Get all publications
router.get('/anuncio/', async (req, res) => {
    const records = await respuestaTable.findAll()
        .catch(err => console.log(err));
    res.status(200).json({msg: 'success'});
})

// Get a single publication
router.get('/anuncio/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await respuestaTable.find({ id })
        .catch(err => console.log(err));
    
    res.status(200).json({record: record});
})

// Create 
router.post('/anuncio/', async (req, res) => {
    const info = req.body;
    
    const record = await respuestaTable.create(info)
        .catch(err => console.log(err));
})

// Update
router.put('/anuncion/:id/', async (req, res) => {
    const info = req.body;
    
    const record = await respuestaTable.update(info)
        .catch(err => console.log(err));
})

// Delete
router.delete('/anuncio/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await respuestaTable.delete({id})
        .catch(err => console.log(err));
})

module.exports = router;