const express = require('express');

const router = express.Router();

const getAll = (req, res) => {
    res.send({ action: 'GET all pianos' })
};
const create = (req, res) => {
    res.send({ action: 'POST pianos', data: res.body })
};
const getById = (req, res) => {
    res.send({ action: 'GET pianos by id', id: req.params.id })
};
const editById = (req, res) => {
    res.send({ action: 'PUT pianos by id', id: req.params.id })
};
const deleteById = (req, res) => {
    res.send({ action: 'DEL pianos by id', id: req.params.id })
};

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', editById);
router.delete('/:id', deleteById);

module.exports = router;
