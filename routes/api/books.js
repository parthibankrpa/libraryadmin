const express = require('express')
const router = express.Router();
const allBooks = require('../../data/books')


router.get('/', (req, res) => res.json(allBooks))

module.exports = router;
