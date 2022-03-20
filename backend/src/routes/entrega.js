import express from 'express';
const router = express.Router();
import entregaTable from '../models/entrega';

// Get all publications
router.get('/entrega/', async (req, res) => {
    const records = await entregaTable.findAll()
        .catch(err => console.log(err));
    res.status(200).json({msg: 'success'});
})

// Get a single publication
router.get('/entrega/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await entregaTable.find({ id })
        .catch(err => console.log(err));
    
    res.status(200).json({record: record});
})

// Create 
router.post('/entrega/', async (req, res) => {
    const info = req.body;
    
    const record = await entregaTable.create(info)
        .catch(err => console.log(err));
})

// Update
router.put('/entrega/:id/', async (req, res) => {
    const info = req.body;
    
    const record = await entregaTable.update(info)
        .catch(err => console.log(err));
})

// Delete
router.delete('/entrega/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await entregaTable.delete({id})
        .catch(err => console.log(err));
})

module.exports = router;