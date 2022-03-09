import express from 'express';
const router = express.Router();
import preguntaTable from '../models/anuncio';

// Get all publications
router.get('/pregunta/', async (req, res) => {
    const records = await preguntaTable.findAll()
        .catch(err => console.log(err));
    res.status(200).json({msg: 'success'});
})

// Get a single publication
router.get('/pregunta/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await preguntaTable.find({ id })
        .catch(err => console.log(err));
    
    res.status(200).json({record: record});
})

// Create 
router.post('/pregunta/', async (req, res) => {
    const info = req.body;
    
    const record = await preguntaTable.create(info)
        .catch(err => console.log(err));
})

// Update
router.put('/pregunta/:id/', async (req, res) => {
    const info = req.body;
    
    const record = await preguntaTable.update(info)
        .catch(err => console.log(err));
})

// Delete
router.delete('/pregunta/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = preguntaTable.delete({id})
        .catch(err => console.log(err));
})

module.exports = router;