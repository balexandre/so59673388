const express = require('express');

const router = express.Router();

const getAll = (req, res) => {
    res.send({ action: 'GET all drums' })
};
const create = (req, res) => {
    res.send({ action: 'POST drums', data: res.body })
};
const getById = (req, res) => {
    res.send({ action: 'GET drums by id', id: req.params.id })
};
const editById = (req, res) => {
    res.send({ action: 'PUT drums by id', id: req.params.id })
};
const deleteById = (req, res) => {
    res.send({ action: 'DEL drums by id', id: req.params.id })
};

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', editById);
router.delete('/:id', deleteById);

module.exports = router;
